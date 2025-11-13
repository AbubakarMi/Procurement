import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { ArrowRight } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { news } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function NewsPage() {
  const newsImages = PlaceHolderImages.filter((img) => img.id.startsWith('news'));

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-primary mb-2">Home &gt; News &amp; Updates</p>
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl font-headline">
          <Balancer>Latest Ministry News</Balancer>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground md:text-xl">
          Stay informed about our latest projects, announcements, and initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => {
          const image = newsImages.find(img => img.id === `news-${item.id}`) || newsImages[index % newsImages.length];
          return (
            <Card key={item.id} id={`news-${item.id}`} className="flex flex-col shadow-md transition-shadow hover:shadow-xl overflow-hidden">
               {image && (
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
               )}
              <CardContent className="flex-grow p-6">
                <Badge variant="secondary" className="mb-2">{item.date}</Badge>
                <CardTitle className="text-primary text-xl mb-2">{item.title}</CardTitle>
                <CardDescription>{item.snippet}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary hover:underline font-semibold flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      
      {/* Pagination would go here in a real application */}
    </div>
  );
}
