// components/FeatureCard.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Feature } from '@/lib/featuresData'; // Import the updated interface
// Import ALL icons used in featuresData + a default
import {
    MapPin, Wrench, ReceiptText, CalendarCheck, Settings, ThumbsUp, AlertCircle // Added AlertCircle as default
} from 'lucide-react';

// Create a mapping from icon name string (case-sensitive) to the actual component
const iconMap: { [key: string]: React.ElementType } = {
    MapPin,
    Wrench,
    ReceiptText,
    CalendarCheck,
    Settings,
    ThumbsUp,
};

interface FeatureCardProps {
  feature: Feature; // Uses the updated Feature type with iconName
  index: number; // For staggering animation
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  // Look up the icon component based on the name, provide a default if not found
  const IconComponent = iconMap[feature.iconName] || AlertCircle;

  return (
    <motion.div
      // Apply feature card styles using custom utilities from tailwind.config.js
      // Matches original: gradient, border, radius, padding, shadow, transition, hover effects
      className="feature-card p-6 rounded-xl border border-gray-300 bg-feature-card-idle shadow-feature-card transition-all duration-300 ease-in-out hover:shadow-feature-card-hover hover:-translate-y-1 hover:border-gray-400 hover:bg-feature-card-hover" // Use utilities defined in tailwind config
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
      transition={{ duration: 0.4, delay: index * 0.1 }} // Stagger based on index
    >
      <div className="flex items-start mb-3"> {/* Changed items-center to items-start */}
        {/* Icon styling */}
        <IconComponent className="mr-3 mt-1 h-6 w-6 text-red-600 flex-shrink-0" strokeWidth={2} /> {/* Added mt-1 for alignment */}
        {/* Heading styling - matches original h3 */}
        <h3 className="text-xl font-semibold text-gray-800 tracking-tight">{feature.title}</h3>
      </div>
      {/* Paragraph styling - matches original p */}
      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p> {/* Added leading-relaxed */}
    </motion.div>
  );
};

export default FeatureCard;
