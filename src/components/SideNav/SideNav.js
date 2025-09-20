import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './SideNav.css';

const SideNav = ({ panels, currentPanel, onPanelClick }) => {
  const navRef = useRef(null);
  const progressRef = useRef(null);
  const [hoveredPanel, setHoveredPanel] = useState(null);

  useEffect(() => {
    if (!progressRef.current) return;

    const progress = ((currentPanel + 1) / panels.length) * 100;
    gsap.to(progressRef.current, {
      height: `${progress}%`,
      duration: 0.6,
      ease: 'power2.out'
    });
  }, [currentPanel, panels.length]);

  const handlePanelHover = (index) => {
    setHoveredPanel(index);
  };

  const handlePanelLeave = () => {
    setHoveredPanel(null);
  };

  const handlePanelClick = (index) => {
    onPanelClick(index);
  };

  return (
    <nav className="side-nav" ref={navRef} role="navigation" aria-label="Story navigation">
      <div className="nav-container">
        {/* Progress Bar */}
        <div className="nav-progress">
          <div className="progress-track"></div>
          <div className="progress-fill" ref={progressRef}></div>
        </div>

        {/* Navigation Items */}
        <ul className="nav-items">
          {panels.map((panel, index) => (
            <li key={panel.id} className="nav-item">
              <button
                className={`nav-button ${currentPanel === index ? 'active' : ''} ${hoveredPanel === index ? 'hovered' : ''}`}
                onClick={() => handlePanelClick(index)}
                onMouseEnter={() => handlePanelHover(index)}
                onMouseLeave={handlePanelLeave}
                aria-current={currentPanel === index ? 'true' : 'false'}
                aria-label={`Go to ${panel.title} section`}
              >
                <div className="nav-indicator">
                  <div className="indicator-dot"></div>
                  <div className="indicator-line"></div>
                </div>
                
                <div className="nav-content">
                  <span className="nav-title">{panel.title}</span>
                  <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
                </div>

                {/* Tooltip */}
                {hoveredPanel === index && (
                  <div className="nav-tooltip">
                    <div className="tooltip-content">
                      <h4>{panel.title}</h4>
                      <p>{panel.content.subline}</p>
                    </div>
                    <div className="tooltip-arrow"></div>
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Navigation Footer */}
        <div className="nav-footer">
          <div className="nav-logo">
            <span className="logo-text">rope.core</span>
          </div>
          <div className="nav-status">
            <div className="status-dot"></div>
            <span className="status-text">Connected</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
