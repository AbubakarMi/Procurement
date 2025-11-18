'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2, Copy, Check, CheckCircle2, AlertCircle, MapPin, Tag, FileText, Mail, User } from 'lucide-react';
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
import { submitComplaint } from './actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

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

interface SubmittedData {
  name: string;
  email: string;
  category: string;
  complaintLocation: string;
  description: string;
}

export default function ComplaintForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);
  const [copied, setCopied] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: 'Copied!',
        description: 'Tracking ID copied to clipboard',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Failed to copy',
        description: 'Please copy the tracking ID manually',
      });
    }
  };

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
      // Submit complaint using the new backend
      const response = await submitComplaint({
        name: values.name,
        email: values.email,
        complaintLocation: values.complaintLocation,
        category: values.category,
        description: values.description,
      });

      if (response.success) {
        setResult({
          trackingId: response.trackingId,
          summary: response.summary,
        });

        // Save the submitted data for display in alert
        setSubmittedData({
          name: values.name,
          email: values.email,
          category: values.category,
          complaintLocation: values.complaintLocation,
          description: values.description,
        });

        // Show success alert popup
        setShowSuccessAlert(true);

        toast({
          title: 'Complaint Submitted Successfully',
          description: `Your tracking ID is ${response.trackingId}. A confirmation email has been sent to ${values.email}.`,
        });

        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      const errMsg = error instanceof Error ? error.message : 'An error occurred while submitting your complaint. Please try again.';
      setErrorMessage(errMsg);
      setShowErrorAlert(true);

      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: errMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (result) {
    return (
      <Card className="shadow-lg border-2 border-primary/20">
        <CardContent className="p-0">
          {/* Success Header */}
          <div className="bg-primary p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold font-headline mb-2">Complaint Submitted Successfully!</h2>
            <p className="text-white/90">Thank you for helping us improve our services</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Tracking ID Box */}
            <div className="bg-background border-2 border-primary p-6 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold text-center">Your Tracking ID</p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <p className="text-2xl md:text-3xl font-bold text-primary font-mono tracking-wider">{result.trackingId}</p>
                <Button
                  onClick={() => copyToClipboard(result.trackingId)}
                  variant="outline"
                  size="sm"
                  className="h-10 px-3"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-1 text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">Save this ID to track your complaint status</p>
            </div>

            {/* AI Summary */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 bg-primary"></div>
                <p className="text-sm font-bold text-foreground uppercase tracking-wider">AI-Generated Summary</p>
              </div>
              <div className="bg-muted/50 border-l-4 border-l-primary p-6 rounded-r-lg">
                <p className="text-base text-foreground/90 leading-relaxed italic">
                  "{result.summary}"
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What Happens Next?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>A confirmation email has been sent to your email address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Our team will review your complaint within 48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>You will receive email updates as we process your complaint</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Use your tracking ID to check status anytime</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <Button
              onClick={() => setResult(null)}
              className="w-full h-12 text-base font-semibold"
            >
              Submit Another Complaint
            </Button>
          </div>
        </CardContent>
      </Card>
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
                  <Select onValueChange={field.onChange} value={field.value}>
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
              control={form.control}
              name="file"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Attach File (Optional)</FormLabel>
                  <FormControl>
                     <Input
                       type="file"
                       {...fieldProps}
                       onChange={(e) => onChange(e.target.files?.[0])}
                       className="bg-card"
                     />
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

      {/* Success Alert Dialog - World Class Design */}
      <AlertDialog open={showSuccessAlert} onOpenChange={setShowSuccessAlert}>
        <AlertDialogContent className="max-w-lg p-0 overflow-hidden border-0 shadow-2xl">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-br from-primary to-primary/80 p-6 text-white text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <AlertDialogTitle className="text-2xl font-bold text-white mb-2">
              Complaint Submitted!
            </AlertDialogTitle>
            <p className="text-white/90 text-sm">
              Thank you for your feedback. Your complaint has been received.
            </p>
          </div>

          <AlertDialogDescription asChild>
            <div className="p-6 space-y-5">
              {/* Tracking ID Box */}
              {result && (
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 rounded-xl p-5 text-center shadow-sm">
                  <p className="text-xs text-primary uppercase tracking-[0.2em] font-bold mb-3">
                    Your Tracking ID
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-3 shadow-inner border border-primary/10">
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-2xl font-black text-primary font-mono tracking-wider">
                        {result.trackingId}
                      </p>
                      <Button
                        onClick={() => copyToClipboard(result.trackingId)}
                        variant="outline"
                        size="sm"
                        className="h-9 px-3 border-primary/30 hover:bg-primary/5 hover:border-primary"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 text-green-600 mr-1" />
                            <span className="text-xs text-green-600 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-1" />
                            <span className="text-xs font-semibold">Copy</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Save this ID to track your complaint status
                  </p>
                </div>
              )}

              {/* Submitted Details */}
              {submittedData && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-0.5 w-6 bg-primary"></div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      Submission Details
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-3 w-3 text-primary" />
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Name</p>
                      </div>
                      <p className="text-sm font-semibold text-foreground truncate">{submittedData.name}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="h-3 w-3 text-primary" />
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Email</p>
                      </div>
                      <p className="text-sm font-semibold text-foreground truncate">{submittedData.email}</p>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                    <div className="flex items-center gap-2 mb-1">
                      <Tag className="h-3 w-3 text-primary" />
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Category</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground capitalize">{submittedData.category.replace('-', ' ')}</p>
                  </div>

                  {/* Location */}
                  <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-3 w-3 text-primary" />
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{submittedData.complaintLocation}</p>
                  </div>

                  {/* Description */}
                  <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-3 w-3 text-primary" />
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Description</p>
                    </div>
                    <p className="text-sm text-foreground line-clamp-3">{submittedData.description}</p>
                  </div>
                </div>
              )}

              {/* Email notification */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-xs text-green-800">
                  A confirmation email with your tracking ID and next steps has been sent to your email address.
                </p>
              </div>
            </div>
          </AlertDialogDescription>

          <AlertDialogFooter className="p-6 pt-0">
            <AlertDialogAction
              onClick={() => setShowSuccessAlert(false)}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-base font-semibold shadow-lg"
            >
              Got it, Thanks!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Alert Dialog */}
      <AlertDialog open={showErrorAlert} onOpenChange={setShowErrorAlert}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
            </div>
            <AlertDialogTitle className="text-center text-2xl font-bold text-foreground">
              Submission Failed
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base space-y-4">
              <p className="text-muted-foreground">
                We encountered an error while submitting your complaint.
              </p>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800">{errorMessage}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Please try again. If the problem persists, contact our support team.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setShowErrorAlert(false)}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
