import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Bajio Web Solutions transformed our online presence completely. Their web design and SEO services helped us increase our traffic by 200% in just 3 months.",
    image: "/lovable-uploads/2d155762-9090-45c9-bd91-9a55dffd4171.png"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthBox",
    content: "The PPC campaign management by Bajio Web Solutions delivered exceptional ROI. Their team's expertise in digital marketing is unmatched.",
    image: "/lovable-uploads/01c72101-9a53-47df-ac29-d65c4c40317b.png"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHub",
    content: "Working with Bajio on our social media strategy was a game-changer. They helped us build a strong brand presence across all platforms.",
    image: "/lovable-uploads/15afb1ba-8f0e-4ac6-99d2-57697197c3fe.png"
  }
];

export const Testimonials = () => {
  return (
    <section className="relative py-16 bg-background-dark">
      {/* Gradient overlay similar to hero section */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-foreground-dark"
        >
          What Our <span className="text-primary">Clients Say</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground-dark">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral-light leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};