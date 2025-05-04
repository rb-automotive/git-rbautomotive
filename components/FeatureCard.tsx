// components/FeatureCard.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Feature } from '@/lib/featuresData';
// Import ALL icons used in featuresData + a default
// FIX: Removed 'type Icon as LucideIconType'
import {
    MapPin, Wrench, ReceiptText, CalendarCheck, Settings, ThumbsUp, AlertCircle
} from 'lucide-react';
// If you plan to strongly type the map values with the Lucide Icon type, you could do:
// import type { LucideIcon } from 'lucide-react'; // Import the type directly if needed

// Create a mapping from icon name string to the actual component
// Using React.ElementType is generally safe and easy here
const iconMap: { [key: string]: React.ElementType } = {
    MapPin,
    Wrench,
    ReceiptText,
    CalendarCheck,
    Settings,
    ThumbsUp,
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const IconComponent: React.ElementType = iconMap[feature.iconName] || AlertCircle;

  return (
    <motion.div
      className="feature-card p-6 rounded-xl border border-gray-300 bg-gradient-to-b from-gray-100 to-gray-200 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-gray-400 hover:from-white hover:to-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-3">
        <IconComponent className="mr-3 h-6 w-6 text-red-600 flex-shrink-0" strokeWidth={2} />
        <h3 className="text-xl font-semibold text-gray-800 tracking-tight">{feature.title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;