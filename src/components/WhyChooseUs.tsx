
import { motion } from "framer-motion";
import { Briefcase, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Tailored Solutions",
    description: "Custom web solutions designed specifically for your business needs"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality"
  },
  {
    icon: MapPin,
    title: "CT-Based Local Expertise",
    description: "We're not a faceless national company. We are a Connecticut-based agency that understands the local market and the unique challenges facing businesses in our state."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background-dark to-primary/3 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,212,191,0.08)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in-up"
        >
          Why Choose <span className="text-primary">Bajio Web Solutions</span>?
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group fade-in-up"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <feature.icon className="h-8 w-8 text-primary group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.6)] transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground-dark group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
