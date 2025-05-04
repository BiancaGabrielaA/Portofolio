'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Maria P.',
    quote: 'Absolutely delicious! Everything was perfectly prepared and presented.',
  },
  {
    name: 'James T.',
    quote: 'The best catering service we’ve ever had. Highly recommend Jasmine Catering!',
  },
  {
    name: 'Elena D.',
    quote: 'The food made our event unforgettable. Warm, tasty, and full of love.',
  },
  {
    name: 'Daniela R.',
    quote: 'The presentation and flavors were both amazing. Guests loved it!',
  },
];

export const HomeTestimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-t border-b border-[var(--light-brown)] py-12 px-6 md:px-16 bg-white text-[var(--light-brown)] max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-8">What Our Clients Say</h3>
      <div className="relative h-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full text-center"
          >
            <p className="text-xl italic mb-4">&quot; {testimonials[index].quote} &quot;</p>
            <p className="text-sm font-bold">— {testimonials[index].name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
