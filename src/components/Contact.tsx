import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Show success message
    toast.success("Message sent successfully!");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
            onSubmit={handleSubmit}
          >
            <motion.div variants={itemVariants}>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                className="w-full min-h-[150px] bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
              />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white transition-all duration-300">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};