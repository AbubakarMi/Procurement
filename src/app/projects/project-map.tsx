'use client';

import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';

// IMPORTANT: You need to add your Google Maps API key to your environment variables.
// Create a .env.local file in the root of your project and add the following line:
// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY"
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

type Project = {
  id: number;
  title: string;
  location: { lat: number; lng: number };
};

type ProjectMapProps = {
  projects: Project[];
};

export default function ProjectMap({ projects }: ProjectMapProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!API_KEY) {
    return (
      <div className="flex items-center justify-center h-full bg-muted">
        <div className="text-center text-foreground/80">
          <p className="font-semibold text-destructive">Google Maps API Key is missing.</p>
          <p className="text-sm">Please configure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env.local file.</p>
        </div>
      </div>
    );
  }

  const mapCenter = { lat: 34.052235, lng: -118.243683 }; // Centered on Los Angeles for demo

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={mapCenter}
        defaultZoom={9}
        mapId="ministry-map"
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {projects.map((project) => (
          <AdvancedMarker
            key={project.id}
            position={project.location}
            onClick={() => setSelectedProject(project)}
          />
        ))}

        {selectedProject && (
          <InfoWindow
            position={selectedProject.location}
            onCloseClick={() => setSelectedProject(null)}
          >
            <div className="p-2">
              <h3 className="font-bold text-primary">{selectedProject.title}</h3>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
