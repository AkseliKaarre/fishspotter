import React, { useState } from 'react';
import MapInteraction from './MapInteraction';

const Map = () => {
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setMarkers((prevMarkers) => [...prevMarkers, { position: [lat, lng] }]);
  };

  return (
    <div>
      <MapInteraction
        center={[60.1699, 24.9384]} // Helsinki coordinates
        zoom={10}
        onMapClick={handleMapClick}  // Ensure this is passed correctly
        markers={markers}
      />
    </div>
  );
};

export default Map;
