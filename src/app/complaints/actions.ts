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
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%); padding: 40px 20px;">

            <!-- Main Container -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15); overflow: hidden;">

              <!-- Top Accent Bar -->
              <tr>
                <td style="background: linear-gradient(135deg, #E34234 0%, #B8331E 100%); height: 6px;"></td>
              </tr>

              <!-- Header Section with Logo Area -->
              <tr>
                <td style="background: linear-gradient(135deg, #E34234 0%, #C73528 100%); padding: 50px 40px; text-align: center; position: relative;">

                  <!-- Success Icon -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" style="padding-bottom: 25px;">
                        <div style="width: 80px; height: 80px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); border: 4px solid rgba(255, 255, 255, 0.3); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <!-- Title -->
                  <h1 style="margin: 0 0 12px 0; color: #ffffff; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    Complaint Received!
                  </h1>
                  <p style="margin: 0; color: rgba(255, 255, 255, 0.95); font-size: 15px; font-weight: 500; letter-spacing: 0.3px;">
                    Ministry for Public Procurement, Kano State
                  </p>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding: 45px 40px;">

                  <!-- Greeting -->
                  <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 22px; font-weight: 700;">
                    Dear ${data.name},
                  </h2>

                  <p style="margin: 0 0 30px 0; color: #4a4a4a; font-size: 16px; line-height: 1.8;">
                    Thank you for submitting your complaint. We take your feedback seriously and are committed to addressing your concerns promptly. Your complaint has been successfully received and logged in our system.
                  </p>

                  <!-- Tracking ID - Premium Box -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 35px 0;">
                    <tr>
                      <td style="background: linear-gradient(135deg, #FFF5F4 0%, #FFE8E6 100%); border: 3px solid #E34234; border-radius: 16px; padding: 32px; text-align: center; box-shadow: 0 4px 20px rgba(227, 66, 52, 0.15);">
                        <p style="margin: 0 0 16px 0; color: #E34234; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2.5px;">
                          Your Tracking ID
                        </p>
                        <div style="background-color: #ffffff; border-radius: 12px; padding: 20px; margin: 0 0 16px 0; box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.06);">
                          <p style="margin: 0; color: #E34234; font-size: 32px; font-weight: 900; font-family: 'Courier New', monospace; letter-spacing: 4px;">
                            ${data.trackingId}
                          </p>
                        </div>
                        <p style="margin: 0; color: #666666; font-size: 14px; line-height: 1.6;">
                          💡 Save this ID to track your complaint status anytime
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Complaint Summary Section -->
                  <div style="margin: 40px 0 30px 0;">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                      <div style="height: 3px; width: 40px; background-color: #E34234; margin-right: 12px;"></div>
                      <h3 style="margin: 0; color: #E34234; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                        Complaint Summary
                      </h3>
                    </div>

                    <!-- Category Card -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                      <tr>
                        <td style="background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%); border-left: 5px solid #E34234; border-radius: 8px; padding: 18px 22px;">
                          <p style="margin: 0 0 6px 0; color: #888888; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px;">
                            Category
                          </p>
                          <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 600; text-transform: capitalize;">
                            ${data.category.replace('-', ' ')}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Location Card -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                      <tr>
                        <td style="background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%); border-left: 5px solid #E34234; border-radius: 8px; padding: 18px 22px;">
                          <p style="margin: 0 0 6px 0; color: #888888; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px;">
                            Location
                          </p>
                          <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">
                            ${data.complaintLocation}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Description Card -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%); border-left: 5px solid #E34234; border-radius: 8px; padding: 18px 22px;">
                          <p style="margin: 0 0 8px 0; color: #888888; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px;">
                            Description
                          </p>
                          <p style="margin: 0; color: #1a1a1a; font-size: 15px; line-height: 1.7; font-weight: 500;">
                            ${data.description}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- What Happens Next -->
                  <div style="margin: 40px 0;">
                    <div style="display: flex; align-items: center; margin-bottom: 24px;">
                      <div style="height: 3px; width: 40px; background-color: #E34234; margin-right: 12px;"></div>
                      <h3 style="margin: 0; color: #E34234; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                        What Happens Next?
                      </h3>
                    </div>

                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%); border-radius: 16px; padding: 28px; border: 2px solid #E8ECEF;">
                      <!-- Step 1 -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="vertical-align: top; padding-right: 16px;">
                                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #E34234 0%, #C73528 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(227, 66, 52, 0.3);">
                                  <span style="color: #ffffff; font-size: 16px; font-weight: 800;">1</span>
                                </div>
                              </td>
                              <td style="vertical-align: top; padding-top: 6px;">
                                <p style="margin: 0; color: #2d3436; font-size: 15px; line-height: 1.7; font-weight: 500;">
                                  Your complaint will be reviewed within <strong style="color: #E34234;">48 hours</strong>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Step 2 -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="vertical-align: top; padding-right: 16px;">
                                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #E34234 0%, #C73528 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(227, 66, 52, 0.3);">
                                  <span style="color: #ffffff; font-size: 16px; font-weight: 800;">2</span>
                                </div>
                              </td>
                              <td style="vertical-align: top; padding-top: 6px;">
                                <p style="margin: 0; color: #2d3436; font-size: 15px; line-height: 1.7; font-weight: 500;">
                                  We'll assign it to the relevant department for investigation
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Step 3 -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="vertical-align: top; padding-right: 16px;">
                                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #E34234 0%, #C73528 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(227, 66, 52, 0.3);">
                                  <span style="color: #ffffff; font-size: 16px; font-weight: 800;">3</span>
                                </div>
                              </td>
                              <td style="vertical-align: top; padding-top: 6px;">
                                <p style="margin: 0; color: #2d3436; font-size: 15px; line-height: 1.7; font-weight: 500;">
                                  You'll receive email updates as we progress with your case
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Step 4 -->
                      <tr>
                        <td>
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="vertical-align: top; padding-right: 16px;">
                                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #E34234 0%, #C73528 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(227, 66, 52, 0.3);">
                                  <span style="color: #ffffff; font-size: 16px; font-weight: 800;">4</span>
                                </div>
                              </td>
                              <td style="vertical-align: top; padding-top: 6px;">
                                <p style="margin: 0; color: #2d3436; font-size: 15px; line-height: 1.7; font-weight: 500;">
                                  Track your complaint anytime using your tracking ID
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- Contact Information -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 35px 0 0 0;">
                    <tr>
                      <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); border-radius: 16px; padding: 32px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);">
                        <h3 style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 800;">
                          📞 Need Assistance?
                        </h3>
                        <p style="margin: 0 0 12px 0; color: rgba(255, 255, 255, 0.9); font-size: 15px;">
                          <strong style="color: #E34234;">Email:</strong>
                          <a href="mailto:info@procurement.kn.gov.ng" style="color: #ffffff; text-decoration: none; font-weight: 600;">info@procurement.kn.gov.ng</a>
                        </p>
                        <p style="margin: 0 0 12px 0; color: rgba(255, 255, 255, 0.9); font-size: 15px;">
                          <strong style="color: #E34234;">Phone:</strong>
                          <a href="tel:08065455715" style="color: #ffffff; text-decoration: none; font-weight: 600;">08065455715</a>
                        </p>
                        <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 15px;">
                          <strong style="color: #E34234;">Address:</strong>
                          21 Magaji Rumfa Road, Kano, Nigeria
                        </p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); padding: 40px; text-align: center; border-top: 3px solid #E34234;">
                  <h4 style="margin: 0 0 8px 0; color: #ffffff; font-size: 18px; font-weight: 800;">
                    Ministry for Public Procurement
                  </h4>
                  <p style="margin: 0 0 24px 0; color: rgba(255, 255, 255, 0.7); font-size: 14px; font-weight: 500;">
                    Project Monitoring and Evaluation • Kano State, Nigeria
                  </p>

                  <!-- Divider -->
                  <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%); margin: 24px 0;"></div>

                  <p style="margin: 0 0 20px 0; color: rgba(255, 255, 255, 0.6); font-size: 13px; line-height: 1.6;">
                    This is an automated message. Please do not reply to this email.<br>
                    For assistance, use the contact information provided above.
                  </p>

                  <p style="margin: 0; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.5); font-size: 12px;">
                    Powered by <a href="https://nyra.ai" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; font-weight: 700;">Nyra</a>
                  </p>
                </td>
              </tr>

            </table>

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
