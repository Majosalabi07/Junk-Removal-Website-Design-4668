import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar } = FiIcons;

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown',
      rating: 5,
      review: 'FastClean was amazing! They removed all my old furniture in under 2 hours. Professional, efficient, and reasonably priced. Highly recommend!',
      service: 'Furniture Removal'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Westside',
      rating: 5,
      review: 'Had construction debris that needed to go ASAP. They came the same day I called and cleaned everything up perfectly. Will definitely use again.',
      service: 'Construction Debris'
    },
    {
      name: 'Jennifer Chen',
      location: 'Eastside',
      rating: 5,
      review: 'Estate cleanout after my grandmother passed. The team was respectful, thorough, and helped donate items to charity. Couldn\'t ask for better service.',
      service: 'Estate Cleanout'
    },
    {
      name: 'David Thompson',
      location: 'Northside',
      rating: 5,
      review: 'Office renovation cleanup was handled perfectly. They worked around our schedule and made sure nothing was damaged. True professionals.',
      service: 'Office Cleanout'
    },
    {
      name: 'Lisa Martinez',
      location: 'Southside',
      rating: 5,
      review: 'Same-day pickup when I needed it most. Fair pricing, friendly crew, and they even swept up after. This is how all service companies should operate.',
      service: 'Same-Day Pickup'
    },
    {
      name: 'Robert Kim',
      location: 'Central',
      rating: 5,
      review: 'Basement cleanout including old appliances and furniture. They handled everything with care and left the space spotless. Excellent value for money.',
      service: 'Basement Cleanout'
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <SafeIcon
            key={i}
            icon={FiStar}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary-gray mb-6">
            CUSTOMER <span className="text-primary-orange">REVIEWS</span>
          </h2>
          <p className="text-xl text-secondary-gray-light max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-secondary-gray">{review.name}</h4>
                  <p className="text-sm text-secondary-gray-light">{review.location}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              
              <p className="text-secondary-gray-light mb-4 italic">
                "{review.review}"
              </p>
              
              <div className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-semibold inline-block">
                {review.service}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-primary-orange/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-gray mb-4">
              Join Our Satisfied Customers
            </h3>
            <p className="text-secondary-gray-light mb-6">
              Over 500+ successful junk removals and counting. Experience the FastClean difference today.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary-orange hover:bg-primary-orange-dark text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;