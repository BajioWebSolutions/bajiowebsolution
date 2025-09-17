import { useState } from "react";
import { MessageCircle, X, Phone, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-primary/10 p-6 min-w-[320px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">Ready to Get Started?</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              📞 <strong>Free consultation in 24 hours.</strong> No sales pitch - just honest advice about your digital growth potential.
            </p>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 px-2">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                No obligation
              </span>
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-blue-600" />
                Info stays private
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-orange-600" />
                Quick response
              </span>
            </div>
            
            <div className="space-y-3">
              <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Link to="/contact" className="flex items-center justify-center">
                  <span className="mr-2">🎯</span>
                  Get My FREE Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-primary/30 text-primary hover:bg-primary/5 font-semibold group"
              >
                <a href="tel:+1-860-468-9221" className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now: (860) 468-9221
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main floating button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isExpanded 
            ? "0 20px 40px -10px rgba(45, 212, 191, 0.3)" 
            : "0 10px 30px -10px rgba(45, 212, 191, 0.4)",
        }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="h-6 w-6" />
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};