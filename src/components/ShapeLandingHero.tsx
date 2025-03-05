
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export const ShapeLandingHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background-dark via-neutral-dark/40 to-primary/5 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#8B5CF6]/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </div>
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.6)_100%)]" />
      
      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="text-sm font-medium">Transformative Digital Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">Elevate Your</span><br />
              <motion.span 
                className="text-primary inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Digital Identity
              </motion.span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#CCFBF1] font-medium max-w-xl">
              Create stunning, powerful websites that convert visitors into customers 
              with our expert design and development services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#10B981] to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-[#10B981] text-white font-bold text-lg px-8 h-12 transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-xl"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent hover:bg-white/10 text-white font-bold text-lg px-8 h-12 transition-all duration-300 hover:scale-105 rounded-lg border border-white/20 hover:border-white/40"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {['Custom Solutions', 'Expert Support', '100% Satisfaction'].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-white font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-[#8B5CF6]/20 mix-blend-overlay" />
              <img 
                src="/lovable-uploads/2f6e7cf6-911a-4a70-9f70-629277e1048d.png"
                alt="Web Development"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-dark rounded-2xl shadow-xl p-6 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl dark:bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-white">Trusted by 150+ Brands</h3>
                  <p className="text-sm text-neutral dark:text-neutral-light">Join our satisfied clients today</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
