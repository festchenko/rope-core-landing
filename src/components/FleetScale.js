import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOffice2Icon,
  ChartBarIcon,
  UsersIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const FleetScale = () => {
  const fleetFeatures = [
    {
      icon: BuildingOffice2Icon,
      title: "Single Yacht",
      description: "Perfect for individual owners who demand precision and control",
      scale: "1"
    },
    {
      icon: ChartBarIcon,
      title: "Charter Fleet",
      description: "Manage multiple vessels with unified monitoring and reporting",
      scale: "5-50"
    },
    {
      icon: UsersIcon,
      title: "Enterprise",
      description: "Complete fleet management for large operations and marinas",
      scale: "50+"
    },
    {
      icon: GlobeAltIcon,
      title: "Global Operations",
      description: "Worldwide fleet coordination with real-time insights",
      scale: "∞"
    }
  ];

  const handleFleetSolutions = () => {
    // Scroll to CallToAction section
    const callToActionSection = document.querySelector('#call-to-action');
    if (callToActionSection) {
      callToActionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v30h30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-[0.1em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            One or Many, Always in Control
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Rope.core scales from individual owners to full charter fleets. Monitor, predict, and manage with ease.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {fleetFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105">
                {/* Scale indicator */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                    <span className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {feature.scale}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-light text-white mb-3 tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-light tracking-[0.02em] text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button 
            onClick={handleFleetSolutions}
            className="relative bg-white text-black px-10 py-4 rounded-full font-semibold text-base overflow-hidden group border-2 border-white cursor-pointer"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 tracking-[0.1em]">Talk to Us About Fleet Solutions</span>
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
    </section>
  );
};

export default FleetScale;
