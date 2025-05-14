
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const FeaturedPost = () => {
  const featuredPostSlug = "digital-marketing-trends-2025";
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden mb-16 custom-shadow">
      <div className="md:flex">
        <div className="md:w-1/2">
          <Link to={`/blog/${featuredPostSlug}`}>
            <img 
              src="/lovable-uploads/c4b0c30f-0691-48f5-9946-c293a3908ce1.png" 
              alt="Featured Post" 
              className="w-full h-full object-cover object-top"
            />
          </Link>
        </div>
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary bg-opacity-20 text-primary mb-4">
            Digital Strategy
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            <Link to={`/blog/${featuredPostSlug}`}>
              5 Digital Marketing Trends Reshaping the Industry in 2025
            </Link>
          </h2>
          <p className="text-gray-300 mb-6">Discover the cutting-edge strategies and technologies that are transforming how businesses connect with their audiences. From AI-powered personalization to immersive content experiences, we explore the innovations that will define success in the digital landscape.</p>
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/c4fae138-32fa-4834-a235-e94f2007b1b4.png" 
              alt="Author" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-white font-medium">Rigoberto Lopez</p>
              <p className="text-gray-400 text-sm">April 18, 2025 · 8 min read</p>
            </div>
          </div>
          <Link to={`/blog/${featuredPostSlug}`} className="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
            Read Full Article
            <i className="ri-arrow-right-line ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
