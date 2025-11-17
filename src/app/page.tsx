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
  Target,
  TrendingUp,
  Shield,
  CheckCircle2,
  Sparkles,
  Award,
  Eye,
  Calendar,
  Clock,
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
      {/* Hero Section - World Class Premium Design */}
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
              className="object-cover scale-105"
              priority={index === 0}
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          </div>
        ))}

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-[fadeIn_2s_ease-out] z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-[fadeIn_2s_ease-out_0.5s_both] z-0"></div>

        {/* Content Overlay */}
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-6xl">
            {/* Premium Badge */}
            <div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 transition-all duration-500 group mb-12"
              style={{ animation: 'fadeInUp 0.8s ease-out' }}
            >
              <Sparkles className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
              <span className="text-sm md:text-base font-bold text-white tracking-wide">Hon Nura Iro Ma'aji PhD</span>
              <div className="h-5 w-px bg-white/30"></div>
              <span className="text-sm md:text-base font-semibold text-white/90">Commissioner, Kano State Ministry for Public Procurement</span>
            </div>

            {/* Main Heading - Ultra Premium */}
            <div className="space-y-10 mb-16" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white font-headline leading-[0.9] tracking-tighter">
                  <span className="block">Transparent</span>
                  <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent drop-shadow-2xl">
                    Procurement
                  </span>
                  <span className="block text-white/95">for Kano's Future</span>
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-32 bg-primary shadow-lg shadow-primary/50"></div>
                  <div className="h-1.5 w-24 bg-white/40"></div>
                  <div className="h-1 w-16 bg-white/20"></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 leading-relaxed max-w-4xl font-light">
                <Balancer>
                  Building trust through accountability and transparent governance across all public works
                </Balancer>
              </p>
            </div>

            {/* CTA Buttons - Premium Design */}
            <div
              className="flex flex-col sm:flex-row gap-6 mb-20"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
            >
              <Button asChild className="h-16 px-12 text-lg font-bold uppercase tracking-[0.2em] relative overflow-hidden group border-0">
                <Link href="/procurement" className="flex items-center gap-3">
                  <Target className="h-6 w-6 relative z-10 group-hover:scale-110 transition-all duration-300" />
                  <span className="relative z-10">Browse Tenders</span>
                  <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-16 px-12 text-lg font-bold uppercase tracking-[0.2em] border-2 border-white/40 text-white bg-white/10 backdrop-blur-xl hover:bg-white hover:text-primary hover:border-white transition-all duration-500 relative overflow-hidden group">
                <Link href="/projects" className="flex items-center gap-3">
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Stats Row - Clean Minimalist */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
            >
              {[
                { value: '150+', label: 'Active Projects', icon: TrendingUp },
                { value: '320+', label: 'Open Tenders', icon: FileText },
                { value: '98%', label: 'Transparency Rate', icon: Shield },
                { value: '24/7', label: 'Monitoring', icon: Eye }
              ].map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="relative">
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                      <span className="text-6xl md:text-7xl font-bold text-white tabular-nums group-hover:scale-105 transition-transform duration-500">
                        {stat.value}
                      </span>
                    </div>
                    <div className="h-1 w-16 bg-white/30 mx-auto mb-3 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
                    <p className="text-sm font-bold text-white/90 uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Scroll Down</span>
            <ArrowRight className="h-5 w-5 text-white/60 rotate-90" />
          </div>
        </div>
      </section>

      {/* Mission Statement - Premium Banner */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-xl border-2 border-white/40 mb-8">
              <Award className="h-5 w-5 text-white" strokeWidth={2.5} />
              <span className="text-sm font-bold text-white uppercase tracking-[0.3em]">Our Commitment</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-headline leading-tight">
              <Balancer>
                Ensuring Accountability and Value in Every Naira Spent on Public Projects
              </Balancer>
            </h2>

            <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto">
              <Balancer>
                Through transparent procurement, rigorous monitoring, and comprehensive evaluation processes, we build a better Kano State
              </Balancer>
            </p>

            <div className="flex flex-wrap justify-center gap-12 pt-12">
              {[
                { icon: Shield, label: 'Transparent Processes' },
                { icon: CheckCircle2, label: 'Rigorous Monitoring' },
                { icon: Award, label: 'Quality Assurance' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4 group">
                  <div className="p-6 bg-white/20 backdrop-blur-xl border-2 border-white/40 group-hover:border-white/60 transition-all duration-500 group-hover:scale-110">
                    <item.icon className="h-10 w-10 text-white group-hover:rotate-6 transition-transform duration-500" strokeWidth={2} />
                  </div>
                  <p className="text-base font-bold text-white uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact By Numbers - Clean Minimalist Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Clean Header */}
            <div className="mb-24 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-16 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Our Impact</span>
                <div className="h-px w-16 bg-primary"></div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
                Impact By Numbers
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Measurable results across procurement and project delivery
              </p>
            </div>

            {/* Clean Stats Display - No Cards */}
            <div className="space-y-16">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group"
                  style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both` }}
                >
                  <div className="flex items-center gap-12">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-6 bg-primary/5 border-2 border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500">
                        {statIcons[stat.label as keyof typeof statIcons]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-baseline gap-6">
                        <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary tabular-nums group-hover:scale-105 transition-transform duration-500 origin-left">
                          {stat.value}
                        </p>
                        <div className="flex-grow">
                          <p className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                            {stat.label}
                          </p>
                          <div className="h-1 w-full max-w-md bg-primary/10 group-hover:bg-primary/30 transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Ultra Premium Design */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Premium Header */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 mb-10">
              <Sparkles className="h-5 w-5 text-primary" strokeWidth={2.5} />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Latest Updates</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
              News & Announcements
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Stay informed about the latest developments and initiatives
            </p>
          </div>

          {/* Premium Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Large Featured Story - Takes 8 columns */}
            {news.slice(0, 1).map((item, idx) => {
              const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[0];
              return (
                <Link
                  key={item.id}
                  href={`/news#news-${item.id}`}
                  className="lg:col-span-8 group"
                  style={{ animation: 'fadeInUp 0.8s ease-out' }}
                >
                  <article className="relative h-full min-h-[650px] overflow-hidden bg-white border-2 border-border hover:border-primary transition-all duration-700 hover:shadow-2xl">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none z-10"></div>

                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-border overflow-hidden z-10">
                      <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    </div>

                    {/* Full height image */}
                    <div className="relative h-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                      {/* Content overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-12">
                        <div className="mb-6">
                          <span className="inline-block px-6 py-2.5 bg-primary text-white text-sm font-bold uppercase tracking-[0.2em] border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-500">
                            Featured Story
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-headline mb-6 leading-tight">
                          <Balancer>{item.title}</Balancer>
                        </h3>
                        <p className="text-xl text-white/95 mb-8 line-clamp-2 leading-relaxed max-w-3xl">
                          {item.snippet}
                        </p>
                        <div className="flex items-center gap-6 text-white/90 text-base">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            <span>{item.date}</span>
                          </div>
                          <span className="flex items-center gap-3 font-bold group-hover:gap-4 transition-all">
                            Read Full Article <ArrowRight className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}

            {/* Side Column - 2 Stories stacked */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {news.slice(1, 3).map((item, idx) => {
                const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[0];
                return (
                  <Link
                    key={item.id}
                    href={`/news#news-${item.id}`}
                    className="group flex-1"
                    style={{ animation: `fadeInUp 0.8s ease-out ${(idx + 1) * 0.1}s both` }}
                  >
                    <article className="relative h-full min-h-[310px] overflow-hidden bg-white border-2 border-border hover:border-primary transition-all duration-700 hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary/3 transition-all duration-700 pointer-events-none z-10"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden z-10">
                        <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      </div>

                      <div className="relative h-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-2xl font-bold text-white font-headline mb-3 leading-tight line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-4 text-white/80 text-sm">
                            <span>{item.date}</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Row - 3 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(3, 6).map((item, idx) => {
              const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[0];
              return (
                <Link
                  key={item.id}
                  href={`/news#news-${item.id}`}
                  className="group"
                  style={{ animation: `fadeInUp 0.8s ease-out ${(idx + 3) * 0.1}s both` }}
                >
                  <article className="h-full bg-white border-2 border-border hover:border-primary transition-all duration-700 overflow-hidden hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary/3 transition-all duration-700 pointer-events-none z-10"></div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden z-10">
                      <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    </div>

                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="relative p-8">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground font-headline mb-4 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
                        {item.snippet}
                      </p>
                      <div className="flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-wider">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center pt-16">
            <Link
              href="/news"
              className="inline-flex items-center gap-4 h-16 px-12 bg-primary text-white font-bold text-lg uppercase tracking-[0.2em] hover:bg-accent transition-all duration-500 shadow-xl hover:shadow-2xl group border-2 border-primary hover:border-accent"
            >
              <span>View All News</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tenders - Premium Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Premium Header */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 mb-10">
              <FileText className="h-5 w-5 text-primary" strokeWidth={2.5} />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Current Opportunities</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
              Open Tenders
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Explore procurement opportunities and submit your proposals
            </p>
          </div>

          {/* Premium Grid Layout - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tenders.slice(0, 3).map((tender, index) => (
              <Link
                key={tender.id}
                href="/procurement"
                className="group"
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}
              >
                <article className="h-full bg-white border-2 border-border hover:border-primary transition-all duration-700 overflow-hidden hover:shadow-2xl">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

                  {/* Top colored bar */}
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>

                  {/* Content */}
                  <div className="relative p-10">
                    {/* Category Badge */}
                    <div className="mb-8">
                      <span className="inline-block px-5 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                        {tender.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground font-headline mb-6 leading-tight line-clamp-3 group-hover:text-primary transition-colors duration-500">
                      {tender.title}
                    </h3>

                    {/* Status Badge */}
                    <div className="mb-8">
                      <span className={`inline-block px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] border-2 ${
                        tender.status === 'Open'
                          ? 'bg-green-50 text-green-700 border-green-200'
                          : 'bg-gray-50 text-gray-600 border-gray-200'
                      }`}>
                        {tender.status}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-4 mb-8 pb-8 border-b-2 border-border">
                      <div className="flex items-start gap-4">
                        <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" strokeWidth={2} />
                        <div>
                          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Tender ID</p>
                          <p className="text-base font-bold text-foreground">TENDER-{String(tender.id).padStart(4, '0')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" strokeWidth={2} />
                        <div>
                          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Closing Date</p>
                          <p className="text-base font-bold text-foreground">{tender.closingDate}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm font-bold uppercase tracking-[0.15em]">
                        View Details
                      </span>
                      <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-2 transition-transform duration-500" />
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
              className="inline-flex items-center gap-4 h-16 px-12 bg-primary text-white font-bold text-lg uppercase tracking-[0.2em] hover:bg-accent transition-all duration-500 shadow-xl hover:shadow-2xl group border-2 border-primary hover:border-accent"
            >
              <span>View All Tenders</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links / Resources - Premium Design */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Premium Header */}
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 mb-10">
              <BookOpen className="h-5 w-5 text-primary" strokeWidth={2.5} />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Resources</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
              Essential Documents
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Access templates, policies, and reports for procurement processes
            </p>
          </div>

          {/* Clean Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className="group"
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}
              >
                <article className="h-full bg-white border-2 border-border hover:border-primary transition-all duration-700 overflow-hidden p-10 hover:shadow-2xl">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden">
                    <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className="p-5 bg-primary/10 border-2 border-primary/20 w-fit group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                      {quickLinkIcons[link.title as keyof typeof quickLinkIcons]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative text-2xl font-bold text-foreground font-headline mb-6 group-hover:text-primary transition-colors duration-500">
                    {link.title}
                  </h3>

                  {/* CTA */}
                  <div className="relative flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-[0.15em]">
                    <span>Access Now</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-primary"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-primary"></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Premium Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Premium bordered container */}
            <div className="relative bg-white border-2 border-border hover:border-primary/40 transition-all duration-700 p-16 md:p-20 overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700"></div>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent"></div>

              <div className="relative text-center space-y-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 mb-8">
                  <Target className="h-5 w-5 text-primary" strokeWidth={2.5} />
                  <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Get Involved</span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline leading-tight">
                  <Balancer>
                    Ready to Participate in Our{' '}
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Procurement Process?
                    </span>
                  </Balancer>
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  <Balancer>
                    Join us in building a transparent and accountable Kano State through open and fair procurement
                  </Balancer>
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <Button asChild className="h-16 px-12 text-lg font-bold uppercase tracking-[0.2em] relative overflow-hidden group border-0">
                    <Link href="/procurement" className="flex items-center gap-3">
                      <FileText className="h-6 w-6 relative z-10 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10">Browse Tenders</span>
                      <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-16 px-12 text-lg font-bold uppercase tracking-[0.2em] border-2 border-border hover:border-primary bg-white hover:bg-primary hover:text-white transition-all duration-500">
                    <Link href="/contact" className="flex items-center gap-3">
                      <span>Contact Us</span>
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="grid grid-cols-3 gap-8 pt-16 border-t-2 border-border mt-16">
                  {[
                    { icon: Shield, label: 'Transparent', value: '100%' },
                    { icon: CheckCircle2, label: 'Verified', value: 'Secure' },
                    { icon: Award, label: 'Certified', value: 'ISO' }
                  ].map((item, index) => (
                    <div key={index} className="text-center space-y-3">
                      <div className="inline-flex p-4 bg-primary/10 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
                        <item.icon className="h-8 w-8 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{item.value}</p>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20 -ml-px -mt-px"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20 -mr-px -mb-px"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
