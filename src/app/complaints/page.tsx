import { ListChecks, Hourglass, FilePlus2 } from 'lucide-react';
import ComplaintForm from './complaint-form';
import TrackComplaint from './track-complaint';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/lib/data';
import { getStats } from './actions';

const complaintStatIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Total Submitted': FilePlus2,
  'Resolved': ListChecks,
  'In Progress': Hourglass,
};

export default async function ComplaintPage() {
  // Fetch real complaint statistics from database
  const stats = await getStats();

  const complaintStats = [
    { label: 'Total Submitted', value: stats.total.toString() },
    { label: 'Resolved', value: stats.resolved.toString() },
    { label: 'In Progress', value: stats.inProgress.toString() },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Minimalist Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Feedback Portal</span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
                Your Voice Matters
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We are committed to addressing your concerns through transparent and responsive governance
              </p>
            </div>

            {/* Stats Grid - Unified Border Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border max-w-5xl mx-auto">
              {complaintStats.map((stat, index) => {
                const IconComponent = complaintStatIcons[stat.label];
                return (
                  <div
                    key={stat.label}
                    className={`group relative bg-white p-8 text-center hover:bg-primary/5 transition-all duration-500 ${
                      index !== complaintStats.length - 1 ? 'md:border-r border-b md:border-b-0 border-border' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ${index === 1 ? 'delay-75' : index === 2 ? 'delay-150' : ''}`}></div>
                    </div>

                    <div className="relative">
                      <IconComponent className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                      <p className="text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">
                        {stat.value}
                      </p>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Form */}
              <div className="lg:col-span-2">
                {/* Section Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="h-px w-12 bg-primary"></div>
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                      Submit Feedback
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline mb-3 tracking-tight">
                    File a Complaint
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Please provide detailed information about your concern
                  </p>
                </div>

                <ComplaintForm />
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                {/* Track Complaint */}
                <TrackComplaint />

                {/* FAQs */}
                <article className="bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  {/* Top colored bar */}
                  <div className="h-2 bg-primary"></div>

                  <div className="p-8">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground font-headline mb-6">
                      Frequently Asked Questions
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b border-border">
                          <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-base py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
