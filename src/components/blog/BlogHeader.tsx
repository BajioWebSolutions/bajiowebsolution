
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BlogHeaderProps {
  title: string;
  date: string;
  category: string;
  author: string;
  tags: string[];
}

export const BlogHeader = ({ title, date, category, author, tags }: BlogHeaderProps) => {
  return (
    <>
      <div className="mb-8">
        <Button 
          variant="outline"
          size="sm"
          asChild
          className="flex items-center gap-1 text-primary hover:text-primary-light transition-colors"
        >
          <Link to="/blog">
            <ArrowLeft size={16} />
            <span>Back to all articles</span>
          </Link>
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground-dark">
          {title}
        </h1>
        
        <div className="flex items-center gap-4 text-neutral mb-6">
          <span>{date}</span>
          <span>·</span>
          <span>{category}</span>
          <span>·</span>
          <span>{author}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(tag => (
            <span 
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
};
