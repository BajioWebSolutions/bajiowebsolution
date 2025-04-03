
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ProfessionsShowcase } from "@/components/ProfessionsShowcase";
import { motion } from "framer-motion";
import { ScrollObserver } from "@/components/ScrollObserver";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Enable scroll-triggered hover effects */}
      <ScrollObserver />
      
      <main>
        <Hero />
        <ProfessionsShowcase />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
