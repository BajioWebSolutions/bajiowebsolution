
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogPosts, fetchBlogPost, fetchBlogCategories, BlogPost, BlogCategory } from "@/lib/supabase/blog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, User, Tag } from "lucide-react";

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogData = async () => {
      setIsLoading(true);
      
      const [fetchedPosts, fetchedCategories] = await Promise.all([
        fetchBlogPosts({ category: selectedCategory || undefined }),
        fetchBlogCategories()
      ]);
      
      setPosts(fetchedPosts);
      setCategories(fetchedCategories);
      setIsLoading(false);
    };

    loadBlogData();
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-foreground-dark mb-4">
          Our <span className="text-primary">Blog</span>
        </h1>
        <p className="text-neutral max-w-2xl mx-auto">
          Insights, tips, and news about web development, design, and digital marketing.
        </p>
      </motion.div>

      {categories.length > 0 && (
        <div className="mb-8">
          <Tabs 
            value={selectedCategory || 'all'} 
            onValueChange={(value) => setSelectedCategory(value === 'all' ? null : value)}
            className="w-full"
          >
            <TabsList className="w-full mb-6 flex overflow-x-auto space-x-1 bg-neutral-dark/20 p-1">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.slug}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-pulse text-primary">Loading posts...</div>
        </div>
      ) : posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {post.featured_image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.featured_image} 
                    alt={post.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-neutral">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>
                    {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-foreground-dark">{post.title}</h2>
                <p className="text-neutral mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Tag className="w-4 h-4 mr-1 text-primary" />
                    <span className="text-primary">{post.category?.name || 'Uncategorized'}</span>
                  </div>
                  <Button 
                    variant="link" 
                    asChild
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    <a href={`/blog/${post.slug}`}>Read More →</a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-neutral">No blog posts found.</p>
        </div>
      )}
    </div>
  );
};

const BlogDetail = ({ slug }: { slug: string }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      setIsLoading(true);
      const fetchedPost = await fetchBlogPost(slug);
      setPost(fetchedPost);
      setIsLoading(false);
    };

    loadPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center py-12">
          <div className="animate-pulse text-primary">Loading post...</div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Post Not Found</h2>
          <p className="text-neutral mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/blog">Back to Blog</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {post.featured_image && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
        )}
        
        <h1 className="text-4xl font-bold text-foreground-dark mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center mb-8 gap-4 text-neutral">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>
              {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          
          {post.author?.full_name && (
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author.full_name}</span>
            </div>
          )}
          
          {post.category?.name && (
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-1 text-primary" />
              <span className="text-primary">{post.category.name}</span>
            </div>
          )}
        </div>
        
        <div 
          className="prose prose-lg max-w-none text-neutral-light"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-12 pt-6 border-t border-neutral-dark/20">
          <Button asChild variant="outline">
            <a href="/blog">← Back to Blog</a>
          </Button>
        </div>
      </motion.article>
    </div>
  );
};

const BlogPage = () => {
  const { slug } = useParams<{ slug?: string }>();

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-10 px-4 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
        {slug ? (
          <BlogDetail slug={slug} />
        ) : (
          <BlogList />
        )}
      </section>
      <Footer />
    </motion.div>
  );
};

export default BlogPage;
