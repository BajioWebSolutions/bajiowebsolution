import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Bajio Web Solutions transformed our online presence completely. Their web design and SEO services helped us increase our traffic by 200% in just 3 months.",
    image: "/lovable-uploads/2d155762-9090-45c9-bd91-9a55dffd4171.png"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthBox",
    content: "The PPC campaign management by Bajio Web Solutions delivered exceptional ROI. Their team's expertise in digital marketing is unmatched.",
    image: "/lovable-uploads/01c72101-9a53-47df-ac29-d65c4c40317b.png"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHub",
    content: "Working with Bajio on our social media strategy was a game-changer. They helped us build a strong brand presence across all platforms.",
    image: "/lovable-uploads/15afb1ba-8f0e-4ac6-99d2-57697197c3fe.png"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground-dark">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-dark p-6 rounded-lg shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground-dark">{testimonial.name}</h4>
                  <p className="text-sm text-primary-light">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground-dark leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};