'use server';

import { Resend } from 'resend';
import { summarizeComplaints } from '@/ai/flows/summarize-complaints';
import { saveComplaint, getComplaintByTrackingId, getComplaintStats } from '@/lib/complaint-storage';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ComplaintData {
  name: string;
  email: string;
  complaintLocation: string;
  category: string;
  description: string;
  trackingId: string;
}

interface ComplaintSubmissionData {
  name: string;
  email: string;
  complaintLocation: string;
  category: string;
  description: string;
}

interface ComplaintSubmissionResult {
  success: boolean;
  trackingId: string;
  summary: string;
  message: string;
}

/**
 * Submit a new complaint - the main entry point
 */
export async function submitComplaint(
  data: ComplaintSubmissionData
): Promise<ComplaintSubmissionResult> {
  try {
    console.log("📝 Starting complaint submission for:", data.email);

    // 1. Summarize the complaint using AI (with fallback)
    let summary: string;
    try {
      console.log("🤖 Attempting AI summarization...");
      const summaryResult = await summarizeComplaints({ complaintText: data.description });
      summary = summaryResult.summary;
      console.log("✅ AI summarization successful");
    } catch (aiError) {
      console.warn("⚠️ AI summarization failed, using fallback:", aiError);
      // Fallback: Use first 150 characters of description as summary
      summary = data.description.substring(0, 150) + (data.description.length > 150 ? '...' : '');
    }

    // 2. Save complaint to storage
    console.log("💾 Saving complaint to database...");
    const complaint = await saveComplaint({
      name: data.name,
      email: data.email,
      complaintLocation: data.complaintLocation,
      category: data.category,
      description: data.description,
      summary: summary,
    });
    console.log("✅ Complaint saved with tracking ID:", complaint.trackingId);

    // 3. Send confirmation email
    try {
      console.log("📧 Sending confirmation email to:", data.email);
      const emailResult = await sendComplaintConfirmationEmail({
        ...data,
        trackingId: complaint.trackingId,
      });
      console.log("✅ Confirmation email sent successfully:", emailResult);
    } catch (emailError) {
      console.error("⚠️ Email sending failed (complaint still saved):", emailError);
      if (emailError instanceof Error) {
        console.error("Email error message:", emailError.message);
        console.error("Email error stack:", emailError.stack);
      }
      // Don't fail the entire submission if email fails
    }

    return {
      success: true,
      trackingId: complaint.trackingId,
      summary: summary,
      message: 'Complaint submitted successfully. A confirmation email has been sent.',
    };
  } catch (error) {
    console.error("❌ Error in submitComplaint:", error);
    console.error("Error details:", error instanceof Error ? error.message : String(error));
    console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
    throw new Error("Failed to submit complaint. Please try again.");
  }
}

/**
 * Track a complaint by tracking ID
 */
