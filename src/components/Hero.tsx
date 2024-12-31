import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-neutral-dark/40 to-primary/10">
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-accent/5 to-transparent opacity-50"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 py-12 sm:py-20 text-center relative z-10">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Online Presence With{" "}
          <span className="text-primary">Bajio Web Solutions</span>
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-neutral"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We specialize in creating stunning, high-performance websites and implementing 
          effective digital marketing strategies that drive real business growth. 
          Let's work together to achieve your online goals.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            className="bg-primary hover:bg-primary-dark text-background text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">Schedule a Free Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-foreground border-foreground hover:bg-foreground/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:scale-105"
          >
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};