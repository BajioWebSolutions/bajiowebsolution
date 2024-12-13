import { CheckCircle } from "lucide-react";

const reasons = [
  "Expert team with years of experience",
  "Custom solutions tailored to your needs",
  "Modern and scalable technologies",
  "Dedicated support and maintenance",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-neutral-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Bajio Web Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-lg bg-white/5 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};