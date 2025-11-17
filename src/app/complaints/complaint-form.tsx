'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { summarizeAndSubmitComplaint, sendComplaintConfirmationEmail } from './actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  complaintLocation: z.string().min(5, { message: 'Location must be at least 5 characters.' }),
  category: z.string().min(1, { message: 'Please select a category.' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters.' }),
  // file: z.any().optional(),
});

type ComplaintFormValues = z.infer<typeof formSchema>;

interface SubmissionResult {
  trackingId: string;
  summary: string;
}

export default function ComplaintForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const { toast } = useToast();

  const form = useForm<ComplaintFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      complaintLocation: '',
      category: '',
      description: '',
    },
  });

  async function onSubmit(values: ComplaintFormValues) {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await summarizeAndSubmitComplaint({ complaintText: values.description });

      // Generate tracking ID
      const trackingId = `GOV-${Date.now().toString().slice(-6)}`;

      // Send confirmation email
      await sendComplaintConfirmationEmail({
        name: values.name,
        email: values.email,
        complaintLocation: values.complaintLocation,
        category: values.category,
        description: values.description,
        trackingId,
      });

      setResult({
        trackingId,
        summary: response.summary,
      });

      toast({
        title: 'Complaint Submitted Successfully',
        description: `Your tracking ID is ${trackingId}. A confirmation email has been sent to ${values.email}.`,
      });

      form.reset();
    } catch (error) {
      console.error('Submission failed:', error);
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'An error occurred while submitting your complaint. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (result) {
    return (
      <Alert>
        <AlertTitle className="text-primary text-xl font-bold">Thank You for Your Feedback!</AlertTitle>
        <AlertDescription className="space-y-4 mt-4">
          <p>Your complaint has been submitted successfully.</p>
          <p><strong>Tracking ID:</strong> <span className="font-mono bg-muted px-2 py-1 rounded">{result.trackingId}</span></p>
          <div>
            <p><strong>AI-Generated Summary:</strong></p>
            <blockquote className="mt-2 border-l-2 pl-4 italic text-foreground/80">
              {result.summary}
            </blockquote>
          </div>
          <Button onClick={() => setResult(null)} className="mt-4">Submit Another Complaint</Button>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-primary font-headline">Submit a Complaint or Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-card" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} className="bg-card"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="complaintLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location of Complaint</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the address/location where the issue occurred" {...field} className="bg-card" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-card">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="procurement">Procurement Issue</SelectItem>
                      <SelectItem value="project">Project Delay/Quality</SelectItem>
                      <SelectItem value="staff">Staff Conduct</SelectItem>
                      <SelectItem value="corruption">Corruption Report</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe your complaint in detail..."
                      rows={6}
                      {...field}
                      className="bg-card"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attach File (Optional)</FormLabel>
                  <FormControl>
                     <Input type="file" {...field} className="bg-card" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                'Submit Complaint'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
