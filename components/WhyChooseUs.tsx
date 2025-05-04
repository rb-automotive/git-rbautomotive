// components/WhyChooseUs.tsx
import React from 'react';
import FeatureCard from './FeatureCard'; // Ensure FeatureCard is styled
import { featuresData } from '@/lib/featuresData'; // Ensure featuresData uses iconName

const WhyChooseUs = () => {
  return (
    // Apply the base .section style defined in globals.css
    // Add specific padding if overriding the default section padding
    <section
      id="why-choose-us"
      className="section text-center py-16 px-4" // Using .section base + padding
    >
      <div className="container mx-auto">
         {/* Section Title - Apply original styles */}
         <h2 className="text-3xl font-bold mb-12 text-gray-800 tracking-tight">
           Why Choose Us?
         </h2>

        {/* Grid for Feature Cards - Apply original layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {featuresData.map((feature, index) => (
            // FeatureCard component handles its own styling and animation
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
