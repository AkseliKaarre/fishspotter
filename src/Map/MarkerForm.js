import React from 'react';

const MarkerForm = ({ popupText, onTextChange, onAddMarker }) => {
  return (
    <div>
      <input
        type="text"
        value={popupText}
        onChange={onTextChange}
        placeholder="Details of marker"
      />
      <button onClick={onAddMarker}>Submit</button>
    </div>
  );
};

export default MarkerForm;
