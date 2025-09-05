import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  Battery100Icon, 
  BeakerIcon, 
  FireIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const Solution = () => {
  const features = [
    {
      icon: MapPinIcon,
      title: "GPS Tracking",
      description: "Real-time location monitoring with geofencing alerts.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Battery100Icon,
      title: "Battery Monitoring",
      description: "Continuous power level tracking with predictive alerts.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: BeakerIcon,
      title: "Bilge Water Alerts",
      description: "Instant notifications when water levels rise above normal.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      icon: FireIcon,
      title: "Temperature Control",
      description: "Monitor engine and cabin temperatures remotely.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Dashboard",
      description: "Control everything from your smartphone, anywhere.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 tracking-tight">
            One app. Total control.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className={`relative p-8 rounded-2xl border-2 ${feature.bgColor} ${feature.borderColor} hover:shadow-xl transition-all duration-500 group-hover:scale-105`}
                whileHover={{ y: -5 }}
              >
                {/* Animated icon container */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 ${feature.color} relative`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-full h-full" />
                  
                  {/* Pulsing ring animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 ${feature.borderColor}`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
                
                <h3 className="text-2xl font-medium text-black mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-black text-white p-12 rounded-3xl max-w-4xl mx-auto overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-light mb-6">
                Everything you need. Nothing you don't.
              </h3>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                rope.core combines all essential yacht monitoring and control features into one elegant, easy-to-use platform.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
