
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ScrollObserver } from "@/components/ScrollObserver";

const ContactPage = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/lovable-uploads/d1bb5491-fcc8-4e85-980f-f546c0616543.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enable scroll-triggered hover effects */}
      <ScrollObserver />
    
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/50" />
      
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
