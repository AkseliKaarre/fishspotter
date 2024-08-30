import React from "react";

const MarkerForm = ({ popupText, onTextChange, onAddMarker}) => {
    return (
        <div>
            <input
                type="text"
                value={popupText}
                onChange={onTextChange}
                placeholder="Details of fishing spot"
            />
        <button onClick={onAddMarker}>Add Marker</button>
        </div>
    )
}

export default MarkerForm;