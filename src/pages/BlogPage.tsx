
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BlogDetailView } from "@/components/BlogDetailView";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BlogPost } from "@/components/BlogPost";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogCards = [
  {
    title: "Mastering Social Media Algorithms in 2025",
    excerpt: "Learn how to navigate the ever-changing algorithms across major platforms to maximize your organic reach and engagement.",
    date: "April 15, 2025",
    category: "Social Media",
    slug: "post-1",
    image: "https://readdy.ai/api/search-image?query=social%20media%20marketing%20analytics%20dashboard%20on%20computer%20screen%20with%20colorful%20graphs%20and%20data%20visualizations%2C%20professional%20setting&width=600&height=400&seq=3&orientation=landscape"
  },
  {
    title: "Local SEO Strategies for Connecticut Businesses",
    excerpt: "Discover proven techniques to dominate local search results and attract more customers from your community.",
    date: "April 10, 2025",
    category: "SEO",
    slug: "post-2",
    image: "https://readdy.ai/api/search-image?query=SEO%20optimization%20concept%20with%20keywords%20and%20search%20results%20on%20computer%20screen%2C%20professional%20digital%20marketing%20workspace&width=600&height=400&seq=4&orientation=landscape"
  },
  {
    title: "Creating Content That Converts: A Complete Guide",
    excerpt: "Learn how to craft compelling content that not only engages your audience but also drives measurable business results.",
    date: "April 5, 2025",
    category: "Content Marketing",
    slug: "post-3",
    image: "https://readdy.ai/api/search-image?query=content%20marketing%20strategy%20planning%20session%20with%20creative%20team%20brainstorming%20ideas%20on%20whiteboard%2C%20professional%20office%20setting&width=600&height=400&seq=5&orientation=landscape"
  },
  {
    title: "Maximizing ROI with Multi-Channel PPC Campaigns",
    excerpt: "Explore advanced strategies for optimizing your paid advertising across Google, Meta, and emerging platforms.",
    date: "March 30, 2025",
    category: "Paid Advertising",
    slug: "post-4",
    image: "https://readdy.ai/api/search-image?query=digital%20advertising%20campaign%20planning%20with%20professionals%20analyzing%20ad%20performance%20metrics%20on%20multiple%20screens%2C%20professional%20marketing%20setting&width=600&height=400&seq=6&orientation=landscape"
  },
  {
    title: "Email Automation Sequences That Drive Sales",
    excerpt: "Discover how to build sophisticated email journeys that nurture leads and convert prospects into loyal customers.",
    date: "March 25, 2025",
    category: "Email Marketing",
    slug: "post-5",
    image: "https://readdy.ai/api/search-image?query=email%20marketing%20campaign%20design%20with%20professional%20team%20reviewing%20newsletter%20templates%20on%20computer%20screens%2C%20modern%20office%20environment&width=600&height=400&seq=7&orientation=landscape"
  },
  {
    title: "Website Performance Optimization Techniques",
    excerpt: "Learn how to dramatically improve your website's speed, user experience, and conversion rates with these proven methods.",
    date: "March 20, 2025",
    category: "Web Development",
    slug: "post-6",
    image: "https://readdy.ai/api/search-image?query=website%20development%20team%20working%20on%20responsive%20design%20project%20with%20multiple%20devices%20showing%20website%20layouts%2C%20professional%20tech%20environment&width=600&height=400&seq=8&orientation=landscape"
  }
];

const BlogPage = () => {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (slug) {
    return (
      <motion.div
        className="min-h-screen bg-background-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BlogDetailView slug={slug} />
        <Footer />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-background-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Blog</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Insights, strategies, and industry updates from our digital marketing experts.
          </p>
        </div>

        <FeaturedPost />
      </section>

      {/* Blog Posts Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-3/4">
            <BlogFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogCards.map((post, index) => (
                <div
                  key={post.slug}
                  className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 blog-card custom-shadow group flex flex-col h-full"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary bg-opacity-20 text-primary mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <Link to={`/blog/${post.slug}`} className="text-primary hover:text-white transition-colors text-sm font-medium">Read more</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex items-center gap-2" aria-label="Pagination">
                <Button variant="outline" size="icon" className="rounded-button" aria-label="Previous page">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="default" className="rounded-button">1</Button>
                <Button variant="outline" className="rounded-button">2</Button>
                <Button variant="outline" className="rounded-button">3</Button>
                <span className="px-2 text-gray-500">...</span>
                <Button variant="outline" className="rounded-button">8</Button>
                <Button variant="outline" size="icon" className="rounded-button" aria-label="Next page">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </nav>
            </div>
          </div>
          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default BlogPage;
