
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { ClientShowcase } from "@/components/ClientShowcase";

const ProjectsPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20 px-4 bg-gradient-to-br from-background-dark via-background-dark to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-neutral">
              Explore our portfolio of work and see how we've helped businesses achieve their digital goals.
              From e-commerce solutions to custom web applications, we deliver results that exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ProjectsGallery />
      <ClientShowcase />
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
