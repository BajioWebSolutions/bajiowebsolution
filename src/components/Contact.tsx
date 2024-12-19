import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-neutral-dark/40 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-primary/5 to-transparent opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-foreground text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-neutral mb-8 text-center">Ready to start your next project? Contact us today!</p>
          <form className="space-y-6 backdrop-blur-sm bg-neutral-dark/20 p-8 rounded-lg animate-fade-up">
            <Input 
              placeholder="Your Name" 
              className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
            />
            <Textarea 
              placeholder="Your Message" 
              className="w-full min-h-[150px] bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors"
            />
            <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-all duration-300 hover:scale-105">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};