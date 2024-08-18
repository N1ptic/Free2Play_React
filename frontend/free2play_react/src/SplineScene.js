// src/SplineScene.js
import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Spline scene="https://prod.spline.design/lMH5SmiVg1llNGcm/scene.splinecode" />
        </div>
    );
};

export default SplineScene;
