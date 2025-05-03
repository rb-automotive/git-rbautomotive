// lib/featuresData.ts (Corrected)
import React from 'react';
// No need to import specific icons here anymore

export interface Feature {
  id: string;
  iconName: string; // Changed from 'icon' and type to string
  title: string;
  description: string;
}

export const featuresData: Feature[] = [
  {
    id: 'convenience',
    iconName: 'MapPin', // Store the name as a string
    title: 'Convenience',
    description: 'We come to your home or office in Perth metro and Mandurah, saving you time and hassle.',
  },
  {
    id: 'experience',
    iconName: 'Wrench', // Store the name as a string
    title: 'Experienced Mechanics',
    description: 'Our technicians are highly skilled, certified, and experienced in a wide range of vehicles.',
  },
  {
    id: 'pricing',
    iconName: 'ReceiptText', // Store the name as a string
    title: 'Transparent Pricing',
    description: 'Upfront quotes with no hidden fees. We explain the work needed before starting.',
  },
   {
    id: 'booking',
    iconName: 'CalendarCheck', // Store the name as a string
    title: 'Easy Booking',
    description: 'Schedule your service easily online, by phone, or text message.',
  },
   {
    id: 'services',
    iconName: 'Settings', // Store the name as a string
    title: 'Wide Range of Services',
    description: 'From basic maintenance and log book servicing to complex repairs and diagnostics.',
  },
   {
    id: 'satisfaction',
    iconName: 'ThumbsUp', // Store the name as a string
    title: 'Customer Satisfaction',
    description: "We are committed to providing the best service and ensuring you're happy with the results.",
  },
];