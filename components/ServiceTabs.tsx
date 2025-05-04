// components/ServiceTabs.tsx
'use client';

import { motion } from 'framer-motion';
import type { ServiceTab } from '@/lib/servicesData';

interface ServiceTabsProps {
  tabs: Pick<ServiceTab, 'id' | 'label'>[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const ServiceTabs = ({ tabs, activeTab, setActiveTab }: ServiceTabsProps) => {
  return (
    // Apply original layout (flex wrap justify-center)
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
          // Apply original padding, margin, border-radius, font-weight, transition
          // Use custom background gradients for active/idle/hover states
          className={`
            service-tab px-5 py-2.5 m-1 rounded-lg font-semibold text-sm md:text-base border cursor-pointer transition-all duration-300 ease-in-out
            ${
              activeTab === tab.id
                ? 'bg-service-tab-active text-white border-gray-700 shadow-md' // Active state using defined gradient
                : 'bg-service-tab-idle text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-gray-400' // Idle/Hover state using defined gradient
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
