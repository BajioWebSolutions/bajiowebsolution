
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogPosts, BlogPost } from "@/lib/supabase/blog";

export const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      const posts = await fetchBlogPosts({ limit: 3 });
      setBlogPosts(posts);
      setIsLoading(false);
    };

    loadPosts();
  }, []);

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

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-primary">Loading posts...</div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-dark rounded-lg overflow-hidden backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                {post.featured_image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.featured_image} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-sm text-neutral mb-2">
                    {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground-dark">{post.title}</h3>
                  <p className="text-neutral mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary">{post.category?.name || 'Uncategorized'}</span>
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
        )}

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
