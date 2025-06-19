
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "SaaS Startup",
    content: "Bajio Web Solutions completely transformed our online presence. Before working with them, we were getting maybe 1-2 leads per month from our website. Now we're consistently getting 8-10 qualified leads monthly. Their SEO work helped us rank in the top 3 for our main keywords, and our website conversion rate jumped from 0.8% to 2.4%.",
    image: "/lovable-uploads/2d155762-9090-45c9-bd91-9a55dffd4171.png",
    results: "80% increase in organic traffic",
    timeframe: "3 months",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthBox",
    company: "Digital Marketing Agency",
    content: "Working with Bajio on our website redesign was exactly what we needed. They reduced our bounce rate by 25% while increasing our contact form submissions by 60%. Their attention to detail and responsive communication made the entire process smooth and professional.",
    image: "/lovable-uploads/01c72101-9a53-47df-ac29-d65c4c40317b.png",
    results: "1.8x return on investment",
    timeframe: "4 months",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHub Boutique",
    company: "E-commerce Fashion",
    content: "As a small business owner, I needed someone who would really understand my vision and budget. Bajio delivered beyond my expectations. Our new website looks professional, loads fast, and most importantly, our online sales have increased by 120% since launch.",
    image: "/lovable-uploads/15afb1ba-8f0e-4ac6-99d2-57697197c3fe.png",
    results: "120% increase in online sales",
    timeframe: "2 months",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="relative py-20 bg-background-dark overflow-hidden">
      {/* Enhanced gradient overlay with depth */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/6 via-background-dark to-background-dark opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.08)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 fade-in-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground-dark">
            Real Results from <span className="text-primary">Real Clients</span>
          </h2>
          <p className="text-neutral text-lg max-w-3xl mx-auto mb-8">
            Don't just take our word for it. See how we've helped small businesses like yours achieve 
            measurable growth and establish a strong online presence.
          </p>
          
          {/* Overall stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-primary font-bold">1.8x</span>
                <span className="text-white text-sm">Average ROI</span>
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-primary font-bold">3+</span>
                <span className="text-white text-sm">Happy Clients</span>
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-primary font-bold">100%</span>
                <span className="text-white text-sm">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500 fade-in-up border border-white/10 hover:border-primary/30"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-neutral-light leading-relaxed text-base mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Results highlight */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-sm">{testimonial.results}</span>
                  <span className="text-white/70 text-xs">in {testimonial.timeframe}</span>
                </div>
              </div>

              {/* Author info */}
              <div className="flex items-center">
                <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="object-cover w-full h-full rounded-full"
                    loading="lazy"
                  />
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground-dark text-base group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-white/60">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 glass-card rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Growing List of Successful Clients
          </h3>
          <p className="text-neutral mb-6 max-w-2xl mx-auto">
            We're building a reputation for delivering results that matter. Our focused approach 
            means every client gets personalized attention and measurable outcomes.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-white/80">
            <span>✅ No long-term contracts</span>
            <span>✅ Transparent communication</span>
            <span>✅ Personal attention</span>
            <span>✅ Results-focused approach</span>
          </div>
          
          <motion.a
            href="#start-project"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Strategy Session
            <TrendingUp className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
