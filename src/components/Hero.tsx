import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-neutral-dark/40 to-primary/10">
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-accent/5 to-transparent opacity-50"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 py-12 sm:py-20 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
          Boost Your Business Growth With{" "}
          <span className="text-primary">Bajio Web Solutions</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-neutral animate-fade-up">
          We specialize in creating stunning, high-performance websites tailored to
          our clients' unique needs. Transform your online presence with our
          comprehensive digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button
            asChild
            className="bg-primary hover:bg-primary-dark text-background text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-foreground border-foreground hover:bg-foreground/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:scale-105"
          >
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};