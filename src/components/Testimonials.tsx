import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Bajio Web Solutions transformed our online presence completely. Their web design and SEO services helped us increase our traffic by 200% in just 3 months.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthBox",
    content: "The PPC campaign management by Bajio Web Solutions delivered exceptional ROI. Their team's expertise in digital marketing is unmatched.",
    image: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHub",
    content: "Working with Bajio on our social media strategy was a game-changer. They helped us build a strong brand presence across all platforms.",
    image: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-neutral-dark/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background/40 p-6 rounded-lg backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12">
                  <img src={testimonial.image} alt={testimonial.name} />
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-neutral">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};