import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Panel = ({ panel, index, isActive, enable3D }) => {
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    if (!panelRef.current || !isActive) return;

    const tl = gsap.timeline();
    
    // Animate content on panel activation
    tl.fromTo(contentRef.current.children, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.95
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      }
    );

    // Animate background elements
    if (backgroundRef.current) {
      gsap.fromTo(backgroundRef.current.children,
        { opacity: 0, scale: 1.1 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power2.out'
        }
      );
    }

    // Animate foreground elements
    if (foregroundRef.current) {
      gsap.fromTo(foregroundRef.current.children,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.3
        }
      );
    }

    return () => {
      tl.kill();
    };
  }, [isActive]);

  const renderPanelContent = () => {
    switch (panel.id) {
      case 'overview':
        return (
          <div className="panel-content overview-panel">
            <div className="background-layer" ref={backgroundRef}>
              <div className="abstract-yacht" data-speed="-5">
                <svg viewBox="0 0 400 200" className="yacht-silhouette">
                  <path d="M50 150 L100 120 L200 100 L300 120 L350 150 L300 180 L200 200 L100 180 Z" 
                        fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2"/>
                  <circle cx="200" cy="100" r="3" fill="rgba(6, 182, 212, 0.6)" className="pulse-dot"/>
                </svg>
              </div>
              <div className="grid-overlay" data-speed="-2">
                <div className="grid-lines"></div>
              </div>
            </div>
            
            <div className="content-layer" ref={contentRef}>
              <h1 className="panel-headline">{panel.content.headline}</h1>
              <p className="panel-subline">{panel.content.subline}</p>
              <p className="panel-description">{panel.content.description}</p>
              <button className="magnetic-cta">
                <span>Explore Rope.core</span>
                <div className="cta-glow"></div>
              </button>
            </div>
          </div>
        );

      case 'digital-twin':
        return (
          <div className="panel-content digital-twin-panel">
            <div className="background-layer" ref={backgroundRef}>
              <div className="hud-overlay" data-speed="-3">
                <div className="hud-grid"></div>
                <div className="vital-indicators">
                  <div className="vital-item" data-speed="-1">
                    <div className="vital-bar battery"></div>
                    <span>Battery: 87%</span>
                  </div>
                  <div className="vital-item" data-speed="-1">
                    <div className="vital-bar bilge"></div>
                    <span>Bilge: Normal</span>
                  </div>
                  <div className="vital-item" data-speed="-1">
                    <div className="vital-bar engine"></div>
                    <span>Engine: Optimal</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-layer" ref={contentRef}>
              <h1 className="panel-headline">{panel.content.headline}</h1>
              <p className="panel-subline">{panel.content.subline}</p>
              <p className="panel-description">{panel.content.description}</p>
              <button className="magnetic-cta">
                <span>View Digital Twin</span>
                <div className="cta-glow"></div>
              </button>
            </div>
          </div>
        );

      case 'sensors-kit':
        return (
          <div className="panel-content sensors-panel">
            <div className="background-layer" ref={backgroundRef}>
              <div className="sensor-diagram" data-speed="-4">
                <svg viewBox="0 0 400 300" className="sensor-layout">
                  <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" className="sensor-node"/>
                  <circle cx="300" cy="150" r="20" fill="none" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" className="sensor-node"/>
                  <circle cx="200" cy="200" r="20" fill="none" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" className="sensor-node"/>
                  <line x1="100" y1="100" x2="200" y2="200" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1"/>
                  <line x1="300" y1="150" x2="200" y2="200" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1"/>
                </svg>
              </div>
            </div>
            
            <div className="content-layer" ref={contentRef}>
              <h1 className="panel-headline">{panel.content.headline}</h1>
              <p className="panel-subline">{panel.content.subline}</p>
              <p className="panel-description">{panel.content.description}</p>
              <button className="magnetic-cta">
                <span>View Sensor Kit</span>
                <div className="cta-glow"></div>
              </button>
            </div>
          </div>
        );

      case 'ai-prognosis':
        return (
          <div className="panel-content ai-panel">
            <div className="background-layer" ref={backgroundRef}>
              <div className="trend-curves" data-speed="-6">
                <svg viewBox="0 0 400 200" className="trend-chart">
                  <path d="M50 150 Q150 100 250 80 T350 60" 
                        fill="none" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="3" className="trend-line"/>
                  <path d="M50 120 Q150 90 250 70 T350 50" 
                        fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" className="trend-line"/>
                </svg>
              </div>
            </div>
            
            <div className="content-layer" ref={contentRef}>
              <h1 className="panel-headline">{panel.content.headline}</h1>
              <p className="panel-subline">{panel.content.subline}</p>
              <p className="panel-description">{panel.content.description}</p>
              <button className="magnetic-cta">
                <span>See AI in Action</span>
                <div className="cta-glow"></div>
              </button>
            </div>
          </div>
        );

      case 'open-platform':
        return (
          <div className="panel-content platform-panel">
            <div className="background-layer" ref={backgroundRef}>
              <div className="ecosystem-logos" data-speed="-2">
                <div className="logo-marquee">
                  <div className="logo-item">API</div>
                  <div className="logo-item">SDK</div>
                  <div className="logo-item">Webhook</div>
                  <div className="logo-item">REST</div>
                </div>
              </div>
            </div>
            
            <div className="content-layer" ref={contentRef}>
              <h1 className="panel-headline">{panel.content.headline}</h1>
              <p className="panel-subline">{panel.content.subline}</p>
              <p className="panel-description">{panel.content.description}</p>
              <button className="magnetic-cta">
                <span>Explore Platform</span>
                <div className="cta-glow"></div>
              </button>
            </div>
          </div>
        );

      case 'fleet':
        return (
          <div className="panel-content fleet-panel">
            <div className="background-layer" ref={backgroundRef}>
              <div className="fleet-dashboard" data-speed="-3">
                <div className="kpi-cards">
                  <div className="kpi-card" data-speed="-1">
                    <div className="kpi-value">24/7</div>
                    <div className="kpi-label">Monitoring</div>
                  </div>
                  <div className="kpi-card" data-speed="-1">
                    <div className="kpi-value">99.9%</div>
                    <div className="kpi-label">Uptime</div>
                  </div>
                  <div className="kpi-card" data-speed="-1">
                    <div className="kpi-value">Secure</div>
                    <div className="kpi-label">Connection</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-layer" ref={contentRef}>
              <h1 className="panel-headline">{panel.content.headline}</h1>
              <p className="panel-subline">{panel.content.subline}</p>
              <p className="panel-description">{panel.content.description}</p>
              <button className="magnetic-cta">
                <span>Fleet Solutions</span>
                <div className="cta-glow"></div>
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="panel-content">
            <div className="content-layer" ref={contentRef}>
              <h1 className="panel-headline">{panel.content.headline}</h1>
              <p className="panel-subline">{panel.content.subline}</p>
              <p className="panel-description">{panel.content.description}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`panel panel-${panel.id} ${isActive ? 'active' : ''}`}
      ref={panelRef}
      data-panel={index}
    >
      {renderPanelContent()}
    </div>
  );
};

export default Panel;
