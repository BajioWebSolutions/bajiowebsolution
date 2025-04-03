
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogin = () => {
    navigate('/contact');
  };

  const menuItems = [
    { title: "PROFESSIONS", path: "/services" },
    { title: "ABOUT", path: "/about" },
    { title: "FAQ", path: "/blog" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-background-dark/90 backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Furny</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${
                  location.pathname === item.path ? 'text-primary' : 'text-foreground-dark'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={handleLogin}
              className="flex items-center gap-2 text-sm font-medium tracking-wide bg-transparent hover:bg-transparent text-white"
              variant="ghost"
            >
              LOG IN <LogIn className="w-4 h-4" />
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
                    handleLogin();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-transparent text-white"
                  variant="ghost"
                >
                  LOG IN <LogIn className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
