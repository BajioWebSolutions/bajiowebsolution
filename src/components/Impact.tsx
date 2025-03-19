
import { motion } from "framer-motion";
import { ChartBarIcon, UsersIcon, CheckCircleIcon, TrophyIcon } from "lucide-react";

const impactMetrics = [
  {
    value: "2.5x",
    label: "Average ROI",
    description: "Return on investment for our clients",
    icon: ChartBarIcon,
  },
  {
    value: "150+",
    label: "Happy Clients",
    description: "Businesses trusting our services",
    icon: UsersIcon,
  },
  {
    value: "94%",
    label: "Client Retention",
    description: "Clients who continue working with us",
    icon: CheckCircleIcon,
  },
  {
    value: "40+",
    label: "Awards Won",
    description: "Industry recognitions for excellence",
    icon: TrophyIcon,
  },
];

export const Impact = () => {
  return (
    <section className="py-20 bg-background-dark relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground-dark">
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-neutral text-lg max-w-3xl mx-auto">
            We measure our success by the results we deliver for our clients. 
            Here's the impact we've made through our strategic digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <metric.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-primary">{metric.value}</h3>
              <p className="text-foreground-dark font-medium mb-2">{metric.label}</p>
              <p className="text-neutral text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
