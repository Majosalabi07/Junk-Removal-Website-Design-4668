import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiTool, FiTruck, FiTrash2, FiBox, FiShield } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Furniture Removal',
      description: 'Sofas, beds, tables, appliances, and all household furniture removed safely and efficiently.',
      features: ['Heavy lifting included', 'No damage guarantee', 'Same-day pickup']
    },
    {
      icon: FiTool,
      title: 'Construction Debris',
      description: 'Drywall, lumber, concrete, tiles, and all construction waste cleared from your property.',
      features: ['Commercial & residential', 'Proper disposal', 'Site cleanup']
    },
    {
      icon: FiTruck,
      title: 'Same-Day Pickup',
      description: 'Need it gone today? We offer same-day service for urgent junk removal needs.',
      features: ['Emergency service', 'Flexible scheduling', 'Quick response']
    },
    {
      icon: FiTrash2,
      title: 'Estate Cleanouts',
      description: 'Complete property cleanouts for estates, foreclosures, and property management.',
      features: ['Full-service cleanout', 'Donation sorting', 'Respectful service']
    },
    {
      icon: FiBox,
      title: 'Office Cleanouts',
      description: 'Desks, chairs, electronics, and all office equipment removed and recycled responsibly.',
      features: ['Document destruction', 'Electronics recycling', 'Minimal downtime']
    },
    {
      icon: FiShield,
      title: 'Hazmat Disposal',
      description: 'Safe disposal of paint, chemicals, batteries, and other hazardous materials.',
      features: ['EPA compliant', 'Certified disposal', 'Safety first']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary-gray mb-6">
            OUR <span className="text-primary-orange">SERVICES</span>
          </h2>
          <p className="text-xl text-secondary-gray-light max-w-2xl mx-auto">
            We handle all types of junk removal with professional service and competitive pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-orange rounded-lg flex items-center justify-center mb-6">
                <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-gray mb-4">
                {service.title}
              </h3>
              
              <p className="text-secondary-gray-light mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-secondary-gray-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;