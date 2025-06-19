import { Globe, Search, BarChart3, Code2, Share2, Target, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design & Development",
    problem: "Your website isn't converting visitors into customers",
    solution: "Professional, conversion-optimized websites that turn visitors into paying customers",
    kpi: "Average 40% increase in conversion rates",
    results: "Our clients see 3x more leads within 90 days",
    detailedDescription: "We create stunning, high-performance websites that capture your brand's essence and drive measurable results. Every design decision is backed by conversion psychology and user experience best practices.",
    icon: Globe,
    path: "/services/web-design",
  },
  {
    title: "Search Engine Optimization",
    problem: "Your business is invisible on Google when customers search",
    solution: "Data-driven SEO strategies that dominate local and national search rankings",
    kpi: "200% average increase in organic traffic",
    results: "Get found by customers actively searching for your services",
    detailedDescription: "Our proven SEO methodology uses advanced analytics and white-hat techniques to improve your search rankings and drive qualified organic traffic that converts.",
    icon: Search,
    path: "/services/seo",
  },
  {
    title: "Digital Marketing Strategy",
    problem: "Wasting marketing budget on campaigns that don't deliver ROI",
    solution: "Multi-channel marketing campaigns with guaranteed performance tracking",
    kpi: "3X average return on ad spend",
    results: "Maximize every marketing dollar with data-driven strategies",
    detailedDescription: "We create comprehensive digital marketing strategies that combine multiple channels to maximize ROI and achieve sustainable, measurable growth for your business.",
    icon: BarChart3,
    path: "/services/marketing",
  },
  {
    title: "Custom Web Applications",
    problem: "Off-the-shelf solutions don't fit your unique business needs",
    solution: "Scalable web applications built specifically for your business processes",
    kpi: "99.9% uptime guarantee",
    results: "Streamline operations and improve efficiency with custom tools",
    detailedDescription: "Our development team builds robust, scalable web applications using cutting-edge technologies that ensure optimal performance, security, and user experience.",
    icon: Code2,
    path: "/services/development",
  },
  {
    title: "Social Media Marketing",
    problem: "Your social media isn't generating leads or building brand awareness",
    solution: "Strategic social media campaigns that build community and drive sales",
    kpi: "150% average increase in engagement",
    results: "Build a loyal following that converts into customers",
    detailedDescription: "We help businesses build and maintain a strong social media presence through strategic content creation, community management, and targeted advertising campaigns.",
    icon: Share2,
    path: "/services/social-media",
  },
  {
    title: "Pay-Per-Click Advertising",
    problem: "Burning through ad budget without getting quality leads",
    solution: "Laser-targeted PPC campaigns that deliver qualified leads consistently",
    kpi: "25% average reduction in cost per lead",
    results: "Get immediate visibility and qualified leads from day one",
    detailedDescription: "Our PPC experts create and optimize advertising campaigns that target your ideal customers with precision, maximizing your advertising budget and ROI.",
    icon: Target,
    path: "/services/ppc",
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const handleCloseDialog = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/3 via-background-dark to-background-dark opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16 fade-in-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground-dark">
            Stop Losing Customers to <span className="text-primary">Digital Invisibility</span>
          </h2>
          <p className="text-neutral text-lg leading-relaxed mb-8">
            Every day your competitors are stealing customers because they found them first online. 
            Our proven digital solutions ensure you're the obvious choice when customers are ready to buy.
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-primary font-semibold">
              🚀 Free Strategy Session: We'll show you exactly how to outrank your competition and capture more leads
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group glass-card p-8 rounded-2xl cursor-pointer transform-gpu hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleServiceClick(service)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Problem-focused headline */}
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground-dark transition-all duration-300 group-hover:text-primary">
                  {service.title}
                </h3>
                
                {/* Problem statement */}
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-300 text-sm font-medium">
                    ❌ {service.problem}
                  </p>
                </div>
                
                {/* Solution statement */}
                <div className="mb-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-primary text-sm font-medium">
                    ✅ {service.solution}
                  </p>
                </div>
                
                {/* Results/KPI */}
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-bold text-white">
                    📈 {service.results}
                  </p>
                  <p className="text-xs text-primary font-medium bg-primary/5 px-2 py-1 rounded">
                    {service.kpi}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Strong CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 glass-card rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Stop Losing Customers to Your Competition?
          </h3>
          <p className="text-neutral mb-6 max-w-2xl mx-auto">
            Get a free strategy session where we'll analyze your current digital presence and show you exactly 
            how to outrank competitors and capture more qualified leads.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <Link to="/contact#start-project">
              Get Your Free Strategy Session Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-3xl glass-card border-primary/20 backdrop-blur-xl fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3 text-foreground-dark">
              {selectedService?.icon && <selectedService.icon className="h-6 w-6 text-primary" />}
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="text-neutral text-base leading-relaxed mt-4">
              {selectedService?.detailedDescription}
            </DialogDescription>
          </DialogHeader>
          
          {/* Problem/Solution in modal */}
          <div className="space-y-4 mt-6">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <h4 className="text-red-300 font-semibold mb-2">The Problem:</h4>
              <p className="text-red-200 text-sm">{selectedService?.problem}</p>
            </div>
            
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <h4 className="text-primary font-semibold mb-2">Our Solution:</h4>
              <p className="text-white text-sm">{selectedService?.solution}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="flex-1 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact#start-project" onClick={handleCloseDialog}>
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
            >
              <Link to={selectedService?.path || "#"} onClick={handleCloseDialog}>
                Learn More Details
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
