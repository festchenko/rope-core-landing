import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cog6ToothIcon, 
  CloudIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Install rope.core kit",
      description: "Professional installation of sensors and control modules throughout your yacht.",
      icon: Cog6ToothIcon,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      number: "02", 
      title: "Data goes to the cloud",
      description: "All sensor data is securely transmitted to our cloud platform for processing.",
      icon: CloudIcon,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      number: "03",
      title: "Control everything from your phone",
      description: "Monitor, control, and receive alerts through our intuitive mobile app.",
      icon: DevicePhoneMobileIcon,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 tracking-[0.1em]">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light tracking-[0.05em]">
            Simple setup. Powerful results.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-6 -translate-y-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  />
                )}
                
                <div className="relative z-10">
                  {/* Icon container with animation */}
                  <motion.div
                    className={`w-24 h-24 mx-auto mb-6 ${step.bgColor} ${step.borderColor} border-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500`}
                    whileHover={{ rotate: 5 }}
                  >
                    <step.icon className={`w-12 h-12 ${step.color}`} />
                    
                    {/* Pulsing animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ${step.borderColor} border-2`}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                  
                  {/* Step number */}
                  <motion.div
                    className="text-6xl font-light text-gray-200 mb-4 group-hover:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>
                  
                  <h3 className="text-2xl font-light text-black mb-4 group-hover:text-gray-800 transition-colors tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors tracking-[0.02em]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced visual flow indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="flex items-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
                {i < 4 && (
                  <motion.div
                    className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 + i * 0.1 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
