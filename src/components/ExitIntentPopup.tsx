
import { useState, useEffect } from "react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { X } from "lucide-react";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  
  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenExitPopup = localStorage.getItem("hasSeenExitPopup");
    if (hasSeenExitPopup) return;
    
    // Only add the listener if user hasn't seen the popup
    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is leaving to the top of the page
      if (e.clientY <= 0) {
        setIsOpen(true);
        // Remove event listener after triggering once
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
    
    // Set a delay before adding the listener to prevent it from triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark as seen so it doesn't show again
    localStorage.setItem("hasSeenExitPopup", "true");
    
    // Show success message
    toast.success("Thank you! We'll contact you soon about your free website audit.");
    
    // Close the popup
    setIsOpen(false);
  };

  const handleClose = () => {
    localStorage.setItem("hasSeenExitPopup", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg bg-background-dark border border-primary/20">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-light hover:text-primary transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Wait! Don't Miss Your Free Website Audit
          </DialogTitle>
          <DialogDescription className="text-neutral-light pt-2">
            Discover how to improve your website's performance, SEO, and conversion rate with our complimentary audit (valued at $499).
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground-dark">
              Your Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="bg-background/50 border-neutral-dark/30 focus:border-primary text-foreground-dark placeholder:text-neutral-light/70"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground-dark">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="bg-background/50 border-neutral-dark/30 focus:border-primary text-foreground-dark placeholder:text-neutral-light/70"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="website" className="text-sm font-medium text-foreground-dark">
              Your Website URL
            </label>
            <Input
              id="website"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://yourwebsite.com"
              required
              className="bg-background/50 border-neutral-dark/30 focus:border-primary text-foreground-dark placeholder:text-neutral-light/70"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium transition-all duration-300 hover:scale-105 mt-4"
          >
            Get My Free Audit
          </Button>
          
          <p className="text-xs text-neutral-light text-center pt-2">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
