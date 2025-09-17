
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-background-dark/80 backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/5a483482-d9db-4a40-8b9e-5b901a1d8fcc.png" 
              alt="Bajio Web Solutions" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-foreground-dark hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-2">🚀</span>
                Book Your FREE Website Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground-dark"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-background-dark/95">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-foreground-dark hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => {
                    handleGetStarted();
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-2">🚀</span>
                    Book Your FREE Website Audit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