export async function trackComplaint(trackingId: string) {
  try {
    const complaint = await getComplaintByTrackingId(trackingId);

    if (!complaint) {
      return {
        success: false,
        message: 'Complaint not found with this tracking ID',
      };
    }

    return {
      success: true,
      complaint: {
        trackingId: complaint.trackingId,
        status: complaint.status,
        category: complaint.category,
        complaintLocation: complaint.complaintLocation,
        createdAt: complaint.createdAt.toISOString(),
        updatedAt: complaint.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    console.error("Error in trackComplaint:", error);
    throw new Error("Failed to track complaint");
  }
}

/**
 * Get complaint statistics
 */
export async function getStats() {
  try {
    const stats = await getComplaintStats();
    return stats;
  } catch (error) {
    console.error("Error in getStats:", error);
    return {
      total: 0,
      pending: 0,
      inProgress: 0,
      resolved: 0,
    };
  }
}

export async function sendComplaintConfirmationEmail(data: ComplaintData) {
  try {
    console.log("📧 Preparing to send email to:", data.email);
    console.log("📧 Tracking ID:", data.trackingId);

    const result = await resend.emails.send({
      from: 'Ministry for Public Procurement <onboarding@resend.dev>',
      to: data.email,
      subject: '✓ Complaint Received - Track ID: ' + data.trackingId,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Complaint Confirmation</title>
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #1a1a1a;
                background-color: #f5f5f5;
                padding: 20px;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
              }
              .header {
                background: linear-gradient(135deg, #E34234 0%, #c73528 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
                position: relative;
              }
              .header::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #ffffff33 0%, #ffffff 50%, #ffffff33 100%);
              }
              .success-icon {
                width: 64px;
                height: 64px;
                background-color: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                margin: 0 auto 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 3px solid rgba(255, 255, 255, 0.3);
              }
              .checkmark {
                width: 32px;
                height: 32px;
                border: 3px solid white;
                border-radius: 50%;
                display: inline-block;
                position: relative;
              }
              .checkmark::after {
                content: '';
                position: absolute;
                left: 8px;
                top: 3px;
                width: 8px;
                height: 14px;
                border: solid white;
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
              }
              .header h1 {
                font-size: 28px;
                font-weight: 700;
                margin: 0 0 8px 0;
                letter-spacing: -0.5px;
              }
              .header p {
                font-size: 14px;
                margin: 0;
                opacity: 0.95;
                font-weight: 400;
              }
              .content {
                padding: 40px 30px;
              }
              .greeting {
                font-size: 18px;
                color: #1a1a1a;
                margin-bottom: 20px;
                font-weight: 600;
              }
              .message {
                font-size: 15px;
                color: #4a4a4a;
                margin-bottom: 30px;
                line-height: 1.7;
              }
              .tracking-box {
                background: linear-gradient(135deg, #fff5f4 0%, #ffe8e6 100%);
                border: 2px solid #E34234;
                border-radius: 12px;
                padding: 24px;
                margin: 30px 0;
                text-align: center;
                box-shadow: 0 2px 8px rgba(227, 66, 52, 0.1);
              }
              .tracking-label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #E34234;
                font-weight: 700;
                margin-bottom: 12px;
              }
              .tracking-id {
                font-size: 28px;
                font-weight: 800;
                color: #E34234;
                font-family: 'Courier New', monospace;
                letter-spacing: 3px;
                padding: 12px;
                background-color: white;
                border-radius: 8px;
                margin: 12px 0;
                box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
              }
              .tracking-note {
                font-size: 13px;
                color: #666;
                margin-top: 12px;
              }
              .section-title {
                font-size: 18px;
                font-weight: 700;
                color: #E34234;
                margin: 30px 0 20px 0;
                padding-bottom: 10px;
                border-bottom: 2px solid #E34234;
              }
              .detail-card {
                background-color: #fafafa;
                border-left: 4px solid #E34234;
                padding: 16px 20px;
                margin: 12px 0;
                border-radius: 4px;
              }
              .detail-label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #666;
                font-weight: 600;
                margin-bottom: 6px;
              }
              .detail-value {
                font-size: 15px;
                color: #1a1a1a;
                font-weight: 500;
                line-height: 1.6;
              }
              .steps-container {
                background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                border-radius: 12px;
                padding: 24px;
                margin: 24px 0;
              }
              .step {
                display: flex;
                align-items: flex-start;
                margin-bottom: 16px;
                padding-left: 8px;
              }
              .step:last-child {
                margin-bottom: 0;
              }
              .step-number {
                width: 28px;
                height: 28px;
                background-color: #E34234;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 14px;
                margin-right: 14px;
                flex-shrink: 0;
              }
              .step-text {
                font-size: 14px;
                color: #4a4a4a;
                padding-top: 4px;
                line-height: 1.6;
              }
              .contact-box {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: white;
                padding: 24px;
                border-radius: 12px;
                margin: 30px 0;
              }
              .contact-title {
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 16px;
                color: white;
              }
              .contact-item {
                display: flex;
                align-items: center;
                margin: 10px 0;
                font-size: 14px;
              }
              .contact-icon {
                width: 20px;
                height: 20px;
                margin-right: 12px;
                color: #E34234;
              }
              .contact-link {
                color: #ffffff;
                text-decoration: none;
                font-weight: 500;
              }
              .contact-link:hover {
                color: #E34234;
                text-decoration: underline;
              }
              .footer {
                background-color: #1a1a1a;
                color: #ffffff;
                padding: 30px;
                text-align: center;
              }
              .footer-logo {
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 8px;
                color: white;
              }
              .footer-subtitle {
                font-size: 13px;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: 20px;
              }
              .footer-divider {
                height: 1px;
                background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
                margin: 20px 0;
              }
              .footer-note {
                font-size: 12px;
                color: rgba(255, 255, 255, 0.6);
                margin-bottom: 16px;
              }
              .footer-powered {
                font-size: 11px;
                color: rgba(255, 255, 255, 0.5);
                padding-top: 16px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
              }
              .footer-powered a {
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;
                font-weight: 600;
                transition: color 0.3s;
              }
              .footer-powered a:hover {
                color: #E34234;
              }
              @media only screen and (max-width: 600px) {
                body {
                  padding: 10px;
                }
                .content {
                  padding: 24px 20px;
                }
                .header {
                  padding: 30px 20px;
                }
                .tracking-id {
                  font-size: 22px;
                  letter-spacing: 2px;
                }
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <!-- Header -->
              <div class="header">
                <div class="success-icon">
                  <div class="checkmark"></div>
                </div>
                <h1>Complaint Received Successfully!</h1>
                <p>Ministry for Public Procurement, Project Monitoring and Evaluation</p>
              </div>

              <!-- Content -->
              <div class="content">
                <div class="greeting">Dear ${data.name},</div>

                <div class="message">
                  Thank you for taking the time to submit your complaint. Your feedback is valuable to us and helps improve our services. We have successfully received your message and our team will review it promptly.
                </div>

                <!-- Tracking ID Box -->
                <div class="tracking-box">
                  <div class="tracking-label">Your Tracking ID</div>
                  <div class="tracking-id">${data.trackingId}</div>
                  <div class="tracking-note">
                    ⚠️ Please save this ID to track your complaint status online
                  </div>
                </div>

                <!-- Complaint Details -->
                <h2 class="section-title">Complaint Details</h2>

                <div class="detail-card">
                  <div class="detail-label">Category</div>
                  <div class="detail-value">${data.category.charAt(0).toUpperCase() + data.category.slice(1).replace('-', ' ')}</div>
                </div>

                <div class="detail-card">
                  <div class="detail-label">Location</div>
                  <div class="detail-value">${data.complaintLocation}</div>
                </div>

                <div class="detail-card">
                  <div class="detail-label">Description</div>
                  <div class="detail-value">${data.description}</div>
                </div>

                <!-- What Happens Next -->
                <h2 class="section-title">What Happens Next?</h2>

                <div class="steps-container">
                  <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-text">Your complaint will be reviewed by our team within <strong>48 hours</strong></div>
                  </div>
                  <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-text">We will assign it to the relevant department for investigation</div>
                  </div>
                  <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-text">You will receive email updates as we progress with your case</div>
                  </div>
                  <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-text">Track your complaint status anytime using your tracking ID</div>
                  </div>
                </div>

                <!-- Contact Information -->
                <div class="contact-box">
                  <div class="contact-title">📞 Need Assistance?</div>
                  <div class="contact-item">
                    <span class="contact-icon">✉</span>
                    <span>Email: <a href="mailto:info@procurement.kn.gov.ng" class="contact-link">info@procurement.kn.gov.ng</a></span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-icon">📱</span>
                    <span>Phone: <a href="tel:08065455715" class="contact-link">08065455715</a></span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-icon">📍</span>
                    <span>Address: 21 Magaji Rumfa Road, Kano, Nigeria</span>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="footer">
                <div class="footer-logo">Ministry for Public Procurement</div>
                <div class="footer-subtitle">Project Monitoring and Evaluation • Kano State, Nigeria</div>

                <div class="footer-divider"></div>

                <div class="footer-note">
                  This is an automated message. Please do not reply to this email.<br>
                  For assistance, use the contact information provided above.
                </div>

                <div class="footer-powered">
                  Powered by <a href="https://nyra.ai" target="_blank" rel="noopener noreferrer">Nyra</a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("✅ Email sent successfully! Result:", result);
    return { success: true, result };
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw new Error('Failed to send confirmation email');
  }
}
