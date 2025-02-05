
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const businessHours = [
  { day: "Monday", hours: "9:00 AM–6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM–6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM–6:00 PM" },
  { day: "Thursday", hours: "9:00 AM–6:00 PM" },
  { day: "Friday", hours: "9:00 AM–6:00 PM" },
  { day: "Saturday", hours: "9:00 AM–6:00 PM" },
  { day: "Sunday", hours: "9:00 AM–6:00 PM" },
];

export const ContactInfo = () => {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-6 text-white">Our Location</h2>
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
        <h2 className="text-2xl font-bold text-white">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white/90 group">
            <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
            <a href="tel:+18604689221" className="hover:text-primary transition-colors">
              (860) 468-9221
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/90 group">
            <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
            <a href="mailto:info@bajioweb.solutions" className="hover:text-primary transition-colors">
              info@bajioweb.solutions
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/90 group">
            <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
            <span>902 Trumbull Hwy, Lebanon, CT 06249</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-white">Business Hours</h2>
        </div>
        <div className="space-y-2">
          {businessHours.map((schedule) => (
            <div key={schedule.day} className="flex justify-between text-white/90">
              <span>{schedule.day}</span>
              <span>{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
