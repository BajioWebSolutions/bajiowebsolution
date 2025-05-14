
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
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

export const BlogSection = () => {
  return (
    <section className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-5 text-foreground-dark leading-tight">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-gray-800 rounded-lg overflow-hidden custom-shadow transition-transform duration-300 blog-card hover:-translate-y-1.5 group flex flex-col h-full"
            >
              <div className="relative h-48">
                <img
                  src={`/lovable-uploads/c4b0c30f-0691-48f5-9946-c293a3908ce1.png`}
                  alt={post.title}
                  className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary bg-opacity-20 text-primary mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-200 leading-snug">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <Button
                    variant="link"
                    asChild
                    className="text-primary hover:text-primary-light transition-colors text-sm font-medium"
                  >
                    <Link to={`/blog/${post.slug}`}>Read More →</Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
