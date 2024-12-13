import { Globe, Search, BarChart3, Code2, Share2, Target } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Design",
    description: "Custom web design solutions that bring results.",
    icon: Globe,
    path: "/services/web-design",
  },
  {
    title: "SEO Services",
    description: "Boost your search engine rankings and visibility.",
    icon: Search,
    path: "/services/seo",
  },
  {
    title: "Marketing",
    description: "Data-driven marketing strategies that grow your business.",
    icon: BarChart3,
    path: "/services/marketing",
  },
  {
    title: "Web Development",
    description: "Professional web development for your unique needs.",
    icon: Code2,
    path: "/services/development",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience across social platforms.",
    icon: Share2,
    path: "/services/social-media",
  },
  {
    title: "PPC Advertising",
    description: "Targeted advertising campaigns that convert.",
    icon: Target,
    path: "/services/ppc",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Comprehensive{" "}
          <span className="text-primary">Digital Solutions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="group p-6 rounded-lg bg-neutral-dark/20 hover:bg-neutral-dark/30 transition-all duration-300 animate-fade-up hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-neutral mb-4">{service.description}</p>
              <span className="text-primary inline-flex items-center group-hover:underline transform transition-transform group-hover:translate-x-1">
                Learn More
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};