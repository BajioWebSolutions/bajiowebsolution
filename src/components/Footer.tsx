import { X, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Twitch, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { TikTokIcon } from "./icons/TikTokIcon";

const services = [
  { name: 'Web Design', path: '/services/web-design' },
  { name: 'Web Development', path: '/services/development' },
  { name: 'SEO Services', path: '/services/seo' },
  { name: 'Social Media Marketing', path: '/services/social-media' },
  { name: 'PPC Advertising', path: '/services/ppc' }
];

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
    <footer className="relative bg-neutral-dark/95 border-t border-primary/20 shadow-lg rounded-t-lg overflow-hidden">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 to-background-dark opacity-90" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#2DD4BF] to-[#10B981] bg-clip-text text-transparent">
              Bajio Web Solutions
            </h3>
            <p className="text-white mb-4">
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
                    className={`transform transition-all duration-300 hover:text-[#2DD4BF] hover:scale-110`}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <Icon className="h-5 w-5 text-white hover:text-[#2DD4BF] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#2DD4BF] to-[#10B981] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    onClick={scrollToTop} 
                    className="text-white hover:text-[#2DD4BF] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2DD4BF] hover:after:w-full after:transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#2DD4BF] to-[#10B981] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    onClick={scrollToTop} 
                    className="text-white hover:text-[#2DD4BF] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2DD4BF] hover:after:w-full after:transition-all"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#2DD4BF] to-[#10B981] bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white group hover:text-[#2DD4BF] transition-colors">
                <Phone className="h-5 w-5 mr-2 text-[#2DD4BF] group-hover:scale-110 transition-transform" />
                <a href="tel:+18604689221" className="hover:text-[#2DD4BF] transition-colors">
                  1 (860) 468-9221
                </a>
              </li>
              <li className="flex items-center text-white group hover:text-[#2DD4BF] transition-colors">
                <Mail className="h-5 w-5 mr-2 text-[#2DD4BF] group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:info@bajiowebsolutions.com" 
                  className="hover:text-[#2DD4BF] transition-colors"
                >
                  info@bajiowebsolutions.com
                </a>
              </li>
              <li className="flex items-center text-white group hover:text-[#2DD4BF] transition-colors">
                <MapPin className="h-5 w-5 mr-2 text-[#2DD4BF] group-hover:scale-110 transition-transform" />
                <span>902 Trumbull Hwy, Lebanon, CT 06249</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200/10 pt-8 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Bajio Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
