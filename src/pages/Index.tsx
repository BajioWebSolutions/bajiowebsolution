
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
        <Hero />
        <WhyChooseUs />
        <Services />
        <Impact />
        <Testimonials />
        <section className="py-20 bg-background-dark relative">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground-dark">
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
