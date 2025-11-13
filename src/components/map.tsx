'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  className?: string;
  height?: string;
}

// Custom marker icon in ministry colors
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background: #E34234;
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid #972D28;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
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

export function MapComponent({ className = '', height = '400px' }: MapComponentProps) {
  // Exact coordinates for 21 Magaji Rumfa Road, Nassarawa, Kano, Nigeria
  const position: [number, number] = [11.9944, 8.5424];

  return (
    <div className={className} style={{ height }}>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', borderRadius: '8px' }}
        attributionControl={false}
      >
        <MapInitializer />
        <TileLayer
          attribution=''
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={createCustomIcon()}>
          <Popup>
            <div className="text-center p-2">
              <p className="font-bold text-primary">Ministry for Public Procurement,</p>
              <p className="font-bold text-primary">Project Monitoring and Evaluation</p>
              <p className="text-sm text-muted-foreground mt-2">21 Magaji Rumfa Road, Kano</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
