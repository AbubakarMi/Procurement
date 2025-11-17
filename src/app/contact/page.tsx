import { Mail, Phone, MapPin, Clock, Sparkles, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapComponent } from '@/components/map';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Premium Design */}
      <section className="relative bg-background py-32 overflow-hidden">
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
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Contact Portal</span>
              <div className="h-4 w-px bg-primary/20"></div>
              <span className="text-xs font-bold text-foreground">24/7 Support</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
              Get In Touch
            </h1>

            {/* Animated Divider */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-[fadeIn_0.8s_ease-out_0.3s_both]">
              <div className="h-1 w-24 bg-primary animate-[slideInLeft_1s_ease-out_0.4s_both]"></div>
              <MessageSquare className="h-6 w-6 text-primary animate-[fadeIn_0.8s_ease-out_0.6s_both]" strokeWidth={2.5} />
              <div className="h-1 w-24 bg-primary animate-[slideInRight_1s_ease-out_0.4s_both]"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Connect with the Ministry for Public Procurement, Project Monitoring and Evaluation. We're here to help with your inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto border border-border">
            <div className="group relative bg-white p-8 text-center hover:bg-primary/5 transition-all duration-500 md:border-r border-b md:border-b-0 border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="relative">
                <Phone className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                <p className="text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">24/7</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Available</p>
              </div>
            </div>

            <div className="group relative bg-white p-8 text-center hover:bg-primary/5 transition-all duration-500 md:border-r border-b md:border-b-0 border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-75"></div>
              </div>
              <div className="relative">
                <Mail className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                <p className="text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">&lt;24h</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Response Time</p>
              </div>
            </div>

            <div className="group relative bg-white p-8 text-center hover:bg-primary/5 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-150"></div>
              </div>
              <div className="relative">
                <MapPin className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={2} />
                <p className="text-5xl font-bold text-foreground mb-2 tabular-nums group-hover:text-primary transition-colors duration-500">Kano</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div
              className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-700 hover:shadow-2xl"
              style={{ animation: 'fadeInUp 0.8s ease-out 1.8s both' }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden">
                <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>

              <div className="relative p-8 md:p-10">
                {/* Section Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-8 bg-primary"></div>
                    <div className="h-1 w-4 bg-primary/50"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-3 tracking-tight">
                    Send a Message
                  </h2>
                  <p className="text-base text-muted-foreground">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>

                {/* Premium Form */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-bold text-foreground uppercase tracking-wider">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="h-12 border-2 border-border focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-bold text-foreground uppercase tracking-wider">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="h-12 border-2 border-border focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-bold text-foreground uppercase tracking-wider">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief subject of your message"
                      className="h-12 border-2 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-bold text-foreground uppercase tracking-wider">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      rows={6}
                      className="border-2 border-border focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-14 text-base font-bold uppercase tracking-[0.2em] relative overflow-hidden group/btn"
                  >
                    <Send className="h-5 w-5 mr-2 relative z-10 group-hover/btn:scale-110 group-hover/btn:-rotate-12 transition-all duration-300" strokeWidth={2.5} />
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-accent transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-700 hover:shadow-2xl"
              style={{ animation: 'fadeInUp 0.8s ease-out 1.88s both' }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden">
                <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>

              <div className="relative p-8 md:p-10">
                {/* Section Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-8 bg-primary"></div>
                    <div className="h-1 w-4 bg-primary/50"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-3 tracking-tight">
                    Contact Details
                  </h2>
                  <p className="text-base text-muted-foreground">
                    Multiple ways to reach our team
                  </p>
                </div>

                {/* Contact Info Items */}
                <div className="space-y-8">
                  <div className="flex gap-5 group/item">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/5 border-2 border-primary/10 group-hover/item:bg-primary group-hover/item:border-primary transition-all duration-500">
                        <MapPin className="h-6 w-6 text-primary group-hover/item:text-white transition-colors duration-500" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Address</p>
                      <p className="text-base font-semibold text-foreground leading-relaxed">
                        21 Magaji Rumfa Road<br />
                        Nassarawa, Kano, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 group/item">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/5 border-2 border-primary/10 group-hover/item:bg-primary group-hover/item:border-primary transition-all duration-500">
                        <Phone className="h-6 w-6 text-primary group-hover/item:text-white transition-colors duration-500" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Phone</p>
                      <a
                        href="tel:08065455715"
                        className="text-base font-semibold text-primary hover:underline tabular-nums"
                      >
                        08065455715
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 group/item">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/5 border-2 border-primary/10 group-hover/item:bg-primary group-hover/item:border-primary transition-all duration-500">
                        <Mail className="h-6 w-6 text-primary group-hover/item:text-white transition-colors duration-500" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Email</p>
                      <a
                        href="mailto:info@procurement.kn.gov.ng"
                        className="text-base font-semibold text-primary hover:underline break-all"
                      >
                        info@procurement.kn.gov.ng
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 group/item">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/5 border-2 border-primary/10 group-hover/item:bg-primary group-hover/item:border-primary transition-all duration-500">
                        <Clock className="h-6 w-6 text-primary group-hover/item:text-white transition-colors duration-500" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Working Hours</p>
                      <p className="text-base font-semibold text-foreground leading-relaxed">
                        Monday - Friday<br />
                        8:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div
            className="group relative bg-white border-2 border-border hover:border-primary overflow-hidden transition-all duration-700 hover:shadow-2xl"
            style={{ animation: 'fadeInUp 0.8s ease-out 1.96s both' }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden z-10">
              <div className="h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>

            <div className="relative p-8 md:p-10">
              {/* Section Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-8 bg-primary"></div>
                  <div className="h-1 w-4 bg-primary/50"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-3 tracking-tight">
                  Find Us On The Map
                </h2>
                <p className="text-base text-muted-foreground">
                  Located in the heart of Kano, Nigeria
                </p>
              </div>

              {/* Map Container */}
              <div className="relative border-2 border-border group-hover:border-primary transition-colors duration-500 overflow-hidden">
                <MapComponent height="450px" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
