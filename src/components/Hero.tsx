
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Award, Users, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-gradient-to-br from-background-dark via-neutral-dark/40 to-primary/5 overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.7)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,212,191,0.06)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Clear value proposition answering the 3 key questions */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                <Award className="h-4 w-4" />
                <span>Award-Winning Digital Agency</span>
              </div>
              
              {/* WHO WE ARE */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-white">We're</span>{" "}
                <span className="text-primary">Bajio Web Solutions</span>
                <br />
                <span className="text-white text-3xl sm:text-4xl lg:text-5xl">Your Growth Partner</span>
              </h1>
              
              {/* WHO WE HELP & WHAT PROBLEM WE SOLVE */}
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-[#CCFBF1] font-medium leading-relaxed">
                  We help <span className="text-primary font-bold">ambitious businesses</span> overcome their biggest digital challenge:
                </p>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  <span className="text-red-400 font-semibold">Invisible online presence</span> that fails to attract qualified leads and convert visitors into paying customers.
                </p>
                <p className="text-lg text-[#CCFBF1]">
                  We create high-performance websites and digital marketing strategies that turn your online presence into your most powerful sales tool.
                </p>
              </div>
            </div>

            {/* Social Proof Metrics */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2 text-white">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="font-semibold">2.5x Average ROI</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">150+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold">94% Retention Rate</span>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-[#10B981] to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-[#10B981] text-white font-bold text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105 rounded-lg shadow-2xl hover:shadow-primary/50 relative overflow-hidden"
              >
                <Link to="/contact#start-project" className="flex items-center">
                  Get Your Free Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-primary font-bold text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105 rounded-lg backdrop-blur-sm"
              >
                <Link to="/services" className="flex items-center">
                  View Our Results
                  <TrendingUp className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 space-y-4">
              <p className="text-sm text-white/70 font-medium">Trusted by businesses to deliver results:</p>
              <div className="flex flex-wrap gap-6">
                {['Custom Solutions', 'Expert Support', '100% Satisfaction', 'Connecticut-Based'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <CheckCircle className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.05] hover:shadow-primary/20">
              <img 
                src="/lovable-uploads/8cbecad2-2102-44f5-8942-42e17c95d52a.png"
                alt="Bajio Web Solutions - Professional Web Development Team"
                className="w-full h-auto rounded-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Enhanced testimonial card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-card rounded-2xl shadow-xl p-6 max-w-xs transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl transition-all duration-500">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Sarah J., TechStart CEO</h3>
                  <p className="text-xs text-white/80 mt-1">"200% traffic increase in 3 months!"</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-primary rounded-full opacity-80"></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
