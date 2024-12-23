import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">
            About <span className="text-primary">Bajio Web Solutions</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
              <p className="text-neutral leading-relaxed">
                Bajio Web Solutions is a leading web design and digital marketing agency based in Lebanon,
                Connecticut. We specialize in creating stunning, high-performance websites tailored to our
                clients' unique needs.
              </p>
              <p className="text-neutral leading-relaxed">
                Our team of expert web developers and designers leverage the latest technologies and best
                practices to deliver responsive, user-friendly websites that drive conversions and growth.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-neutral leading-relaxed">
                Our mission is to empower businesses with cutting-edge digital solutions that drive growth
                and success. We believe in creating lasting partnerships with our clients, understanding their
                unique challenges, and delivering solutions that exceed expectations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-neutral">Happy Clients</div>
            </Card>
            <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-neutral">Projects Completed</div>
            </Card>
            <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-neutral">Support</div>
            </Card>
            <Card className="p-6 text-center bg-neutral-dark/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-neutral">Years Experience</div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};