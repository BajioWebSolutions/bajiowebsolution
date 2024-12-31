import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog preview cards */}
              <motion.article 
                className="bg-card p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">Web Design Trends 2024</h3>
                <p className="text-muted-foreground mb-4">
                  Discover the latest web design trends shaping the digital landscape...
                </p>
                <a href="/blog/web-design-trends-2024" className="text-primary hover:underline">
                  Read More →
                </a>
              </motion.article>
              <motion.article 
                className="bg-card p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">SEO Best Practices</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to optimize your website for better search engine rankings...
                </p>
                <a href="/blog/seo-best-practices" className="text-primary hover:underline">
                  Read More →
                </a>
              </motion.article>
              <motion.article 
                className="bg-card p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">Digital Marketing Guide</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive guide to digital marketing strategies...
                </p>
                <a href="/blog/digital-marketing-guide" className="text-primary hover:underline">
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