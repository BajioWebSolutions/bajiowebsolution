
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BlogHeader } from "./blog/BlogHeader";
import { blogPostsData } from "../data/blogPosts";

interface BlogDetailViewProps {
  slug?: string;
}

export const BlogDetailView = ({ slug = "" }: BlogDetailViewProps) => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const blogPost = blogPostsData[slug];
  
  useEffect(() => {
    if (!slug || !blogPost) {
      navigate("/blog");
    }
  }, [slug, blogPost, navigate]);

  if (!blogPost) {
    return null;
  }

  return (
    <section className="py-16 bg-background-dark min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <BlogHeader
            title={blogPost.title}
            date={blogPost.date}
            category={blogPost.category}
            author={blogPost.author}
            tags={blogPost.tags}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              ref={contentRef}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
