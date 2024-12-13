import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const serviceDetails = {
  "web-design": {
    title: "Web Design",
    description: "Our web design service creates stunning, user-friendly websites that capture your brand's essence. We focus on responsive design, intuitive navigation, and engaging visuals to ensure your website stands out and delivers results.",
    features: [
      "Custom Design Solutions",
      "Mobile-First Approach",
      "User Experience (UX) Optimization",
      "Brand Integration",
      "Fast Loading Times",
    ]
  },
  "seo": {
    title: "SEO Services",
    description: "Boost your online visibility with our comprehensive SEO services. We use data-driven strategies to improve your search engine rankings and drive organic traffic to your website.",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Content Strategy",
      "Technical SEO",
      "Performance Tracking",
    ]
  },
  "marketing": {
    title: "Marketing",
    description: "Our digital marketing services help you reach and engage your target audience effectively. We create comprehensive strategies that drive growth and deliver measurable results.",
    features: [
      "Digital Strategy Development",
      "Campaign Management",
      "Analytics & Reporting",
      "Market Research",
      "ROI Optimization",
    ]
  },
  "development": {
    title: "Web Development",
    description: "We build robust, scalable web applications using cutting-edge technologies. Our development team ensures your website is fast, secure, and capable of handling your business needs.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "API Integration",
      "Database Design",
      "Performance Optimization",
    ]
  },
  "social-media": {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness with our social media marketing services. We create compelling content and manage your social presence across all platforms.",
    features: [
      "Content Creation",
      "Community Management",
      "Platform Strategy",
      "Engagement Analytics",
      "Paid Social Campaigns",
    ]
  },
  "ppc": {
    title: "PPC Advertising",
    description: "Maximize your advertising ROI with our PPC management services. We create and optimize campaigns that drive qualified traffic and conversions.",
    features: [
      "Campaign Strategy",
      "Ad Copy Creation",
      "Bid Management",
      "A/B Testing",
      "Conversion Tracking",
    ]
  }
};

export const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-primary hover:text-primary-light mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          {service.title}
        </h1>
        
        <p className="text-lg text-neutral mb-8">
          {service.description}
        </p>
        
        <div className="bg-neutral-dark/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Features</h2>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-neutral">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button asChild className="bg-primary hover:bg-primary-dark text-white">
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};