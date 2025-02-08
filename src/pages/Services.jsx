import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Palette, Building2, TreePine, Lightbulb, Leaf } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description: "Creating innovative and functional architectural solutions",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Crafting beautiful and functional interior spaces",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Optimizing layouts for maximum efficiency",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: TreePine,
    title: "Landscape Design",
    description: "Integrating architecture with natural surroundings",
    image: "https://media.istockphoto.com/id/915045118/photo/modern-apartment-buildings-in-a-green-residential-area-in-the-city.jpg?s=2048x2048&w=is&k=20&c=ENQYELSFJYtQeXbJD4gF05xndmqt2DHQ_ff_42true4="
  },
  {
    icon: Lightbulb,
    title: "Renovation",
    description: "Transforming existing spaces into modern masterpieces",
    image: "https://plus.unsplash.com/premium_photo-1682597000374-9cfb5a0bdf98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    description: "Eco-friendly solutions for a better tomorrow",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Services = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive architectural solutions to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group rounded-xl overflow-hidden bg-gray-800"
            >
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative p-8">
                <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;