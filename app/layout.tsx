// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // <<< Import globals.css HERE
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // CSS variable for Tailwind
  display: 'swap',
});

// Define Metadata (Verify paths and domain)
export const metadata: Metadata = {
    metadataBase: new URL('https://www.rbautomotivemobilemechanic.com.au'), // <<< VERIFY DOMAIN
    title: {
        template: '%s | RB Automotive Mobile Mechanics',
        default: 'RB Automotive Mobile Mechanics | 24/7 Perth & Mandurah',
    },
    description: 'RB Automotive Mobile Mechanics offers 24/7 convenient, reliable auto repair & servicing in Perth metro and Mandurah. Diagnostics, brakes, oil changes, batteries & more.',
    keywords: ['mobile mechanic perth', 'mobile mechanic mandurah', 'car service perth', 'auto repair perth', '24/7 mechanic', 'rb automotive', 'log book service perth'],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'RB Automotive Mobile Mechanics | 24/7 Perth & Mandurah',
        description: 'Convenient, reliable auto repair at your location in Perth & Mandurah.',
        url: '/',
        siteName: 'RB Automotive Mobile Mechanics',
        images: [ { url: '/og-image.png', width: 1200, height: 630, alt: 'RB Automotive Mobile Mechanics van and logo', }, ], // <<< Ensure /public/og-image.png exists
        locale: 'en_AU',
        type: 'website',
    },
     icons: {
        icon: '/favicon.ico', // <<< Ensure /public/favicon.ico exists
        apple: '/apple-touch-icon.png', // <<< Ensure /public/apple-touch-icon.png exists
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      {/* Apply base font, ensure full height layout */}
      <body className="font-sans flex flex-col min-h-full bg-gray-50">
        <Header /> {/* Renders the sticky header */}

        {/* Main content area grows to fill space */}
        {/* Padding top MUST match the actual height of the Header */}
        {/* Inspect the header height in dev tools if unsure */}
        {/* Using example values, ADJUST AS NEEDED */}
        <main className="flex-grow pt-[68px] md:pt-[76px]">
            {children}
        </main>

        <Footer /> {/* Renders the footer at the bottom */}
      </body>
    </html>
  );
}
