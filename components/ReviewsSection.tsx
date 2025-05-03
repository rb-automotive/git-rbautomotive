// components/ReviewCard.tsx
'use client'; // Required for Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // Using lucide Star icon
import type { Review } from '@/lib/reviewsData';

interface ReviewCardProps {
  review: Review;
  index: number; // For staggering animation
}

// Helper function to generate stars
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        className={i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    );
  }
  return stars;
};

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <motion.div
      // Define review-card styles using Tailwind (adapted from original CSS)
      className="review-card p-6 rounded-xl border border-gray-400 bg-gradient-to-br from-gray-200 via-gray-50 to-gray-200 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-gray-500"
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }} // Animate when in view
       viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
       transition={{ duration: 0.4, delay: index * 0.08 }} // Stagger faster for reviews
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-800 tracking-tight">{review.name}</h4>
        <div className="flex space-x-0.5">{renderStars(review.rating)}</div>
      </div>
      <p className="text-gray-600 text-sm italic mb-2">"{review.comment}"</p>
      {review.date && (
         <p className="text-xs text-gray-500 text-right mt-2">{review.date}</p>
      )}
    </motion.div>
  );
};

export default ReviewCard;