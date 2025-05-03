// components/WhyChooseUs.tsx
import React from 'react';
// import { motion } from 'framer-motion'; // FIX: Removed unused import
import FeatureCard from './FeatureCard';
import { featuresData } from '@/lib/featuresData';

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="section bg-gradient-to-b from-white to-gray-100 py-16 px-4 text-center rounded-lg shadow-md border border-gray-200 my-6" // Added my-6 for spacing example
    >
      <div className="container mx-auto">
         <h2 className="text-3xl font-bold mb-12 text-gray-800 tracking-tight">
           Why Choose Us?
         </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;