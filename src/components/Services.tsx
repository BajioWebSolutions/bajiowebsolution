
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
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design",
    description: "Custom web design solutions that convert visitors into customers.",
    kpi: "Average 40% increase in conversion rates",
    detailedDescription: "Our web design service creates stunning, user-friendly websites that capture your brand's essence and drive results. We focus on conversion-optimized designs that engage visitors and turn them into customers.",
    icon: Globe,
    path: "/services/web-design",
  },
  {
    title: "SEO Services",
    description: "Dominate search rankings with data-driven SEO strategies.",
    kpi: "200% average increase in organic traffic",
    detailedDescription: "Our SEO services use advanced analytics and proven strategies to improve your search engine rankings and drive qualified organic traffic to your website.",
    icon: Search,
    path: "/services/seo",
  },
  {
    title: "Digital Marketing",
    description: "Results-driven marketing campaigns that grow your business.",
    kpi: "3X average return on ad spend",
    detailedDescription: "We create and execute comprehensive digital marketing strategies that combine multiple channels to maximize your ROI and achieve sustainable growth.",
    icon: BarChart3,
    path: "/services/marketing",
  },
  {
    title: "Web Development",
    description: "Custom web solutions built for performance and scale.",
    kpi: "99.9% uptime guarantee",
    detailedDescription: "Our development team builds robust, scalable web applications using cutting-edge technologies that ensure optimal performance and user experience.",
    icon: Code2,
    path: "/services/development",
  },
  {
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your target audience.",
    kpi: "150% average increase in engagement",
    detailedDescription: "We help businesses build and maintain a strong social media presence through strategic content creation and community management.",
    icon: Share2,
    path: "/services/social-media",
  },
  {
    title: "PPC Advertising",
    description: "Targeted campaigns that deliver measurable results.",
    kpi: "25% average reduction in cost per lead",
    detailedDescription: "Our PPC experts create and optimize advertising campaigns that target your ideal customers and maximize your advertising budget.",
    icon: Target,
    path: "/services/ppc",
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

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
          className="text-center max-w-3xl mx-auto mb-16 fade-in-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground-dark">
            Comprehensive <span className="text-primary">Digital Solutions</span>
          </h2>
          <p className="text-neutral text-lg leading-relaxed">
            We deliver measurable results through data-driven strategies and cutting-edge technology.
            Our services are tailored to help your business grow and succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group glass-card p-8 rounded-2xl cursor-pointer perspective-1000 overflow-hidden will-change-transform transform-gpu fade-in-up"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground-dark transition-all duration-300 group-hover:text-primary">
                  {service.title}
                </h3>
                
                <p className="text-neutral mb-6 leading-relaxed transition-transform duration-300 group-hover:translate-y-[-2px]">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <p className="text-sm font-medium text-primary relative overflow-hidden before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary/60 before:transition-all before:duration-300 group-hover:before:w-full">
                    {service.kpi}
                  </p>
                </div>
              </div>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl glass-card border-primary/20 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3 text-foreground-dark">
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
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-r before:from-primary/0 before:via-white/30 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            >
              Learn More
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
