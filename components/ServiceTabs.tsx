// components/ServiceTabs.tsx
'use client'; // Required for onClick handler

import { motion } from 'framer-motion';
import type { ServiceTab } from '@/lib/servicesData';

interface ServiceTabsProps {
  tabs: Pick<ServiceTab, 'id' | 'label'>[]; // Only need id and label
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const ServiceTabs = ({ tabs, activeTab, setActiveTab }: ServiceTabsProps) => {
  return (
    <motion.div
      className="flex flex-wrap justify-center mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          // Define service-tab styles in globals.css or using Tailwind directly
          // Using Tailwind directly here for example:
          className={`
            service-tab px-4 py-2 md:px-5 md:py-2.5 m-1 rounded-lg font-semibold text-sm md:text-base border cursor-pointer transition-all duration-300
            ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white border-gray-900 shadow-md' // Active state
                : 'bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700 border-gray-300 hover:bg-gradient-to-b hover:from-gray-200 hover:to-gray-300 hover:border-gray-400' // Inactive state
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </motion.div>
  );
};

export default ServiceTabs;