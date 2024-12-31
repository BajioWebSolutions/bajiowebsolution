import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-neutral-dark/40 to-primary/5 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-primary/5 to-transparent opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-foreground text-center"
            variants={itemVariants}
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-neutral mb-8 text-center"
            variants={itemVariants}
          >
            Ready to start your next project? Contact us today!
          </motion.p>
          <motion.form 
            className="space-y-6 backdrop-blur-sm bg-neutral-dark/20 p-8 rounded-lg"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <Input 
                placeholder="Your Name" 
                className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Textarea 
                placeholder="Your Message" 
                className="w-full min-h-[150px] bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
              />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-all duration-300">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};