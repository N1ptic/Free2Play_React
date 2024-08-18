// src/App.js
import React from 'react';
import DataFetcher from './DataFetcher';
import SplineScene from './SplineScene'; // Assuming you have the SplineScene component

function App() {
    return (
        <div>
            <h1>My Spline 3D Model with Flask Backend</h1>
            <SplineScene />
            <DataFetcher />
        </div>
    );
}

export default App;
