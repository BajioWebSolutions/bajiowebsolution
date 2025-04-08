
import { Footer } from "@/components/Footer";
import { BlogSection } from "@/components/BlogSection";
import { motion } from "framer-motion";
import { BlogDetailView } from "@/components/BlogDetailView";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { slug } = useParams();
  
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
