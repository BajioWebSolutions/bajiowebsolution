import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  const businessHours = [
    { day: "Monday", hours: "9:00 AM–6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM–6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM–6:00 PM" },
    { day: "Thursday", hours: "9:00 AM–6:00 PM" },
    { day: "Friday", hours: "9:00 AM–6:00 PM" },
    { day: "Saturday", hours: "9:00 AM–6:00 PM" },
    { day: "Sunday", hours: "9:00 AM–6:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">
            Get in <span className="text-primary">Touch</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.7454092321586!2d-72.2223611!3d41.6336111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e665484d7e9cbf%3A0x1f1979d3c9e6c89a!2s902%20Trumbull%20Hwy%2C%20Lebanon%2C%20CT%2006249!5e0!3m2!1sen!2sus!4v1708482431051!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              <div className="grid gap-6">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-neutral">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+18604689221" className="hover:text-primary transition-colors">
                      (860) 468-9221
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:info@bajioweb.solutions" className="hover:text-primary transition-colors">
                      info@bajioweb.solutions
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>902 Trumbull Hwy, Lebanon, CT 06249</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">Business Hours</h2>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between text-neutral">
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="start-project" className="backdrop-blur-sm bg-neutral-dark/20 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Start Your Project</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-neutral mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors text-white placeholder:text-neutral focus:text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors text-white placeholder:text-neutral focus:text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors text-white placeholder:text-neutral focus:text-primary"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors text-white placeholder:text-neutral focus:text-primary"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-neutral mb-2">
                    Project Type
                  </label>
                  <Input
                    id="projectType"
                    placeholder="e.g., Website Design, E-commerce, Marketing"
                    className="w-full bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors text-white placeholder:text-neutral focus:text-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    className="w-full min-h-[150px] bg-background/50 border-neutral-dark/30 focus:border-primary transition-colors text-white placeholder:text-neutral focus:text-primary"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
