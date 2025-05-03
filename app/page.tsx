// app/page.tsx
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import ReviewsSection from '@/components/ReviewsSection';

export default function HomePage() {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "RB Automotive Mobile Mechanics",
    "description": "RB Automotive Mobile Mechanics offers 24/7 convenient, reliable auto repair & servicing in Perth metro and Mandurah.",
    "telephone": "+61492992211",
    "email": "Rb_automotive@hotmail.com",
    "url": "https://www.rbautomotivemobilemechanic.com.au", // !! Replace with your actual domain
    "image": "https://www.rbautomotivemobilemechanic.com.au/rb-logo.png", // !! Replace with your actual domain and logo path
    "openingHours": "Mo-Su 00:00-23:59", // 24/7
    "areaServed": [
       { "@type": "City", "name": "Perth", "sameAs": "https://en.wikipedia.org/wiki/Perth" }, // Example link
       { "@type": "PostalAddress", "addressLocality": "Perth", "addressRegion": "WA", "addressCountry": "AU"},
       { "@type": "City", "name": "Mandurah", "sameAs": "https://en.wikipedia.org/wiki/Mandurah" },
       { "@type": "PostalAddress", "addressLocality": "Mandurah", "addressRegion": "WA", "addressCountry": "AU"}
    ],
    "makesOffer": [ // List some key services
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Car Diagnostics" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brake Repair and Service" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Oil Change" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Battery Testing and Replacement" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre-Purchase Car Inspection" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Log Book Servicing" }}
    ],
    // Optional: Add aggregateRating if you can fetch it dynamically or update manually
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "5", // Example
    //   "reviewCount": "15" // Example
    // },
    // Optional: Add address if you have a physical base, even if primarily mobile
    // "address": {
    //   "@type": "PostalAddress",
    //   "streetAddress": "Your Street Address",
    //   "addressLocality": "Suburb",
    //   "addressRegion": "WA",
    //   "postalCode": "6xxx",
    //   "addressCountry": "AU"
    // }
  };

  return (
    <>
      {/* Embed JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Render Page Sections with consistent spacing */}
      <div className="space-y-8 md:space-y-12 lg:space-y-16 px-2 md:px-0">
          <Hero />
          {/* Wrap sections needing horizontal margins */}
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
             <ServicesSection />
             <WhyChooseUs />
             <ContactSection />
             <ReviewsSection />
          </div>
      </div>
    </>
  );
}