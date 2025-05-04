// components/ServiceCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ServiceItem } from '@/lib/servicesData';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      // Apply base card styles, plus specific service card hover effects
      className="base-card bg-white flex flex-col h-full border-gray-200 hover:border-gray-400 hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Use whileInView for scroll animation
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger earlier
    >
      {/* Image Preview - Apply original styles */}
      <div className="w-full h-[200px] bg-gray-200 relative flex-shrink-0 rounded-t-lg overflow-hidden">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/600x200/cccccc/333333?text=Image+Error';
            e.currentTarget.srcset = '';
          }}
        />
      </div>

      {/* Card Content - Apply original padding, flex layout */}
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 tracking-tight">{service.title}</h3>
        {service.description && (
          // Apply original text styles
          <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
        )}
        {service.listItems && (
          // Apply original list styles
          <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1.5 flex-grow leading-relaxed">
            {service.listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
         {/* Optional CTA button styling if uncommented */}
         {/* <div className="mt-auto pt-4">
            <Link href="#contact" className="btn-primary text-sm">Book {service.title}</Link>
         </div> */}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
