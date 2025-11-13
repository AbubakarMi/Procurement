'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type Project = {
  id: number;
  title: string;
  location: { lat: number; lng: number };
  status?: string;
  progress?: number;
};

type ProjectMapProps = {
  projects: Project[];
};

// Create colored marker icons based on project status
const createProjectIcon = (status?: string) => {
  const color =
    status === 'Completed' ? '#10b981' :
    status === 'In Progress' ? '#E34234' :
    '#f59e0b';

  const borderColor =
    status === 'Completed' ? '#059669' :
    status === 'In Progress' ? '#972D28' :
    '#d97706';

  return L.divIcon({
    className: 'custom-project-marker',
    html: `
      <div style="
        background: ${color};
        width: 28px;
        height: 28px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 2px solid ${borderColor};
        box-shadow: 0 3px 6px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "></div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });
};

// Component to fix map loading issues
function MapInitializer() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
}

export default function ProjectMap({ projects }: ProjectMapProps) {
  const mapCenter: [number, number] = [12.0022, 8.5920]; // Centered on Kano, Nigeria

  return (
    <MapContainer
      center={mapCenter}
      zoom={11}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', borderRadius: '8px' }}
      attributionControl={false}
    >
      <MapInitializer />
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {projects.map((project) => (
        <Marker
          key={project.id}
          position={[project.location.lat, project.location.lng]}
          icon={createProjectIcon(project.status)}
        >
          <Popup>
            <div className="p-2 min-w-[180px]">
              <h3 className="font-bold text-primary mb-2 text-sm">{project.title}</h3>
              {project.status && (
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              )}
              {project.progress !== undefined && (
                <p className="text-xs text-muted-foreground mt-1">
                  Progress: <span className="font-semibold text-primary">{project.progress}%</span>
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
