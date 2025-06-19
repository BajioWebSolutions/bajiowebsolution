
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Impact } from "@/components/Impact";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <div className="relative py-20">
        {/* Gradient overlay similar to hero section */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-foreground-dark"
          >
            About <span className="text-primary">Bajio Web Solutions</span>
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-foreground-dark">Who We Are</h2>
              <p className="text-neutral-light leading-relaxed">
                Bajio Web Solutions is a boutique web design and digital marketing agency based in Lebanon,
                Connecticut. We specialize in creating high-impact, conversion-focused websites for small to 
                medium-sized businesses who want to grow their online presence.
              </p>
              <p className="text-neutral-light leading-relaxed">
                As a focused agency, we work closely with each client to understand their unique challenges
                and deliver personalized solutions that drive real results. Our hands-on approach ensures
                every project gets the attention it deserves.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-foreground-dark">Our Mission</h2>
              <p className="text-neutral-light leading-relaxed">
                Our mission is to help small businesses compete online by creating professional websites
                that attract customers and drive growth. We believe every business deserves a strong 
                digital presence, regardless of size or budget.
              </p>
              <p className="text-neutral-light leading-relaxed">
                We're committed to building long-term partnerships with our clients, providing ongoing
                support and strategic guidance as their businesses grow.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-neutral-light">Happy Clients</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-neutral-light">Projects Completed</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-neutral-light">Support</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-neutral-light">Months Active</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Add the Impact component here */}
      <Impact />
      
      <Footer />
    </div>
  );
};

export default AboutPage;
