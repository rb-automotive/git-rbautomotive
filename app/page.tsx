// app/page.tsx
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import ReviewsSection from '@/components/ReviewsSection';

export default function HomePage() {
  // Define JSON-LD Structured Data (Verify paths and domain)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "RB Automotive Mobile Mechanics",
    "description": "RB Automotive Mobile Mechanics offers 24/7 convenient, reliable auto repair & servicing in Perth metro and Mandurah.",
    "telephone": "+61492992211",
    "email": "Rb_automotive@hotmail.com",
    "url": "https://www.rbautomotivemobilemechanic.com.au", // <<< VERIFY DOMAIN
    "image": "https://www.rbautomotivemobilemechanic.com.au/images/RB-AUTO-LOGO-1.png", // <<< VERIFY LOGO PATH & DOMAIN
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": [
       { "@type": "City", "name": "Perth", "sameAs": "https://en.wikipedia.org/wiki/Perth" },
       { "@type": "PostalAddress", "addressLocality": "Perth", "addressRegion": "WA", "addressCountry": "AU"},
       { "@type": "City", "name": "Mandurah", "sameAs": "https://en.wikipedia.org/wiki/Mandurah" },
       { "@type": "PostalAddress", "addressLocality": "Mandurah", "addressRegion": "WA", "addressCountry": "AU"}
    ],
    "makesOffer": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Car Diagnostics" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brake Repair and Service" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Oil Change" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Battery Testing and Replacement" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre-Purchase Car Inspection" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Log Book Servicing" }}
    ],
  };

  return (
    <>
      {/* Embed JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Render Page Sections */}
      {/* Hero is full width */}
      <Hero />

      {/* Container for subsequent sections with max-width and horizontal padding */}
      {/* Vertical spacing is handled by the .section class margin (my-8 md:my-12) */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
         <ServicesSection />
         <WhyChooseUs />
         <ContactSection />
         <ReviewsSection />
      </div>
    </>
  );
}
