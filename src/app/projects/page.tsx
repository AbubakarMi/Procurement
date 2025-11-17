import Image from 'next/image';
import { MapPin, Calendar, TrendingUp, CheckCircle2, Clock, Layers, ArrowRight, Target, Users, DollarSign, Building2 } from 'lucide-react';
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
      {/* Hero Section - Stunning with Animations */}
      <section className="relative bg-background overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E34234 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Animated Header */}
            <div className="mb-20 animate-[fadeIn_0.8s_ease-out]">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-20 bg-primary animate-[slideInLeft_0.6s_ease-out]"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.25em] animate-[fadeIn_0.8s_ease-out_0.2s_both]">
                  Infrastructure Development
                </span>
                <div className="h-px flex-1 bg-border animate-[slideInRight_0.6s_ease-out]"></div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline mb-8 tracking-tight leading-[1.05] max-w-5xl animate-[slideUp_0.8s_ease-out_0.3s_both]">
                Building World-Class Infrastructure for Kano State
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed animate-[fadeIn_0.8s_ease-out_0.5s_both]">
                Transparent monitoring and real-time tracking of public infrastructure projects
              </p>
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="relative bg-white border-2 border-border p-8 group hover:border-primary hover:-translate-y-2 transition-all duration-500 animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Layers className="h-7 w-7 text-primary mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
                  <p className="text-5xl font-bold text-foreground mb-3 tabular-nums group-hover:scale-110 transition-transform duration-500">{totalProjects}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Projects</p>
                </div>
              </div>

              <div className="relative bg-white border-2 border-border p-8 group hover:border-green-600 hover:-translate-y-2 transition-all duration-500 animate-[fadeInUp_0.6s_ease-out_0.7s_both]">
                <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <CheckCircle2 className="h-7 w-7 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
                  <p className="text-5xl font-bold text-green-600 mb-3 tabular-nums group-hover:scale-110 transition-transform duration-500">{completedProjects}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Completed</p>
                </div>
              </div>

              <div className="relative bg-white border-2 border-border p-8 group hover:border-blue-600 hover:-translate-y-2 transition-all duration-500 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <TrendingUp className="h-7 w-7 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
                  <p className="text-5xl font-bold text-blue-600 mb-3 tabular-nums group-hover:scale-110 transition-transform duration-500">{inProgressProjects}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">In Progress</p>
                </div>
              </div>

              <div className="relative bg-white border-2 border-border p-8 group hover:border-yellow-600 hover:-translate-y-2 transition-all duration-500 animate-[fadeInUp_0.6s_ease-out_0.9s_both]">
                <div className="absolute inset-0 bg-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Clock className="h-7 w-7 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
                  <p className="text-5xl font-bold text-yellow-600 mb-3 tabular-nums group-hover:scale-110 transition-transform duration-500">{planningProjects}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Elegant with Smooth Entry */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-20 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">
                  Geographic Overview
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-6 tracking-tight">
                Interactive Project Map
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Explore infrastructure development locations across all 44 local government areas
              </p>
            </div>

            <div className="border-2 border-border overflow-hidden hover:border-primary transition-colors duration-500">
              <div className="h-[600px] w-full">
                <MapWrapper projects={projects} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects - Beautiful Cards with Stagger Animation */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-20 bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">
                  {totalProjects} Active Initiatives
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-6 tracking-tight">
                Infrastructure Projects
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Comprehensive overview of all infrastructure development across Kano State
              </p>
            </div>

            {/* Projects Grid - Stunning Cards */}
            <div className="grid grid-cols-1 gap-10">
              {projects.map((project, index) => {
                const image = projectImages.find(img => img.id === `project-${project.id}`) || projectImages[index % projectImages.length];
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={project.id}
                    className="group bg-white border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-700"
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${0.1 * index}s both`
                    }}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Image Section */}
                      <div className={`relative h-96 lg:h-auto overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}>
                        {image && (
                          <>
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={1200}
                              height={800}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                              data-ai-hint={image.imageHint}
                            />

                            {/* Animated overlay on hover */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Status Badge with animation */}
                            <div className="absolute top-8 left-8">
                              <div className={`px-5 py-3 border-2 bg-white font-bold text-xs uppercase tracking-wider transform group-hover:scale-105 transition-transform duration-500 ${
                                project.status === 'Completed'
                                  ? 'border-green-600 text-green-600'
                                  : project.status === 'In Progress'
                                  ? 'border-blue-600 text-blue-600'
                                  : 'border-yellow-600 text-yellow-600'
                              }`}>
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                                    project.status === 'Completed'
                                      ? 'bg-green-600'
                                      : project.status === 'In Progress'
                                      ? 'bg-blue-600'
                                      : 'bg-yellow-600'
                                  }`}></div>
                                  {project.status}
                                </div>
                              </div>
                            </div>

                            {/* Project number watermark */}
                            <div className="absolute bottom-8 right-8">
                              <span className="text-8xl font-bold text-white/20 tabular-nums leading-none">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className={`p-10 md:p-12 lg:p-16 flex flex-col justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                        {/* Region */}
                        <div className="flex items-center gap-3 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                          <MapPin className="h-5 w-5 text-primary" strokeWidth={2.5} />
                          <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
                            {project.region}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-8 leading-tight group-hover:text-primary transition-colors duration-500">
                          {project.title}
                        </h3>

                        {/* Progress Section */}
                        <div className="mb-8">
                          <div className="flex items-end justify-between mb-4">
                            <div>
                              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                                Project Progress
                              </p>
                              <p className="text-5xl font-bold text-foreground tabular-nums">
                                {project.progress}%
                              </p>
                            </div>
                            <div className={`w-16 h-16 border-2 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 ${
                              project.status === 'Completed'
                                ? 'border-green-600'
                                : project.status === 'In Progress'
                                ? 'border-blue-600'
                                : 'border-yellow-600'
                            }`}>
                              <Building2 className={`h-8 w-8 ${
                                project.status === 'Completed'
                                  ? 'text-green-600'
                                  : project.status === 'In Progress'
                                  ? 'text-blue-600'
                                  : 'text-yellow-600'
                              }`} strokeWidth={2.5} />
                            </div>
                          </div>

                          {/* Progress Bar with animation */}
                          <div className="relative h-3 bg-border overflow-hidden">
                            <div
                              className={`h-full transition-all duration-1000 ease-out ${
                                project.status === 'Completed' ? 'bg-green-600' :
                                project.status === 'In Progress' ? 'bg-blue-600' :
                                'bg-yellow-600'
                              }`}
                              style={{
                                width: `${project.progress}%`,
                                animation: 'slideInLeft 1.5s ease-out'
                              }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                            </div>
                          </div>
                        </div>

                        {/* Timeline */}
                        <div className="grid grid-cols-2 gap-8 mb-10 pb-10 border-b-2 border-border">
                          <div className="group/date">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                              Start Date
                            </p>
                            <div className="flex items-center gap-3 group-hover/date:translate-x-1 transition-transform duration-300">
                              <Calendar className="h-5 w-5 text-primary" strokeWidth={2.5} />
                              <p className="text-base font-bold text-foreground">
                                {project.startDate}
                              </p>
                            </div>
                          </div>
                          <div className="group/date">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                              Target Completion
                            </p>
                            <div className="flex items-center gap-3 group-hover/date:translate-x-1 transition-transform duration-300">
                              <Calendar className="h-5 w-5 text-primary" strokeWidth={2.5} />
                              <p className="text-base font-bold text-foreground">
                                {project.completionDate}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* CTA with animation */}
                        <div>
                          <button className="group/btn inline-flex items-center gap-4 text-base font-bold text-foreground hover:text-primary transition-all duration-500">
                            <span className="uppercase tracking-wider">View Full Details</span>
                            <div className="flex items-center gap-2">
                              <div className="h-px w-16 bg-foreground group-hover/btn:w-24 group-hover/btn:bg-primary transition-all duration-500"></div>
                              <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-2 transition-transform duration-500" strokeWidth={2.5} />
                            </div>
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

      {/* Impact Section - Clean & Animated */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left: Message */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-20 bg-primary"></div>
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">
                    Our Commitment
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-8 tracking-tight leading-tight">
                  Transparency & Accountability
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  Every project is tracked from inception to completion. Real-time updates ensure complete visibility into progress, timelines, and resource allocation.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-32 bg-primary"></div>
                  <div className="h-2 w-16 bg-primary/50"></div>
                  <div className="h-2 w-8 bg-primary/20"></div>
                </div>
              </div>

              {/* Right: Key Points */}
              <div className="grid grid-cols-1 gap-6">
                <div className="group flex items-start gap-5 p-8 border-2 border-border hover:border-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                  <div className="flex-shrink-0 w-14 h-14 border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Target className="h-7 w-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">Strategic Planning</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Infrastructure projects aligned with state development goals and community needs
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-8 border-2 border-border hover:border-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                  <div className="flex-shrink-0 w-14 h-14 border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Users className="h-7 w-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">Community Impact</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Projects designed to improve quality of life and drive sustainable economic growth
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-8 border-2 border-border hover:border-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                  <div className="flex-shrink-0 w-14 h-14 border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <DollarSign className="h-7 w-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">Financial Transparency</p>
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
