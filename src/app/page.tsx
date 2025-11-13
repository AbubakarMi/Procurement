import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
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
  Staff: <Users className="h-8 w-8 text-primary" />,
};

const quickLinkIcons = {
  'Tender Templates': <FileBadge className="h-8 w-8 text-primary" />,
  'Procurement Policies': <BookOpen className="h-8 w-8 text-primary" />,
  'Annual Reports': <ScrollText className="h-8 w-8 text-primary" />,
};

export default function Home() {
  const newsImages = PlaceHolderImages.filter((img) => img.id.startsWith('news'));
  const tenderImages = PlaceHolderImages.filter((img) => img.id.startsWith('tender'));
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-home');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-card h-[70vh] md:h-[85vh] flex items-center justify-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(227,66,52,0.15),transparent_50%)]" />

        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-sm font-medium text-white">Ministry for Public Procurement, Project Monitoring and Evaluation</p>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl font-headline leading-tight">
              <Balancer>
                <span className="block">Transparent</span>
                <span className="block text-gradient bg-gradient-to-r from-white via-red-100 to-white bg-clip-text">Procurement</span>
                <span className="block">& Project Monitoring</span>
              </Balancer>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-xl text-white/95 md:text-2xl leading-relaxed font-light">
              Building a brighter future for our state through accountability, transparency, and measurable progress in public works.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="text-lg h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all duration-300">
                <Link href="/complaints">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Submit Complaint
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 shadow-xl">
                <Link href="/projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quick Stats */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable results and transparent governance across our operations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="relative overflow-hidden text-center border-2 border-border shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                <CardHeader className="relative z-10">
                  <div className="mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-3">
                    {statIcons[stat.label as keyof typeof statIcons]}
                  </div>
                  <CardTitle className="text-primary text-lg font-semibold">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pb-8">
                  <p className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>
                </CardContent>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-headline">
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
                    <Card className="flex flex-col h-full group overflow-hidden border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-card">
                      <CardHeader className="p-0 relative overflow-hidden">
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            data-ai-hint={image.imageHint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-white shadow-lg">News</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow p-6">
                        <CardTitle className="text-primary text-xl mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-base line-clamp-3">{item.snippet}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button variant="link" asChild className="p-0 text-primary group-hover:text-accent transition-colors h-auto font-semibold">
                          <Link href={`/news#news-${item.id}`} className="flex items-center gap-2 group">
                            Read More
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white" />
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
