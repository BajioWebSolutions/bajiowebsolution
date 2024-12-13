import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-accent animate-gradient-x"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transforming Ideas into
          <span className="block text-accent-dark">Digital Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Bajio Web Solutions LLC delivers cutting-edge web development solutions that drive your business forward.
        </p>
        <Button className="bg-white text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 py-6">
          Get Started
        </Button>
      </div>
    </div>
  );
};