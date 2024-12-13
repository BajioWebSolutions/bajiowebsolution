import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import { ServicePage } from "./pages/ServicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<div className="p-8">About Us Page (Coming Soon)</div>} />
            <Route path="/services" element={<div className="p-8">Services Page (Coming Soon)</div>} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/contact" element={<div className="p-8">Contact Page (Coming Soon)</div>} />
            <Route path="/blog" element={<div className="p-8">Blog Page (Coming Soon)</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;