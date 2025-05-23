
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BlogHeader } from "./blog/BlogHeader";
import { BlogContent } from "./blog/BlogContent";
import { blogPostsData } from "../data/blogPosts";
import { BlogDetailViewProps } from "@/types/blog";

export const BlogDetailView = ({ slug = "" }: BlogDetailViewProps) => {
  const navigate = useNavigate();
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
          <BlogContent content={blogPost.content} />
        </div>
      </div>
    </section>
  );
};
