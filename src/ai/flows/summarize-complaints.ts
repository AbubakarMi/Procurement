'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing user complaints.
 *
 * - summarizeComplaints - A function that takes complaint text as input and returns a summary.
 * - SummarizeComplaintsInput - The input type for the summarizeComplaints function.
 * - SummarizeComplaintsOutput - The return type for the summarizeComplaints function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeComplaintsInputSchema = z.object({
  complaintText: z
    .string()
    .describe('The text content of the complaint to be summarized.'),
});
export type SummarizeComplaintsInput = z.infer<typeof SummarizeComplaintsInputSchema>;

const SummarizeComplaintsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the complaint text.'),
});
export type SummarizeComplaintsOutput = z.infer<typeof SummarizeComplaintsOutputSchema>;

export async function summarizeComplaints(input: SummarizeComplaintsInput): Promise<SummarizeComplaintsOutput> {
  return summarizeComplaintsFlow(input);
}

const summarizeComplaintsPrompt = ai.definePrompt({
  name: 'summarizeComplaintsPrompt',
  input: {schema: SummarizeComplaintsInputSchema},
  output: {schema: SummarizeComplaintsOutputSchema},
  prompt: `Summarize the following complaint text in a concise manner:

{{{complaintText}}}`,
});

const summarizeComplaintsFlow = ai.defineFlow(
  {
    name: 'summarizeComplaintsFlow',
    inputSchema: SummarizeComplaintsInputSchema,
    outputSchema: SummarizeComplaintsOutputSchema,
  },
  async input => {
    const {output} = await summarizeComplaintsPrompt(input);
    return output!;
  }
);
