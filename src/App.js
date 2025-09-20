import React, { useState, useEffect } from 'react';
import HorizontalStory from './components/HorizontalStory/HorizontalStory';
import SimpleHorizontalStory from './components/HorizontalStory/SimpleHorizontalStory';
import Hero from './components/Hero';
import CoreFeatures from './components/CoreFeatures';
import PreDepartureChecklist from './components/PreDepartureChecklist';
import FleetScale from './components/FleetScale';
import SecurityPeace from './components/SecurityPeace';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './index.css';

// Feature flags
const HORIZONTAL_MODE = true; // Test simple version
const ENABLE_3D_WATER = false;
const REDUCED_MOTION_FORCE = false;

function App() {
  const [useHorizontalMode, setUseHorizontalMode] = useState(HORIZONTAL_MODE);
  const [enable3D, setEnable3D] = useState(ENABLE_3D_WATER);
  const [forceReducedMotion, setForceReducedMotion] = useState(REDUCED_MOTION_FORCE);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || forceReducedMotion) {
      setUseHorizontalMode(false);
      setEnable3D(false);
    }

    // Check device capabilities
    const isLowEndDevice = navigator.deviceMemory && navigator.deviceMemory < 4;
    const isMobile = window.innerWidth < 769;
    
    if (isLowEndDevice || isMobile) {
      setEnable3D(false);
    }

    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setEnable3D(false);
    }
  }, [forceReducedMotion]);

  // URL parameter overrides
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('horizontal')) {
      setUseHorizontalMode(urlParams.get('horizontal') === 'true');
    }
    
    if (urlParams.has('3d')) {
      setEnable3D(urlParams.get('3d') === 'true');
    }
    
    if (urlParams.has('reduced-motion')) {
      setForceReducedMotion(urlParams.get('reduced-motion') === 'true');
    }
  }, []);

  if (useHorizontalMode) {
    return (
      <div className="App">
        <SimpleHorizontalStory />
      </div>
    );
  }

  // Fallback to vertical layout
  return (
    <div className="App">
      <Hero />
      <CoreFeatures />
      <PreDepartureChecklist />
      <FleetScale />
      <SecurityPeace />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
