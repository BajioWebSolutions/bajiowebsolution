import { X, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Twitch, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { TikTokIcon } from "./icons/TikTokIcon";

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
      name: 'TikTok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@bajiowebsolutions',
      hoverColor: 'hover:text-black'
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
    <footer className="bg-neutral-dark/30 backdrop-blur-sm border-t border-primary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Bajio Web Solutions
            </h3>
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
                    <Icon className="h-5 w-5 text-neutral hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  onClick={scrollToTop} 
                  className="text-neutral hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={scrollToTop} 
                  className="text-neutral hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  onClick={scrollToTop} 
                  className="text-neutral hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={scrollToTop} 
                  className="text-neutral hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services/web-design" 
                  onClick={scrollToTop} 
                  className="text-neutral hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/seo" 
                  onClick={scrollToTop} 
                  className="text-neutral hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/marketing" 
                  onClick={scrollToTop} 
                  className="text-neutral hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-neutral group hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                <a href="tel:+18604689221" className="hover:text-primary transition-colors">
                  (860) 468-9221
                </a>
              </li>
              <li className="flex items-center text-neutral group hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:info@bajiowebsolutions.com" 
                  className="hover:text-primary transition-colors"
                >
                  info@bajiowebsolutions.com
                </a>
              </li>
              <li className="flex items-center text-neutral group hover:text-primary transition-colors">
                <MapPin className="h-5 w-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                <span>902 Trumbull Hwy, Lebanon, CT 06249</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-dark/50 pt-8 text-center">
          <p className="text-neutral">
            &copy; {new Date().getFullYear()} Bajio Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};