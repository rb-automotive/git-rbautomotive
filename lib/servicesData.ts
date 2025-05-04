// lib/servicesData.ts

// Define an interface for better type safety
export interface ServiceItem {
  id: string; // e.g., 'diagnostics', 'brakes'
  title: string; // e.g., 'Diagnostics', 'Brake Service'
  imageSrc: string; // Path relative to /public or external URL
  imageAlt: string;
  description?: string; // For simple text descriptions
  listItems?: string[]; // For bullet points
}

export interface ServiceTab {
  id: string; // Matches ServiceItem id, e.g., 'diagnostics'
  label: string; // Text on the tab, e.g., 'Diagnostics'
  content: ServiceItem[]; // Array of cards for this tab
}

export const servicesData: ServiceTab[] = [
  {
    id: 'diagnostics',
    label: 'Diagnostics',
    content: [
      {
        id: 'diag-main',
        title: 'Diagnostics',
        imageSrc: '/images/services/diagnostics1.jpg', // <<<--- UPDATE PATH
        imageAlt: 'Car computer diagnostics tool connected to vehicle OBD port',
        listItems: [
          'Advanced computer diagnostics to pinpoint issues.',
          'Check engine light diagnosis',
          'ABS and SRS system diagnosis',
          'Electrical system diagnosis',
        ],
      },
      {
        id: 'diag-why',
        title: 'Why Diagnostics is Important',
        imageSrc: '/images/services/diagnostics2.jpg', // <<<--- UPDATE PATH
        imageAlt: 'Mechanic looking at engine components',
        description: 'Early diagnosis of car problems can prevent more extensive and expensive damage. Our advanced diagnostic tools can quickly and accurately identify issues, saving you time and money in the long run.',
      },
    ],
  },
  {
    id: 'brakes',
    label: 'Brake Service',
    content: [
       {
        id: 'brakes-main',
        title: 'Brake Service',
        imageSrc: '/images/services/brakes1.jpg', // <<<--- UPDATE PATH
        imageAlt: 'Close-up of car brake disc and caliper',
        listItems: [
            'Inspection, repair, and replacement of brake components.',
            'Brake pad replacement',
            'Brake rotor resurfacing/replacement',
            'Brake fluid flush and replacement',
            'ABS system checks',
        ]
       },
       {
        id: 'brakes-why',
        title: 'Why Brake Service is Important',
        imageSrc: '/images/services/brakes2.jpg', // <<<--- UPDATE PATH
        imageAlt: 'View of brake disc through wheel rim',
        description: 'Your brakes are the most critical safety feature. Regular service ensures your vehicle stops effectively and reliably in all conditions. We provide thorough inspections and use high-quality parts for your peace of mind.',
       }
    ],
  },
  {
    id: 'oil',
    label: 'Oil Change',
    content: [
      // Add content for Oil Change cards here...
      { id: 'oil-main', title: 'Oil Change', imageSrc: '/images/services/oil_change1.jpg', imageAlt: 'Oil being poured into car engine', listItems: [/*...*/] },
      { id: 'oil-why', title: 'Why Oil Change is Important', imageSrc: '/images/services/oil_change2.jpg', imageAlt: 'Engine oil container', description: '...' }
    ],
  },
  {
    id: 'battery',
    label: 'Battery Service',
    content: [
       // Add content for Battery Service cards here...
       { id: 'battery-main', title: 'Battery Service', imageSrc: '/images/services/battery1.jpg', imageAlt: 'Mechanic testing car battery voltage', listItems: [/*...*/] },
       { id: 'battery-why', title: 'Why Battery Service is Important', imageSrc: '/images/services/battery2.jpg', imageAlt: 'Car battery terminals', description: '...' }
    ],
  },
   {
    id: 'repairs',
    label: 'General Repairs',
    content: [
      // Add content for General Repairs cards here...
       { id: 'repairs-main', title: 'General Repairs', imageSrc: '/images/services/repairs1', imageAlt: 'Mechanic working under car hood', listItems: [/*...*/] },
       { id: 'repairs-why', title: 'Why General Repairs are Important', imageSrc: '/images/services/repairs2.jpg', imageAlt: 'Various car engine parts', description: '...' }
    ],
  },
   {
    id: 'inspections',
    label: 'Pre-Purchase Inspections',
    content: [
       // Add content for Inspections cards here...
       { id: 'inspections-main', title: 'Pre-Purchase Inspections', imageSrc: '/images/services/inspection2.jpg', imageAlt: 'Mechanic inspecting undercarriage of car', listItems: [/*...*/] },
       { id: 'inspections-why', title: 'Why Pre-Purchase Inspections are Important', imageSrc: '/images/services/inspection1.jpg', imageAlt: 'Car inspection checklist on clipboard', description: '...' }
    ],
  },
    {
    id: 'tyres',
    label: 'Tyre Services',
    content: [
       // Add content for Tyre Services cards here...
       { id: 'tyres-main', title: 'Tyre Services', imageSrc: '/images/services/tyre1.jpg', imageAlt: 'Mechanic fitting a tyre onto a wheel rim', listItems: [/*...*/] },
       { id: 'tyres-why', title: 'Why Tyre Services are Important', imageSrc: '/images/services/tyre2.jpg', imageAlt: 'Tyre pressure gauge checking tyre', description: '...' }
    ],
  },
   {
    id: 'engine',
    label: 'Engine Service',
    content: [
       // Add content for Engine Service cards here...
       { id: 'engine-main', title: 'Engine Service', imageSrc: '/images/services/engine1.jpg', imageAlt: 'Close-up of a clean car engine', listItems: [/*...*/] },
       { id: 'engine-why', title: 'Why Engine Service is Important', imageSrc: '/images/services/engine2.jpg', imageAlt: 'Mechanic working on car engine components', description: '...' }
    ],
  },
  // Add other service tabs and their content similarly
];

// Define additional services separately if needed
export const additionalServices: string[] = [
    "Mobile diagnostics",
    "Electrical system diagnosis and repair",
    "Fuel system service",
    "Transmission service",
    "Cooling system service",
    "Air Conditioning service & re-gas",
    "Suspension and steering repairs",
    "Performance upgrades (Consultation required)",
    "Log book servicing",
];