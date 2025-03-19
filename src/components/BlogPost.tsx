
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { CalendarIcon, BookOpenIcon } from "lucide-react";

interface BlogPostProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    slug: string;
  };
  index: number;
}

export const BlogPost = ({ post, index }: BlogPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-neutral-dark/20 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center text-sm text-neutral mb-2">
            <CalendarIcon className="h-4 w-4 mr-2 text-primary/70" />
            {post.date}
          </div>
          <h3 className="text-xl font-bold text-foreground-dark">{post.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-neutral">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between pt-2">
          <span className="flex items-center text-sm text-primary">
            <BookOpenIcon className="h-4 w-4 mr-1" />
            {post.category}
          </span>
          <Button 
            variant="link" 
            asChild
            className="text-primary hover:text-primary-light transition-colors"
          >
            <Link to={`/blog/${post.slug}`}>Read More →</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
