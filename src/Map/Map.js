import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapInteraction from './MapInteraction';
import MarkerForm from './MarkerForm'
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fixes default icon problems in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});


const Map = () => {
    const [markers, setMarkers] = useState([]);
    const [popupText, setPopupText] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const handleMapClick = (event) => {
        if(isAdding) {
            const {lat,lng} = event.latlng;
            const newMarker = { position: [lat, lng], text: popupText || "No description"}
            setMarkers([...markers, newMarker]);
            setPopupText('');
            setIsAdding(false);
        }
    }
    const handleAddMarkerClick = () => {
        setIsAdding(true)
    }
    const handleTextChange = (event) => {
        setPopupText(event.target.value)
    }
    return (
        <div>
            <button onClick={handleAddMarkerClick}>Add Marker</button>
            {isAdding && (
                <MarkerForm
                popupText={popupText}
                onTextChange={handleTextChange}
                onAddMarker={handleAddMarkerClick}
                />
            )}
            <MapInteraction
                center={[60.1699, 24.9384]} // Helsinki coordinates
                zoom={10}
                markers={markers}
                onMapClick={handleMapClick}
            />
        </div>
    )
}

export default Map;