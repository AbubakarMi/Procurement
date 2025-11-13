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
      <section className="relative bg-card h-[50vh] md:h-[60vh] flex items-center justify-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl font-headline">
            <Balancer>Transparent Procurement & Efficient Project Monitoring</Balancer>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90 md:text-xl">
            Building a brighter future for our state through accountability and progress in public works.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/complaints">Submit Complaint</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center shadow-md transition-shadow hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {statIcons[stat.label as keyof typeof statIcons]}
                  </div>
                  <CardTitle className="text-primary">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8 font-headline">
            Latest News
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
          >
            <CarouselContent>
              {news.slice(0, 5).map((item, index) => {
                const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[0];
                return (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full shadow-md transition-shadow hover:shadow-xl overflow-hidden">
                      <CardHeader className="p-0">
                         <Image
                           src={image.imageUrl}
                           alt={image.description}
                           width={600}
                           height={400}
                           className="w-full h-48 object-cover"
                           data-ai-hint={image.imageHint}
                         />
                      </CardHeader>
                      <CardContent className="flex-grow p-6">
                        <CardTitle className="text-primary text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription>{item.snippet}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" asChild className="p-0 text-primary">
                          <Link href={`/news#news-${item.id}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Featured Tenders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8 font-headline">
            Featured Tenders
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tenders.slice(0, 3).map((tender) => (
              <Card key={tender.id} className="shadow-md transition-shadow hover:shadow-xl flex flex-col">
                <CardHeader>
                  <CardTitle className="text-primary">{tender.title}</CardTitle>
                  <Badge variant="secondary">{tender.category}</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-foreground">
                    Closing Date: {tender.closingDate}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/procurement">View All Tenders</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Quick Links / Resources */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8 font-headline">
            Quick Links & Resources
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {quickLinks.map((link) => (
              <Card key={link.title} className="text-center shadow-md transition-shadow hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {quickLinkIcons[link.title as keyof typeof quickLinkIcons]}
                  </div>
                  <CardTitle className="text-primary">{link.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <Link href={link.href}>
                      Go to Page <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
