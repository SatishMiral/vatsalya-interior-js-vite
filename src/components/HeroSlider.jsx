import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1737376079685-b5c25544fcb3?q=80&w=1966&auto=format&fit=crop",
    title: "Modern Living Spaces",
    subtitle: "Transform your home into a masterpiece",
  },
  {
    image: "https://images.unsplash.com/photo-1737381042880-38b37e7c5932?q=80&w=1945&auto=format&fit=crop",
    title: "Elegant Design Solutions",
    subtitle: "Where comfort meets sophistication",
  },
  {
    image: "https://images.unsplash.com/photo-1737376101009-ea6f8efe381b?q=80&w=2003&auto=format&fit=crop",
    title: "Luxurious Interiors",
    subtitle: "Crafting spaces that inspire",
  },
  {
    image: "https://images.unsplash.com/photo-1737376160651-1aa527bd917b?q=80&w=1929&auto=format&fit=crop",
    title: "Timeless Beauty",
    subtitle: "Design that stands the test of time",
  },
];

const HeroSlider = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-4xl px-4">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl outfit-bold mb-6 text-white"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl md:text-2xl mb-8 text-white/90 outfit"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <Link to="/portfolio">
                  <motion.button
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="outfit bg-white text-black px-8 py-4 rounded-full text-lg font-semibold cursor-pointer hover:bg-opacity-90 hover:bg-amber-400 transition-all duration-300 shadow-lg"
                  >
                    Explore Our Work
                  </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
