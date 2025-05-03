// components/ReviewsSection.tsx
import React from 'react';
// import { motion } from 'framer-motion'; // FIX: Removed unused import
import ReviewCard from './ReviewCard';
import { reviewsData, reviewLinks } from '@/lib/reviewsData';
import { MessageSquarePlus } from 'lucide-react';
// import Link from 'next/link'; // FIX: Removed unused import

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="section bg-gradient-to-b from-gray-200 to-gray-300 py-16 px-4 text-center rounded-lg shadow-md border border-gray-300 my-6" // Added my-6 for spacing example
    >
      <div className="container mx-auto">
         <h2 className="text-3xl font-bold mb-12 text-gray-800 tracking-tight">
           Customer Reviews
         </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-12">
          {reviewsData.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
            />
          ))}
        </div>

        <a
          href={reviewLinks.googleWrite}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center justify-center mb-10"
        >
          <MessageSquarePlus size={20} className="mr-2" />
          Write a Review on Google
        </a>

        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4 tracking-tight">Leave us a review on:</h4>
          <div className="flex justify-center items-center space-x-4 md:space-x-6">
            <a href={reviewLinks.googleRead} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 font-medium hover:underline">
              Google
            </a>
            <span className="text-gray-400">|</span>
            <a href={reviewLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 font-medium hover:underline">
              Facebook
            </a>
             {reviewLinks.yelp !== '#' && (
                <>
                 <span className="text-gray-400">|</span>
                 <a href={reviewLinks.yelp} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 font-medium hover:underline">
                    Yelp
                 </a>
                </>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;