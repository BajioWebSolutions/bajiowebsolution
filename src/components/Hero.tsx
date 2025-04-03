
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background-dark via-neutral-dark/40 to-primary/5">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.7)_100%)]" />
      
      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now Offering 7/Wk Support
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">Transform Your Digital</span><br />
              <span className="text-primary">Presence Today</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#CCFBF1] font-medium">
              We create stunning, high-performance websites and implement effective digital 
              marketing strategies that drive real business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="split-button bg-gradient-to-r from-[#10B981] to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-[#10B981] text-white font-bold text-lg px-8 h-12 transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-xl overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary border-primary font-bold text-lg px-8 h-12 transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-xl border relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex gap-6">
                {['Custom Solutions', 'Expert Support', '100% Satisfaction'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <CheckCircle className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-3" />
                    <span className="text-white font-medium transition-transform duration-300 group-hover:translate-x-1">{feature}</span>
                  </div>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:-rotate-2 hover:shadow-primary/20">
              <img 
                src="/lovable-uploads/2f6e7cf6-911a-4a70-9f70-629277e1048d.png"
                alt="Web Development"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-dark rounded-2xl shadow-xl p-6 max-w-xs transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl dark:bg-primary/20 transition-all duration-500 group-hover:bg-primary/30">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-white">Trusted by 15+ Brands</h3>
                  <p className="text-sm text-neutral dark:text-neutral-light">Join our satisfied clients today</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
