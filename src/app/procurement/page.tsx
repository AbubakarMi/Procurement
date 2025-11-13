import { Download, Search, FileText, Calendar, Tag } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
import { tenders } from '@/lib/data';

export default function ProcurementPage() {
  const openTenders = tenders.filter(t => t.status === 'Open').length;
  const totalTenders = tenders.length;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-headline">
          Tenders & Procurement Opportunities
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore current tenders and procurement opportunities from the Ministry for Public Procurement, Project Monitoring and Evaluation.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Tenders</p>
                <p className="text-3xl font-bold text-primary">{openTenders}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Tenders</p>
                <p className="text-3xl font-bold text-blue-600">{totalTenders}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Tag className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Response Time</p>
                <p className="text-3xl font-bold text-green-600">48h</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                <p className="text-3xl font-bold text-orange-600">94%</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter Section */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-primary">Search & Filter Tenders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tenders by title, category, or keywords..."
                className="pl-10"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="supplies">Supplies</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="consultancy">Consultancy</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Year</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="awarded">Awarded</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium invisible">Action</label>
                <Button className="w-full">
                  <Search className="mr-2 h-4 w-4" /> Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tender Listings */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-primary mb-2">Available Tenders</h2>
        <p className="text-sm text-muted-foreground">
          Showing {totalTenders} tender{totalTenders !== 1 ? 's' : ''} ({openTenders} currently open)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenders.map((tender) => (
          <Card key={tender.id} className="hover:shadow-lg transition-all duration-200 flex flex-col border-t-4 border-t-primary">
            <CardHeader>
              <div className="flex justify-between items-start mb-3">
                <Badge
                  variant={tender.status === 'Open' ? 'default' : 'secondary'}
                  className={tender.status === 'Open' ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400'}
                >
                  {tender.status}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {tender.category}
                </Badge>
              </div>
              <CardTitle className="text-lg text-primary leading-tight line-clamp-2">
                {tender.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Closes: <strong className="text-foreground">{tender.closingDate}</strong></span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Tag className="h-4 w-4" />
                <span>ID: <strong className="text-foreground">TENDER-{String(tender.id).padStart(4, '0')}</strong></span>
              </div>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Button asChild className="flex-1">
                <a href="#" className="flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
              <Button variant="outline" className="flex-1">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-10 flex justify-center">
        <div className="flex gap-2">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
}
