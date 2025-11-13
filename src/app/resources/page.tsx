import { Download, Search, FileBadge, BookOpen, ScrollText, FileText, ArrowRight } from 'lucide-react';
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
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Document Center</span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
                Resources & Downloads
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access official documents, templates, forms, and policies for transparent procurement
              </p>
            </div>

            {/* Stats Grid - Unified Border Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border max-w-5xl mx-auto">
              <div className="p-8 border-r border-b md:border-b-0 border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {totalResources}
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Resources</p>
              </div>

              <div className="p-8 md:border-r border-b md:border-b-0 border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {categories.length}
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Categories</p>
              </div>

              <div className="p-8 border-r md:border-r border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    24/7
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Access</p>
              </div>

              <div className="p-8 text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Free
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Downloads</p>
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
                  placeholder="Search documents by title, category, or keywords..."
                  className="pl-12 h-14 text-base border-border focus:border-primary bg-white"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant="outline"
                  className="h-12 px-6 border-2 border-primary bg-primary text-white hover:bg-primary/90 font-semibold uppercase tracking-wider text-xs"
                >
                  All Resources
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant="outline"
                    className="h-12 px-6 border-2 border-border hover:border-primary hover:text-primary font-semibold uppercase tracking-wider text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Listings */}
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
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                  {totalResources} Documents Available
                </span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground font-headline mb-4 tracking-tight">
                Official Documents
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Download forms, policies, templates, and reports for procurement processes
              </p>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => {
                const IconComponent = resourceIcons[resource.category as keyof typeof resourceIcons];
                return (
                  <article
                    key={resource.id}
                    className="group bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
                  >
                    {/* Top colored bar */}
                    <div className="h-2 bg-primary"></div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Icon and Category Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <span className="inline-block px-3 py-1.5 bg-background text-foreground text-xs font-bold uppercase tracking-wider border border-border">
                          {resource.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground font-headline mb-4 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                        {resource.description}
                      </p>

                      {/* Divider */}
                      <div className="w-full h-px bg-border mb-6"></div>

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
                          <span>Preview</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
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
