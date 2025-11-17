import Image from 'next/image';
import { MapPin, Calendar, TrendingUp, CheckCircle2, Clock, Layers, ArrowRight, Target, Users, DollarSign } from 'lucide-react';
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
      {/* Hero Section - Refined & Elegant */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Refined Header */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">
                  Infrastructure Portfolio
                </span>
                <div className="h-px flex-1 bg-border"></div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-6 tracking-tight leading-[1.1] max-w-4xl">
                Building Kano's Future Through Strategic Infrastructure
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Transparent monitoring and real-time tracking of all public infrastructure projects across Kano State
              </p>
            </div>

            {/* Refined Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="relative bg-white border-2 border-border p-8 group hover:border-primary transition-colors">
                <Layers className="h-6 w-6 text-primary mb-4" strokeWidth={2.5} />
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums">{totalProjects}</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Projects</p>
              </div>

              <div className="relative bg-white border-2 border-border p-8 group hover:border-green-600 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-green-600 mb-4" strokeWidth={2.5} />
                <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2 tabular-nums">{completedProjects}</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Completed</p>
              </div>

              <div className="relative bg-white border-2 border-border p-8 group hover:border-blue-600 transition-colors">
                <TrendingUp className="h-6 w-6 text-blue-600 mb-4" strokeWidth={2.5} />
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 tabular-nums">{inProgressProjects}</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">In Progress</p>
              </div>

              <div className="relative bg-white border-2 border-border p-8 group hover:border-yellow-600 transition-colors">
                <Clock className="h-6 w-6 text-yellow-600 mb-4" strokeWidth={2.5} />
                <p className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2 tabular-nums">{planningProjects}</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Clean & Minimal */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">
                  Geographic Overview
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline mb-4 tracking-tight">
                Interactive Project Map
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore infrastructure development locations across all 44 local government areas
              </p>
            </div>

            <div className="border-2 border-border">
              <div className="h-[600px] w-full">
                <MapWrapper projects={projects} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects - Scalable List Design */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">
                  {totalProjects} Active Initiatives
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline mb-4 tracking-tight">
                Infrastructure Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Comprehensive list of all ongoing infrastructure development initiatives
              </p>
            </div>

            {/* Projects Grid - Clean & Efficient */}
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => {
                const image = projectImages.find(img => img.id === `project-${project.id}`) || projectImages[index % projectImages.length];

                return (
                  <article
                    key={project.id}
                    className="group bg-white border-2 border-border hover:border-primary transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                      {/* Image Section - 2 columns */}
                      <div className="lg:col-span-2 relative h-80 lg:h-auto overflow-hidden">
                        {image && (
                          <>
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={800}
                              height={600}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              data-ai-hint={image.imageHint}
                            />

                            {/* Status Badge */}
                            <div className="absolute top-6 left-6">
                              <div className={`px-4 py-2 border-2 bg-white font-bold text-xs uppercase tracking-wider ${
                                project.status === 'Completed'
                                  ? 'border-green-600 text-green-600'
                                  : project.status === 'In Progress'
                                  ? 'border-blue-600 text-blue-600'
                                  : 'border-yellow-600 text-yellow-600'
                              }`}>
                                {project.status}
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Content Section - 3 columns */}
                      <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                        {/* Top Content */}
                        <div>
                          {/* Project Number & Region */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-5xl font-bold text-border tabular-nums">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" strokeWidth={2.5} />
                              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                {project.region}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground font-headline mb-6 leading-tight group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>

                          {/* Progress */}
                          <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                                Progress
                              </span>
                              <span className="text-3xl font-bold text-foreground tabular-nums">
                                {project.progress}%
                              </span>
                            </div>
                            <div className="h-2 bg-border">
                              <div
                                className={`h-full transition-all duration-500 ${
                                  project.status === 'Completed' ? 'bg-green-600' :
                                  project.status === 'In Progress' ? 'bg-blue-600' :
                                  'bg-yellow-600'
                                }`}
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Timeline */}
                          <div className="grid grid-cols-2 gap-6 pb-6 border-b border-border">
                            <div>
                              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                                Start Date
                              </p>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" strokeWidth={2.5} />
                                <p className="text-sm font-bold text-foreground">
                                  {project.startDate}
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                                Target Completion
                              </p>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" strokeWidth={2.5} />
                                <p className="text-sm font-bold text-foreground">
                                  {project.completionDate}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6">
                          <button className="inline-flex items-center gap-3 text-sm font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wider group/btn">
                            <span>View Full Details</span>
                            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Clean White Background */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Message */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-16 bg-primary"></div>
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">
                    Our Commitment
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline mb-6 tracking-tight">
                  Transparency & Accountability
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Every project is tracked from inception to completion. Real-time updates ensure complete visibility into progress, timelines, and resource allocation.
                </p>
                <div className="h-1 w-24 bg-primary"></div>
              </div>

              {/* Right: Key Points */}
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4 p-6 border-2 border-border">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground mb-2">Strategic Planning</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Infrastructure projects aligned with state development goals and community needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border-2 border-border">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground mb-2">Community Impact</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Projects designed to improve quality of life and drive sustainable economic growth
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border-2 border-border">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground mb-2">Financial Transparency</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Complete accountability for every naira spent on public infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
