
import { ShapeLandingHero } from "@/components/ShapeLandingHero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { motion } from "framer-motion";
import { ServiceVideos } from "@/components/ServiceVideos";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NewsletterPopup />
      <main>
        <ShapeLandingHero />
        <WhyChooseUs />
        <Services />
        <ServiceVideos />
        <Testimonials />
        <section className="relative py-16 bg-background-dark">
          {/* Gradient overlay similar to hero section */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-8 text-foreground-dark"
            >
              Latest <span className="text-primary">Insights</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog preview cards */}
              <motion.article 
                className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground-dark">Web Design Trends 2024</h3>
                <p className="text-neutral-light mb-4">
                  Discover the latest web design trends shaping the digital landscape...
                </p>
                <a href="/blog/web-design-trends-2024" className="text-primary hover:text-primary-light transition-colors">
                  Read More →
                </a>
              </motion.article>
              <motion.article 
                className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground-dark">SEO Best Practices</h3>
                <p className="text-neutral-light mb-4">
                  Learn how to optimize your website for better search engine rankings...
                </p>
                <a href="/blog/seo-best-practices" className="text-primary hover:text-primary-light transition-colors">
                  Read More →
                </a>
              </motion.article>
              <motion.article 
                className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground-dark">Digital Marketing Guide</h3>
                <p className="text-neutral-light mb-4">
                  A comprehensive guide to digital marketing strategies...
                </p>
                <a href="/blog/digital-marketing-guide" className="text-primary hover:text-primary-light transition-colors">
                  Read More →
                </a>
              </motion.article>
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
