import { Code2, Smartphone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: Code2,
  },
  {
    title: "Mobile Solutions",
    description: "Cross-platform mobile applications that work seamlessly.",
    icon: Smartphone,
  },
  {
    title: "Digital Presence",
    description: "Complete digital solutions to establish your online presence.",
    icon: Globe,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral-dark">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};