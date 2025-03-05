
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form
      if (!formData.fullName || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields");
      }

      // Call the Edge Function
      const { data, error } = await supabase.functions.invoke('send-contact-message', {
        body: formData,
      });

      if (error) throw error;
      
      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });
      
      toast.success("Your message has been sent! We'll get back to you soon.");
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error(error.message || "Failed to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      id="start-project" 
      className="backdrop-blur-md bg-white/10 p-8 rounded-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Start Your Project</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-white/90 mb-2">
            Full Name *
          </label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60"
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
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60"
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
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
            Company Name
          </label>
          <Input
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-white/90 mb-2">
            Project Type
          </label>
          <Input
            id="projectType"
            placeholder="e.g., Website Design, E-commerce, Marketing"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full min-h-[150px] bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60"
            required
          />
        </div>
        <Button 
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium transition-all duration-300 hover:scale-105"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </motion.div>
  );
};
