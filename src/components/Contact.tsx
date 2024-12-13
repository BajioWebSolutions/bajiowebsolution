import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-neutral-dark">Get In Touch</h2>
          <p className="text-neutral mb-8">Ready to start your next project? Contact us today!</p>
          <form className="space-y-6">
            <Input placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
            <Button className="w-full bg-primary hover:bg-primary-dark text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};