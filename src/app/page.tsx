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

      {/* Quick Stats - World Class Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Minimalist Header */}
            <div className="mb-20 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Performance Metrics</span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-4 tracking-tight">
                Impact By Numbers
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Measurable results across procurement and project delivery
              </p>
            </div>

            {/* Premium Stats Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
              {stats.map((stat, index) => (
                <article
                  key={stat.label}
                  className={`group relative bg-white p-12 text-center hover:bg-primary/5 transition-all duration-500 ${
                    index !== stats.length - 1 ? 'md:border-r border-b md:border-b-0 border-border' : ''
                  }`}
                >
                  {/* Value - Large and Bold */}
                  <div className="mb-6">
                    <p className="text-7xl md:text-8xl font-bold text-foreground group-hover:text-primary transition-colors leading-none">
                      {stat.value}
                    </p>
                  </div>

                  {/* Divider Line */}
                  <div className="w-16 h-px bg-primary/30 mx-auto mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>

                  {/* Label */}
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.15em]">
                    {stat.label}
                  </p>

                  {/* Icon - Subtle */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {statIcons[stat.label as keyof typeof statIcons]}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Ultra Premium World Class Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Minimalist Header */}
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Latest Updates</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-4 tracking-tight">
              News & Announcements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stay informed about the latest developments and initiatives
            </p>
          </div>

          {/* Premium Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Large Featured Story - Takes 8 columns */}
            {news.slice(0, 1).map((item) => {
              const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[0];
              return (
                <Link
                  key={item.id}
                  href={`/news#news-${item.id}`}
                  className="lg:col-span-8 group"
                >
                  <div className="relative h-full min-h-[600px] overflow-hidden bg-white border border-border hover:border-primary/50 transition-all duration-500">
                    {/* Full height image */}
                    <div className="relative h-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                      {/* Content overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-12">
                        <div className="mb-4">
                          <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-4 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-lg text-white/90 mb-6 line-clamp-2">
                          {item.snippet}
                        </p>
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                          <span>{item.date}</span>
                          <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read Article <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Side Column - 2 Stories stacked - Takes 4 columns */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {news.slice(1, 3).map((item) => {
                const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[0];
                return (
                  <Link
                    key={item.id}
                    href={`/news#news-${item.id}`}
                    className="group flex-1"
                  >
                    <div className="relative h-full min-h-[285px] overflow-hidden bg-white border border-border hover:border-primary/50 transition-all duration-500">
                      <div className="relative h-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-white font-headline mb-2 leading-tight line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3 text-white/70 text-xs">
                            <span>{item.date}</span>
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Row - 3 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(3, 6).map((item) => {
              const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[0];
              return (
                <Link
                  key={item.id}
                  href={`/news#news-${item.id}`}
                  className="group"
                >
                  <article className="h-full bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-muted-foreground mb-3">{item.date}</div>
                      <h3 className="text-xl font-bold text-foreground font-headline mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {item.snippet}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tenders - World Class Design */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Minimalist Header */}
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Current Opportunities</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-4 tracking-tight">
              Open Tenders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore procurement opportunities and submit your proposals
            </p>
          </div>

          {/* Premium Grid Layout - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {tenders.slice(0, 3).map((tender) => (
              <Link
                key={tender.id}
                href="/procurement"
                className="group"
              >
                <article className="h-full bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  {/* Top colored bar */}
                  <div className="h-2 bg-primary"></div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Category Badge */}
                    <div className="mb-6">
                      <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                        {tender.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground font-headline mb-4 leading-tight line-clamp-3 group-hover:text-primary transition-colors">
                      {tender.title}
                    </h3>

                    {/* Status Badge */}
                    <div className="mb-6">
                      <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        tender.status === 'Open'
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}>
                        {tender.status}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-border">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Tender ID</p>
                          <p className="text-sm font-semibold text-foreground">TENDER-{String(tender.id).padStart(4, '0')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Closing Date</p>
                          <p className="text-sm font-semibold text-foreground">{tender.closingDate}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        View Details
                      </span>
                      <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center pt-8">
            <Link
              href="/procurement"
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
            >
              <span className="text-lg">View All Tenders</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quick Links / Resources */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Minimalist Header */}
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Resources</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-4 tracking-tight">
              Essential Documents
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Access templates, policies, and reports for procurement processes
            </p>
          </div>

          {/* Clean Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group"
              >
                <article className="h-full bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                      {quickLinkIcons[link.title as keyof typeof quickLinkIcons]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground font-headline mb-4 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                    <span>Access Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
