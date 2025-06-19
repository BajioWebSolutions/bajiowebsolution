
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
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Enhanced gradient overlay with depth */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-background-dark to-background-dark opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 fade-in-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground-dark">
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-neutral text-lg max-w-3xl mx-auto leading-relaxed">
            We're proud of the results we've achieved and the relationships we've built with our clients.
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
              className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <metric.icon className="h-10 w-10 text-primary group-hover:drop-shadow-[0_0_16px_rgba(45,212,191,0.6)] transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-3 text-primary group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </h3>
              <p className="text-foreground-dark font-semibold mb-3 text-lg">
                {metric.label}
              </p>
              <p className="text-neutral text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
