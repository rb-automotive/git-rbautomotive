// components/ServicesSection.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ServiceTabs from './ServiceTabs';
import ServiceCard from './ServiceCard';
// FIX: Removed ServiceTab from type import below if unused, verify if needed elsewhere
import { servicesData, additionalServices } from '@/lib/servicesData';
// import type { ServiceTab } from '@/lib/servicesData'; // Removed if unused

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0]?.id || '');

  const activeContent = useMemo(() => {
    return servicesData.find((tab) => tab.id === activeTab)?.content || [];
  }, [activeTab]);

  const tabsForDisplay = useMemo(() => servicesData.map(tab => ({ id: tab.id, label: tab.label })), []);

  return (
    <section
      id="services"
      className="section bg-gradient-to-b from-white to-gray-100 py-16 px-4 text-center rounded-lg shadow-md border border-gray-200 my-6" // Added my-6 for spacing example
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <ServiceTabs
          tabs={tabsForDisplay}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <motion.div
          key={activeTab} // Reset animation on tab change
          className="service-content-area grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeContent.length > 0 ? (
            activeContent.map((serviceItem, index) => (
              <ServiceCard key={serviceItem.id} service={serviceItem} index={index} />
            ))
          ) : (
            <p className="text-gray-500 col-span-1 md:col-span-2">Select a service tab to view details.</p>
          )}
        </motion.div>

        <motion.div
          className="mt-16 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold text-gray-800 mb-6 tracking-tight">Additional Services</h4>
          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-gray-600 text-sm">
            {additionalServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;