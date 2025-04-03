
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export const ContactForm = () => {
  return (
    <motion.div 
      id="start-project" 
      className="glass-card backdrop-blur-md bg-white/10 p-8 rounded-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu hover:translate-y-[-5px]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Start Your Project</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-white/90 mb-2">
            Full Name *
          </label>
          <Input
            id="fullName"
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
            Company Name
          </label>
          <Input
            id="company"
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-white/90 mb-2">
            Project Type
          </label>
          <Input
            id="projectType"
            placeholder="e.g., Website Design, E-commerce, Marketing"
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
            Message
          </label>
          <Textarea
            id="message"
            className="w-full min-h-[150px] bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
          />
        </div>
        <Button className="w-full cta-button bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-r before:from-primary/0 before:via-white/30 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
          Send Message
        </Button>
      </form>
    </motion.div>
  );
};
