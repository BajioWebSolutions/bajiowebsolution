import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const budgetRanges = [
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-20k", label: "$10,000 - $20,000" },
  { value: "20k-50k", label: "$20,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
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
      company: '',
      phone: '',
      budget: '',
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

  const handleBudgetChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      budget: value
    }));
  };

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
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
            className="text-4xl font-bold mb-4 text-foreground-dark text-center"
            variants={itemVariants}
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-foreground-dark mb-8 text-center"
            variants={itemVariants}
          >
            Ready to start your next project? Contact us today!
          </motion.p>
          <motion.form 
            className="space-y-6 bg-neutral-dark p-8 rounded-lg shadow-lg"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <motion.div variants={itemVariants}>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *" 
                className="w-full bg-background-dark border-primary/30 focus:border-primary transition-colors text-foreground-dark placeholder:text-foreground-dark/50"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *" 
                className="w-full bg-background-dark border-primary/30 focus:border-primary transition-colors text-foreground-dark placeholder:text-foreground-dark/50"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name" 
                className="w-full bg-background-dark border-primary/30 focus:border-primary transition-colors text-foreground-dark placeholder:text-foreground-dark/50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                className="w-full bg-background-dark border-primary/30 focus:border-primary transition-colors text-foreground-dark placeholder:text-foreground-dark/50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Select
                value={formData.budget}
                onValueChange={handleBudgetChange}
              >
                <SelectTrigger className="w-full bg-background-dark border-primary/30 focus:border-primary transition-colors text-foreground-dark">
                  <SelectValue placeholder="Monthly Marketing Budget" />
                </SelectTrigger>
                <SelectContent className="bg-background-dark border-primary/30">
                  {budgetRanges.map((range) => (
                    <SelectItem 
                      key={range.value} 
                      value={range.value}
                      className="text-foreground-dark hover:bg-primary/10"
                    >
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *" 
                className="w-full min-h-[150px] bg-background-dark border-primary/30 focus:border-primary transition-colors text-foreground-dark placeholder:text-foreground-dark/50"
                required
              />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-background transition-all duration-300">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

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