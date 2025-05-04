// components/ReviewsSection.tsx
import React from 'react';
import ReviewCard from './ReviewCard'; // Ensure ReviewCard is styled
import { reviewsData, reviewLinks } from '@/lib/reviewsData';
import { MessageSquarePlus } from 'lucide-react';

const ReviewsSection = () => {
  return (
    // Apply specific gradient background for reviews section from original CSS
    // Also apply base section padding/margin/radius/border
    <section
      id="reviews"
      className="section text-center py-16 px-4 bg-gradient-to-b from-gray-200 to-gray-300" // Specific gradient + base styles
    >
      <div className="container mx-auto">
         <h2 className="text-3xl font-bold mb-12 text-gray-800 tracking-tight">
           Customer Reviews
         </h2>

        {/* Grid for Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-12">
          {reviewsData.map((review, index) => (
            // ReviewCard component handles its own styling and animation
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
            />
          ))}
        </div>

        {/* Write Review Button - Use btn-secondary style */}
        <a
          href={reviewLinks.googleWrite}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center justify-center mb-10 text-sm px-5 py-2.5" // Adjusted size
        >
          <MessageSquarePlus size={18} className="mr-2" />
          Write a Review on Google
        </a>

        {/* Links to Other Review Platforms */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4 tracking-tight">Leave us a review on:</h4>
          <div className="flex justify-center items-center space-x-4 md:space-x-6">
            {/* Style links */}
            <a href={reviewLinks.googleRead} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 font-medium hover:underline">
              Google
            </a>
            <span className="text-gray-500">|</span> {/* Adjusted color */}
            <a href={reviewLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 font-medium hover:underline">
              Facebook
            </a>
             {reviewLinks.yelp !== '#' && ( // Only show Yelp if URL is provided
                <>
                 <span className="text-gray-500">|</span>
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
