import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiTruck, FiCheckCircle } = FiIcons;

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-secondary-gray to-secondary-gray-dark pt-20">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span className="text-primary-orange">FAST</span> JUNK
              <br />
              REMOVAL
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional junk removal service with same-day pickup available. 
              We handle everything from furniture to construction debris.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={scrollToContact}
              className="bg-primary-orange hover:bg-primary-orange-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              GET FREE QUOTE NOW
            </button>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary-gray px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              CALL (123) 456-7890
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-white">
              <SafeIcon icon={FiClock} className="w-8 h-8 text-primary-orange" />
              <span className="font-semibold text-lg">Same-Day Service</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <SafeIcon icon={FiTruck} className="w-8 h-8 text-primary-orange" />
              <span className="font-semibold text-lg">Full-Service Removal</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-primary-orange" />
              <span className="font-semibold text-lg">Licensed & Insured</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;