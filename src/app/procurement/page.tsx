import { Download, Search, FileText, Calendar, Tag, ArrowRight } from 'lucide-react';
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
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Procurement Portal</span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
                Tender Opportunities
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transparent procurement processes for sustainable infrastructure development
              </p>
            </div>

            {/* Stats Grid - Unified Border Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border max-w-5xl mx-auto">
              <div className="p-8 border-r border-b md:border-b-0 border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {openTenders}
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Open Now</p>
              </div>

              <div className="p-8 md:border-r border-b md:border-b-0 border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {totalTenders}
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Tenders</p>
              </div>

              <div className="p-8 border-r md:border-r border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    48h
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Avg Response</p>
              </div>

              <div className="p-8 text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    94%
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search tenders by title, category, or keywords..."
                  className="pl-12 h-14 text-base border-border focus:border-primary"
                />
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Category</label>
                  <Select>
                    <SelectTrigger className="h-12">
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
                  <label className="text-sm font-semibold text-foreground">Year</label>
                  <Select>
                    <SelectTrigger className="h-12">
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
                  <label className="text-sm font-semibold text-foreground">Status</label>
                  <Select>
                    <SelectTrigger className="h-12">
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
                  <label className="text-sm font-semibold text-foreground invisible">Action</label>
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90">
                    <Search className="mr-2 h-5 w-5" /> Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tender Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center gap-6 mb-6">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                  {openTenders} Currently Open
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline mb-3 tracking-tight">
                Available Tenders
              </h2>
              <p className="text-lg text-muted-foreground">
                Showing all {totalTenders} procurement opportunities
              </p>
            </div>

            {/* Tender Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tenders.map((tender) => (
                <article
                  key={tender.id}
                  className="group bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Top colored bar */}
                  <div className="h-2 bg-primary"></div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Badges */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${
                        tender.status === 'Open'
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}>
                        {tender.status}
                      </span>
                      <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                        {tender.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground font-headline mb-6 leading-tight line-clamp-3 group-hover:text-primary transition-colors">
                      {tender.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-4 mb-6 pb-6 border-b border-border">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Closing Date</p>
                          <p className="text-sm font-semibold text-foreground">{tender.closingDate}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Tag className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Tender ID</p>
                          <p className="text-sm font-semibold text-foreground">TENDER-{String(tender.id).padStart(4, '0')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                      <button className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                        <span>Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <div className="inline-flex gap-2 border border-border">
                <button className="px-6 py-3 text-sm font-semibold text-muted-foreground bg-white hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Previous
                </button>
                <button className="px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors border-x border-border">
                  1
                </button>
                <button className="px-6 py-3 text-sm font-semibold text-foreground bg-white hover:bg-primary/5 transition-colors">
                  2
                </button>
                <button className="px-6 py-3 text-sm font-semibold text-foreground bg-white hover:bg-primary/5 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
