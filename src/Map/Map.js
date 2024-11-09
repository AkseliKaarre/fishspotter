import React, { useState } from 'react';
import MapInteraction from './MapInteraction';

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [nextMarkerPosition, setNextMarkerPosition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [markerName, setMarkerName] = useState('');
  const [markerDetails, setMarkerDetails] = useState('');
  const [isShoreFishing, setIsShoreFishing] = useState(false);
  const [isBoatFishing, setIsBoatFishing] = useState(false);

  // Handle click event to capture marker position and open modal
  const handleMapClick = (event) => {
    setNextMarkerPosition({ lat: event.latlng.lat, lng: event.latlng.lng });
    setIsModalOpen(true); // Open modal to enter information
  };

  // Add marker with all entered information and reset inputs
  const confirmAddMarker = () => {
    if (nextMarkerPosition && markerName) {
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        {
          position: [nextMarkerPosition.lat, nextMarkerPosition.lng],
          name: markerName,
          details: markerDetails,
          shoreFishing: isShoreFishing,
          boatFishing: isBoatFishing,
        },
      ]);
      // Reset inputs and close modal
      setNextMarkerPosition(null);
      setMarkerName('');
      setMarkerDetails('');
      setIsShoreFishing(false);
      setIsBoatFishing(false);
      setIsModalOpen(false);
    }
  };

  // Cancel adding a marker and reset all inputs
  const cancelAddMarker = () => {
    setNextMarkerPosition(null);
    setMarkerName('');
    setMarkerDetails('');
    setIsShoreFishing(false);
    setIsBoatFishing(false);
    setIsModalOpen(false);
  };

  return (
    <div>
      <MapInteraction
        center={[60.1699, 24.9384]} // Helsinki coordinates
        zoom={10}
        onMapClick={handleMapClick} // Pass handleMapClick to MapInteraction
        markers={markers}
      />

      {/* Modal for entering marker information */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Spot Information</h2>
            <input
              type="text"
              value={markerName}
              onChange={(e) => setMarkerName(e.target.value)}
              placeholder="Spot Name"
            />
            <textarea
              value={markerDetails}
              onChange={(e) => setMarkerDetails(e.target.value)}
              placeholder="Details about the spot"
              rows="4"
            />
            <label>
              <input
                type="checkbox"
                checked={isShoreFishing}
                onChange={(e) => setIsShoreFishing(e.target.checked)}
              />
              Good for shore fishing
            </label>
            <label>
              <input
                type="checkbox"
                checked={isBoatFishing}
                onChange={(e) => setIsBoatFishing(e.target.checked)}
              />
              Good for boat fishing
            </label>
            <button onClick={confirmAddMarker}>Confirm</button>
            <button onClick={cancelAddMarker}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
