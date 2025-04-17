// components/MapComponent.jsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon path (optional)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

export default function MapComponent() {
  return (
    <div className="w-full h-full bg-white/5 backdrop-blur-md rounded-xl border border-white/20 shadow-xl overflow-hidden">
      <MapContainer
        center={[6.5244, 3.3792]} // Example: Lagos
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-10"
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        />

        <Marker position={[6.5244, 3.3792]}>
          <Popup>car</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
