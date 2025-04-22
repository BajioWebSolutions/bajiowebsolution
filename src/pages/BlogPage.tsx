
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BlogDetailView } from "@/components/BlogDetailView";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BlogPost } from "@/components/BlogPost";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (slug) {
    return (
      <motion.div 
        className="min-h-screen bg-background-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BlogDetailView slug={slug} />
        <Footer />
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-background-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Blog</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Insights, strategies, and industry updates from our digital marketing experts.
          </p>
        </div>
        
        <FeaturedPost />
      </section>

      {/* Blog Posts Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-3/4">
            <BlogFilter 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <BlogPost
                  key={index}
                  post={{
                    title: "Mastering Social Media Algorithms",
                    excerpt: "Learn how to navigate the ever-changing algorithms across major platforms...",
                    date: "April 15, 2025",
                    category: "Social Media",
                    slug: `post-${index}`
                  }}
                  index={index}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-button">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                
                <Button variant="default" className="rounded-button">1</Button>
                <Button variant="outline" className="rounded-button">2</Button>
                <Button variant="outline" className="rounded-button">3</Button>
                <span className="px-2 text-gray-500">...</span>
                <Button variant="outline" className="rounded-button">8</Button>
                
                <Button variant="outline" size="icon" className="rounded-button">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default BlogPage;
