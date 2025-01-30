import { X, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Twitch, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const socialLinks = [
    {
      name: 'X',
      icon: X,
      url: 'https://x.com/bajiosolutions',
      hoverColor: 'hover:text-neutral'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/bajiowebsolutions',
      hoverColor: 'hover:text-primary'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/bajiowebsolutions',
      hoverColor: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/BajioWebSolutions',
      hoverColor: 'hover:text-primary'
    },
    {
      name: 'Twitch',
      icon: Twitch,
      url: 'https://www.twitch.tv/BajioWebSolutions',
      hoverColor: 'hover:text-[#6441a5]'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@bajiowebsolutions',
      hoverColor: 'hover:text-red-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-neutral-dark/30 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bajio Web Solutions</h3>
            <p className="text-neutral mb-4">
              Transforming businesses through innovative digital solutions and exceptional web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform transition-all duration-300 ${social.hoverColor} hover:scale-110`}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <Icon className="h-5 w-5 text-neutral" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-design" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services/seo" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/marketing" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/development" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/ppc" onClick={scrollToTop} className="text-neutral hover:text-primary transition-colors">
                  PPC Advertising
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
                <a href="mailto:info@bajiowebsolutions.com" className="hover:text-primary transition-colors">
                  info@bajiowebsolutions.com
                </a>
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
