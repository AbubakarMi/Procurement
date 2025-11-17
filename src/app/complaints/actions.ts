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
      subject: 'Complaint Received - Tracking ID: ' + data.trackingId,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #E34234;
                color: white;
                padding: 30px 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9f9f9;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-top: none;
              }
              .tracking-box {
                background-color: white;
                border: 2px solid #E34234;
                padding: 20px;
                margin: 20px 0;
                border-radius: 8px;
                text-align: center;
              }
              .tracking-id {
                font-size: 24px;
                font-weight: bold;
                color: #E34234;
                font-family: monospace;
                letter-spacing: 2px;
              }
              .info-row {
                margin: 15px 0;
                padding: 10px;
                background-color: white;
                border-radius: 4px;
              }
              .label {
                font-weight: bold;
                color: #666;
                display: inline-block;
                width: 150px;
              }
              .footer {
                background-color: #333;
                color: white;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                border-radius: 0 0 8px 8px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">Ministry for Public Procurement</h1>
              <p style="margin: 10px 0 0 0;">Project Monitoring and Evaluation</p>
            </div>

            <div class="content">
              <h2 style="color: #E34234;">Complaint Received Successfully</h2>

              <p>Dear ${data.name},</p>

              <p>Thank you for submitting your complaint. We have received your message and our team will review it promptly.</p>

              <div class="tracking-box">
                <p style="margin: 0 0 10px 0; color: #666;">Your Tracking ID</p>
                <div class="tracking-id">${data.trackingId}</div>
                <p style="margin: 10px 0 0 0; font-size: 12px; color: #666;">
                  Please save this ID to track your complaint status
                </p>
              </div>

              <h3 style="color: #E34234;">Complaint Details:</h3>

              <div class="info-row">
                <span class="label">Category:</span>
                <span>${data.category}</span>
              </div>

              <div class="info-row">
                <span class="label">Location:</span>
                <span>${data.complaintLocation}</span>
              </div>

              <div class="info-row">
                <span class="label">Description:</span>
                <div style="margin-top: 10px;">${data.description}</div>
              </div>

              <h3 style="color: #E34234; margin-top: 30px;">What Happens Next?</h3>

              <ol style="padding-left: 20px;">
                <li>Your complaint will be reviewed by our team within 48 hours</li>
                <li>We will assign it to the relevant department</li>
                <li>You will receive updates via email as we progress</li>
                <li>You can track your complaint status using your tracking ID</li>
              </ol>

              <p style="margin-top: 30px;">
                If you have any questions, please contact us at:
                <br>
                <strong>Email:</strong> info@procurement.kn.gov.ng
                <br>
                <strong>Phone:</strong> 08065455715
                <br>
                <strong>Address:</strong> 21 Magaji Rumfa Road, Kano
              </p>
            </div>

            <div class="footer">
              <p style="margin: 0;">
                Ministry for Public Procurement, Project Monitoring and Evaluation
                <br>
                Kano State, Nigeria
              </p>
              <p style="margin: 10px 0 0 0;">
                This is an automated message. Please do not reply to this email.
              </p>
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
