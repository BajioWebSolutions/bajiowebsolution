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
    title: "Web Design Trends 2024",
    excerpt: "Discover the latest web design trends shaping the digital landscape...",
    date: "March 15, 2024",
    category: "Web Design",
    slug: "web-design-trends-2024"
  },
  {
    title: "SEO Best Practices",
    excerpt: "Learn how to optimize your website for better search engine rankings...",
    date: "March 10, 2024",
    category: "SEO",
    slug: "seo-best-practices"
  },
  {
    title: "Digital Marketing Guide",
    excerpt: "A comprehensive guide to digital marketing strategies...",
    date: "March 5, 2024",
    category: "Digital Marketing",
    slug: "digital-marketing-guide"
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
          <h2 className="text-4xl font-bold mb-4 text-foreground-dark">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-dark rounded-lg overflow-hidden backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="text-sm text-neutral mb-2">{post.date}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground-dark">{post.title}</h3>
                <p className="text-neutral mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary">{post.category}</span>
                  <Button 
                    variant="link" 
                    asChild
                    className="text-primary hover:text-primary-light transition-colors"
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