// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as primary
// import { YourHeadingFont } from 'next/font/google'; // Import your heading font if needed
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// const headingFont = YourHeadingFont({ ...options, variable: '--font-quincy' });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.yourdomain.com.au'), // !! IMPORTANT: Replace with your actual domain
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
        images: [
            {
                url: '/og-image.png', // !! CREATE and place this in /public
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
        icon: '/favicon.ico', // !! CREATE and place this in /public
        apple: '/apple-touch-icon.png', // !! CREATE and place this in /public
    },
    // manifest: '/site.webmanifest', // !! CREATE and place this in /public
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply font variables
    <html lang="en" className={`${inter.variable} /* ${headingFont.variable} */`}>
      <body className="font-sans"> {/* Applied font-sans from globals.css */}
        <Header />
         {/* Add padding-top equal to header height to avoid content overlap */}
        <main className="pt-16 md:pt-20"> {/* Adjust pt value based on your final Header height */}
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}