// components/Services.tsx
import React from 'react';
import GlassCard from './GlassCard';
import { FaTools, FaCarBattery, FaOilCan } from 'react-icons/fa';

const services = [
  { icon: <FaTools size={24} />, title: 'General Repairs' },
  { icon: <FaCarBattery size={24} />, title: 'Battery Replacement' },
  { icon: <FaOilCan size={24} />, title: 'Oil Change' },
];

const Services = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <GlassCard key={index}>
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
