
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
import { toast } from "sonner";
import { X } from "lucide-react";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenExitPopup = localStorage.getItem("hasSeenExitPopup");
    if (hasSeenExitPopup) return;
    
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is leaving to the top of the page with more reliable detection
      if (e.clientY <= 10 && e.relatedTarget === null) {
        setIsOpen(true);
        // Remove event listener after triggering once
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseout", handleMouseOut);
      }
    };
    
    // Additional mouseout handler for better cross-browser support
    const handleMouseOut = (e: MouseEvent) => {
      // Check if mouse is moving out of the document
      if (!e.relatedTarget && e.clientY <= 10) {
        setIsOpen(true);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseout", handleMouseOut);
      }
    };
    
    // Set a delay before adding the listener to prevent it from triggering immediately
    timeoutId = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseout", handleMouseOut);
    }, 3000);
    
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.website) {
      toast.error("Please fill in all fields");
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
      form.setAttribute('name', 'website-audit');
      form.setAttribute('data-netlify', 'true');
      form.style.display = 'none';

      // Add form fields
      const fields = [
        { name: 'form-name', value: 'website-audit' },
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'website', value: formData.website }
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
        // Mark as seen so it doesn't show again
        localStorage.setItem("hasSeenExitPopup", "true");
        
        // Show success message
        toast.success("Thank you! We'll contact you soon about your free website audit.");
        
        // Close the popup
        setIsOpen(false);
      } else {
        throw new Error('Failed to submit form');
      }

      document.body.removeChild(form);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to submit audit request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClose = () => {
    localStorage.setItem("hasSeenExitPopup", "true");
    setIsOpen(false);
  };

  return (
    <>
      {/* Hidden form for Netlify */}
      <form name="website-audit" data-netlify="true" data-netlify-honeypot="bot-field" style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="url" name="website" />
      </form>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md md:max-w-lg bg-background-dark border border-primary/20">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-neutral-light hover:text-primary transition-colors"
            disabled={isSubmitting}
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="bg-background/50 border-neutral-dark/30 focus:border-primary text-foreground-dark placeholder:text-neutral-light/70"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground-dark">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="bg-background/50 border-neutral-dark/30 focus:border-primary text-foreground-dark placeholder:text-neutral-light/70"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="website" className="text-sm font-medium text-foreground-dark">
                Your Website URL
              </label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                required
                className="bg-background/50 border-neutral-dark/30 focus:border-primary text-foreground-dark placeholder:text-neutral-light/70"
                disabled={isSubmitting}
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium transition-all duration-300 hover:scale-105 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get My Free Audit"}
            </Button>
            
            <p className="text-xs text-neutral-light text-center pt-2">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
