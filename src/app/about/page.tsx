import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Mail, Target, Eye, Award, Users, TrendingUp, Shield, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { staff } from '@/lib/data';

export default function AboutPage() {
  const commissionerImageSrc = '/commisioner8.jpeg';
  const staffImages = PlaceHolderImages.filter(img => img.id.startsWith('staff-'));

  const commissioner = staff.find(s => s.role === 'Commissioner');
  const otherStaff = staff.filter(s => s.role !== 'Commissioner');

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - World Class Design */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-[fadeIn_2s_ease-out]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-[fadeIn_2s_ease-out_0.5s_both]"></div>

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Breadcrumb Badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 group"
              style={{ animation: 'fadeInUp 0.8s ease-out' }}
            >
              <Sparkles className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">About Us</span>
              <div className="h-4 w-px bg-primary/20"></div>
              <span className="text-xs font-bold text-foreground">Ministry for Public Procurement</span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline tracking-tight"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
            >
              <Balancer>
                Building Kano's Future Through{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Transparent Excellence
                </span>
              </Balancer>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
            >
              <Balancer>
                Delivering sustainable infrastructure and fostering economic growth through transparent procurement, rigorous monitoring, and comprehensive evaluation
              </Balancer>
            </p>

            {/* Stats Row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
            >
              {[
                { value: '98%', label: 'Transparency Rate', icon: Shield },
                { value: '150+', label: 'Active Projects', icon: TrendingUp },
                { value: '24/7', label: 'Monitoring', icon: Target },
                { value: '100%', label: 'Accountability', icon: CheckCircle2 }
              ].map((stat, index) => (
                <div key={index} className="group relative bg-white border-2 border-border hover:border-primary p-6 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <div className="relative">
                    <stat.icon className="h-6 w-6 text-primary mb-3 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2.5} />
                    <p className="text-4xl font-bold text-foreground mb-1 tabular-nums group-hover:text-primary transition-colors duration-500">{stat.value}</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Overview - Premium Design */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-10" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="h-px w-12 bg-primary"></div>
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline leading-tight">
                  Transforming Kano Through Transparent Governance
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  The Ministry for Public Procurement, Project Monitoring and Evaluation is dedicated to building and maintaining the foundational structures that support our state's growth and prosperity. Our mission is to deliver high-quality, sustainable, and resilient infrastructure projects through transparent and efficient processes.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We believe in accountability, innovation, and public service. From the highways you travel on to the public buildings that serve our communities, our work touches the lives of every citizen. We are committed to ensuring that every project is a step towards a better, more connected future for all.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="h-14 px-10 text-base font-bold uppercase tracking-[0.2em] relative overflow-hidden group">
                  <Target className="h-5 w-5 mr-2 relative z-10 group-hover:scale-110 transition-all duration-300" />
                  <span className="relative z-10">Our Projects</span>
                  <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Button>
                <Button variant="outline" className="h-14 px-10 border-2 border-border hover:border-primary bg-white font-bold uppercase tracking-[0.2em] relative overflow-hidden group">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Contact Us</span>
                  <ArrowUpRight className="h-5 w-5 ml-2 relative z-10 group-hover:rotate-45 transition-all duration-500" />
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </Button>
              </div>
            </div>

            {/* Right Side - Vision & Mission Cards */}
            <div className="relative h-full min-h-[600px]" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
              {/* Vision Card - Top Right */}
              <article className="absolute top-0 right-0 w-5/6 group">
                <div className="relative overflow-hidden border-2 border-border bg-white hover:border-primary transition-all duration-700 hover:shadow-2xl">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden">
                    <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>

                  <div className="relative p-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                        <Eye className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="h-1 w-16 bg-primary mb-3"></div>
                        <h3 className="text-3xl font-bold text-foreground font-headline mb-3">Vision</h3>
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      To be the leading example of transparent and efficient public procurement in Kano State and Nigeria, setting the standard for accountability and value delivery in every project we undertake.
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-primary"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-primary"></div>
                  </div>
                </div>
              </article>

              {/* Mission Card - Bottom Left */}
              <article className="absolute bottom-0 left-0 w-5/6 group">
                <div className="relative overflow-hidden border-2 border-border bg-white hover:border-primary transition-all duration-700 hover:shadow-2xl">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden">
                    <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>

                  <div className="relative p-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                        <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="h-1 w-16 bg-primary mb-3"></div>
                        <h3 className="text-3xl font-bold text-foreground font-headline mb-3">Mission</h3>
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Ensuring accountability and value in every Naira spent on public projects across Kano State through transparent procurement, rigorous monitoring, and comprehensive evaluation processes.
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-primary"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-primary"></div>
                  </div>
                </div>
              </article>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/20 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-accent/20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Premium Grid */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary/20 mb-8">
              <Award className="h-4 w-4 text-primary" strokeWidth={2.5} />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Core Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-6 tracking-tight">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The foundation of everything we do, ensuring excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-border">
            {[
              {
                icon: Shield,
                title: 'Transparency',
                description: 'Open processes and clear communication in every procurement decision'
              },
              {
                icon: CheckCircle2,
                title: 'Accountability',
                description: 'Taking responsibility for outcomes and delivering measurable results'
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'Pursuing the highest standards in project delivery and monitoring'
              },
              {
                icon: Users,
                title: 'Public Service',
                description: 'Putting the needs of Kano citizens at the heart of everything we do'
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Embracing modern solutions and continuous improvement'
              },
              {
                icon: Award,
                title: 'Integrity',
                description: 'Upholding ethical standards and honest practices in all operations'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 text-center hover:bg-primary/5 transition-all duration-500 border-r-2 border-b-2 border-border last:border-r-0 md:[&:nth-child(3n)]:border-r-0"
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>

                {/* Top line animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <value.icon className="h-12 w-12 text-primary mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                  <h3 className="text-2xl font-bold text-foreground font-headline mb-3">{value.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Governor - Premium Leadership */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary/20 mb-8">
              <Sparkles className="h-4 w-4 text-primary" strokeWidth={2.5} />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">State Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-4">
              His Excellency Alh. Abba Kabir Yusuf
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The visionary leader steering Kano State towards unprecedented development and prosperity
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Content - 3 columns */}
              <div className="lg:col-span-3 space-y-10 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-16 bg-primary"></div>
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
                      Executive Governor of Kano State
                    </p>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                    Championing Progress Across Kano State
                  </h3>
                </div>

                {/* Quote Card */}
                <article className="group relative overflow-hidden bg-white border-l-4 border-l-primary border-2 border-border hover:border-primary/40 transition-all duration-700 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary/3 transition-all duration-700"></div>
                  <div className="relative p-8 md:p-10">
                    <svg className="w-10 h-10 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
                      Our administration is committed to transforming Kano State into a beacon of development, transparency, and good governance. Through strategic investments in infrastructure, education, and healthcare, we are building a future that every citizen of Kano can be proud of.
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t-2 border-primary/20">
                      <div className="h-1 w-12 bg-primary"></div>
                      <p className="text-sm font-bold text-primary">His Excellency Alh. Abba Kabir Yusuf</p>
                    </div>
                  </div>
                </article>

                {/* Key Initiatives */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: TrendingUp, title: 'Infrastructure', subtitle: 'Development' },
                    { icon: Users, title: 'Education', subtitle: 'Advancement' },
                    { icon: Shield, title: 'Healthcare', subtitle: 'Improvement' }
                  ].map((initiative, index) => (
                    <article
                      key={index}
                      className="group relative bg-white border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-xl overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                      <div className="relative p-8 text-center">
                        <div className="inline-flex p-4 bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 mb-4 transition-all duration-500">
                          <initiative.icon className="h-8 w-8 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                        </div>
                        <h4 className="text-lg font-bold text-foreground font-headline mb-1">{initiative.title}</h4>
                        <p className="text-sm text-muted-foreground">{initiative.subtitle}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Image - 2 columns */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative">
                  <div className="relative overflow-hidden border-2 border-border shadow-2xl hover:border-primary transition-all duration-700 group">
                    <Image
                      src="/governor.jpg"
                      alt="Executive Governor of Kano State"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* Name Badge */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="backdrop-blur-md bg-white/10 border-2 border-white/30 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-8 w-1 bg-white"></div>
                          <p className="text-xs text-white/90 font-bold uppercase tracking-[0.2em]">His Excellency</p>
                        </div>
                        <h3 className="text-3xl font-bold font-headline text-white mb-2">Alh. Abba Kabir Yusuf</h3>
                        <p className="text-base text-white/90">Executive Governor, Kano State</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative borders */}
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 border-4 border-primary/30 -z-10"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-accent/20 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <Separator className="my-8" />
      </div>

      {/* Commissioner Spotlight - Premium Design */}
      {commissioner && (
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary/20 mb-8">
                <Award className="h-4 w-4 text-primary" strokeWidth={2.5} />
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Ministry Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-4">
                Meet Our Commissioner
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Leading the Ministry for Public Procurement, Project Monitoring and Evaluation
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                {/* Image - 2 columns */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <div className="relative overflow-hidden border-2 border-border shadow-2xl hover:border-primary transition-all duration-700 group">
                      <Image
                        src={commissionerImageSrc}
                        alt="Commissioner"
                        width={600}
                        height={700}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                      {/* Name Badge */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="backdrop-blur-md bg-white/10 border-2 border-white/30 p-6">
                          <p className="text-xs text-white/80 mb-2 uppercase tracking-wider">Honourable Commissioner</p>
                          <h3 className="text-2xl md:text-3xl font-bold font-headline text-white">{commissioner.name}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Decorative borders */}
                    <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-primary/30 -z-10"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-accent/20 -z-10"></div>
                  </div>
                </div>

                {/* Content - 3 columns */}
                <div className="lg:col-span-3 space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-1 w-16 bg-primary"></div>
                      <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
                        {commissioner.role}
                      </p>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                      Leading Kano's Procurement Revolution
                    </h3>
                  </div>

                  {/* Quote Card */}
                  <article className="group relative overflow-hidden bg-white border-l-4 border-l-primary border-2 border-border hover:border-primary/40 transition-all duration-700 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary/3 transition-all duration-700"></div>
                    <div className="relative p-8 md:p-10">
                      <svg className="w-10 h-10 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
                        Our commitment is to the people. Every project we undertake is a promise to enhance quality of life, foster economic growth, and build a legacy of trust and transparency. We are not just building infrastructure; we are building the future.
                      </p>
                      <div className="flex items-center gap-4 pt-6 border-t-2 border-primary/20">
                        <div className="h-1 w-12 bg-primary"></div>
                        <p className="text-sm font-bold text-primary">{commissioner.name}</p>
                      </div>
                    </div>
                  </article>

                  {/* Contact Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="group relative bg-white border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-xl overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                      <div className="relative p-8">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                            <Mail className="h-6 w-6 text-primary" strokeWidth={2} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Email Address</p>
                            <a
                              href={`mailto:${commissioner.email}`}
                              className="text-base font-medium text-primary hover:underline break-all"
                            >
                              {commissioner.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="group relative bg-white border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-xl overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                      <div className="relative p-8">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                            <TrendingUp className="h-6 w-6 text-primary" strokeWidth={2} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Office</p>
                            <p className="text-base font-medium text-foreground">
                              Ministry for Public Procurement
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4">
        <Separator className="my-8" />
      </div>

      {/* Leadership Team - Premium Grid */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary/20 mb-8">
              <Users className="h-4 w-4 text-primary" strokeWidth={2.5} />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Our Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering excellence in public procurement and project monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherStaff.map((person, index) => {
              const image = staffImages.find(img => img.id === `staff-${person.id}`) || staffImages[index % staffImages.length];

              return (
                <article
                  key={person.id}
                  className="group relative overflow-hidden bg-white border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-700"
                  style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none z-10"></div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden z-10">
                    <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>

                  {/* Image Section */}
                  {image && (
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="relative p-8 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-12 bg-primary"></div>
                        <div className="h-1 w-6 bg-primary/50"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground font-headline group-hover:text-primary transition-colors duration-500">
                        {person.name}
                      </h3>
                      <p className="text-sm font-bold text-primary uppercase tracking-[0.15em]">
                        {person.role}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-700"></div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-primary"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-primary"></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
