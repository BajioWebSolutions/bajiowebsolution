
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
    tags: ["AI", "Digital Marketing", "Automation", "Data Analytics", "Small Business"],
    content: `
      <div class="mb-8">
        <img src="/lovable-uploads/15b7f27f-64b5-4496-9246-cf05e63d35a9.png" alt="Digital marketing visualization with AI" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      </div>

      <h2>The AI Revolution in Digital Marketing: Why Small Businesses Can't Afford to Ignore It</h2>
      
      <p>Did you know that by the end of 2025, 88% of marketers will be using AI in their day-to-day roles? For small local businesses struggling to compete against corporate giants, artificial intelligence once seemed like a distant, expensive technology. Today, it's becoming the great equalizer in digital marketing, enabling even the smallest enterprises to deliver personalized, data-driven campaigns that rival their larger competitors.</p>
      
      <p>Artificial intelligence has rapidly evolved from an emerging technology to an essential component of effective digital marketing strategies. According to a 2025 report from Adobe Digital Trends, "AI and predictive analytics are redefining how marketers drive growth, enabling deeply tailored strategies" that were previously accessible only to enterprises with substantial resources.</p>
      
      <p>For small local businesses, AI tools offer unprecedented opportunities to:</p>
      
      <ul>
        <li>Compete effectively against larger companies with deeper pockets</li>
        <li>Create highly personalized customer experiences at scale</li>
        <li>Automate time-consuming tasks to focus on strategic initiatives</li>
        <li>Generate actionable insights from customer data</li>
        <li>Optimize marketing spend for maximum return on investment</li>
      </ul>
      
      <p>As Forbes notes in their 2025 digital marketing trends report, "AI, voice search, AR and video will dominate digital marketing in 2025, while data privacy and sustainability will become essential for shaping customer experiences." Small businesses that fail to adopt these technologies risk being left behind as consumer expectations continue to evolve.</p>
      
      <h2>AI-Powered Web Design: Creating Intelligent Digital Storefronts</h2>
      
      <p>Your website serves as your business's digital storefront, and AI is transforming how these vital assets are designed, developed, and optimized.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="/lovable-uploads/c40df0b8-2bd7-492e-8837-4d444e232d1d.png" alt="AI-powered analytics dashboard" class="w-full h-auto rounded-lg shadow-lg" />
        <img src="/lovable-uploads/1e6381f6-01ce-44f6-aac4-ef16260cb50d.png" alt="AI digital experience" class="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
      <h3>Automated Design Processes</h3>
      
      <p>Modern AI-powered web design tools streamline the creation process, generating multiple design variations based on your brand guidelines and target audience. This acceleration of the development timeline maintains high design standards while delivering superior results in less time.</p>
      
      <p>"Integrating AI can help web developers discover user preferences, automate repetitive tasks, and improve website performance," according to a recent report from Litslink. For small business owners, this means professional website development at a fraction of the traditional cost and timeframe.</p>
      
      <h3>Enhanced User Experience Through Personalization</h3>
      
      <p>AI enables websites to deliver truly personalized experiences by analyzing user behavior patterns. AI-driven recommendation systems present content, products, or services most relevant to each visitor's interests and browsing history.</p>
      
      <p>Acropolium's 2025 report on AI in web development confirms that "AI boosts efficiency, enhances user engagement, enables personalization, reduces costs through automation, and improves decision-making with data-driven insights."</p>
      
      <h3>Data-Driven Design Optimization</h3>
      
      <p>AI systems excel at processing vast amounts of user data to extract meaningful insights about your website's performance. By implementing these technologies, small businesses can make informed decisions about their website's design, content, and functionality based on concrete data rather than subjective opinions.</p>
      
      <p>From heat maps showing where users focus their attention to sophisticated A/B testing algorithms that optimize conversion paths, AI provides the analytics backbone for continuous website improvement.</p>
      
      <h2>SEO Optimization with AI: Becoming Visible in a Crowded Digital Landscape</h2>
      
      <p>Search engine optimization remains a cornerstone of digital marketing, and AI is revolutionizing how businesses approach this critical discipline.</p>
      
      <div class="my-8">
        <img src="/lovable-uploads/942ce1ef-268b-4f05-97a5-f7f04c2ede53.png" alt="AI-powered urban digital landscape" class="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
      <h3>Intelligent Keyword Research and Targeting</h3>
      
      <p>AI-powered keyword research tools have transformed how businesses identify valuable search terms. These tools use advanced algorithms to analyze search trends, competition levels, and user intent, helping small businesses discover high-value keywords they can realistically rank for.</p>
      
      <p>"AI-powered SEO tools help businesses improve their search rankings. They can handle tasks like keyword research, content optimization, technical SEO, and more," according to a 2025 review of AI SEO tools from Self-Made Millennials.</p>
      
      <h3>Content Optimization at Scale</h3>
      
      <p>Creating SEO-optimized content has traditionally been time-consuming and required specialized knowledge. AI content optimization tools now enable small businesses to produce search-friendly content efficiently.</p>
      
      <p>According to the Digital Marketing Institute, "AI can enhance local SEO by generating descriptions, analyzing data to provide recommendations, and replying to reviews." For small local businesses targeting specific geographic areas, these capabilities are particularly valuable.</p>
      
      <h3>Predictive SEO Analysis</h3>
      
      <p>Perhaps most valuable for resource-constrained small businesses is AI's ability to predict SEO trends and algorithm changes. As Salesforce notes in their 2025 AI for SEO guide, "AI-driven predictive analytics will enable us to anticipate changes in search engine algorithms, user behavior, and industry trends with greater accuracy."</p>
      
      <p>This foresight allows small businesses to proactively adjust their SEO strategies in real-time, staying ahead of competitors who rely on reactive approaches.</p>
      
      <h2>Logo Design and Brand Identity: AI as Your Creative Partner</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="/lovable-uploads/1ee34d83-7cfe-4a81-a858-fb5de808b105.png" alt="AI data network visualization" class="w-full h-auto rounded-lg shadow-lg" />
        <img src="/lovable-uploads/c4fae138-32fa-4834-a235-e94f2007b1b4.png" alt="Creative web design" class="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
      <p>Establishing a memorable brand identity starts with a professional logo, and AI is transforming this critical aspect of marketing as well.</p>
      
      <h3>AI-Powered Logo Generation</h3>
      
      <p>Modern AI logo generators analyze industry trends, color psychology, and design principles to create custom logos tailored to your business. Tools like Logo.com, Looka, and Adobe Express Logo Maker use artificial intelligence to generate professional logo options in minutes rather than days or weeks.</p>
      
      <p>"Design your brand logo quickly and effortlessly with Looka's AI logo generator. Start for free and customize your logo in minutes!" This accessibility allows small businesses to obtain professional branding without the substantial investment typically required for custom design work.</p>
      
      <h3>Brand Consistency Across Platforms</h3>
      
      <p>Beyond logo creation, AI helps maintain brand consistency across all digital touchpoints. By analyzing your established brand elements, AI tools can generate complementary visual assets for websites, social media, email campaigns, and other marketing materials.</p>
      
      <p>For entrepreneurs juggling multiple responsibilities, these tools ensure professional branding without requiring extensive design expertise or hiring specialized staff.</p>
      
      <h2>Email Marketing Automation: Personalization at Scale</h2>
      
      <p>Email marketing continues to deliver one of the highest returns on investment of any digital marketing channel, and AI is making it even more effective.</p>
      
      <h3>Smart Segmentation and Targeting</h3>
      
      <p>AI analyzes customer data to identify patterns and preferences, automatically segmenting your email list for more relevant communications. According to Salesforce's 2025 guide to AI in email marketing, "AI in email marketing uses machine learning algorithms to personalize content, optimize send times, and segment audiences."</p>
      
      <h3>Optimized Send Times and Content</h3>
      
      <p>Determining when to send marketing emails has traditionally been based on industry benchmarks or trial and error. AI systems like Seventh Sense analyze each subscriber's unique engagement patterns to identify optimal send times on an individual basis.</p>
      
      <p>The U.S. Chamber of Commerce highlights that Seventh Sense "AI algorithms analyze each customer's unique engagement patterns to increase email open rates and interactions," with pricing beginning at $80 per month for HubSpot users with 5,000 marketing contacts.</p>
      
      <h3>AI-Generated Email Content</h3>
      
      <p>Creating engaging email content consistently is challenging for most small businesses. AI writing tools can now generate effective email copy based on your brand voice, campaign objectives, and target audience.</p>
      
      <p>Mailchimp notes that "AI can crunch numbers, write email subject lines, inform your email marketing strategy, and much more," making sophisticated email marketing accessible to businesses without dedicated copywriters.</p>
      
      <h2>Small Business Solutions: AI Tools That Won't Break the Bank</h2>
      
      <p>One of the most significant developments in AI for digital marketing is the increasing availability of affordable tools specifically designed for small businesses.</p>
      
      <h3>Free and Low-Cost AI Marketing Tools</h3>
      
      <p>The U.S. Small Business Administration recognizes the importance of AI accessibility, noting that "AI can improve efficiency, which can help business owners save time. It can also save on costs and help your business stay competitive."</p>
      
      <p>Thryv's 2025 guide identifies 22 free AI tools for small business owners, covering areas from content creation to social media management. These tools make sophisticated marketing capabilities accessible to businesses of all sizes.</p>
      
      <h3>Integrated AI Marketing Platforms</h3>
      
      <p>Rather than adopting multiple standalone AI tools, many small businesses benefit from integrated platforms that combine various AI marketing functions.</p>
      
      <p>HubSpot's AI Marketing Hub offers features like automated campaign development and tracking, with some capabilities available in their free version and paid plans starting at just $18 per month. For businesses seeking a comprehensive solution, such platforms provide a central command center for AI-powered marketing efforts.</p>
      
      <h2>Online Presence Enhancement: Going Beyond the Basics</h2>
      
      <p>While websites and social media form the foundation of digital presence, AI enables small businesses to enhance their online visibility in more sophisticated ways.</p>
      
      <h3>AI-Powered Chatbots and Virtual Assistants</h3>
      
      <p>Modern AI chatbots go far beyond simple scripted responses, providing personalized assistance that enhances customer experiences while reducing operational costs.</p>
      
      <p>"AI tools can help your small business scour the web for brand mentions, create content, automate workflows, and analyze customer insights," according to the U.S. Chamber of Commerce. Implementing a chatbot solution like Zapier's custom AI-powered chatbot (with templates available in their $20/month premium plan) can provide 24/7 customer service without the expense of round-the-clock staffing.</p>
      
      <h3>Dynamic Content Generation</h3>
      
      <p>Content creation has traditionally been a bottleneck for small business marketing. AI tools now enable dynamic content generation at scale, from product descriptions to blog posts and social media updates.</p>
      
      <p>Tools like Jasper, which offers plans starting at $49 per month per seat, can "generate marketing assets, including social media posts, sales emails, blog content, and website copy." This capability allows small businesses to maintain an active content calendar without dedicating extensive internal resources.</p>
      
      <h2>Entrepreneur Support: Leveraging AI as Your Marketing Partner</h2>
      
      <p>For entrepreneurs wearing multiple hats in their business, AI offers particularly valuable support by serving as a virtual marketing department.</p>
      
      <h3>Automated Workflow Management</h3>
      
      <p>AI excels at automating repetitive marketing tasks, freeing entrepreneurs to focus on strategic initiatives and business growth. Platforms like Zapier integrate with over 3,000 applications to create customized, cross-system workflows that streamline various processes.</p>
      
      <h3>Data Analysis and Strategy Recommendations</h3>
      
      <p>Beyond execution, AI provides strategic guidance by analyzing marketing performance data and recommending optimizations. According to the British Business Bank, "AI tools quickly analyse data so businesses can use it to create, adjust, or adapt marketing campaigns and other strategic business activities."</p>
      
      <p>This capability gives entrepreneurs access to data-driven insights previously available only to businesses with dedicated analytics teams.</p>
      
      <h2>The Future of AI in Digital Marketing: Preparing Your Small Business</h2>
      
      <p>As we look toward the future, several emerging trends will shape how small businesses leverage AI for digital marketing success.</p>
      
      <h3>Voice and Visual Search Optimization</h3>
      
      <p>With the rise of voice-activated devices and visual search technologies, optimizing for these channels is becoming increasingly important. Salesforce predicts that "with the rise of voice search technologies and the increasing importance of conversational search queries, AI-powered Natural Language Processing (NLP) algorithms will play a crucial role in optimizing content for voice search."</p>
      
      <p>Small businesses should begin incorporating more conversational keywords and structured data into their digital content to prepare for this shift.</p>
      
      <h3>Hyper-Personalization at Scale</h3>
      
      <p>According to WordStream's 2025 AI marketing trends report, "Hyper-personalization will happen at scale" as AI systems become increasingly sophisticated at understanding individual customer preferences and behaviors.</p>
      
      <p>This capability will enable even the smallest businesses to deliver tailored experiences that match or exceed those offered by much larger competitors.</p>
      
      <h3>Ethical AI and Privacy Considerations</h3>
      
      <p>As AI becomes more integral to marketing, ethical considerations and privacy compliance will grow in importance. Salesforce notes that "as AI algorithms continue to shape search engine rankings, there will be a growing demand for algorithmic transparency and ethical use of AI in SEO."</p>
      
      <p>Small businesses should prioritize transparent data practices and select AI marketing tools that comply with evolving privacy regulations.</p>
      
      <h2>Conclusion: Taking the First Steps Toward AI-Powered Marketing Success</h2>
      
      <p>The integration of artificial intelligence into digital marketing represents both an opportunity and a challenge for small local businesses and entrepreneurs. Those who embrace these technologies stand to gain significant competitive advantages, while those who hesitate risk falling behind as consumer expectations continue to evolve.</p>
      
      <p>To begin your AI marketing journey, consider these steps:</p>
      
      <ol>
        <li>Assess your current digital marketing challenges and identify areas where AI could provide immediate benefits</li>
        <li>Explore free or low-cost AI tools that address your specific needs</li>
        <li>Start small with one or two applications before expanding to more comprehensive AI implementation</li>
        <li>Measure results meticulously to quantify the impact of your AI marketing initiatives</li>
        <li>Stay informed about emerging AI capabilities and trends through industry resources</li>
      </ol>
      
      <p>The democratization of AI technology means that small businesses now have access to marketing capabilities previously available only to large corporations with substantial resources. By strategically implementing AI tools for web design, SEO optimization, logo design, email marketing, and overall digital presence enhancement, small local businesses can compete effectively in an increasingly digital marketplace.</p>
      
      <p>What AI marketing capabilities are you most interested in exploring for your business? Take the first step today by evaluating how artificial intelligence could transform your digital marketing efforts and drive sustainable growth for your small local business.</p>
      
      <p>Ready to enhance your digital presence with AI-powered solutions? <a href="/contact">Contact our team</a> for a personalized consultation on how we can help implement these technologies for your business.</p>
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
