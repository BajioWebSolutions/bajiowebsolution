import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Boost Your Business Growth With{" "}
          <span className="text-primary">Bajio Web Solutions</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-neutral animate-fade-up">
          We specialize in creating stunning, high-performance websites tailored to
          our clients' unique needs. Transform your online presence with our
          comprehensive digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button
            asChild
            className="bg-primary hover:bg-primary-dark text-background text-lg px-8 py-6"
          >
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-foreground border-foreground hover:bg-foreground/10 text-lg px-8 py-6"
          >
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};