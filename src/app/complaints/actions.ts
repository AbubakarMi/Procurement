'use server';

import { summarizeComplaints, type SummarizeComplaintsInput, type SummarizeComplaintsOutput } from '@/ai/flows/summarize-complaints';

export async function summarizeAndSubmitComplaint(
  input: SummarizeComplaintsInput
): Promise<SummarizeComplaintsOutput> {
  try {
    const output = await summarizeComplaints(input);

    // In a real application, you would also save the full complaint,
    // user details, and the summary to a database here.
    // For now, we just return the summary.

    return output;
  } catch (error) {
    console.error("Error in summarizeAndSubmitComplaint:", error);
    throw new Error("Failed to process the complaint.");
  }
}
