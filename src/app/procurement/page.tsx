import Balancer from 'react-wrap-balancer';
import { Download, Search } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { tenders } from '@/lib/data';

export default function ProcurementPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-primary mb-2">Home &gt; Procurement</p>
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl font-headline">
          <Balancer>Tenders & Procurement Opportunities</Balancer>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground md:text-xl">
          Find and apply for the latest government tenders. We are committed to a fair and transparent procurement process.
        </p>
      </div>

      {/* Filter Section */}
      <Card className="mb-12 shadow-md">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select>
                <SelectTrigger className="w-full bg-card">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="supplies">Supplies</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="consultancy">Consultancy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Year</label>
              <Select>
                <SelectTrigger className="w-full bg-card">
                  <SelectValue placeholder="All Years" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select>
                <SelectTrigger className="w-full bg-card">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="awarded">Awarded</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full md:w-auto">
              <Search className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tender Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tenders.map((tender) => (
          <Card key={tender.id} className="shadow-md transition-shadow hover:shadow-xl flex flex-col">
            <CardHeader>
              <CardTitle className="text-primary">{tender.title}</CardTitle>
              <div className="flex justify-between items-center pt-2">
                <Badge variant="secondary">{tender.category}</Badge>
                <Badge variant={tender.status === 'Open' ? 'default' : 'destructive'} className="bg-primary/20 text-primary border-primary/20">
                  {tender.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground">
                <strong>Closing Date:</strong> {tender.closingDate}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Download Documents
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Pagination would go here */}
    </div>
  );
}
