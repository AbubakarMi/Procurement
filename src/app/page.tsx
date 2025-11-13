'use client';

import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Briefcase,
  FileText,
  MessageSquare,
  Users,
  Download,
  BookOpen,
  FileBadge,
  ScrollText,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

import { stats, news, tenders, quickLinks } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const statIcons = {
  Projects: <Briefcase className="h-8 w-8 text-primary" />,
  Tenders: <FileText className="h-8 w-8 text-primary" />,
  Complaints: <MessageSquare className="h-8 w-8 text-primary" />,
};

const quickLinkIcons = {
  'Tender Templates': <FileBadge className="h-8 w-8 text-primary" />,
  'Procurement Policies': <BookOpen className="h-8 w-8 text-primary" />,
  'Annual Reports': <ScrollText className="h-8 w-8 text-primary" />,
};

export default function Home() {
  const newsImages = PlaceHolderImages.filter((img) => img.id.startsWith('news'));
  const tenderImages = PlaceHolderImages.filter((img) => img.id.startsWith('tender'));

  // Hero images array
  const heroImages = [
    '/commisioner10.jpeg',
    '/commisioner9.jpeg',
    '/commisioner8.jpeg',
    '/commisioner2.jpeg',
    '/commisioner1.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Image Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Images with Crossfade */}
        {heroImages.map((imageSrc, index) => (
          <div
            key={imageSrc}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={imageSrc}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-10 shadow-lg">
              <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"></div>
              <span className="text-sm md:text-base font-semibold text-white tracking-wide">Kano State Ministry for Public Procurement, Project Monitoring and Evaluation</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-8 mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white font-headline leading-[0.95] tracking-tighter">
                Transparent
                <br />
                <span className="text-primary drop-shadow-2xl">Procurement</span>
                <br />
                <span className="text-white/95">for Kano's Future</span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-1.5 w-24 bg-primary shadow-lg shadow-primary/50"></div>
                <div className="h-1 w-16 bg-white/40"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed max-w-4xl mb-12 font-light">
              Building trust through accountability and transparent governance across all public works.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild size="lg" className="h-16 px-10 text-lg font-semibold shadow-2xl hover:shadow-primary/50 transition-all">
                <Link href="/procurement" className="flex items-center gap-2">
                  Browse Tenders
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg font-semibold border-2 border-white text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all">
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">150</span>
                  <span className="text-3xl md:text-4xl font-bold text-white">+</span>
                </div>
                <p className="text-sm md:text-base font-medium text-white/80">Active Projects</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">320</span>
                  <span className="text-3xl md:text-4xl font-bold text-white">+</span>
                </div>
                <p className="text-sm md:text-base font-medium text-white/80">Open Tenders</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">98</span>
                  <span className="text-3xl md:text-4xl font-bold text-white">%</span>
                </div>
                <p className="text-sm md:text-base font-medium text-white/80">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Floating Card - Bottom Right */}
          <div className="absolute bottom-12 right-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-sm hidden lg:block">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground mb-1">Project Updates</p>
                <p className="text-sm text-muted-foreground">Real-time monitoring & tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable results and transparent governance across our operations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="relative overflow-hidden text-center border-l-4 border-l-primary bg-white hover:shadow-xl transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    {statIcons[stat.label as keyof typeof statIcons]}
                  </div>
                  <CardTitle className="text-primary text-base font-semibold uppercase tracking-wide">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-5xl md:text-6xl font-extrabold text-foreground">
                    {stat.value}
                  </p>
                </CardContent>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">News & Updates</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-headline">
              Latest News & Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest developments in procurement and public projects
            </p>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {news.slice(0, 5).map((item, index) => {
                const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[0];
                return (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="flex flex-col h-full group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                      <CardHeader className="p-0 relative overflow-hidden">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            data-ai-hint={image.imageHint}
                          />
                          {/* Gradient overlay on image for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                          {/* Date badge on image */}
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-white/90 text-primary hover:bg-white shadow-lg border-0 backdrop-blur-sm">
                              {item.date}
                            </Badge>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="h-10 w-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                            </svg>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-1 w-8 bg-primary"></div>
                          <div className="h-1 w-4 bg-primary/50"></div>
                        </div>
                        <CardTitle className="text-foreground text-xl mb-3 font-headline leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground line-clamp-3 leading-relaxed">
                          {item.snippet}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 border-t">
                        <Button variant="ghost" asChild className="w-full justify-between text-primary hover:text-white hover:bg-primary transition-all">
                          <Link href={`/news#news-${item.id}`} className="flex items-center gap-2">
                            <span className="font-semibold">Read Full Story</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-2 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-2 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md" />
          </Carousel>
        </div>
      </section>

      {/* Featured Tenders */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-headline">
              Featured Tenders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore current procurement opportunities and tender documents
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tenders.slice(0, 3).map((tender, index) => (
              <Card
                key={tender.id}
                className="relative group overflow-hidden shadow-lg hover:shadow-2xl flex flex-col border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20">
                      {tender.category}
                    </Badge>
                    <FileText className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-primary text-xl mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {tender.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary/60" />
                      <span className="font-medium">Closing Date:</span>
                      <span className="text-foreground font-semibold">{tender.closingDate}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="relative z-10">
                  <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-md hover:shadow-xl">
                    <Link href="#" className="flex items-center justify-center gap-2">
                      <Download className="h-4 w-4 group-hover/btn:animate-bounce" />
                      Download Tender
                    </Link>
                  </Button>
                </CardFooter>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="text-lg h-14 px-10 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/procurement" className="flex items-center gap-2">
                View All Tenders
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Quick Links / Resources */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(227,66,52,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-headline">
              Quick Links & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access essential documents, policies, and templates for procurement processes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {quickLinks.map((link, index) => (
              <Card
                key={link.title}
                className="relative group text-center overflow-hidden border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                <CardHeader className="relative z-10 pb-4">
                  <div className="mx-auto mb-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    {quickLinkIcons[link.title as keyof typeof quickLinkIcons]}
                  </div>
                  <CardTitle className="text-primary text-xl font-bold group-hover:text-accent transition-colors duration-300">
                    {link.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 pb-8">
                  <Button asChild variant="outline" size="lg" className="w-full group/btn border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                    <Link href={link.href} className="flex items-center justify-center gap-2">
                      Go to Page
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
