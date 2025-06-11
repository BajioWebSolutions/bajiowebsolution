import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a hidden form to submit to Netlify
      const form = document.createElement('form');
      form.setAttribute('method', 'POST');
      form.setAttribute('name', 'project-inquiry');
      form.setAttribute('data-netlify', 'true');
      form.style.display = 'none';

      // Add form fields
      const fields = [
        { name: 'form-name', value: 'project-inquiry' },
        { name: 'fullName', value: formData.fullName },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'company', value: formData.company },
        { name: 'projectType', value: formData.projectType },
        { name: 'message', value: formData.message }
      ];

      fields.forEach(field => {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', field.name);
        input.setAttribute('value', field.value);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      
      // Submit the form
      const formData2 = new FormData(form);
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData2 as any).toString()
      });

      if (response.ok) {
        toast.success("Project inquiry sent successfully! We'll contact you soon to discuss your project.");
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }

      document.body.removeChild(form);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send inquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* Hidden form for Netlify */}
      <form name="project-inquiry" data-netlify="true" data-netlify-honeypot="bot-field" style={{ display: 'none' }}>
        <input type="text" name="fullName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <input type="text" name="projectType" />
        <textarea name="message"></textarea>
      </form>

      <motion.div 
        id="start-project" 
        className="glass-card backdrop-blur-md bg-white/10 p-8 rounded-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu hover:translate-y-[-5px]"
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
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-white/90 mb-2">
              Project Type
            </label>
            <Input
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="e.g., Website Design, E-commerce, Marketing"
              className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full min-h-[150px] bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit"
            className="w-full cta-button bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-r before:from-primary/0 before:via-white/30 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.div>
    </>
  );
};
