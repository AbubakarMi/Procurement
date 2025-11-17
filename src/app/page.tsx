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
      {/* Hero Section - Ultra Premium World Class Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Background Images with Smooth Crossfade */}
        {heroImages.map((imageSrc, index) => (
          <div
            key={imageSrc}
            className={`absolute inset-0 z-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={imageSrc}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Simple Dark Overlay for Text Readability Only */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-7xl mx-auto">

            {/* Main Heading - Ultra Premium Typography */}
            <div className="space-y-8 md:space-y-12 mb-12 md:mb-16" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
              {/* Commissioner Badge - Clean and Prominent */}
              <div className="inline-flex items-center gap-3 md:gap-4 px-5 md:px-6 py-3 md:py-3.5 bg-white/20 backdrop-blur-md border-2 border-white/30 mb-6 md:mb-8">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-white" strokeWidth={2.5} />
                <span className="text-sm md:text-base font-bold text-white tracking-wide">Hon Nura Iro Ma'aji PhD</span>
                <div className="h-5 md:h-6 w-px bg-white/40"></div>
                <span className="text-xs md:text-sm font-semibold text-white/90">Commissioner</span>
              </div>

              <div className="space-y-6 md:space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white font-headline leading-[0.85] tracking-tighter drop-shadow-2xl">
                  <span className="block mb-2 md:mb-3">
                    <span className="inline-block animate-[slideInLeft_0.8s_ease-out_0.2s_both]">Transparent</span>
                  </span>
                  <span className="block mb-2 md:mb-3 relative">
                    <span className="inline-block text-primary animate-[slideInRight_0.8s_ease-out_0.3s_both] drop-shadow-[0_0_30px_rgba(227,66,52,0.8)]">
                      Procurement
                    </span>
                  </span>
                  <span className="block">
                    <span className="inline-block text-white animate-[slideInLeft_0.8s_ease-out_0.4s_both]">for Kano's Future</span>
                  </span>
                </h1>

                {/* Premium Accent Lines */}
                <div className="flex items-center gap-3 md:gap-4" style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}>
                  <div className="h-1 md:h-1.5 w-20 md:w-32 bg-primary shadow-2xl shadow-primary/60"></div>
                  <div className="h-1 w-16 md:w-24 bg-white/80"></div>
                  <div className="h-0.5 w-12 md:w-16 bg-white/50"></div>
                </div>
              </div>

              {/* Premium Description with Enhanced Typography */}
              <div className="relative pl-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed max-w-4xl font-light drop-shadow-xl">
                  <Balancer>
                    Building trust through accountability and transparent governance across all public works
                  </Balancer>
                </p>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
              </div>
            </div>

            {/* Premium CTA Buttons with Enhanced Design */}
            <div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-16 md:mb-20 lg:mb-24"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
            >
              <Button asChild className="h-14 md:h-16 lg:h-18 px-8 md:px-12 text-base md:text-lg font-bold uppercase tracking-[0.2em] relative overflow-hidden group border-0 shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-shadow duration-500">
                <Link href="/procurement" className="flex items-center gap-3">
                  <Target className="h-5 w-5 md:h-6 md:w-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  <span className="relative z-10">Browse Tenders</span>
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-14 md:h-16 lg:h-18 px-8 md:px-12 text-base md:text-lg font-bold uppercase tracking-[0.2em] border-2 border-white/40 text-white bg-white/10 backdrop-blur-2xl hover:bg-white hover:text-primary hover:border-white transition-all duration-700 relative overflow-hidden group shadow-xl shadow-black/20">
                <Link href="/projects" className="flex items-center gap-3">
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
                </Link>
              </Button>
            </div>

            {/* World-Class Stats Grid - Ultra Premium */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
            >
              {[
                { value: '150+', label: 'Active Projects', icon: TrendingUp },
                { value: '320+', label: 'Open Tenders', icon: FileText },
                { value: '98%', label: 'Transparency Rate', icon: Shield },
                { value: '24/7', label: 'Monitoring', icon: Eye }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group text-center relative"
                  style={{ animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s both` }}
                >
                  {/* Icon with animated background */}
                  <div className="relative inline-flex mb-4 md:mb-6">
                    <div className="relative p-3 md:p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110">
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Number - Large and Bold */}
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tabular-nums mb-3 md:mb-4 drop-shadow-2xl group-hover:scale-105 inline-block transition-transform duration-500">
                    {stat.value}
                  </p>

                  {/* Animated Divider */}
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div className="relative w-12 h-px bg-white/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-[0.15em] group-hover:text-white transition-colors duration-500 leading-tight px-2">
                    {stat.label}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Progress Indicators */}
        <div className="absolute bottom-8 right-8 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImageIndex
                  ? 'w-12 bg-white'
                  : 'w-6 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mission Statement - Premium Banner */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
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

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-headline leading-tight">
              <Balancer>
                Ensuring Accountability and Value in Every Naira Spent on Public Projects
              </Balancer>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto">
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

      {/* Impact By Numbers - Clean Minimal Design */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 md:mb-24 lg:mb-32" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Impact</span>
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-headline mb-4 md:mb-6 tracking-tight">
                <Balancer>
                  Impact By{' '}
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Numbers
                  </span>
                </Balancer>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Measurable results driving transparency and accountability
              </p>
            </div>

            {/* Stats Grid - Clean Minimal Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group text-center"
                  style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both` }}
                >
                  {/* Icon with animated background */}
                  <div className="relative inline-flex mb-6 md:mb-8">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative p-4 md:p-5 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-all duration-500">
                      <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {statIcons[stat.label as keyof typeof statIcons]}
                      </div>
                    </div>
                  </div>

                  {/* Number - Large and Bold */}
                  <div className="mb-4 md:mb-6">
                    <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary tabular-nums leading-none transform group-hover:scale-105 transition-transform duration-500">
                      {stat.value}
                    </p>
                  </div>

                  {/* Animated Divider */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-base sm:text-lg md:text-xl font-bold text-foreground uppercase tracking-[0.15em] group-hover:text-primary transition-colors duration-500">
                    {stat.label}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 md:mt-8">
                    <div className="h-px w-12 bg-primary/20 mx-auto group-hover:w-20 group-hover:bg-primary/50 transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Tagline */}
            <div
              className="text-center mt-16 md:mt-24 lg:mt-32"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8 md:mb-12"></div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  <Balancer>
                    Every number represents our commitment to building a transparent and accountable procurement system for Kano State
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Ultra Premium Design */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
              News & Announcements
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl">
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
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
                        <div className="mb-6">
                          <span className="inline-block px-6 py-2.5 bg-primary text-white text-sm font-bold uppercase tracking-[0.2em] border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-500">
                            Featured Story
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-6 leading-tight">
                          <Balancer>{item.title}</Balancer>
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 md:mb-8 line-clamp-2 leading-relaxed max-w-3xl">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
              Open Tenders
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Explore procurement opportunities and submit your proposals
            </p>
          </div>

          {/* Premium Grid Layout - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
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
                  <div className="relative p-6 md:p-8 lg:p-10">
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
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
              Essential Documents
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Access templates, policies, and reports for procurement processes
            </p>
          </div>

          {/* Clean Resource Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className="group"
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}
              >
                <article className="h-full bg-white border-2 border-border hover:border-primary transition-all duration-700 overflow-hidden p-6 md:p-8 lg:p-10 hover:shadow-2xl">
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
      <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
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
            <div className="relative bg-white border-2 border-border hover:border-primary/40 transition-all duration-700 p-8 md:p-16 lg:p-20 overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700"></div>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent"></div>

              <div className="relative text-center space-y-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 mb-8">
                  <Target className="h-5 w-5 text-primary" strokeWidth={2.5} />
                  <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Get Involved</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline leading-tight">
                  <Balancer>
                    Ready to Participate in Our{' '}
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Procurement Process?
                    </span>
                  </Balancer>
                </h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-16 border-t-2 border-border mt-12 md:mt-16">
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
