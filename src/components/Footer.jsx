import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-gray-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FC</span>
              </div>
              <span className="text-2xl font-bold">FastClean</span>
            </div>
            <p className="text-gray-300 mb-6">
              Professional junk removal service with same-day pickup available. 
              Licensed, insured, and committed to exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary-gray rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-gray rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-gray rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-primary-orange transition-colors">Furniture Removal</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-orange transition-colors">Construction Debris</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-orange transition-colors">Estate Cleanouts</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-orange transition-colors">Office Cleanouts</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-orange transition-colors">Same-Day Pickup</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-orange transition-colors">Hazmat Disposal</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-primary-orange transition-colors">Services</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-primary-orange transition-colors">Reviews</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-primary-orange transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">FAQ</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-orange" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-orange transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-orange" />
                <a href="mailto:info@fastclean.com" className="text-gray-300 hover:text-primary-orange transition-colors">
                  info@fastclean.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-orange" />
                <span className="text-gray-300">Metro Area & Surrounding Cities</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-primary-orange" />
                <div className="text-gray-300">
                  <div>Mon-Sat: 7AM-7PM</div>
                  <div>Sun: 9AM-5PM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-secondary-gray pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © {currentYear} FastClean Junk Removal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;