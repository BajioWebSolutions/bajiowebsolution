import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

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
                Bajio Web Solutions is a leading web design and digital marketing agency based in Lebanon,
                Connecticut. We specialize in creating stunning, high-performance websites tailored to our
                clients' unique needs.
              </p>
              <p className="text-neutral-light leading-relaxed">
                Our team of expert web developers and designers leverage the latest technologies and best
                practices to deliver responsive, user-friendly websites that drive conversions and growth.
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
                Our mission is to empower businesses with cutting-edge digital solutions that drive growth
                and success. We believe in creating lasting partnerships with our clients, understanding their
                unique challenges, and delivering solutions that exceed expectations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
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
                <div className="text-4xl font-bold text-primary mb-2">1+</div>
                <div className="text-neutral-light">Years Experience</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;