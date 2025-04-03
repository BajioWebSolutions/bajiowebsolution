
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Profession {
  title: string;
  duration: string;
  lessons: string;
  hours: string;
  image: string;
  slug: string;
}

const professions: Profession[] = [
  {
    title: "Augmented reality designer",
    duration: "6 months",
    lessons: "54 lessons",
    hours: "120 h",
    image: "/lovable-uploads/01c72101-9a53-47df-ac29-d65c4c40317b.png",
    slug: "augmented-reality"
  },
  {
    title: "Machine learning engineer",
    duration: "12 months",
    lessons: "115 lessons",
    hours: "250 h",
    image: "/lovable-uploads/15afb1ba-8f0e-4ac6-99d2-57697197c3fe.png",
    slug: "machine-learning"
  },
  {
    title: "Quantum computing programmer",
    duration: "24 months",
    lessons: "300+ lessons",
    hours: "500+ h",
    image: "/lovable-uploads/04899484-bd95-4369-9349-8bb80a1e781a.png",
    slug: "quantum-computing"
  }
];

export const ProfessionsShowcase = () => {
  return (
    <section className="py-20 relative bg-white rounded-t-[30px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#0A0E14]">Professions</h2>
          <span className="text-lg font-medium text-primary">12</span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professions.map((profession, index) => (
            <motion.div
              key={profession.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <Link to={`/services/${profession.slug}`}>
                <Card className="overflow-hidden h-full bg-[#0A0E14] border-0 rounded-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group">
                  <CardContent className="p-0 relative h-full">
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-xl font-bold mb-6 text-white">{profession.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <span>{profession.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{profession.lessons}</span>
                        <span className="mx-2">•</span>
                        <span>{profession.hours}</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 w-24 h-24 transition-all duration-500 group-hover:scale-110 group-hover:brightness-125">
                      <img 
                        src={profession.image} 
                        alt={profession.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
