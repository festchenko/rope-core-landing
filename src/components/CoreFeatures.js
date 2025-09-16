import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  EyeIcon, 
  BuildingOffice2Icon, 
  WifiIcon 
} from '@heroicons/react/24/outline';

const CoreFeatures = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "Predictive AI",
      description: "From alerts to foresight. Rope.core anticipates issues and guides your next move.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: EyeIcon,
      title: "Digital Twin",
      description: "Visualize your yacht in real time — batteries, bilge, engine, and security at a glance.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: BuildingOffice2Icon,
      title: "Fleet Ready",
      description: "From a single yacht to an entire charter fleet. One dashboard, total control.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: WifiIcon,
      title: "Always Connected",
      description: "Secure cloud + offline protocols keep your yacht protected anywhere.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Core Features
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Four pillars of intelligent yacht management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-8 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-light text-white mb-4 tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-light tracking-[0.02em] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {feature.description}
                </p>

                {/* Hover effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl`}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default CoreFeatures;
