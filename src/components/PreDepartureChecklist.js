import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  Battery100Icon,
  BeakerIcon,
  Cog6ToothIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PreDepartureChecklist = () => {
  const checklistItems = [
    {
      icon: Battery100Icon,
      title: "Battery Status",
      description: "Full charge verified, backup systems online",
      status: "checked"
    },
    {
      icon: BeakerIcon,
      title: "Bilge Pumps",
      description: "All pumps operational, sensors calibrated",
      status: "checked"
    },
    {
      icon: Cog6ToothIcon,
      title: "Engine Readiness",
      description: "Engine diagnostics complete, fuel levels optimal",
      status: "checked"
    },
    {
      icon: ShieldCheckIcon,
      title: "Safety Systems",
      description: "Emergency equipment verified, communication tested",
      status: "checked"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            Pre-Departure Checklist
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Like aviation, your yacht runs a full system check before leaving the dock. Confidence, every time.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {checklistItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-3 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-light text-white tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {item.title}
                        </h3>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        </motion.div>
                      </div>
                      <p className="text-gray-400 font-light tracking-[0.02em] text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress line */}
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aviation-style status indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-light tracking-[0.1em] text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                All Systems Go
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreDepartureChecklist;
