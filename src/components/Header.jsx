import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FC</span>
            </div>
            <span className="text-2xl font-bold text-secondary-gray">FastClean</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-secondary-gray hover:text-primary-orange transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-secondary-gray hover:text-primary-orange transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-secondary-gray hover:text-primary-orange transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-secondary-gray hover:text-primary-orange transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:+1234567890"
              className="hidden md:flex items-center space-x-2 text-primary-orange font-semibold hover:text-primary-orange-dark transition-colors"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>(123) 456-7890</span>
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-secondary-gray hover:text-primary-orange transition-colors"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-secondary-gray hover:text-primary-orange transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-secondary-gray hover:text-primary-orange transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-secondary-gray hover:text-primary-orange transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-secondary-gray hover:text-primary-orange transition-colors"
              >
                Contact
              </button>
              <a 
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-primary-orange font-semibold"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;