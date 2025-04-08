
import { Footer } from "@/components/Footer";
import { BlogSection } from "@/components/BlogSection";
import { motion } from "framer-motion";
import { BlogDetailView } from "@/components/BlogDetailView";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Handle internal navigation from blog content
  useEffect(() => {
    // Function to handle clicks on internal links within blog content
    const handleInternalLinkClicks = (event: MouseEvent) => {
      // Check if the click was on an anchor tag
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        
        // If it's an internal link (starts with /) but not a blog post link
        if (href && href.startsWith('/') && !href.startsWith('/blog')) {
          event.preventDefault();
          navigate(href);
        }
      }
    };

    // Add event listener to the document body
    document.body.addEventListener('click', handleInternalLinkClicks);
    
    // Clean up
    return () => {
      document.body.removeEventListener('click', handleInternalLinkClicks);
    };
  }, [navigate]);
  
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {slug ? <BlogDetailView slug={slug} /> : <BlogSection />}
      <Footer />
    </motion.div>
  );
};

export default BlogPage;
