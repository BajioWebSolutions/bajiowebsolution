
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { Impact } from "@/components/Impact";
import { motion } from "framer-motion";
import { BlogPost } from "@/components/BlogPost";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const blogPosts = [
  {
    title: "AI-Powered Web Design: The Future of Digital Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing web design and digital marketing strategies for businesses of all sizes...",
    date: "April 8, 2024",
    category: "Web Design",
    slug: "ai-powered-web-design"
  },
  {
    title: "Revolutionizing Digital Marketing with AI: A Comprehensive Guide",
    excerpt: "For small local businesses struggling to compete against corporate giants, artificial intelligence is becoming the great equalizer in digital marketing...",
    date: "April 2, 2024",
    category: "Digital Marketing",
    slug: "revolutionizing-digital-marketing-with-ai"
  },
  {
    title: "Smart SEO Strategies: Harnessing AI for Enhanced Visibility",
    excerpt: "Have you ever wondered why some local businesses consistently appear at the top of search results while others remain buried on page ten? In 2025, the difference often comes down to AI-powered SEO strategies...",
    date: "March 25, 2024",
    category: "SEO",
    slug: "smart-seo-strategies"
  }
];

// Enhanced Schema.org structured data for Bajio Web Solutions
const schemaData = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "name": "Bajio Web Solutions",
  "description": "Bajio Web Solutions offers professional web development and digital marketing services, including cutting-edge AI web design, to help businesses grow their online presence and achieve their marketing goals.",
  "url": "https://bajioweb.solutions",
  "telephone": "+1-860-123-4567",
  "email": "contact@bajioweb.solutions",
  "image": "https://bajioweb.solutions/lovable-uploads/39f3556e-6b12-4ffc-b1d0-ad03448bd1af.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Lebanon",
    "addressRegion": "CT",
    "postalCode": "06249",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.6342",
    "longitude": "-72.2151"
  },
  "areaServed": ["Connecticut", "New England", "United States"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/bajioweb-solutions",
    "https://www.tiktok.com/@bajiowebsolutions",
    "https://www.facebook.com/bajiowebsolutions"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Professional Web Development",
      "description": "Custom web development solutions tailored to your business needs",
      "url": "https://bajioweb.solutions/services/development"
    },
    {
      "@type": "Offer",
      "name": "Digital Marketing Services",
      "description": "Comprehensive digital marketing strategies to grow your online presence",
      "url": "https://bajioweb.solutions/services/marketing"
    },
    {
      "@type": "Offer",
      "name": "AI Web Design",
      "description": "Modern, AI-powered web design that converts visitors into customers",
      "url": "https://bajioweb.solutions/services/web-design"
    },
    {
      "@type": "Offer",
      "name": "SEO Services",
      "description": "Search engine optimization to improve your visibility online",
      "url": "https://bajioweb.solutions/services/seo"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
};

const Index = () => {
  // Monitor page performance metrics for Core Web Vitals
  useEffect(() => {
    // Basic performance monitoring example
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Report LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('LCP candidate:', entry.startTime, entry);
        }
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // Report CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('Layout shift:', entry);
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      
      return () => {
        observer.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* SEO Metadata and Schema */}
      <SEO 
        title="Bajio Web Solutions - Professional Web Development & Digital Marketing Services"
        description="Transform your online presence with Bajio Web Solutions. We offer professional web development, SEO, and digital marketing services tailored to grow your business."
        keywords="web development, web design, SEO, digital marketing, Connecticut, Lebanon CT, business websites, AI web design"
        canonical="/"
        schema={schemaData}
        image="/lovable-uploads/39f3556e-6b12-4ffc-b1d0-ad03448bd1af.png"
      />

      <NewsletterPopup />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Impact />
        <Testimonials />
        <section className="py-20 bg-background-dark relative">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-foreground-dark leading-tight">
                Latest <span className="text-primary">Insights</span>
              </h2>
              <p className="text-neutral text-lg max-w-3xl mx-auto">
                Stay updated with the latest trends, tips, and insights in web development,
                design, and digital marketing.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogPost key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
