import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Web Design Trends for 2024",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape in 2024.",
    date: "March 15, 2024",
    category: "Web Design",
    slug: "web-design-trends-2024"
  },
  {
    title: "Maximizing SEO for Small Businesses",
    excerpt: "Learn effective SEO strategies specifically tailored for small business growth.",
    date: "March 10, 2024",
    category: "SEO",
    slug: "maximizing-seo-small-businesses"
  },
  {
    title: "The Impact of AI on Web Development",
    excerpt: "Explore how artificial intelligence is revolutionizing web development practices.",
    date: "March 5, 2024",
    category: "Technology",
    slug: "ai-impact-web-development"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Latest <span className="text-primary">Insights</span>
          </h1>
          <p className="text-neutral text-center mb-12 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="bg-neutral-dark/20 rounded-lg overflow-hidden backdrop-blur-sm animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="text-sm text-neutral mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold mb-3 text-foreground">{post.title}</h2>
                  <p className="text-neutral mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary">{post.category}</span>
                    <Button 
                      variant="link" 
                      asChild
                      className="text-primary hover:text-primary-light"
                    >
                      <Link to={`/blog/${post.slug}`}>Read More →</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;