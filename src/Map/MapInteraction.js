import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapInteraction = ({ center, zoom, markers, onMapClick}) => {
    return (
        <MapContainer
            center = {center}
            zoom = {zoom}
            style={{ height: '500px', width: '100%'}}
            onClick={onMapClick}
        >
            <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.text}</Popup>
        </Marker>
      ))}

        </MapContainer>
    )
}
export default MapInteraction;