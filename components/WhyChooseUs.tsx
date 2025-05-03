// components/WhyChooseUs.tsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion here if animating the title server-side isn't sufficient
import FeatureCard from './FeatureCard';
import { featuresData } from '@/lib/featuresData'; // Import the features data

const WhyChooseUs = () => {
  // This can remain a Server Component if animations are handled within FeatureCard ('use client')
  // Or make it 'use client' if you need more complex orchestration/animations here.

  return (
    // Define section styles (similar to ServicesSection)
    <section
      id="why-choose-us"
      className="section bg-gradient-to-b from-white to-gray-100 py-16 px-4 text-center rounded-lg shadow-md border border-gray-200 mx-2 md:mx-4 my-6"
    >
      <div className="container mx-auto">
        {/* Section Title - Simple animation example (can be enhanced) */}
        {/* Note: whileInView won't work directly in Server Components without 'use client' in the parent or this component */}
        {/* For Server Component, rely on FeatureCard's client-side animation or basic CSS transitions */}
         <h2 className="text-3xl font-bold mb-12 text-gray-800 tracking-tight reveal-in"> {/* Placeholder for animation if needed */}
           Why Choose Us?
         </h2>

        {/* Grid for Feature Cards */}
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