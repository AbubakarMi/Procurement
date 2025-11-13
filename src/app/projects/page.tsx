import Image from 'next/image';
import { Search, Calendar, MapPin, Clock, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProjectMap from './project-map';

export default function ProjectsPage() {
  const projectImages = PlaceHolderImages.filter((img) => img.id.startsWith('project'));

  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const inProgressProjects = projects.filter(p => p.status === 'In Progress').length;
  const planningProjects = projects.filter(p => p.status === 'Planning').length;
  const totalProjects = projects.length;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-headline">
          Project Monitoring Hub
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Track the progress of public works and infrastructure projects across Kano State in real-time.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                <p className="text-3xl font-bold text-primary">{totalProjects}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-3xl font-bold text-green-600">{completedProjects}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-3xl font-bold text-blue-600">{inProgressProjects}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Planning</p>
                <p className="text-3xl font-bold text-yellow-600">{planningProjects}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Section */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">Interactive Project Map</CardTitle>
          <p className="text-sm text-muted-foreground">
            Click on markers to view project details and locations across Kano State
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[500px] w-full">
            <ProjectMap projects={projects} />
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter Section */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-primary">Search & Filter Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects by name, region, or status..."
                className="pl-10"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="planning">Planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Region</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="kano">Kano</SelectItem>
                    <SelectItem value="gwale">Gwale</SelectItem>
                    <SelectItem value="nassarawa">Nassarawa</SelectItem>
                    <SelectItem value="fagge">Fagge</SelectItem>
                    <SelectItem value="dala">Dala</SelectItem>
                    <SelectItem value="sabon-gari">Sabon Gari</SelectItem>
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
                <label className="text-sm font-medium invisible">Action</label>
                <Button className="w-full">
                  <Search className="mr-2 h-4 w-4" /> Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Listings */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-primary mb-2">All Projects</h2>
        <p className="text-sm text-muted-foreground">
          Showing {totalProjects} project{totalProjects !== 1 ? 's' : ''} across Kano State
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const image = projectImages.find(img => img.id === `project-${project.id}`) || projectImages[index % projectImages.length];
          return (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden">
              {image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      className={
                        project.status === 'Completed'
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : project.status === 'In Progress'
                          ? 'bg-blue-500 hover:bg-blue-600 text-white'
                          : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              )}

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg text-primary leading-tight flex-1">
                    {project.title}
                  </CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.region}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-grow space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium text-muted-foreground">Project Progress</span>
                    <span className="text-lg font-bold text-primary">{project.progress}%</span>
                  </div>
                  <Progress
                    value={project.progress}
                    className="h-2.5"
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Start:</strong> {project.startDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">End:</strong> {project.completionDate}
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-4 border-t">
                <Button variant="default" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" className="flex-1">
                  Location
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
