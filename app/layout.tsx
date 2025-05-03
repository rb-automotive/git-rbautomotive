// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as primary
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Heading font definition is not included in this version

export const metadata: Metadata = {
    // !! IMPORTANT: Make sure this URL is correct and live when deploying !!
    metadataBase: new URL('https://www.rbautomotivemobilemechanic.com.au'),
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
        url: '/', // Base URL is used, so this resolves to the homepage
        siteName: 'RB Automotive Mobile Mechanics',
        images: [
            {
                url: '/og-image.png', // !! CREATE and place this 1200x630 image in /public !!
                width: 1200,
                height: 630,
                alt: 'RB Automotive Mobile Mechanics van and logo',
            },
        ],
        locale: 'en_AU',
        type: 'website',
    },
     // Add icons, manifest etc.
     icons: {
        icon: '/favicon.ico', // !! CREATE and place this in /public !!
        apple: '/apple-touch-icon.png', // !! CREATE and place this in /public !!
    },
    // manifest: '/site.webmanifest', // !! CREATE and place this in /public !!
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply only the Inter font variable
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans"> {/* font-sans uses --font-inter via tailwind.config.js */}
        <Header />
         {/* Add padding-top equal to header height to avoid content overlap */}
         {/* You might need to inspect your rendered header to get the exact height */}
        <main className="pt-16 md:pt-20">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}