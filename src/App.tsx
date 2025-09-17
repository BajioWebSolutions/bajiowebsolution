
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import { ScrollAnimations } from "./components/ScrollAnimations";
import { FloatingContact } from "./components/FloatingContact";
import { Suspense, lazy, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Enhanced page transition wrapper with glassmorphism
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }}
      exit={{ 
        opacity: 0, 
        y: 20,
        transition: {
          duration: 0.4,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }}
      className="min-h-screen bg-gradient-to-br from-background-dark via-neutral-dark/40 to-primary/5"
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add('dark');
    
    // Basic page speed monitoring
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        // Log performance metrics when page loads
        if ('performance' in window) {
          const pageNavigation = performance.getEntriesByType('navigation')[0];
          console.log('Page load performance:', pageNavigation);
          
          // Log resource load times
          const resources = performance.getEntriesByType('resource');
          const slowResources = resources.filter((resource) => resource.duration > 1000);
          if (slowResources.length > 0) {
            console.log('Slow loading resources:', slowResources);
          }
        }
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/">
            <Navigation />
            <ExitIntentPopup />
            <ScrollAnimations />
            <FloatingContact />
            <div className="pt-20">
              <Suspense fallback={
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center min-h-[60vh] glass-card mx-4 mt-8 rounded-2xl"
                >
                  <div className="animate-pulse text-primary text-lg font-medium">Loading...</div>
                </motion.div>
              }>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
                    <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
                    <Route path="/services" element={<PageWrapper><ServicePage /></PageWrapper>} />
                    <Route path="/services/:serviceId" element={<PageWrapper><ServicePage /></PageWrapper>} />
                    <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
                    <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
                    <Route path="/blog/:slug" element={<PageWrapper><BlogPage /></PageWrapper>} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </div>
            <ScrollToTop />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
