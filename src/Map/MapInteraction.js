import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set default Leaflet marker icon options
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapClickHandler = ({ onMapClick }) => {
  // This hook will capture clicks on the map and pass the event to onMapClick
  useMapEvents({
    click: (event) => {
      if (onMapClick) {
        onMapClick(event);
      } else {
        console.error("onMapClick function is not provided");
      }
    },
  });
  return null;
};

const MapInteraction = ({ center, zoom, onMapClick, markers = [] }) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler onMapClick={onMapClick} />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            <h3>{marker.name}</h3>
            <p>{marker.details}</p>
            <p>
              <strong>Fishing Options:</strong><br />
              {marker.shoreFishing ? "✅ Good for shore fishing" : "❌ Not suitable for shore fishing"}<br />
              {marker.boatFishing ? "✅ Good for boat fishing" : "❌ Not suitable for boat fishing"}
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapInteraction;
