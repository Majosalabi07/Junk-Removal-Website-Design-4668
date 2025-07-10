import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiTruck, FiHome, FiBuilding } = FiIcons;

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Small Load',
      icon: FiHome,
      price: '$149',
      description: 'Perfect for small cleanouts and single items',
      features: [
        'Up to 1/4 truck load',
        'Furniture removal',
        'Appliance pickup',
        'Same-day service available',
        'Free estimate',
        'Cleanup included'
      ],
      popular: false
    },
    {
      name: 'Medium Load',
      icon: FiTruck,
      price: '$299',
      description: 'Ideal for room cleanouts and renovations',
      features: [
        'Up to 1/2 truck load',
        'Multiple room cleanout',
        'Construction debris',
        'Same-day service available',
        'Free estimate',
        'Cleanup included',
        'Donation sorting'
      ],
      popular: true
    },
    {
      name: 'Large Load',
      icon: FiBuilding,
      price: '$499',
      description: 'Best for full property and estate cleanouts',
      features: [
        'Up to full truck load',
        'Whole house cleanout',
        'Commercial cleanouts',
        'Same-day service available',
        'Free estimate',
        'Cleanup included',
        'Donation sorting',
        'Hazmat disposal'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { service: 'Heavy Item Surcharge', price: '$25-50' },
    { service: 'Stairs (per flight)', price: '$25' },
    { service: 'Same-Day Service', price: '$50' },
    { service: 'Weekend Service', price: '$25' },
    { service: 'Hazmat Disposal', price: '$15-75' }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary-gray mb-6">
            TRANSPARENT <span className="text-primary-orange">PRICING</span>
          </h2>
          <p className="text-xl text-secondary-gray-light max-w-2xl mx-auto">
            No hidden fees, no surprises. Get an upfront quote before we start any work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                tier.popular ? 'ring-4 ring-primary-orange transform scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-orange text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={tier.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-gray mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-black text-primary-orange mb-2">
                  {tier.price}
                </div>
                <p className="text-secondary-gray-light">
                  {tier.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-orange flex-shrink-0" />
                    <span className="text-secondary-gray-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-primary-orange hover:bg-primary-orange-dark text-white'
                    : 'bg-gray-100 hover:bg-primary-orange hover:text-white text-secondary-gray'
                }`}
              >
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-secondary-gray mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                <span className="text-secondary-gray-light">{item.service}</span>
                <span className="font-bold text-primary-orange">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary-orange/10 rounded-lg">
            <p className="text-center text-secondary-gray">
              <strong>Free estimates always included!</strong> Final pricing determined after on-site evaluation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;