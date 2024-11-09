import React, { useState } from 'react';
import MapInteraction from './MapInteraction';

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [nextMarkerPosition, setNextMarkerPosition] = useState(null);
  const [markerName, setMarkerName] = useState(''); // State for the name of the marker

  // Handle map clicks to set the position of the next marker
  const handleMapClick = (event) => {
    setNextMarkerPosition({ lat: event.latlng.lat, lng: event.latlng.lng });
  };

  // Add a new marker with the position and name
  const addMarker = () => {
    if (nextMarkerPosition && markerName) {
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        { position: [nextMarkerPosition.lat, nextMarkerPosition.lng], name: markerName },
      ]);
      setNextMarkerPosition(null); // Clear the position after adding the marker
      setMarkerName(''); // Clear the name input after adding the marker
    }
  };

  return (
    <div>
      <MapInteraction
        center={[60.1699, 24.9384]} // Helsinki coordinates
        zoom={10}
        onMapClick={handleMapClick} // Pass the handleMapClick function
        markers={markers}
      />
      <input
        type="text"
        value={markerName}
        onChange={(e) => setMarkerName(e.target.value)}
        placeholder="Enter marker name"
      />
      <button onClick={addMarker} disabled={!nextMarkerPosition || !markerName}>
        Add marker
      </button>
    </div>
  );
};

export default Map;
