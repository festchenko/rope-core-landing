import React from 'react';
import { motion } from 'framer-motion';
import { 
  Battery0Icon, 
  BeakerIcon, 
  LockClosedIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline';

const Problem = () => {
  const problems = [
    {
      icon: Battery0Icon,
      title: "Dead Batteries",
      description: "Unexpected power failures cost thousands in emergency repairs and lost charter revenue.",
      color: "text-red-500"
    },
    {
      icon: BeakerIcon,
      title: "Silent Leaks",
      description: "Water damage goes unnoticed until it's too late, causing extensive structural damage.",
      color: "text-blue-500"
    },
    {
      icon: LockClosedIcon,
      title: "Theft & Vandalism",
      description: "Yachts are vulnerable targets with limited security monitoring and response capabilities.",
      color: "text-orange-500"
    },
    {
      icon: BoltIcon,
      title: "System Complexity",
      description: "Multiple disconnected systems create confusion and increase maintenance costs.",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
      
      {/* Subtle pattern overlay */}
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-[0.1em]">
            Because freedom feels better when it's secure.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-[0.05em]">
            rope.core protects your yacht so you can enjoy the journey, not worry about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:border-white/20">
                <motion.div
                  className={`w-16 h-16 mb-6 ${problem.color} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <problem.icon className="w-full h-full" />
                </motion.div>
                
                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-gray-100 transition-colors tracking-wide">
                  {problem.title}
                </h3>
                <p className="text-gray-300 font-light leading-relaxed group-hover:text-gray-200 transition-colors tracking-[0.02em]">
                  {problem.description}
                </p>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default Problem;
