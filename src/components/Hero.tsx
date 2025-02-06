
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
                className="bg-gradient-to-r from-[#10B981] to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-[#10B981] text-white font-bold text-lg px-8 h-12 transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-xl border-none"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex gap-6">
                {['Custom Solutions', 'Expert Support', '100% Satisfaction'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-white font-medium">{feature}</span>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/2f6e7cf6-911a-4a70-9f70-629277e1048d.png"
                alt="Web Development"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-dark rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl dark:bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-white">Trusted by 150+ Brands</h3>
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
