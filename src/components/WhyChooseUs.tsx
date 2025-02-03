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
    description: "Deep understanding of Connecticut's business landscape"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
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
              className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground-dark">{feature.title}</h3>
                <p className="text-neutral-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};