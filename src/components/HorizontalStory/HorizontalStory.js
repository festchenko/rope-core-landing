import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Panel from './Panel';
import SideNav from '../SideNav/SideNav';
import RotateGate from '../RotateGate/RotateGate';
import CausticsScene from '../FX/CausticsScene';
import { initPointerParallax, initCursorTilt } from '../../lib/effects/pointerParallax';
import { initMagneticButtons } from '../../lib/effects/magnetic';
import './horizontal.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HorizontalStory = ({ enable3D = false }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [showRotateGate, setShowRotateGate] = useState(false);
  const [is3DEnabled, setIs3DEnabled] = useState(enable3D);

  const panels = [
    {
      id: 'overview',
      title: 'Overview',
      content: {
        headline: 'Single digital brain for your yacht',
        subline: 'Because freedom feels better when it\'s secure',
        description: 'Rope.core transforms your yacht into an intelligent, connected vessel. Monitor, predict, and control every system with unprecedented precision.'
      }
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin',
      content: {
        headline: 'Live vitals at your fingertips',
        subline: 'Real-time visualization of every system',
        description: 'See your yacht\'s heartbeat in real-time. Battery levels, bilge status, engine health, and security systems — all visualized in an intuitive digital twin.'
      }
    },
    {
      id: 'sensors-kit',
      title: 'Sensors & Kit',
      content: {
        headline: 'Precision monitoring hardware',
        subline: 'Military-grade sensors, yacht-optimized',
        description: 'Our sensor suite monitors every critical system with precision. From engine diagnostics to environmental conditions, nothing escapes our attention.'
      }
    },
    {
      id: 'ai-prognosis',
      title: 'AI & Prognosis',
      content: {
        headline: 'From alerts to foresight',
        subline: 'Predictive intelligence that learns',
        description: 'Our AI doesn\'t just monitor — it predicts. Learn patterns, anticipate issues, and receive actionable insights before problems arise.'
      }
    },
    {
      id: 'open-platform',
      title: 'Open Platform',
      content: {
        headline: 'Ecosystem of possibilities',
        subline: 'Integrate with your favorite tools',
        description: 'Connect with existing systems, third-party apps, and marine services. Rope.core is designed to enhance, not replace, your current setup.'
      }
    },
    {
      id: 'fleet',
      title: 'For Fleet',
      content: {
        headline: 'Scale from one to many',
        subline: 'Fleet management made simple',
        description: 'Whether you own one yacht or manage a charter fleet, Rope.core scales seamlessly. One dashboard, total control, unlimited possibilities.'
      }
    }
  ];

  // Check device capabilities and preferences
  useEffect(() => {
    const checkCapabilities = () => {
      const isMobileDevice = window.innerWidth < 769;
      const isLandscapeMode = window.innerWidth > window.innerHeight;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hasWebGL = !!document.createElement('canvas').getContext('webgl');
      const deviceMemory = navigator.deviceMemory || 4; // Default to 4GB if unknown

      setIsMobile(isMobileDevice);
      setIsLandscape(isLandscapeMode);
      setShowRotateGate(isMobileDevice && !isLandscapeMode);
      setIs3DEnabled(enable3D && !prefersReducedMotion && hasWebGL && deviceMemory >= 4 && !isMobileDevice);
    };

    checkCapabilities();
    window.addEventListener('resize', checkCapabilities);
    window.addEventListener('orientationchange', checkCapabilities);

    return () => {
      window.removeEventListener('resize', checkCapabilities);
      window.removeEventListener('orientationchange', checkCapabilities);
    };
  }, [enable3D]);

  // Initialize horizontal scroll
  useEffect(() => {
    if (!containerRef.current || !trackRef.current || showRotateGate) return;

    const container = containerRef.current;
    const track = trackRef.current;
    const panels = track.children;
    const panelCount = panels.length;

    // Set track width
    gsap.set(track, { width: `${panelCount * 100}vw` });

    // Create horizontal scroll animation
    gsap.to(track, {
      xPercent: -100 * (panelCount - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${window.innerWidth * (panelCount - 1)}`,
        onUpdate: (self) => {
          const progress = self.progress;
          const panelIndex = Math.round(progress * (panelCount - 1));
          setCurrentPanel(panelIndex);
          
          // Update URL hash
          const newHash = `#${panels[panelIndex].id}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, null, newHash);
          }
        }
      }
    });

    // Initialize parallax layers
    panels.forEach((panel, index) => {
      const layers = panel.querySelectorAll('[data-speed]');
      layers.forEach(layer => {
        const speed = parseFloat(layer.dataset.speed) || 0;
        gsap.to(layer, {
          y: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${window.innerWidth * panelCount}`,
            scrub: 1,
            horizontal: true
          }
        });
      });
    });

    // Handle initial hash
    const hash = window.location.hash.slice(1);
    const initialPanelIndex = panels.findIndex(panel => panel.id === hash);
    if (initialPanelIndex !== -1) {
      const progress = initialPanelIndex / (panelCount - 1);
      gsap.set(track, { xPercent: -100 * progress * (panelCount - 1) });
      setCurrentPanel(initialPanelIndex);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showRotateGate]);

  // Initialize micro-interactions
  useEffect(() => {
    if (showRotateGate) return;

    const cleanupFunctions = [];

    // Initialize pointer parallax for background elements
    const parallaxElements = containerRef.current?.querySelectorAll('[data-speed]');
    if (parallaxElements && parallaxElements.length > 0) {
      const cleanupParallax = initPointerParallax(parallaxElements, {
        intensity: isMobile ? 0.3 : 0.5,
        disabled: isMobile && !isLandscape
      });
      cleanupFunctions.push(cleanupParallax);
    }

    // Initialize cursor tilt for headlines
    const tiltElements = containerRef.current?.querySelectorAll('.panel-headline');
    if (tiltElements && tiltElements.length > 0) {
      const cleanupTilt = initCursorTilt(tiltElements, {
        maxTilt: isMobile ? 1 : 2,
        disabled: isMobile && !isLandscape
      });
      cleanupFunctions.push(cleanupTilt);
    }

    // Initialize magnetic buttons
    const magneticButtons = containerRef.current?.querySelectorAll('.magnetic-cta');
    if (magneticButtons && magneticButtons.length > 0) {
      const cleanupMagnetic = initMagneticButtons(magneticButtons, {
        intensity: isMobile ? 0.2 : 0.3,
        disabled: isMobile && !isLandscape
      });
      cleanupFunctions.push(cleanupMagnetic);
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [showRotateGate, isMobile, isLandscape]);

  // Handle navigation
  const goToPanel = (index) => {
    if (showRotateGate) return;
    
    const progress = index / (panels.length - 1);
    const targetX = -100 * progress * (panels.length - 1);
    
    gsap.to(trackRef.current, {
      xPercent: targetX,
      duration: 1.2,
      ease: 'power2.out'
    });
    
    setCurrentPanel(index);
  };

  // Handle orientation change
  const handleOrientationChange = () => {
    if (window.innerWidth > window.innerHeight) {
      setShowRotateGate(false);
    }
  };

  if (showRotateGate) {
    return <RotateGate onOrientationChange={handleOrientationChange} />;
  }

  return (
    <div className="horizontal-story" ref={containerRef}>
      {/* 3D Background (optional) */}
      {is3DEnabled && <CausticsScene />}
      
      {/* Side Navigation */}
      <SideNav 
        panels={panels}
        currentPanel={currentPanel}
        onPanelClick={goToPanel}
      />
      
      {/* Horizontal Track */}
      <div className="horizontal-track" ref={trackRef}>
        {panels.map((panel, index) => (
          <Panel
            key={panel.id}
            panel={panel}
            index={index}
            isActive={currentPanel === index}
            enable3D={is3DEnabled}
          />
        ))}
      </div>
      
      {/* Progress Indicator */}
      <div className="progress-indicator">
        <div 
          className="progress-bar"
          style={{ width: `${((currentPanel + 1) / panels.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default HorizontalStory;
