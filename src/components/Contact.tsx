import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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
      phone: '',
      message: '',
      contactPreference: {
        email: false,
        phone: false
      }
    });
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
    <section className="relative min-h-screen bg-gradient-to-br from-[#10B981] via-[#2DD4BF]/40 to-[#10B981]/5 py-section">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-[#CCFBF1] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-[#CCFBF1] mb-12 text-center font-medium"
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
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-[#2DD4BF]/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-[#CCFBF1]">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#CCFBF1] group">
                    <Phone className="h-5 w-5 text-[#2DD4BF] group-hover:scale-110 transition-transform" />
                    <a href="tel:+18604689221" className="hover:text-[#2DD4BF] transition-colors">
                      1 (860) 468-9221
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[#CCFBF1] group">
                    <Mail className="h-5 w-5 text-[#2DD4BF] group-hover:scale-110 transition-transform" />
                    <a href="mailto:info@bajiowebsolutions.com" className="hover:text-[#2DD4BF] transition-colors">
                      info@bajiowebsolutions.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[#CCFBF1] group">
                    <MapPin className="h-5 w-5 text-[#2DD4BF] group-hover:scale-110 transition-transform" />
                    <span>902 Trumbull Hwy, Lebanon, CT 06249</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-[#2DD4BF]/20 shadow-xl hover:shadow-2xl transition-all duration-300"
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
                    className="w-full bg-white/20 border-[#2DD4BF]/20 focus:border-[#2DD4BF] text-white placeholder:text-white/60"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className="w-full bg-white/20 border-[#2DD4BF]/20 focus:border-[#2DD4BF] text-white placeholder:text-white/60"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full bg-white/20 border-[#2DD4BF]/20 focus:border-[#2DD4BF] text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-[#CCFBF1] text-sm font-medium">Contact Preference</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-[#CCFBF1] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.contactPreference.email}
                        onChange={() => handleCheckboxChange('email')}
                        className="rounded border-[#2DD4BF]/20 bg-white/20"
                      />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center gap-2 text-[#CCFBF1] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.contactPreference.phone}
                        onChange={() => handleCheckboxChange('phone')}
                        className="rounded border-[#2DD4BF]/20 bg-white/20"
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
                    className="w-full min-h-[150px] bg-white/20 border-[#2DD4BF]/20 focus:border-[#2DD4BF] text-white placeholder:text-white/60"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#10B981] to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-[#10B981] text-white font-medium transition-all duration-300 hover:scale-105 rounded-lg"
                >
                  Submit
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};