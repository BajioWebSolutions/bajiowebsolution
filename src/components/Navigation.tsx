import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Bajio Web Solutions
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary-dark text-background transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-background/95">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-foreground hover:text-primary transition-colors px-4 py-2"
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
                  className="w-full bg-primary hover:bg-primary-dark text-background transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};