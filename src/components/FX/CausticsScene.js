import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CausticsScene = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mountElement = mountRef.current;
    if (!mountElement) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountElement.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create caustics plane
    const geometry = new THREE.PlaneGeometry(20, 10, 64, 32);
    
    // Create shader material for caustics effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        color1: { value: new THREE.Color(0x06b6d4) }, // cyan
        color2: { value: new THREE.Color(0x0891b2) }, // darker cyan
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          vec3 pos = position;
          pos.z += sin(pos.x * 0.5 + time) * 0.1;
          pos.z += cos(pos.y * 0.3 + time * 0.8) * 0.05;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vec2 uv = vUv;
          
          // Create caustics pattern
          float caustics = 0.0;
          caustics += sin(uv.x * 10.0 + time) * 0.5 + 0.5;
          caustics += sin(uv.y * 8.0 + time * 0.8) * 0.3 + 0.3;
          caustics += sin((uv.x + uv.y) * 6.0 + time * 1.2) * 0.2 + 0.2;
          
          // Add some noise
          caustics += sin(uv.x * 20.0 + time * 2.0) * 0.1;
          caustics += sin(uv.y * 15.0 + time * 1.5) * 0.1;
          
          // Normalize and enhance
          caustics = caustics / 1.2;
          caustics = pow(caustics, 2.0);
          
          // Mix colors
          vec3 color = mix(color2, color1, caustics);
          
          // Add transparency
          float alpha = caustics * 0.3;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 6; // Slight tilt
    scene.add(plane);

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x06b6d4, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 8;
    camera.position.y = 2;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (material.uniforms.time) {
        material.uniforms.time.value += 0.01;
      }
      
      // Subtle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5;
      camera.position.y = 2 + Math.cos(Date.now() * 0.0003) * 0.3;
      
      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (material.uniforms.resolution) {
        material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Handle visibility change (pause when tab is hidden)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      } else {
        animate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (mountElement && renderer.domElement) {
        mountElement.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      className="caustics-scene" 
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in-out'
      }}
    />
  );
};

export default CausticsScene;
