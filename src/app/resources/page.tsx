import Balancer from 'react-wrap-balancer';
import { Download, Search, FileBadge, BookOpen, ScrollText } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { resources } from '@/lib/data';

const resourceIcons = {
  Forms: <FileBadge className="h-10 w-10 text-primary" />,
  Policies: <BookOpen className="h-10 w-10 text-primary" />,
  Templates: <ScrollText className="h-10 w-10 text-primary" />,
  Reports: <FileBadge className="h-10 w-10 text-primary" />,
};

export default function ResourcesPage() {
  const categories = [...new Set(resources.map(r => r.category))];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-primary mb-2">Home &gt; Resources</p>
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl font-headline">
          <Balancer>Resources & Downloads</Balancer>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground md:text-xl">
          Access official documents, templates, forms, and policies.
        </p>
      </div>

      {/* Search & Categories */}
      <Card className="mb-12 shadow-md">
        <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-10 bg-card" />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <Button variant="outline">All</Button>
            {categories.map(category => (
              <Button key={category} variant="outline">
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <Card key={resource.id} className="shadow-md transition-shadow hover:shadow-xl flex flex-col text-center">
            <CardHeader className="items-center">
                {resourceIcons[resource.category as keyof typeof resourceIcons]}
              <CardTitle className="text-primary mt-4">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80">{resource.description}</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <a href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
