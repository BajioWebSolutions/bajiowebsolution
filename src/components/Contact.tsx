
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Shield, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactPreference: {
      email: false,
      phone: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    try {
      // Create a hidden form to submit to Netlify
      const form = document.createElement('form');
      form.setAttribute('method', 'POST');
      form.setAttribute('name', 'contact');
      form.setAttribute('data-netlify', 'true');
      form.style.display = 'none';

      // Add form fields
      const fields = [
        { name: 'form-name', value: 'contact' },
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'message', value: formData.message },
        { name: 'contact-preference', value: JSON.stringify(formData.contactPreference) }
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
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          contactPreference: {
            email: false,
            phone: false
          }
        });
      } else {
        throw new Error('Failed to submit form');
      }

      document.body.removeChild(form);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send message. Please try again or contact us directly.");
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

  const handleCheckboxChange = (type: 'email' | 'phone') => {
    setFormData(prev => ({
      ...prev,
      contactPreference: {
        ...prev.contactPreference,
        [type]: !prev.contactPreference[type]
      }
    }));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background-dark via-neutral-dark to-primary/5 dark:from-neutral-dark dark:via-background-dark dark:to-primary/10 py-section">
      {/* Hidden form for Netlify */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="message"></textarea>
        <input type="text" name="contact-preference" />
      </form>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-foreground dark:text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-foreground/80 dark:text-white/90 mb-12 text-center font-medium"
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
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-foreground dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground/80 dark:text-white/80 group">
                    <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <a href="tel:+18604689221" className="hover:text-primary transition-colors">
                      1 (860) 468-9221
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80 dark:text-white/80 group">
                    <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <a href="mailto:info@bajiowebsolutions.com" className="hover:text-primary transition-colors">
                      info@bajiowebsolutions.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80 dark:text-white/80 group">
                    <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>902 Trumbull Hwy, Lebanon, CT 06249</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form 
              className="bg-white/5 dark:bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300"
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
                    placeholder="Name*"
                    className="w-full bg-white/10 dark:bg-black/30 border-primary/20 focus:border-primary text-foreground dark:text-white placeholder:text-foreground/60 dark:placeholder:text-white/60"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className="w-full bg-white/10 dark:bg-black/30 border-primary/20 focus:border-primary text-foreground dark:text-white placeholder:text-foreground/60 dark:placeholder:text-white/60"
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full bg-white/10 dark:bg-black/30 border-primary/20 focus:border-primary text-foreground dark:text-white placeholder:text-foreground/60 dark:placeholder:text-white/60"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-foreground dark:text-white text-sm font-medium">Contact Preference</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-foreground dark:text-white cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.contactPreference.email}
                        onChange={() => handleCheckboxChange('email')}
                        className="rounded border-primary/20 bg-white/10 dark:bg-black/30"
                        disabled={isSubmitting}
                      />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center gap-2 text-foreground dark:text-white cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.contactPreference.phone}
                        onChange={() => handleCheckboxChange('phone')}
                        className="rounded border-primary/20 bg-white/10 dark:bg-black/30"
                        disabled={isSubmitting}
                      />
                      <span>Phone</span>
                    </label>
                  </div>
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message*"
                    className="w-full min-h-[150px] bg-white/10 dark:bg-black/30 border-primary/20 focus:border-primary text-foreground dark:text-white placeholder:text-foreground/60 dark:placeholder:text-white/60"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-light dark:from-primary-dark dark:to-primary hover:from-primary-light hover:to-primary dark:hover:from-primary dark:hover:to-primary-light text-white font-bold text-lg py-4 h-auto transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-lg hover:shadow-xl group relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                        Sending Your Message...
                      </>
                    ) : (
                      <>
                        <span className="mr-2">📧</span>
                        Send My Message
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                {/* Trust guarantees */}
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-4 mt-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span className="text-xs text-foreground dark:text-white font-medium">Your Info Stays Private</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-xs text-foreground dark:text-white font-medium">No Spam Guarantee</span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <span className="text-xs text-foreground/70 dark:text-white/70">⚡ We respond within 24 hours</span>
                  </div>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
