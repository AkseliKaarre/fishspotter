import React from 'react';
import './App.css';
import Map from './Map/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fishing Spots</h1>
        <p>Explore and share your favorite fishing spots!</p>
      </header>
      <Map />
    </div>
  );
}

export default App;
