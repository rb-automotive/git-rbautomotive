// lib/featuresData.ts

// Interface defining the structure for each feature
export interface Feature {
  id: string;
  iconName: string; // Store the icon name as a string
  title: string;
  description: string;
}

// Array holding the data for all features
export const featuresData: Feature[] = [
  {
    id: 'convenience',
    iconName: 'MapPin', // Use the string name of the Lucide icon
    title: 'Convenience',
    description: 'We come to your home or office in Perth metro and Mandurah, saving you time and hassle.',
  },
  {
    id: 'experience',
    iconName: 'Wrench', // Use the string name
    title: 'Experienced Mechanics',
    description: 'Our technicians are highly skilled, certified, and experienced in a wide range of vehicles.',
  },
  {
    id: 'pricing',
    iconName: 'ReceiptText', // Use the string name
    title: 'Transparent Pricing',
    description: 'Upfront quotes with no hidden fees. We explain the work needed before starting.',
  },
   {
    id: 'booking',
    iconName: 'CalendarCheck', // Use the string name
    title: 'Easy Booking',
    description: 'Schedule your service easily online, by phone, or text message.',
  },
   {
    id: 'services',
    iconName: 'Settings', // Use the string name
    title: 'Wide Range of Services',
    description: 'From basic maintenance and log book servicing to complex repairs and diagnostics.',
  },
   {
    id: 'satisfaction',
    iconName: 'ThumbsUp', // Use the string name
    title: 'Customer Satisfaction',
    description: "We are committed to providing the best service and ensuring you're happy with the results.",
  },
];
