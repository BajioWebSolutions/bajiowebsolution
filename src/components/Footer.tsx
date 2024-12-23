import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-neutral-dark/30 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bajio Web Solutions</h3>
            <p className="text-neutral mb-4">
              Transforming businesses through innovative digital solutions and exceptional web experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-design" className="text-neutral hover:text-primary transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-neutral hover:text-primary transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/marketing" className="text-neutral hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/development" className="text-neutral hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-neutral">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                (860) 468-9221
              </li>
              <li className="flex items-center text-neutral">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                info@bajioweb.solutions
              </li>
              <li className="flex items-center text-neutral">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                902 Trumbull Hwy, Lebanon, CT 06249
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-dark/50 pt-8 text-center text-neutral">
          <p>&copy; {new Date().getFullYear()} Bajio Web Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};