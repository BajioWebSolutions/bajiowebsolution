
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";
import { CheckCircle, Clock, Award, Shield } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
    currentWebsite: '',
    monthlyLeads: ''
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
      form.setAttribute('name', 'strategy-session');
      form.setAttribute('data-netlify', 'true');
      form.style.display = 'none';

      // Add form fields
      const fields = [
        { name: 'form-name', value: 'strategy-session' },
        { name: 'fullName', value: formData.fullName },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'company', value: formData.company },
        { name: 'projectType', value: formData.projectType },
        { name: 'currentWebsite', value: formData.currentWebsite },
        { name: 'monthlyLeads', value: formData.monthlyLeads },
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
        toast.success("Strategy session request sent! We'll contact you within 24 hours to schedule your free consultation.");
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          currentWebsite: '',
          monthlyLeads: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }

      document.body.removeChild(form);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send request. Please try again or call us directly at (860) 123-4567.");
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
      <form name="strategy-session" data-netlify="true" data-netlify-honeypot="bot-field" style={{ display: 'none' }}>
        <input type="text" name="fullName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <input type="text" name="projectType" />
        <input type="text" name="currentWebsite" />
        <input type="text" name="monthlyLeads" />
        <textarea name="message"></textarea>
      </form>

      <motion.div 
        id="start-project" 
        className="glass-card backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Value Proposition Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Get Your <span className="text-primary">FREE Strategy Session</span>
          </h2>
          <p className="text-white/90 mb-6">
            In 30 minutes, we'll analyze your digital presence and show you exactly how to outrank competitors and get more qualified leads.
          </p>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-primary font-semibold text-sm">No Obligation</span>
              </div>
              <p className="text-white/80 text-xs">100% free consultation</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Quick Response</span>
              </div>
              <p className="text-white/80 text-xs">We respond within 24 hours</p>
            </div>
          </div>
          
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6">
            <p className="text-yellow-300 text-sm font-medium">
              ⚡ Limited Time: Free competitor analysis report ($500 value) included with every strategy session
            </p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
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
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Business Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
                placeholder="your@company.com"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                placeholder="(555) 123-4567"
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
                placeholder="Your Company LLC"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="currentWebsite" className="block text-sm font-medium text-white/90 mb-2">
                Current Website
              </label>
              <Input
                id="currentWebsite"
                name="currentWebsite"
                value={formData.currentWebsite}
                onChange={handleChange}
                placeholder="www.yoursite.com"
                className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="monthlyLeads" className="block text-sm font-medium text-white/90 mb-2">
                Monthly Leads Goal
              </label>
              <Input
                id="monthlyLeads"
                name="monthlyLeads"
                value={formData.monthlyLeads}
                onChange={handleChange}
                placeholder="e.g., 10-50 qualified leads"
                className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-white/90 mb-2">
              What's Your Biggest Challenge?
            </label>
            <Input
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="e.g., Not getting enough website traffic, low conversion rates"
              className="w-full bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
              Tell Us More About Your Goals
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What specific results are you looking to achieve? What's working/not working with your current marketing?"
              className="w-full min-h-[120px] bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/60 transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:border-primary/50"
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold text-lg py-4 h-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Requesting Your Session..." : "Get My FREE Strategy Session"}
          </Button>

          {/* Trust badges */}
          <div className="flex justify-center items-center gap-6 pt-4 opacity-70">
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-xs text-white">SSL Secured</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-xs text-white">CT Licensed</span>
            </div>
          </div>
        </form>
      </motion.div>
    </>
  );
};
