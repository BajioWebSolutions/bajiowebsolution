
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

interface BlogDetailViewProps {
  slug?: string;
}

// Define blog post data
interface BlogPost {
  title: string;
  date: string;
  category: string;
  content: string;
  author: string;
  tags: string[];
}

// Blog posts database
const blogPostsData: Record<string, BlogPost> = {
  "ai-powered-web-design": {
    title: "AI-Powered Web Design: The Future of Digital Marketing",
    date: "April 8, 2024",
    category: "Web Design",
    author: "Bajio Web Solutions Team",
    tags: ["AI", "Web Design", "Digital Marketing", "User Experience"],
    content: `
      <div class="mb-8">
        <img src="/lovable-uploads/c4fae138-32fa-4834-a235-e94f2007b1b4.png" alt="Responsive web design showcase" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      </div>

      <h2>The Evolution of Web Design in the AI Era</h2>
      
      <p>In today's rapidly evolving digital landscape, artificial intelligence is revolutionizing how websites are designed and developed. At <a href="/services">Bajio Web Solutions</a>, we're pioneering the integration of AI technologies into our <a href="/services">web development services</a>, creating smarter, more efficient, and highly personalized digital experiences.</p>
      
      <p>The web design landscape has undergone significant transformation since the early days of static HTML pages. Today's websites are dynamic, responsive, and increasingly intelligent—adapting to user behavior and preferences in real-time.</p>
      
      <div class="my-8 aspect-video">
        <iframe 
          class="w-full h-full rounded-lg shadow-lg" 
          src="https://www.youtube.com/embed/6jqvG3SZyv0" 
          title="AI-Powered Web Design" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>

      <h3>Key AI Technologies Transforming Web Design</h3>
      
      <p>Several AI technologies are at the forefront of this revolution:</p>
      
      <ul>
        <li><strong>Machine Learning Algorithms:</strong> These systems analyze user interaction data to continuously optimize website elements for better engagement and conversion rates.</li>
        <li><strong>Natural Language Processing (NLP):</strong> Powers more intuitive search functions and chatbots that understand and respond to user queries conversationally.</li>
        <li><strong>Computer Vision:</strong> Enables advanced image recognition and processing, facilitating dynamic visual content personalization.</li>
        <li><strong>Generative AI:</strong> Creates unique design elements, from graphics to complete layouts, based on specific parameters and brand guidelines.</li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="/lovable-uploads/d76711c8-33e7-47f5-ba1a-12373352cea6.png" alt="Modern web design across devices" class="w-full h-auto rounded-lg shadow-lg" />
        <img src="/lovable-uploads/4dfb770d-776f-4272-9124-2f4d882eba40.png" alt="Advanced web design visualization" class="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
      <h2>The Advantages of AI-Powered Web Design</h2>
      
      <h3>Enhanced User Experience</h3>
      
      <p>AI enables websites to deliver truly personalized experiences by analyzing user behavior patterns. At <a href="/services">Bajio Web Solutions</a>, we implement AI-driven recommendation systems that present content, products, or services most relevant to each visitor's interests and browsing history.</p>
      
      <p>This level of personalization was previously impossible with traditional web design approaches. Now, your website can function as a digital concierge, guiding users through a customized journey that maximizes engagement and conversion potential.</p>
    `
  },
  "revolutionizing-digital-marketing-with-ai": {
    title: "Revolutionizing Digital Marketing with AI: A Comprehensive Guide",
    date: "April 2, 2024",
    category: "Digital Marketing",
    author: "Bajio Web Solutions Team",
    tags: ["AI", "Digital Marketing", "Automation", "Data Analytics"],
    content: `
      <div class="mb-8">
        <img src="/lovable-uploads/d76711c8-33e7-47f5-ba1a-12373352cea6.png" alt="Digital marketing visualization" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      </div>

      <h2>The Digital Marketing Revolution</h2>
      
      <p>Artificial intelligence has fundamentally transformed how businesses approach digital marketing. At <a href="/services">Bajio Web Solutions</a>, we're leveraging cutting-edge AI technologies to create more effective, targeted, and measurable marketing campaigns for our clients.</p>
      
      <p>Traditional marketing approaches are rapidly being augmented or replaced by AI-driven strategies that optimize every aspect of the customer journey.</p>
      
      <h3>How AI is Transforming Marketing Strategies</h3>
      
      <p>Several key areas of digital marketing are being revolutionized by AI:</p>
      
      <ul>
        <li><strong>Customer Segmentation:</strong> AI algorithms can identify patterns in customer data that humans might miss, creating more precise audience segments.</li>
        <li><strong>Content Personalization:</strong> Dynamic content that adapts to individual user preferences and behaviors.</li>
        <li><strong>Predictive Analytics:</strong> Forecasting customer behaviors and market trends with unprecedented accuracy.</li>
        <li><strong>Marketing Automation:</strong> Streamlining repetitive tasks while increasing relevance and timing of customer communications.</li>
      </ul>
      
      <div class="my-8 aspect-video">
        <iframe 
          class="w-full h-full rounded-lg shadow-lg" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="AI in Digital Marketing" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>

      <h2>Practical Applications of AI in Marketing</h2>
      
      <h3>Chatbots and Conversational Marketing</h3>
      
      <p>Modern AI-powered chatbots are transforming customer service and engagement. Our <a href="/services">development team</a> implements sophisticated conversational interfaces that can:</p>
      
      <ul>
        <li>Answer product questions instantly</li>
        <li>Guide users through complex purchasing decisions</li>
        <li>Collect valuable customer feedback</li>
        <li>Qualify leads before human follow-up</li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="/lovable-uploads/c4fae138-32fa-4834-a235-e94f2007b1b4.png" alt="Marketing analytics dashboard" class="w-full h-auto rounded-lg shadow-lg" />
        <img src="/lovable-uploads/4dfb770d-776f-4272-9124-2f4d882eba40.png" alt="AI-powered content creation" class="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
      <p>Ready to transform your digital marketing strategy with AI? <a href="/contact">Contact our team</a> for a personalized consultation.</p>
    `
  },
  "smart-seo-strategies": {
    title: "Smart SEO Strategies: Harnessing AI for Enhanced Visibility",
    date: "March 25, 2024",
    category: "SEO",
    author: "Bajio Web Solutions Team",
    tags: ["SEO", "Search Engine Optimization", "AI", "Digital Marketing"],
    content: `
      <div class="mb-8">
        <img src="/lovable-uploads/4dfb770d-776f-4272-9124-2f4d882eba40.png" alt="SEO visualization" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      </div>

      <h2>The New Era of Intelligent SEO</h2>
      
      <p>Search engine optimization has evolved dramatically with the integration of AI technologies. At <a href="/services">Bajio Web Solutions</a>, we're implementing advanced AI-powered SEO strategies that go far beyond traditional keyword targeting.</p>
      
      <p>Today's search algorithms use machine learning to understand user intent, content quality, and relevance in ways that transform how we approach SEO.</p>
      
      <h3>Key AI Applications in Modern SEO</h3>
      
      <p>AI is revolutionizing several critical aspects of SEO:</p>
      
      <ul>
        <li><strong>Content Optimization:</strong> AI tools analyze top-performing content to identify patterns and suggest improvements.</li>
        <li><strong>Predictive Keyword Analysis:</strong> Identifying emerging search trends before they become competitive.</li>
        <li><strong>User Intent Mapping:</strong> Understanding the true purpose behind search queries to deliver more relevant content.</li>
        <li><strong>Technical SEO Automation:</strong> Identifying and resolving technical issues that impact search performance.</li>
      </ul>
      
      <div class="my-8 aspect-video">
        <iframe 
          class="w-full h-full rounded-lg shadow-lg" 
          src="https://www.youtube.com/embed/Y9HIfNGMEIY" 
          title="AI-Powered SEO Strategies" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>

      <h2>Implementing AI-Driven SEO Strategies</h2>
      
      <h3>Content Creation and Optimization</h3>
      
      <p>Our <a href="/services">development services</a> include implementing sophisticated content optimization tools that:</p>
      
      <ul>
        <li>Analyze competitors' top-performing content</li>
        <li>Identify content gaps and opportunities</li>
        <li>Suggest optimal content structures</li>
        <li>Recommend semantic keywords and related topics</li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="/lovable-uploads/c4fae138-32fa-4834-a235-e94f2007b1b4.png" alt="SEO performance dashboard" class="w-full h-auto rounded-lg shadow-lg" />
        <img src="/lovable-uploads/d76711c8-33e7-47f5-ba1a-12373352cea6.png" alt="Content optimization tools" class="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
      <h3>Technical SEO Automation</h3>
      
      <p>AI tools can continuously monitor your website's technical health, identifying issues that might impact search performance. Our <a href="/services">ongoing support services</a> ensure your website maintains optimal technical SEO performance through:</p>
      
      <ul>
        <li>Automated site crawling and issue detection</li>
        <li>Schema markup recommendations</li>
        <li>Page speed optimization</li>
        <li>Mobile usability monitoring</li>
      </ul>
      
      <p>Ready to elevate your search visibility with AI-powered SEO strategies? <a href="/contact">Contact our team</a> for a comprehensive SEO audit.</p>
    `
  }
};

