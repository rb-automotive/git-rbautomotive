// components/ReviewsSection.tsx
import React from 'react';
import { motion } from 'framer-motion'; // If animating title server-side isn't sufficient
import ReviewCard from './ReviewCard';
import { reviewsData, reviewLinks } from '@/lib/reviewsData'; // Import review data and links
import { MessageSquarePlus } from 'lucide-react'; // Icon for write review button
import Link from 'next/link'; // For Yelp link if it's internal, otherwise use <a>

const ReviewsSection = () => {
  // This can likely remain a Server Component

  return (
     // Define section styles (gradient from original CSS)
    <section
      id="reviews"
      className="section bg-gradient-to-b from-gray-200 to-gray-300 py-16 px-4 text-center rounded-lg shadow-md border border-gray-300 mx-2 md:mx-4 my-6"
    >
      <div className="container mx-auto">
         <h2 className="text-3xl font-bold mb-12 text-gray-800 tracking-tight reveal-in"> {/* Placeholder for animation */}
           Customer Reviews
         </h2>

        {/* Grid for Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-12">
          {reviewsData.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
            />
          ))}
        </div>

        {/* Write Review Button */}
        <a
          href={reviewLinks.googleWrite}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center justify-center mb-10" // Reuse button style
        >
          <MessageSquarePlus size={20} className="mr-2" />
          Write a Review on Google
        </a>

        {/* Links to Other Review Platforms */}
        <div className="mt-8 reveal-in"> {/* Placeholder for animation */}
          <h4 className="text-xl font-semibold text-gray-800 mb-4 tracking-tight">Leave us a review on:</h4>
          <div className="flex justify-center items-center space-x-6">
            <a href={reviewLinks.googleRead} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 font-medium hover:underline">
              Google
            </a>
            <span className="text-gray-400">|</span>
            <a href={reviewLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 font-medium hover:underline">
              Facebook
            </a>
             {reviewLinks.yelp !== '#' && ( // Only show Yelp if URL is provided
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