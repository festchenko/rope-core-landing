import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -150]);

  const handleJoinPilotProgram = () => {
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
        x: (e.clientX - centerX) / 30, // Более плавное движение
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black text-white mb-6 tracking-[0.15em] leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            rope.core
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-light text-gray-300 mb-8 tracking-[0.2em] uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Digital Heart of Your Yacht
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm md:text-base text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Monitoring, safety, and control in one app.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button 
            onClick={handleJoinPilotProgram}
            className="relative bg-white text-black px-12 py-5 rounded-2xl font-semibold text-lg overflow-hidden group shadow-2xl cursor-pointer"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="relative z-10 tracking-wide">Join Pilot Program</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.4)",
                  "0 0 0 20px rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.button>
        </motion.div>
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
