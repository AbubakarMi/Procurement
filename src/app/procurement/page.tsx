import { Download, Search, FileText, Calendar, Tag, ArrowRight, Sparkles, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { tenders } from '@/lib/data';

export default function ProcurementPage() {
  const openTenders = tenders.filter(t => t.status === 'Open').length;
  const totalTenders = tenders.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section - World Class */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden border-b-2 border-border">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-[fadeIn_1.5s_ease-out]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-[fadeIn_1.5s_ease-out_0.5s_both]"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-[fadeIn_1.5s_ease-out_1s_both]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Premium Header */}
            <div className="text-center mb-16 space-y-8">
              {/* Badge */}
              <div className="animate-[fadeInUp_0.8s_ease-out] inline-block">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 group">
                  <Sparkles className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Tender Portal</span>
                  <div className="h-4 w-px bg-primary/20"></div>
                  <span className="text-xs font-bold text-foreground">{openTenders} Active</span>
                </div>
              </div>

              {/* Main Title */}
              <div className="animate-[fadeInUp_0.8s_ease-out_0.2s_both] space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
                  Procurement Opportunities
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-1 w-24 bg-primary animate-[slideInLeft_1s_ease-out_0.4s_both]"></div>
                  <TrendingUp className="h-6 w-6 text-primary animate-[fadeIn_0.8s_ease-out_0.6s_both]" strokeWidth={2.5} />
                  <div className="h-1 w-24 bg-primary animate-[slideInRight_1s_ease-out_0.4s_both]"></div>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Transparent tender processes for sustainable infrastructure and public service development
                </p>
              </div>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <div className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>

                <div className="relative p-6 md:p-8">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">{openTenders}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Active Now</p>
                </div>
              </div>

              <div className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-75"></div>
                </div>

                <div className="relative p-6 md:p-8">
                  <FileText className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">{totalTenders}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Total Tenders</p>
                </div>
              </div>

              <div className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-150"></div>
                </div>

                <div className="relative p-6 md:p-8">
                  <Clock className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">48h</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Response Time</p>
                </div>
              </div>

              <div className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
                </div>

                <div className="relative p-6 md:p-8">
                  <TrendingUp className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">94%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section - Premium */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#E34234 1px, transparent 1px), linear-gradient(90deg, #E34234 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out_1s_both]">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Find Opportunities</h2>
              <p className="text-muted-foreground">Filter and search through available tenders</p>
            </div>

            <div className="space-y-8 animate-[fadeInUp_0.8s_ease-out_1.2s_both]">
              {/* Premium Search Bar */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-700"></div>

                <div className="relative bg-white border-2 border-border group-hover:border-primary p-1.5 transition-all duration-500">
                  <div className="relative">
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" strokeWidth={2.5} />
                    <Input
                      placeholder="Search tenders by title, category, or keywords..."
                      className="pl-14 pr-6 h-14 text-base border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Premium Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Category</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-white border-2 border-border hover:border-primary transition-colors duration-300">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="supplies">Supplies</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="consultancy">Consultancy</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Year</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-white border-2 border-border hover:border-primary transition-colors duration-300">
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Status</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-white border-2 border-border hover:border-primary transition-colors duration-300">
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                      <SelectItem value="awarded">Awarded</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] opacity-0">Action</label>
                  <Button className="w-full h-12 bg-primary hover:bg-accent text-white font-bold uppercase tracking-[0.2em] text-xs border-2 border-primary hover:border-accent transition-all duration-500 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Search className="h-4 w-4" strokeWidth={2.5} />
                      Apply
                    </span>
                    <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tender Listings - World Class */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center animate-[fadeInUp_0.8s_ease-out_1.6s_both]">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/5 border-2 border-primary/20 mb-6">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">{openTenders} Live Now</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Active Tenders
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse {totalTenders} procurement opportunities available for bidding
              </p>
            </div>

            {/* Tender Cards Grid - Premium Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tenders.map((tender, index) => (
                <article
                  key={tender.id}
                  style={{ animation: `fadeInUp 0.8s ease-out ${1.8 + index * 0.08}s both` }}
                  className="group relative bg-white border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-700 overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700"></div>

                  {/* Animated top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden">
                    <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>

                  <div className="relative p-7">
                    {/* Status & Category Badges */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] border-2 ${
                        tender.status === 'Open'
                          ? 'bg-green-50 text-green-700 border-green-200'
                          : 'bg-gray-50 text-gray-600 border-gray-200'
                      }`}>
                        {tender.status}
                      </span>
                      <span className="px-3 py-1.5 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] border-2 border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                        {tender.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-6 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-500 min-h-[3.5rem]">
                      {tender.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-4 mb-6 pb-6 border-b-2 border-border">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/5 border-2 border-primary/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                          <Calendar className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Deadline</p>
                          <p className="text-sm font-bold text-foreground">{tender.closingDate}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/5 border-2 border-primary/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                          <Tag className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Tender ID</p>
                          <p className="text-sm font-bold text-foreground tabular-nums">TNR-{String(tender.id).padStart(4, '0')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        className="flex-1 relative flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] overflow-hidden group/btn hover:shadow-xl transition-all duration-500"
                      >
                        <Download className="h-4 w-4 relative z-10 group-hover/btn:scale-110 group-hover/btn:-rotate-12 transition-all duration-300" strokeWidth={2.5} />
                        <span className="relative z-10">Download</span>
                        <div className="absolute inset-0 bg-accent transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                      </a>
                      <button className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] hover:gap-3 transition-all duration-300 group/preview px-3">
                        <span>View</span>
                        <ArrowRight className="h-4 w-4 group-hover/preview:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-primary"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-primary"></div>
                  </div>
                </article>
              ))}
            </div>

            {/* Premium Pagination */}
            <div className="mt-24 flex justify-center animate-[fadeInUp_0.8s_ease-out_2.5s_both]">
              <div className="inline-flex items-center gap-3 p-2 bg-background border-2 border-border hover:border-primary/50 transition-all duration-500">
                <button
                  className="px-6 py-3 text-sm font-bold text-muted-foreground bg-white hover:bg-primary hover:text-white transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-muted-foreground uppercase tracking-[0.2em]"
                  disabled
                >
                  Prev
                </button>

                <div className="flex gap-2">
                  <button className="relative h-12 w-12 text-sm font-bold text-white bg-primary border-2 border-primary overflow-hidden group tabular-nums hover:shadow-lg transition-all duration-500">
                    <span className="relative z-10">1</span>
                    <div className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  </button>
                  <button className="relative h-12 w-12 text-sm font-bold text-foreground bg-white border-2 border-border hover:border-primary overflow-hidden group tabular-nums hover:shadow-lg transition-all duration-500">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">2</span>
                    <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  </button>
                </div>

                <button className="px-6 py-3 text-sm font-bold text-foreground bg-white hover:bg-primary hover:text-white transition-all duration-500 uppercase tracking-[0.2em]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Application Process</span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground font-headline mb-4 tracking-tight">
                How to Apply for Tenders
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow our transparent and straightforward procurement process
              </p>
            </div>

            {/* Process Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border bg-white">
              {/* Step 1 */}
              <div className="relative p-8 border-r-0 lg:border-r border-b lg:border-b-0 border-border group hover:bg-primary/5 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-headline">
                    Review Tender
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Download and carefully review the tender documents and requirements
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative p-8 border-r-0 lg:border-r border-b lg:border-b-0 border-border group hover:bg-primary/5 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-headline">
                    Prepare Documents
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gather all required documentation and prepare your proposal
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative p-8 border-r-0 lg:border-r border-b md:border-b-0 border-border group hover:bg-primary/5 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-headline">
                    Submit Bid
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Submit your complete bid package before the closing date
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative p-8 group hover:bg-primary/5 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-headline">
                    Award Process
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Evaluation and award notification will be sent to all bidders
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Card 1 */}
              <div className="bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <div className="p-8">
                  <div className="p-4 bg-primary/10 border border-primary/20 inline-flex mb-6">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-headline mb-4">
                    Required Documents
                  </h3>
                  <ul className="space-y-3 text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Company registration certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tax clearance certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Technical and financial proposals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Proof of similar past experience</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <div className="p-8">
                  <div className="p-4 bg-primary/10 border border-primary/20 inline-flex mb-6">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-headline mb-4">
                    Important Dates
                  </h3>
                  <ul className="space-y-3 text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tender documents available online</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Pre-bid meetings (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Submission deadline clearly stated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Award notification timeline</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <div className="p-8">
                  <div className="p-4 bg-primary/10 border border-primary/20 inline-flex mb-6">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-headline mb-4">
                    Get Support
                  </h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    Need help with the bidding process? Our team is here to assist you.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-foreground">
                      <span className="font-semibold">Email:</span> info@procurement.kn.gov.ng
                    </p>
                    <p className="text-foreground">
                      <span className="font-semibold">Phone:</span> 08065455715
                    </p>
                    <p className="text-foreground">
                      <span className="font-semibold">Office:</span> 21 Magaji Rumfa Road, Kano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
