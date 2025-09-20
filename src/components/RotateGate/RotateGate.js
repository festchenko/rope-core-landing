import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './RotateGate.css';

const RotateGate = ({ onOrientationChange }) => {
  const containerRef = useRef(null);
  const phoneRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Animate phone rotation
    tl.to(phoneRef.current, {
      rotation: 90,
      duration: 2,
      ease: 'power2.inOut'
    });

    // Animate arrow
    gsap.to(arrowRef.current, {
      y: -10,
      duration: 1.5,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });

    // Animate text
    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth > window.innerHeight) {
        onOrientationChange();
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [onOrientationChange]);

  return (
    <div 
      className="rotate-gate" 
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rotate-title"
      aria-describedby="rotate-description"
    >
      <div className="rotate-content">
        {/* Animated Phone Icon */}
        <div className="phone-container" ref={phoneRef}>
          <svg 
            viewBox="0 0 200 400" 
            className="phone-icon"
            width="120" 
            height="240"
          >
            {/* Phone Body */}
            <rect 
              x="20" 
              y="20" 
              width="160" 
              height="360" 
              rx="30" 
              ry="30" 
              fill="none" 
              stroke="rgba(6, 182, 212, 0.6)" 
              strokeWidth="3"
            />
            
            {/* Screen */}
            <rect 
              x="35" 
              y="60" 
              width="130" 
              height="280" 
              rx="15" 
              ry="15" 
              fill="rgba(0, 0, 0, 0.8)" 
              stroke="rgba(6, 182, 212, 0.4)" 
              strokeWidth="2"
            />
            
            {/* Home Button */}
            <circle 
              cx="100" 
              cy="360" 
              r="8" 
              fill="none" 
              stroke="rgba(6, 182, 212, 0.4)" 
              strokeWidth="2"
            />
            
            {/* Screen Content */}
            <rect 
              x="50" 
              y="100" 
              width="100" 
              height="200" 
              rx="5" 
              fill="rgba(6, 182, 212, 0.1)"
            />
            
            {/* Grid Lines */}
            <line x1="50" y1="150" x2="150" y2="150" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1"/>
            <line x1="50" y1="200" x2="150" y2="200" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1"/>
            <line x1="50" y1="250" x2="150" y2="250" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1"/>
          </svg>
        </div>

        {/* Text Content */}
        <div className="rotate-text" ref={textRef}>
          <h2 id="rotate-title" className="rotate-title">
            Rotate Your Device
          </h2>
          <p id="rotate-description" className="rotate-description">
            For the best experience, please rotate your device to landscape mode
          </p>
        </div>

        {/* Arrow Indicator */}
        <div className="arrow-container" ref={arrowRef}>
          <svg 
            viewBox="0 0 24 24" 
            className="arrow-icon"
            width="32" 
            height="32"
          >
            <path 
              d="M12 2L12 22M12 22L22 12M12 22L2 12" 
              stroke="rgba(6, 182, 212, 0.8)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Background Elements */}
        <div className="rotate-bg">
          <div className="bg-grid"></div>
          <div className="bg-particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotateGate;
