import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Services } from "@/components/Services";
import { ServiceVideos } from "@/components/ServiceVideos";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

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
      "Responsive Layouts",
      "Interactive Elements",
      "SEO-Friendly Structure"
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
      "Local SEO",
      "Link Building",
      "SEO Reporting"
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
      "Content Marketing",
      "Email Marketing",
      "Social Media Strategy"
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
      "Security Implementation",
      "Maintenance & Support",
      "Scalable Architecture"
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
      "Influencer Marketing",
      "Brand Voice Development",
      "Social Listening"
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
      "Budget Optimization",
      "Landing Page Optimization",
      "Competition Analysis"
    ]
  }
};

export const ServicePage = () => {
  const { serviceId } = useParams();

  if (!serviceId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-neutral-dark/40 to-primary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-dark/80 to-primary/20" />
            <div className="relative z-10 text-center py-16 px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#CCFBF1]">
                Our <span className="text-[#2DD4BF]">Services</span>
              </h1>
              <p className="text-lg text-[#CCFBF1] font-medium max-w-3xl mx-auto mb-16">
                We specialize in creating stunning, high-performance websites tailored to our clients' unique needs. 
                Transform your online presence with our comprehensive digital solutions.
              </p>
            </div>
          </div>
          <Services />
          <ServiceVideos />
          <Testimonials />
        </div>
        <Footer />
      </div>
    );
  }

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-neutral-dark/40 to-primary/5 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Service not found</h2>
          <p className="text-neutral mb-8">The requested service could not be found.</p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-neutral-dark/40 to-primary/5">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <Link to="/services" className="inline-flex items-center text-primary hover:text-primary-light mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>
        
        <div className="bg-neutral-dark/20 rounded-lg p-8 backdrop-blur-sm mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {service.title}
          </h1>
          
          <p className="text-lg text-neutral mb-8">
            {service.description}
          </p>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-neutral">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <ServiceVideos />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;