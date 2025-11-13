import Balancer from 'react-wrap-balancer';
import { Search, ListChecks, Hourglass, FilePlus2 } from 'lucide-react';
import ComplaintForm from './complaint-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { faqs, complaintStats } from '@/lib/data';

const complaintStatIcons: { [key: string]: React.ReactNode } = {
  'Total Submitted': <FilePlus2 className="h-6 w-6 text-primary" />,
  'Resolved': <ListChecks className="h-6 w-6 text-primary" />,
  'In Progress': <Hourglass className="h-6 w-6 text-primary" />,
};

export default function ComplaintPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-primary mb-2">Home &gt; Complaints &amp; Feedback</p>
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl font-headline">
          <Balancer>Your Voice Matters</Balancer>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground md:text-xl">
          We are committed to addressing your concerns. Please use the form below to submit a complaint or provide feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <ComplaintForm />
        </div>

        <div className="space-y-8">
          {/* Complaint Stats */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary font-headline">Complaint Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {complaintStats.map(stat => (
                <div key={stat.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {complaintStatIcons[stat.label]}
                    <span className="text-foreground/80">{stat.label}</span>
                  </div>
                  <span className="font-bold text-lg text-primary">{stat.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Track Complaint */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary font-headline">Track Your Complaint</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-foreground/80">Enter your tracking ID to check the status of your complaint.</p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Tracking ID" />
                <Button type="submit">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary font-headline">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="text-left font-semibold text-primary/90 hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
