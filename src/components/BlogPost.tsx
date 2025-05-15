
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "./ui/card";

interface BlogPostProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    slug: string;
    image?: string;
    author?: string;
  };
  index: number;
}

export const BlogPost = ({ post, index }: BlogPostProps) => {
  const navigate = useNavigate();
  
  // Ensure we have a valid slug for linking
  const postSlug = post.slug || "";
  
  console.log(`BlogPost rendering for: "${post.title}" with slug: "${postSlug}"`);
  
  const handlePostClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(`Navigating to blog post with slug: "${postSlug}"`);
    navigate(`/blog/${postSlug}`);
  };
  
  if (!postSlug) {
    console.error("Blog post has no slug:", post);
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="bg-gray-800 rounded-lg overflow-hidden custom-shadow transition-transform duration-300 blog-card hover:-translate-y-1.5 group flex flex-col h-full">
        <div className="relative h-48">
          <Link to={`/blog/${postSlug}`} className="block h-full" onClick={handlePostClick}>
            <img
              src={post.image || "/lovable-uploads/c4b0c30f-0691-48f5-9946-c293a3908ce1.png"}
              alt={post.title}
              className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary bg-opacity-20 text-primary mb-3">
            {post.category}
          </span>
          <h3 className="text-xl font-bold mb-3 text-white leading-snug group-hover:text-primary transition-colors duration-200">
            <Link to={`/blog/${postSlug}`} onClick={handlePostClick}>{post.title}</Link>
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-gray-400 text-sm">{post.date}</span>
            <Link
              to={`/blog/${postSlug}`}
              onClick={handlePostClick}
              className="text-primary font-medium hover:text-white transition-colors text-sm"
            >
              Read more
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
