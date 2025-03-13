// import React from 'react';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import Services from './Services';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      
      <Services/>

      {/* Founder Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ scale: 0, borderRadius: "100%" }}
              whileInView={{ scale: 1, borderRadius: "20%" }}
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Founder"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <motion.div
                initial={{ scale: 1.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              />
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-1 text-center md:text-left"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="outfit-bold text-3xl md:text-4xl mb-6"
              >
                Meet Our Founder
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="outfit text-gray-600 text-lg mb-8"
              >
                With over 20 years of experience in interior design, our founder
                Sarah Anderson has transformed countless spaces into stunning
                environments that inspire and delight. Her vision and dedication
                to excellence continue to drive our company forward.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-full text-lg outfit hover:bg-gray-800 transition-colors duration-200"
              >
                Read Our Story
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;