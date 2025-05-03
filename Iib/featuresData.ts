// lib/featuresData.ts
import React from 'react';
import { MapPin, Wrench, ReceiptText, CalendarCheck, Settings, ThumbsUp } from 'lucide-react'; // Import desired icons

export interface Feature {
  id: string;
  icon: React.ElementType; // Use React.ElementType for component types
  title: string;
  description: string;
}

export const featuresData: Feature[] = [
  {
    id: 'convenience',
    icon: MapPin,
    title: 'Convenience',
    description: 'We come to your home or office in Perth metro and Mandurah, saving you time and hassle.',
  },
  {
    id: 'experience',
    icon: Wrench,
    title: 'Experienced Mechanics',
    description: 'Our technicians are highly skilled, certified, and experienced in a wide range of vehicles.',
  },
  {
    id: 'pricing',
    icon: ReceiptText,
    title: 'Transparent Pricing',
    description: 'Upfront quotes with no hidden fees. We explain the work needed before starting.',
  },
   {
    id: 'booking',
    icon: CalendarCheck,
    title: 'Easy Booking',
    description: 'Schedule your service easily online, by phone, or text message.',
  },
   {
    id: 'services',
    icon: Settings, // Example icon, choose one that fits
    title: 'Wide Range of Services',
    description: 'From basic maintenance and log book servicing to complex repairs and diagnostics.',
  },
   {
    id: 'satisfaction',
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: "We are committed to providing the best service and ensuring you're happy with the results.",
  },
];