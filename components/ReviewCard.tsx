// components/ReviewCard.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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
      // Apply review card styles using custom utilities from tailwind.config.js
      // Matches original: gradient, border, radius, padding, shadow, transition, hover effects
      className="review-card p-6 rounded-xl border border-gray-400 bg-review-card-bg shadow-review-card transition-all duration-300 ease-in-out hover:shadow-review-card-hover hover:-translate-y-1" // Use utilities defined in tailwind config
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }} // Animate when in view
       viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
       transition={{ duration: 0.4, delay: index * 0.08 }} // Stagger faster for reviews
    >
      <div className="flex justify-between items-center mb-2">
        {/* Heading styling - matches original h4 */}
        <h4 className="font-semibold text-gray-900 tracking-tight text-base">{review.name}</h4> {/* Adjusted text color/size */}
        <div className="flex space-x-0.5">{renderStars(review.rating)}</div>
      </div>
      {/* Paragraph styling - matches original p */}
      <p className="text-gray-700 text-sm italic mb-2 leading-relaxed">{`"${review.comment}"`}</p> {/* Adjusted text color */}
      {review.date && (
         <p className="text-xs text-gray-500 text-right mt-2">{review.date}</p>
      )}
    </motion.div>
  );
};

export default ReviewCard;
