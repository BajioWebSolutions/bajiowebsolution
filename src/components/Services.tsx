import { Globe, Search, BarChart3, Code2, Share2, Target } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const services = [
  {
    title: "Web Design",
    description: "Custom web design solutions that bring results.",
    detailedDescription: "Bajio Web Solutions specializes in creating custom web designs that are both visually appealing and results-driven. Our approach focuses on developing websites that not only look stunning but also function effectively to meet business objectives. Our team employs responsive design techniques to ensure that websites perform well across various devices and screen sizes. By combining aesthetics with user experience (UX) principles, we aim to create engaging online platforms that represent their clients' brands effectively and drive conversions.",
    icon: Globe,
    path: "/services/web-design",
  },
  {
    title: "SEO Services",
    description: "Boost your search engine rankings and visibility.",
    detailedDescription: "Our agency offers search engine optimization (SEO) services to improve clients' visibility in search engine results pages. This service is crucial for businesses looking to increase their organic traffic and online presence. Bajio Web Solutions employs a combination of on-page and off-page SEO techniques, including keyword optimization, content strategy, link building, and technical SEO improvements. Our goal is to boost search engine rankings, making it easier for potential customers to find their clients' websites.",
    icon: Search,
    path: "/services/seo",
  },
  {
    title: "Marketing",
    description: "Data-driven marketing strategies that grow your business.",
    detailedDescription: "Bajio Web Solutions provides data-driven marketing strategies designed to foster business growth. This comprehensive approach involves analyzing market trends, customer behavior, and competitive landscapes to develop tailored marketing plans. Our services include email marketing campaigns, content marketing, conversion rate optimization, and analytics reporting. By leveraging data insights, we aim to create marketing solutions that effectively target the right audience and drive measurable results for their clients.",
    icon: BarChart3,
    path: "/services/marketing",
  },
  {
    title: "Web Development",
    description: "Professional web development for your unique needs.",
    detailedDescription: "The agency offers professional web development services to meet unique client needs. This service encompasses both front-end and back-end development, creating robust and scalable websites and web applications. Our development process involves using the latest technologies and frameworks to build custom functionalities, e-commerce solutions, content management systems, and integrations with third-party services. Our focus is on creating high-performance, secure, and user-friendly web solutions that align with clients' business requirements.",
    icon: Code2,
    path: "/services/development",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience across social platforms.",
    detailedDescription: "Bajio Web Solutions helps businesses engage their audience across various social media platforms. This service includes developing social media strategies, creating and curating content, managing social media accounts, and running social media advertising campaigns. The agency aims to build brand awareness, increase follower engagement, and drive traffic to clients' websites through effective social media management. We also provide social media analytics to measure the performance of their campaigns and adjust strategies accordingly.",
    icon: Share2,
    path: "/services/social-media",
  },
  {
    title: "PPC Advertising",
    description: "Targeted advertising campaigns that convert.",
    detailedDescription: "Our PPC advertising service focuses on creating and managing targeted advertising campaigns that drive conversions. We develop comprehensive strategies for platforms like Google Ads and social media advertising networks. Our approach includes detailed keyword research, ad copy optimization, landing page development, and continuous performance monitoring. We use data-driven insights to optimize campaigns for maximum ROI, ensuring that advertising budgets are spent effectively to reach and convert the right audience.",
    icon: Target,
    path: "/services/ppc",
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-background via-neutral-dark/40 to-primary/5 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-primary/5 to-transparent opacity-30"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Comprehensive{" "}
          <span className="text-primary">Digital Solutions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 rounded-lg bg-neutral-dark/20 hover:bg-neutral-dark/30 transition-all duration-300 animate-fade-up backdrop-blur-sm cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms`,
                willChange: 'transform, opacity'
              }}
              onClick={() => setSelectedService(service)}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-neutral mb-4">{service.description}</p>
              <span className="text-primary inline-flex items-center group-hover:underline transform transition-all duration-300 hover:translate-x-1">
                Learn More
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-neutral-dark/95 backdrop-blur-xl border-neutral-dark">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3 text-foreground">
              {selectedService?.icon && <selectedService.icon className="h-6 w-6 text-primary" />}
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="text-neutral text-base leading-relaxed mt-4">
              {selectedService?.detailedDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Link
              to={selectedService?.path || "#"}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};