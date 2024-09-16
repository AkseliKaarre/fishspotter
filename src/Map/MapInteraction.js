import React from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Ensure Leaflet is imported

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapInteraction = ({ center, zoom, onMapClick, markers = [] }) => {
  
  const MapClickHandler = ({onMapClick}) => {
    useMapEvents({
      click: (event) => {
        if(onMapClick) {
          onMapClick(event)
        } else {
          console.error("onMapClick funktion is not provided")
        }
        
      },
    });
    return null; // This component doesn't render anything visually
  };

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '500px', width: '100%' }}
      onClick={onMapClick} // Attach the onClick event handler here
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler onMapClick={onMapClick} />
      {markers.map((marker, index) => 
        <Marker
          key={index}
          position={marker.position}
          
        />
      )} 
    </MapContainer>
  );
};

export default MapInteraction;
