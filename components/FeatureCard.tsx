// components/FeatureCard.tsx
'use client'; // Required for Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
import type { Feature } from '@/lib/featuresData'; // Import the interface

interface FeatureCardProps {
  feature: Feature;
  index: number; // For staggering animation
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const IconComponent = feature.icon; // Get the icon component type

  return (
    <motion.div
      // Define feature-card styles using Tailwind (adapted from original CSS)
      className="feature-card p-6 rounded-xl border border-gray-300 bg-gradient-to-b from-gray-100 to-gray-200 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-gray-400 hover:from-white hover:to-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
      transition={{ duration: 0.4, delay: index * 0.1 }} // Stagger based on index
    >
      <div className="flex items-center mb-3">
        <IconComponent className="mr-3 h-6 w-6 text-red-600" strokeWidth={2} />
        <h3 className="text-xl font-semibold text-gray-800 tracking-tight">{feature.title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;