export const BlogDetailView = ({ slug }: BlogDetailViewProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Get post data based on slug
  const post = slug ? blogPostsData[slug] : null;
  
  // Handle external links and internal links in the blog content
  useEffect(() => {
    if (contentRef.current) {
      const links = contentRef.current.querySelectorAll('a');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          // Check if it's an internal link (starts with /)
          if (href.startsWith('/')) {
            // It's an internal link, use client-side navigation
            link.addEventListener('click', (e) => {
              e.preventDefault();
              navigate(href);
            });
            
            // Remove target and rel attributes if they exist
            link.removeAttribute('target');
            link.removeAttribute('rel');
          } else if (href.startsWith('http://') || href.startsWith('https://')) {
            // External link - add target and rel attributes
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            
            // Add external link icon for non-internal links
            const icon = document.createElement('span');
            icon.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';
            link.appendChild(icon);
          }
        }
      });
    }
  }, [navigate, slug]);
  
  // If post not found
  if (!post && slug) {
    return (
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Blog post not found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Button 
            variant="ghost" 
            asChild 
            className="flex items-center mb-8 text-foreground-dark hover:text-primary transition-colors"
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
          </Button>
          
          {post && (
            <>
              <div className="text-sm text-neutral mb-2">{post.date}</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground-dark">{post.title}</h1>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  <span className="text-primary text-sm mr-6">{post.category}</span>
                  <span className="text-neutral text-sm">By {post.author}</span>
                </div>
              </div>
              
              <div className="bg-neutral-dark/30 backdrop-blur-sm border border-primary/10 rounded-lg p-8 shadow-lg">
                <div 
                  ref={contentRef}
                  className="prose prose-invert max-w-none prose-headings:text-foreground-dark prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-300 prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-light prose-li:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <div className="mt-12 pt-8 border-t border-neutral-dark">
                  <p className="text-neutral mb-4">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
