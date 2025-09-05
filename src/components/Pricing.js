import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
  const pricingItems = [
    {
      title: "Hardware Kit",
      price: "$1,200",
      description: "Complete sensor suite and control modules",
      features: [
        "GPS tracking module",
        "Battery monitoring sensors", 
        "Bilge water sensors",
        "Temperature sensors",
        "Control relays",
        "Wireless communication hub"
      ],
      popular: false,
      color: "blue"
    },
    {
      title: "Installation",
      price: "$300",
      description: "Professional installation by certified technicians",
      features: [
        "On-site installation",
        "System configuration",
        "Testing and calibration",
        "User training",
        "30-day support"
      ],
      popular: false,
      color: "green"
    },
    {
      title: "Subscription",
      price: "$40",
      period: "/month",
      description: "Cloud platform and mobile app access",
      features: [
        "Real-time monitoring",
        "Push notifications",
        "Historical data",
        "Mobile app access",
        "24/7 support",
        "Regular updates"
      ],
      popular: true,
      color: "purple"
    }
  ];

  const getColorClasses = (color, popular) => {
    const colors = {
      blue: {
        border: popular ? "border-blue-500" : "border-blue-200",
        bg: popular ? "bg-blue-500/5" : "bg-blue-50/50",
        accent: "text-blue-500",
        button: popular ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-50 hover:bg-blue-100 text-blue-600"
      },
      green: {
        border: popular ? "border-green-500" : "border-green-200",
        bg: popular ? "bg-green-500/5" : "bg-green-50/50",
        accent: "text-green-500",
        button: popular ? "bg-green-500 hover:bg-green-600" : "bg-green-50 hover:bg-green-100 text-green-600"
      },
      purple: {
        border: popular ? "border-purple-500" : "border-purple-200",
        bg: popular ? "bg-purple-500/5" : "bg-purple-50/50",
        accent: "text-purple-500",
        button: popular ? "bg-purple-500 hover:bg-purple-600" : "bg-purple-50 hover:bg-purple-100 text-purple-600"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(45deg, #f0f9ff, #e0f2fe, #f0fdf4)",
            "linear-gradient(45deg, #f0fdf4, #fef3c7, #fdf2f8)",
            "linear-gradient(45deg, #fdf2f8, #f0f9ff, #e0f2fe)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 tracking-tight">
            Simple pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Everything you need to transform your yacht into a smart vessel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingItems.map((item, index) => {
            const colors = getColorClasses(item.color, item.popular);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className={`relative bg-white rounded-2xl p-8 border ${item.popular ? 'border-black shadow-lg' : 'border-gray-200'} transition-all duration-300 hover:shadow-xl`}
                  whileHover={{ y: -5 }}
                >
                  {item.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </motion.div>
                  )}
                  
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-medium text-black mb-2 group-hover:text-gray-800 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="text-4xl font-light text-black group-hover:scale-110 transition-transform duration-300">
                          {item.price}
                        </span>
                        {item.period && (
                          <span className="text-lg text-gray-500 ml-1">{item.period}</span>
                        )}
                      </div>
                      <p className="text-gray-600 font-light group-hover:text-gray-700 transition-colors">
                        {item.description}
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {item.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`w-5 h-5 ${colors.accent} rounded-full mt-0.5 mr-3 flex-shrink-0 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}
                          >
                            <CheckIcon className="w-3 h-3" />
                          </motion.div>
                          <span className="text-gray-600 font-light group-hover:text-gray-700 transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                        item.popular 
                          ? 'bg-black text-white hover:bg-gray-800' 
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.popular ? 'Get Started' : 'Learn More'}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="bg-gradient-to-r from-gray-900 to-black text-white p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
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
                Total first-year cost: $2,180
              </h3>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Hardware ($1,200) + Installation ($300) + 12 months subscription ($480)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
