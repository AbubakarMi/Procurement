import Image from 'next/image';
import { Search, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import MapWrapper from './map-wrapper';

export default function ProjectsPage() {
  const projectImages = PlaceHolderImages.filter((img) => img.id.startsWith('project'));

  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const inProgressProjects = projects.filter(p => p.status === 'In Progress').length;
  const planningProjects = projects.filter(p => p.status === 'Planning').length;
  const totalProjects = projects.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Minimalist Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Real-Time Tracking</span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight">
                Project Monitoring
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track infrastructure development across Kano State in real-time
              </p>
            </div>

            {/* Stats Grid - Unified Border Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border max-w-5xl mx-auto">
              <div className="p-8 border-r border-b md:border-b-0 border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {totalProjects}
                  </p>
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Projects</p>
              </div>

              <div className="p-8 md:border-r border-b md:border-b-0 border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-green-600 group-hover:text-green-700 transition-colors">
                    {completedProjects}
                  </p>
                </div>
                <div className="w-12 h-px bg-green-500/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-green-500 transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Completed</p>
              </div>

              <div className="p-8 border-r md:border-r border-border text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    {inProgressProjects}
                  </p>
                </div>
                <div className="w-12 h-px bg-blue-500/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">In Progress</p>
              </div>

              <div className="p-8 text-center group hover:bg-primary/5 transition-all duration-500">
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                    {planningProjects}
                  </p>
                </div>
                <div className="w-12 h-px bg-yellow-500/30 mx-auto mb-3 group-hover:w-16 group-hover:bg-yellow-500 transition-all duration-500"></div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Geographic View</span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground font-headline mb-4 tracking-tight">
                Interactive Map
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore project locations across Kano State
              </p>
            </div>

            {/* Map Container */}
            <div className="border border-border overflow-hidden">
              <div className="h-[500px] w-full">
                <MapWrapper projects={projects} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search projects by name, region, or status..."
                  className="pl-12 h-14 text-base border-border focus:border-primary bg-white"
                />
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Status</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-white">
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
                  <label className="text-sm font-semibold text-foreground">Region</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-white">
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
                  <label className="text-sm font-semibold text-foreground">Year</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-white">
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
                  <label className="text-sm font-semibold text-foreground invisible">Action</label>
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90">
                    <Search className="mr-2 h-5 w-5" /> Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Listings */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                  {totalProjects} Active Projects
                </span>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground font-headline mb-4 tracking-tight">
                Infrastructure Development
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Building sustainable infrastructure across Kano State
              </p>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const image = projectImages.find(img => img.id === `project-${project.id}`) || projectImages[index % projectImages.length];
                return (
                  <article
                    key={project.id}
                    className="group bg-white border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
                  >
                    {/* Project Image */}
                    {image && (
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          data-ai-hint={image.imageHint}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Status Badge */}
                        <div className="absolute top-6 left-6">
                          <span className={`inline-block px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                            project.status === 'Completed'
                              ? 'bg-green-500/90 text-white border border-green-400/50'
                              : project.status === 'In Progress'
                              ? 'bg-blue-500/90 text-white border border-blue-400/50'
                              : 'bg-yellow-500/90 text-white border border-yellow-400/50'
                          }`}>
                            {project.status}
                          </span>
                        </div>

                        {/* Region Badge */}
                        <div className="absolute bottom-6 left-6">
                          <div className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20">
                            <MapPin className="h-4 w-4 text-white" />
                            <span className="text-sm font-bold text-white uppercase tracking-wider">
                              {project.region}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8">
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground font-headline mb-6 leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      {/* Progress Section */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Completion</span>
                          <span className="text-3xl font-bold text-primary">{project.progress}%</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              project.status === 'Completed' ? 'bg-green-500' :
                              project.status === 'In Progress' ? 'bg-blue-500' :
                              'bg-yellow-500'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-border">
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Start Date</p>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <p className="text-sm font-semibold text-foreground">{project.startDate}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Completion</p>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <p className="text-sm font-semibold text-foreground">{project.completionDate}</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all group/btn">
                        <span>View Project Details</span>
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
