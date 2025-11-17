import { Download, Search, FileBadge, BookOpen, ScrollText, FileText, ArrowRight, FileCheck, Clock, Shield, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { resources } from '@/lib/data';

const resourceIcons = {
  Forms: FileBadge,
  Policies: BookOpen,
  Templates: ScrollText,
  Reports: FileText,
};

export default function ResourcesPage() {
  const categories = [...new Set(resources.map(r => r.category))];
  const totalResources = resources.length;

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
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Document Portal</span>
                  <div className="h-4 w-px bg-primary/20"></div>
                  <span className="text-xs font-bold text-foreground">{totalResources} Resources</span>
                </div>
              </div>

              {/* Main Title */}
              <div className="animate-[fadeInUp_0.8s_ease-out_0.2s_both] space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
                  Resources & Downloads
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-1 w-24 bg-primary animate-[slideInLeft_1s_ease-out_0.4s_both]"></div>
                  <FileCheck className="h-6 w-6 text-primary animate-[fadeIn_0.8s_ease-out_0.6s_both]" strokeWidth={2.5} />
                  <div className="h-1 w-24 bg-primary animate-[slideInRight_1s_ease-out_0.4s_both]"></div>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Access official procurement documents, forms, policies, and templates. Everything you need for transparent and efficient processes.
                </p>
              </div>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <div className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-500">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>

                <div className="relative p-6 md:p-8">
                  <FileCheck className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">{totalResources}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Documents</p>
                </div>
              </div>

              <div className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-75"></div>
                </div>

                <div className="relative p-6 md:p-8">
                  <FileBadge className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">{categories.length}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Categories</p>
                </div>
              </div>

              <div className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-150"></div>
                </div>

                <div className="relative p-6 md:p-8">
                  <Clock className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">24/7</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Available</p>
                </div>
              </div>

              <div className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
                </div>

                <div className="relative p-6 md:p-8">
                  <Shield className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">100%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Secure</p>
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
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out_1s_both]">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Find Your Document</h2>
              <p className="text-muted-foreground">Search and filter through our comprehensive document library</p>
            </div>

            <div className="space-y-10 animate-[fadeInUp_0.8s_ease-out_1.2s_both]">
              {/* Premium Search Bar */}
              <div className="relative group">
                {/* Glow effect on focus */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-700"></div>

                <div className="relative bg-white border-2 border-border group-hover:border-primary p-1.5 transition-all duration-500">
                  <div className="relative">
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" strokeWidth={2.5} />
                    <Input
                      placeholder="Search by document name, category, or keywords..."
                      className="pl-14 pr-6 h-14 text-base border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Premium Category Filters */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-border"></div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.25em]">Browse by Category</span>
                  <div className="h-px flex-1 bg-border"></div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    variant="outline"
                    className="relative h-12 px-8 border-2 border-primary bg-primary text-white font-bold uppercase tracking-[0.2em] text-xs overflow-hidden group hover:shadow-xl transition-all duration-500"
                  >
                    <span className="relative z-10">All Documents</span>
                    <div className="absolute inset-0 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </Button>
                  {categories.map((category, index) => (
                    <Button
                      key={category}
                      variant="outline"
                      style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                      className="relative h-12 px-7 border-2 border-border hover:border-primary bg-white font-bold uppercase tracking-[0.2em] text-xs overflow-hidden group hover:shadow-lg transition-all duration-500 animate-[fadeInUp_0.5s_ease-out_both]"
                    >
                      <span className="relative z-10 group-hover:text-white transition-colors duration-500">{category}</span>
                      <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Listings - World Class Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center animate-[fadeInUp_0.8s_ease-out_1.6s_both]">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/5 border-2 border-primary/20 mb-6">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Available Now</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Browse Documents
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access official procurement forms, policies, and templates
              </p>
            </div>

            {/* Resource Cards Grid - Premium Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resourceIcons[resource.category as keyof typeof resourceIcons];
                return (
                  <article
                    key={resource.id}
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
                      {/* Header: Icon + Badge */}
                      <div className="flex items-start justify-between mb-6">
                        {/* Animated Icon Container */}
                        <div className="relative p-4 bg-primary/5 border-2 border-primary/10 group-hover:border-primary group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                          <IconComponent className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-700" strokeWidth={2} />
                          {/* Pulse dot */}
                          <div className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                        </div>

                        {/* Category Badge */}
                        <div className="px-3 py-1.5 bg-background border-2 border-border group-hover:bg-primary group-hover:border-primary group-hover:-translate-y-1 transition-all duration-500">
                          <span className="text-xs font-bold text-foreground group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-500">
                            {resource.category}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-500">
                        {resource.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 min-h-[4rem]">
                        {resource.description}
                      </p>

                      {/* Animated Divider */}
                      <div className="relative mb-6 h-px">
                        <div className="absolute inset-0 bg-border"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        <a
                          href="#"
                          className="flex-1 relative flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] overflow-hidden group/btn hover:shadow-xl transition-all duration-500"
                        >
                          <Download className="h-4 w-4 relative z-10 group-hover/btn:scale-110 group-hover/btn:-rotate-12 transition-all duration-300" strokeWidth={2.5} />
                          <span className="relative z-10">Download</span>
                          {/* Slide animation */}
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
                );
              })}
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
                  <button className="relative h-12 w-12 text-sm font-bold text-foreground bg-white border-2 border-border hover:border-primary overflow-hidden group tabular-nums hover:shadow-lg transition-all duration-500">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">3</span>
                    <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  </button>
                  <button className="h-12 w-12 text-sm font-bold text-muted-foreground bg-white border-2 border-border flex items-center justify-center">
                    <span className="text-xs">...</span>
                  </button>
                  <button className="relative h-12 w-12 text-sm font-bold text-foreground bg-white border-2 border-border hover:border-primary overflow-hidden group tabular-nums hover:shadow-lg transition-all duration-500">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">10</span>
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
    </div>
  );
}
