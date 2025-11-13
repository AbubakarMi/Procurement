import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import { Search, Calendar, MapPin } from 'lucide-react';

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
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProjectMap from './project-map';

export default function ProjectsPage() {
  const projectImages = PlaceHolderImages.filter((img) => img.id.startsWith('project'));

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-primary mb-2">Home &gt; Projects</p>
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl font-headline">
          <Balancer>Project Monitoring Hub</Balancer>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground md:text-xl">
          Track the progress of public works and infrastructure projects across the state.
        </p>
      </div>

      {/* Map Section */}
      <section className="mb-12">
         <h2 className="text-3xl font-bold text-center text-primary mb-8 font-headline">
            Interactive Project Map
         </h2>
        <Card className="shadow-lg overflow-hidden">
            <div className="h-[500px] w-full">
                <ProjectMap projects={projects} />
            </div>
        </Card>
      </section>

      {/* Filter Section */}
      <Card className="mb-12 shadow-md">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Search Projects</label>
              <Input placeholder="Search by name..." className="bg-card" />
            </div>
            <div>
              <label className="text-sm font-medium">Status</label>
              <Select>
                <SelectTrigger className="w-full bg-card">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full md:w-auto">
              <Search className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const image = projectImages.find(img => img.id === `project-${project.id}`) || projectImages[index % projectImages.length];
          return (
          <Card key={project.id} className="shadow-md transition-shadow hover:shadow-xl flex flex-col">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
                data-ai-hint={image.imageHint}
              />
            )}
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
              <div className="flex items-center text-sm text-foreground/80 gap-4">
                <span className="flex items-center gap-1"><MapPin size={14} /> {project.region}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                    {project.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold">Progress</span>
                  <span className="text-primary font-semibold">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              <div className="flex items-center text-sm text-foreground/80">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{project.startDate} to {project.completionDate}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        )})}
      </div>
    </div>
  );
}
