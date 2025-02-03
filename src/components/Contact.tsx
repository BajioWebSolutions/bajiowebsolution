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
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Message sent successfully!");
    
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
    <section className="relative min-h-screen bg-gradient-to-br from-background via-neutral-dark/40 to-primary/5 py-section">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background-dark to-background-dark opacity-50" />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-neutral-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ready to start your next project? Contact us today!
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-neutral-light group hover:text-primary transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <a href="tel:+18604689221" className="hover:text-primary transition-colors">
                      1 (860) 468-9221
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-light group hover:text-primary transition-colors">
                    <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <a href="mailto:info@bajiowebsolutions.com" className="hover:text-primary transition-colors">
                      info@bajiowebsolutions.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-light group hover:text-primary transition-colors">
                    <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>902 Trumbull Hwy, Lebanon, CT 06249</span>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-neutral-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form 
              className="bg-neutral-dark/20 backdrop-blur-sm p-8 rounded-lg border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full bg-background-dark/60 border-primary/20 focus:border-primary text-foreground-dark placeholder:text-neutral-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="w-full bg-background-dark/60 border-primary/20 focus:border-primary text-foreground-dark placeholder:text-neutral-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full bg-background-dark/60 border-primary/20 focus:border-primary text-foreground-dark placeholder:text-neutral-400"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-background-dark/60 border-primary/20 focus:border-primary text-foreground-dark placeholder:text-neutral-400"
                  />
                </div>
                <div>
                  <Select
                    value={formData.budget}
                    onValueChange={handleBudgetChange}
                  >
                    <SelectTrigger className="w-full bg-background-dark/60 border-primary/20 focus:border-primary text-foreground-dark">
                      <SelectValue placeholder="Project Budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-background-dark border-primary/20">
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
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    className="w-full min-h-[150px] bg-background-dark/60 border-primary/20 focus:border-primary text-foreground-dark placeholder:text-neutral-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};