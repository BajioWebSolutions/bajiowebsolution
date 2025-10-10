
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BlogDetailView } from "@/components/BlogDetailView";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BlogPost } from "@/components/BlogPost";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { blogPostsData } from "@/data/blogPosts";
import lebanonCtBusinessImage from "@/assets/lebanon-ct-business-featured.jpg";
import tacosLaRosaImage from "@/assets/tacos-la-rosa-featured.jpg";

const blogCards = [
  {
    title: "Is It Getting Harder to Run a Business in Lebanon, CT? Here's How to Fight Back.",
    excerpt: "Running a small business in a town like Lebanon is a balancing act. You have the high costs of doing business in Connecticut, the challenge of finding good help, and the constant feeling that you have to work twice as hard to get noticed. It's not just you—it's a real struggle. But being 'out of the way' doesn't mean you have to be out of mind.",
    date: "April 27, 2025",
    category: "Local Business",
    slug: "lebanon-ct-business-challenges",
    image: lebanonCtBusinessImage,
    author: "Rigoberto Lopez"
  },
  {
    title: "Customer Spotlight: A New Digital Home for Tacos La Rosa in Willimantic",
    excerpt: "Here at Bajio Web Solutions, nothing makes us happier than helping a fellow local business succeed. We were recently honored to work with Tacos La Rosa, a fantastic and authentic Mexican restaurant located right in Willimantic, CT.",
    date: "April 20, 2025",
    category: "Customer Spotlight",
    slug: "tacos-la-rosa-spotlight",
    image: tacosLaRosaImage,
    author: "Rigoberto Lopez"
  }
];

const BlogPage = () => {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogCards);
  const location = useLocation();

  console.log("Current slug from params:", slug);
  console.log("Current location pathname:", location.pathname);
  
  const filterPosts = () => {
    let filtered = [...blogCards];
    
    // Apply category filter if not "all"
    if (activeCategory !== "all") {
      filtered = filtered.filter(post => {
        const normalizedCategory = post.category.toLowerCase().replace(' ', '-');
        return normalizedCategory === activeCategory.toLowerCase() ||
               (activeCategory === "digital-strategy" && post.category === "Digital Strategy");
      });
    }
    
    // Apply search filter if query exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(filtered);
  };

  // Handle newsletter subscription
  const handleSubscribe = (email: string) => {
    toast.success(`Thank you for subscribing with ${email}! You'll receive our latest insights soon.`);
  };

  // Handle category click from sidebar
  const handleCategoryClick = (category: string) => {
    // Map the category display name to the category ID used for filtering
    const normalizedCategory = category.toLowerCase().replace(/\s+/g, '-');
    setActiveCategory(normalizedCategory);
  };

  useEffect(() => {
    filterPosts();
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, location]);

  // If we have a slug, render the blog detail view
  if (slug) {
    console.log("Attempting to render BlogDetailView for slug:", slug);
    
    // Check if this slug exists in our data
    const postExists = slug in blogPostsData;
    console.log("Post exists in blogPostsData?", postExists);
    
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

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogPost key={post.slug} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-xl text-white mb-2">No posts found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex items-center gap-2" aria-label="Pagination">
                <Button variant="outline" size="icon" className="rounded-button" aria-label="Previous page">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="default" className="rounded-button">1</Button>
                <Button variant="outline" className="rounded-button">2</Button>
                <Button variant="outline" className="rounded-button">3</Button>
                <span className="px-2 text-gray-500">...</span>
                <Button variant="outline" className="rounded-button">8</Button>
                <Button variant="outline" size="icon" className="rounded-button" aria-label="Next page">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </nav>
            </div>
          </div>
          {/* Sidebar */}
          <BlogSidebar 
            onSearch={setSearchQuery} 
            onSubscribe={handleSubscribe}
            onCategoryClick={handleCategoryClick}
          />
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default BlogPage;
