
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background-dark via-[#162032] to-[#0A0E14]">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.3)_100%)]" />
      
      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Discover</span><br />
              <span className="text-white">the professions</span><br />
              <span className="text-white">of the future</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 font-medium">
              Unlock the doors to the future job market and explore 
              the most in-demand skills
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="split-button bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg px-8 h-14 transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-xl overflow-hidden relative"
              >
                <Link to="/contact" className="flex items-center">
                  START LEARN NOW
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-primary border-primary font-bold text-lg px-8 h-14 transition-all duration-300 rounded-lg hover:bg-primary/10"
              >
                <Link to="/services">CHOOSE A SPECIALTY</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative perspective-1000">
              <img 
                src="/lovable-uploads/e4a708fa-2238-4bb5-b05e-7bd41a70275a.png"
                alt="Future professions"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
