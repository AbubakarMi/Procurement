import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Mail } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { staff } from '@/lib/data';

export default function AboutPage() {
  const commissionerImage = PlaceHolderImages.find(img => img.id === 'commissioner-spotlight');
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

      {/* Ministry Overview */}
      <section className="max-w-4xl mx-auto mb-16">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary font-headline">Ministry Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-foreground/90">
            <p>
              The Ministry of Public Works & Infrastructure is dedicated to building and maintaining the foundational structures that support our state's growth and prosperity. Our mission is to deliver high-quality, sustainable, and resilient infrastructure projects through transparent and efficient processes.
            </p>
            <p>
              We believe in accountability, innovation, and public service. From the highways you travel on to the public buildings that serve our communities, our work touches the lives of every citizen. We are committed to ensuring that every project is a step towards a better, more connected future for all.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Commissioner Spotlight */}
      {commissioner && commissionerImage && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8 font-headline">
            Commissioner's Spotlight
          </h2>
          <Card className="max-w-5xl mx-auto shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/3">
              <Image
                src={commissionerImage.imageUrl}
                alt={commissionerImage.description}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint={commissionerImage.imageHint}
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">{commissioner.name}</CardTitle>
                <p className="text-lg text-foreground/80">{commissioner.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-lg italic text-foreground/90 mb-4">
                  "Our commitment is to the people. Every project we undertake is a promise to enhance quality of life, foster economic growth, and build a legacy of trust and transparency. We are not just building infrastructure; we are building the future."
                </p>
                <a href={`mailto:${commissioner.email}`} className="text-primary hover:underline flex items-center">
                  <Mail className="mr-2 h-4 w-4" /> {commissioner.email}
                </a>
              </CardContent>
            </div>
          </Card>
        </section>
      )}

      <Separator className="my-16" />

      {/* Staff Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center text-primary mb-8 font-headline">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherStaff.map((person, index) => {
            const image = staffImages.find(img => img.id === `staff-${person.id}`) || staffImages[index % staffImages.length];
            return (
              <Card key={person.id} className="group relative overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle className="text-primary text-xl">{person.name}</CardTitle>
                  <p className="text-foreground/80">{person.role}</p>
                </CardHeader>
                <div className="absolute inset-0 bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={`mailto:${person.email}`} className="text-accent-foreground flex items-center text-lg">
                    <Mail className="mr-2 h-5 w-5" /> Contact
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
