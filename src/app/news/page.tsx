import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2, Calendar } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { news } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function NewsPage() {
  const newsImages = PlaceHolderImages.filter((img) => img.id.startsWith('news'));
  const totalNews = news.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Premium Design */}
      <section className="relative bg-background py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-[fadeIn_2s_ease-out]"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-[fadeIn_2.5s_ease-out]"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl animate-[fadeIn_3s_ease-out]"></div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 mb-10 group animate-[fadeInUp_0.8s_ease-out]">
              <Sparkles className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">News Portal</span>
              <div className="h-4 w-px bg-primary/20"></div>
              <span className="text-xs font-bold text-foreground tabular-nums">{totalNews} Articles</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
              <Balancer>Latest Ministry News</Balancer>
            </h1>

            {/* Animated Divider */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-[fadeIn_0.8s_ease-out_0.3s_both]">
              <div className="h-1 w-24 bg-primary animate-[slideInLeft_1s_ease-out_0.4s_both]"></div>
              <TrendingUp className="h-6 w-6 text-primary animate-[fadeIn_0.8s_ease-out_0.6s_both]" strokeWidth={2.5} />
              <div className="h-1 w-24 bg-primary animate-[slideInRight_1s_ease-out_0.4s_both]"></div>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Stay informed about our latest projects, announcements, and initiatives across Kano State
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-5xl mx-auto border border-border">
            <div className="group relative bg-white p-6 md:p-8 text-center hover:bg-primary/5 transition-all duration-500 sm:border-r border-b sm:border-b-0 border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="relative">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">{totalNews}</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Articles</p>
              </div>
            </div>

            <div className="group relative bg-white p-6 md:p-8 text-center hover:bg-primary/5 transition-all duration-500 sm:border-r border-b sm:border-b-0 border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-75"></div>
              </div>
              <div className="relative">
                <Calendar className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">2024</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Current Year</p>
              </div>
            </div>

            <div className="group relative bg-white p-6 md:p-8 text-center hover:bg-primary/5 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-150"></div>
              </div>
              <div className="relative">
                <TrendingUp className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">100%</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="mb-16 md:mb-20 max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">All Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-4 tracking-tight">
              News & Announcements
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Comprehensive coverage of ministry activities and initiatives
            </p>
          </div>

          {/* Premium News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {news.map((item, index) => {
              const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[index % newsImages.length];
              return (
                <article
                  key={item.id}
                  id={`news-${item.id}`}
                  style={{ animation: `fadeInUp 0.8s ease-out ${1.8 + index * 0.08}s both` }}
                  className="group relative bg-white border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-700 overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none z-10"></div>

                  {/* Animated top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden z-20">
                    <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>

                  {/* Image Section */}
                  {image && (
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Date Badge on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div className="px-4 py-2 bg-white/95 backdrop-blur-sm border-2 border-white group-hover:border-primary transition-colors duration-500">
                          <p className="text-xs font-bold text-foreground uppercase tracking-wider tabular-nums">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="relative p-6 space-y-4 z-10">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground font-headline leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-500">
                      {item.title}
                    </h3>

                    {/* Snippet */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.snippet}
                    </p>

                    {/* Read More Link */}
                    <div className="pt-4 border-t-2 border-border group-hover:border-primary transition-colors duration-500">
                      <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-[0.2em] group-hover:gap-3 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>

                  {/* Corner L-shaped accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-primary"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-primary"></div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Premium Pagination */}
          <div className="mt-16 md:mt-24 flex justify-center">
            <div className="inline-flex items-center gap-3 p-2 bg-background border-2 border-border hover:border-primary/50 transition-all duration-500">
              <button
                className="px-4 md:px-6 py-3 text-sm font-bold text-muted-foreground bg-white hover:bg-primary hover:text-white transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-muted-foreground uppercase tracking-[0.2em]"
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
              </div>

              <button className="px-4 md:px-6 py-3 text-sm font-bold text-foreground bg-white hover:bg-primary hover:text-white transition-all duration-500 uppercase tracking-[0.2em]">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
