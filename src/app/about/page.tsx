import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Mail } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { staff } from '@/lib/data';

export default function AboutPage() {
  // Use commisioner8.jpeg for commissioner
  const commissionerImageSrc = '/commisioner8.jpeg';
  const staffImages = PlaceHolderImages.filter(img => img.id.startsWith('staff-'));

  const commissioner = staff.find(s => s.role === 'Commissioner');
  const otherStaff = staff.filter(s => s.role !== 'Commissioner');

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Hero / Breadcrumb */}
      <div className="text-center mb-12">
        <p className="text-sm text-primary mb-2">Home &gt; About Ministry</p>
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl font-headline">
          <Balancer>Our Mission and Our People</Balancer>
        </h1>
      </div>

      {/* Ministry Overview - World Class Design */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-semibold text-primary">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-headline leading-tight">
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

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t-2 border-primary/20">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Transparency Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Monitoring</p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Cards */}
          <div className="relative h-full min-h-[500px]">
            {/* Main Card - Vision */}
            <Card className="absolute top-0 right-0 w-4/5 shadow-2xl border-0 overflow-hidden">
              <div className="h-64 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
                  <div>
                    <div className="h-1 w-16 bg-white/80 mb-4"></div>
                    <h3 className="text-3xl font-bold mb-3 font-headline">Vision</h3>
                    <p className="text-white/95 text-base leading-relaxed">
                      To be the leading example of transparent and efficient public procurement in Kano State and Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Secondary Card - Mission */}
            <Card className="absolute bottom-0 left-0 w-4/5 shadow-xl border-0 bg-white z-10">
              <CardContent className="p-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-foreground font-headline">Mission</h4>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed pl-14">
                    Ensuring accountability and value in every Naira spent on public projects across Kano State
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Governor - State Leadership */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-semibold text-primary">State Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-headline">
            His Excellency Alh. Abba Kabir Yusuf
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            The visionary leader steering Kano State towards unprecedented development and prosperity
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Side - Content First (Governor is more prominent) */}
            <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
              {/* Title & Role */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary"></div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Executive Governor of Kano State
                  </p>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                  Championing Progress Across Kano State
                </h3>
              </div>

              {/* Quote */}
              <Card className="border-l-4 border-l-primary shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <svg className="w-8 h-8 text-primary/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                      Our administration is committed to transforming Kano State into a beacon of development, transparency, and good governance. Through strategic investments in infrastructure, education, and healthcare, we are building a future that every citizen of Kano can be proud of.
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
                      <div className="h-1 w-8 bg-primary"></div>
                      <p className="text-sm font-semibold text-primary">His Excellency Alh. Abba Kabir Yusuf</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Initiatives */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-3">
                      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-foreground">Infrastructure</p>
                    <p className="text-xs text-muted-foreground mt-1">Development</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-3">
                      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-foreground">Education</p>
                    <p className="text-xs text-muted-foreground mt-1">Advancement</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-3">
                      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-foreground">Healthcare</p>
                    <p className="text-xs text-muted-foreground mt-1">Improvement</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Side - Governor Image */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                {/* Main Image - Using a placeholder for now */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/governor.jpg"
                    alt="Executive Governor of Kano State"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Name Badge on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="backdrop-blur-md bg-white/10 rounded-xl p-5 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-1 bg-white"></div>
                        <p className="text-xs text-white/90 font-semibold uppercase tracking-wider">His Excellency</p>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-headline">Alh. Abba Kabir Yusuf</h3>
                      <p className="text-sm text-white/80 mt-1">Executive Governor, Kano State</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Border Elements */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary/30 rounded-2xl -z-10"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary/20 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Commissioner Spotlight - Ministry Leadership */}
      {commissioner && (
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span className="text-sm font-semibold text-primary">Ministry Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-headline">
              Meet Our Commissioner
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Leading the Ministry for Public Procurement, Project Monitoring and Evaluation
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Left Side - Image */}
              <div className="lg:col-span-2">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={commissionerImageSrc}
                      alt="Commissioner"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Name Badge on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20">
                        <p className="text-xs text-white/80 mb-1">Honourable Commissioner</p>
                        <h3 className="text-2xl font-bold font-headline">{commissioner.name}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Border Element */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary/30 rounded-2xl -z-10"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/20 rounded-2xl -z-10"></div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Title & Role */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-12 bg-primary"></div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {commissioner.role}
                    </p>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                    Leading Kano's Procurement Revolution
                  </h3>
                </div>

                {/* Quote */}
                <Card className="border-l-4 border-l-primary shadow-lg bg-white">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <svg className="w-8 h-8 text-primary/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                        Our commitment is to the people. Every project we undertake is a promise to enhance quality of life, foster economic growth, and build a legacy of trust and transparency. We are not just building infrastructure; we are building the future.
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
                        <div className="h-1 w-8 bg-primary"></div>
                        <p className="text-sm font-semibold text-primary">{commissioner.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact & Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email Card */}
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                          <a
                            href={`mailto:${commissioner.email}`}
                            className="text-base font-medium text-primary hover:underline break-all"
                          >
                            {commissioner.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Office Card */}
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Office</p>
                          <p className="text-base font-medium text-foreground">
                            Ministry for Public Procurement
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Separator className="my-16" />

      {/* Staff Grid - World Class Design */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <span className="text-sm font-semibold text-primary">Our Leadership Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering excellence in public procurement and project monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherStaff.map((person, index) => {
            const image = staffImages.find(img => img.id === `staff-${person.id}`) || staffImages[index % staffImages.length];

            return (
              <Card
                key={person.id}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                {image && (
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      data-ai-hint={image.imageHint}
                    />
                    {/* Gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                )}

                {/* Content Section */}
                <CardContent className="p-6 space-y-4">
                  {/* Name & Role */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-8 bg-primary"></div>
                      <div className="h-1 w-4 bg-primary/50"></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-headline">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {person.role}
                    </p>
                  </div>
                </CardContent>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
