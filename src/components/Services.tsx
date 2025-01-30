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
    <section className="py-12 sm:py-20 bg-gradient-to-br from-background via-neutral-dark/40 to-primary/5 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-primary/5 to-transparent opacity-30"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
            Comprehensive{" "}
            <span className="text-primary">Digital Solutions</span>
          </h2>
          <p className="text-neutral text-center max-w-2xl mx-auto mb-12">
            We deliver measurable results through data-driven strategies and cutting-edge technology.
            Our services are tailored to help your business grow and succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-lg bg-neutral-dark/20 hover:bg-neutral-dark/30 transition-all duration-300 backdrop-blur-sm cursor-pointer animate-fade-up relative overflow-hidden transform hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-neutral mb-4">{service.description}</p>
              
              {/* KPI Badge */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium text-primary">{service.kpi}</p>
              </div>
            </motion.div>
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
              Learn More
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};