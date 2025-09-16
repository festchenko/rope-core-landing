import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -150]);

  const handleGetEarlyAccess = () => {
    // Scroll to CallToAction section
    const callToActionSection = document.querySelector('#call-to-action');
    if (callToActionSection) {
      callToActionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({
        x: (e.clientX - centerX) / 30, // Smoother movement
        y: (e.clientY - centerY) / 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Cinematic yacht background */}
      <div className="absolute inset-0">
        {/* Background layer 1 - Main yacht image */}
        <motion.div
          style={{
            y,
            backgroundImage: `url('https://images.unsplash.com/photo-1720974299501-02e16f2ff01e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`,
            backgroundPosition: `${50 + mousePosition.x * 0.3}% ${50 + mousePosition.y * 0.3}%`,
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-out"
        />
        
        {/* Background layer 2 - Overlay for depth */}
        <motion.div
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale(1.05)`,
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 transition-all duration-700 ease-out"
        />
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70"></div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              transform: `translate(${mousePosition.x * (0.1 + i * 0.05)}px, ${mousePosition.y * (0.1 + i * 0.05)}px)`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <motion.div 
        className="container-max section-padding text-center relative z-10"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      >
        {/* Poster-style content container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative lines */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 64 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent via-white/30 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 64 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          
          {/* Side decorative elements */}
          <motion.div
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-[0.1em] leading-[0.9] relative" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <motion.span
                className="inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 40px rgba(255,255,255,0.6)",
                    "0 0 20px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                rope.core
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-light text-white tracking-[0.2em] uppercase relative" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="relative">
                Digital Heart of Your Yacht
                <motion.div
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-white/60 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10"
          >
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light tracking-[0.1em] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Your AI Copilot for safe, predictive, and effortless sailing.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              onClick={handleGetEarlyAccess}
              className="relative bg-white text-black px-10 py-4 rounded-full font-semibold text-base overflow-hidden group border-2 border-white cursor-pointer"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 tracking-[0.1em]">Get Early Access</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/5"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255, 255, 255, 0.3)",
                    "0 0 0 15px rgba(255, 255, 255, 0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
