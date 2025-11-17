'use client';

import dynamic from 'next/dynamic';

type Project = {
  id: number;
  title: string;
  location: { lat: number; lng: number };
  status?: string;
  progress?: number;
};

type MapWrapperProps = {
  projects: Project[];
};

// Dynamically import the map component with SSR disabled to avoid Leaflet window errors
const ProjectMap = dynamic(() => import('./project-map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-muted/30">
      <p className="text-muted-foreground">Loading map...</p>
    </div>
  ),
});

export default function MapWrapper({ projects }: MapWrapperProps) {
  return <ProjectMap projects={projects} />;
}
