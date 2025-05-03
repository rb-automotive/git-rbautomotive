// tailwind.config.js (JavaScript version)

/** @type {import('tailwindcss').Config} */ // Use JSDoc for type hinting in JS
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define font variables set up in layout.tsx
        // Note: Ensure these CSS variables are actually defined in your CSS/layout
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-quincy)', 'ui-serif', 'Georgia'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
         'brand-red': {
            DEFAULT: '#dc2626',
            dark: '#b91c1c',
            light: '#ef4444',
         },
         'brand-gray': {
            light: '#f3f4f6',
            DEFAULT: '#6b7280',
            dark: '#374151',
            darker: '#1f2937',
         }
      }
    },
  },
  plugins: [],
};
// Use module.exports for Node.js environment (common for .js config)
module.exports = config;