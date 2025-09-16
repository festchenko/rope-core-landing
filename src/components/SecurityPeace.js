import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  ClockIcon,
  EyeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const SecurityPeace = () => {
  const securityFeatures = [
    {
      icon: ClockIcon,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of all critical systems, even when you're away",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: EyeIcon,
      title: "Predictive Alerts",
      description: "AI-powered early warning system prevents issues before they occur",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPinIcon,
      title: "AI Guidance",
      description: "Intelligent recommendations for optimal performance and safety",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Always Secure",
      description: "Military-grade encryption and secure protocols protect your data",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Because Freedom Feels Better When It's Secure
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            24/7 monitoring, predictive alerts, and AI guidance — your yacht is always safe, wherever you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105">
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

        {/* Security status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-green-500/10 border border-green-500/20 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-light tracking-[0.1em] text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Security Status
              </span>
            </div>
            <div className="w-px h-4 bg-green-500/30"></div>
            <span className="text-white font-light tracking-[0.05em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              All Systems Protected
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityPeace;
