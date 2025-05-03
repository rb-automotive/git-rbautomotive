// components/ServiceCard.tsx
'use client'; // Needed if using Framer Motion directly here

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ServiceItem } from '@/lib/servicesData'; // Import the interface

// Define props for the card
interface ServiceCardProps {
  service: ServiceItem;
  index: number; // For staggered animation delay
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      className="service-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }} // Stagger animation based on index
      viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% visible
    >
      {/* Image Preview */}
      <div className="image-preview w-full h-[200px] bg-gray-200 relative">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          style={{ objectFit: 'cover' }} // Cover the area
          sizes="(max-width: 768px) 100vw, 50vw" // Basic sizes optimization
          onError={(e) => {
            // Handle image loading errors gracefully
            e.currentTarget.src = 'https://placehold.co/600x200/cccccc/333333?text=Image+Error';
            e.currentTarget.srcset = ''; // Prevent trying other sources
          }}
        />
      </div>

      {/* Card Content */}
      <div className="service-card-content p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 tracking-tight">{service.title}</h3>
        {service.description && (
          <p className="text-gray-600 text-sm mb-6 flex-grow">{service.description}</p>
        )}
        {service.listItems && (
          <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1 flex-grow">
            {service.listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
         {/* Optional: Add a CTA button per card if needed
         <div className="mt-auto pt-4">
            <Link href="#contact" className="btn-primary text-sm">Book {service.title}</Link>
         </div>
         */}
      </div>
    </motion.div>
  );
};

export default ServiceCard;