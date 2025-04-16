
import { useRef } from "react";
import { motion } from "framer-motion";
import { BlogContentProps } from "@/types/blog";

export const BlogContent = ({ content }: BlogContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        ref={contentRef}
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </motion.div>
  );
};
