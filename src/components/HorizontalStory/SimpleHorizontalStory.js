import React, { useState, useEffect } from 'react';
import './horizontal.css';

const SimpleHorizontalStory = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [showRotateGate, setShowRotateGate] = useState(false);

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

  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth < 769;
      const isLandscapeMode = window.innerWidth > window.innerHeight;
      
      setShowRotateGate(isMobileDevice && !isLandscapeMode);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  const goToPanel = (index) => {
    setCurrentPanel(index);
  };

  if (showRotateGate) {
    return (
      <div className="rotate-gate">
        <div className="rotate-content">
          <h2>Rotate Your Device</h2>
          <p>For the best experience, please rotate your device to landscape mode</p>
        </div>
      </div>
    );
  }

  return (
    <div className="horizontal-story">
      {/* Simple Navigation */}
      <nav className="side-nav">
        <div className="nav-container">
          <ul className="nav-items">
            {panels.map((panel, index) => (
              <li key={panel.id} className="nav-item">
                <button
                  className={`nav-button ${currentPanel === index ? 'active' : ''}`}
                  onClick={() => goToPanel(index)}
                >
                  <div className="nav-indicator">
                    <div className="indicator-dot"></div>
                    <div className="indicator-line"></div>
                  </div>
                  <div className="nav-content">
                    <span className="nav-title">{panel.title}</span>
                    <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Horizontal Track */}
      <div className="horizontal-track" style={{ transform: `translateX(-${currentPanel * 100}vw)` }}>
        {panels.map((panel, index) => (
          <div key={panel.id} className={`panel panel-${panel.id}`}>
            <div className="panel-content">
              <div className="content-layer">
                <h1 className="panel-headline">{panel.content.headline}</h1>
                <p className="panel-subline">{panel.content.subline}</p>
                <p className="panel-description">{panel.content.description}</p>
                <button className="magnetic-cta">
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
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

export default SimpleHorizontalStory;
