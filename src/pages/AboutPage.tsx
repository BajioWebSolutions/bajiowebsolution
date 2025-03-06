
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { TeamMembers } from "@/components/TeamMembers";
import { CompanyStats } from "@/components/CompanyStats";

const AboutPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-20 px-4 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              About Bajio Web Solutions
            </h1>
            <p className="text-xl text-neutral-light mb-8">
              We're a dedicated team of web professionals committed to building exceptional digital experiences that drive real-world results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground-dark">Our Story</h2>
              <p className="text-neutral mb-4">
                Founded in 2020, Bajio Web Solutions was born from a passion for creating websites that not only look great but also deliver exceptional results for our clients.
              </p>
              <p className="text-neutral mb-4">
                What began as a small freelance operation has grown into a full-service web development agency with a diverse team of designers, developers, and digital marketers.
              </p>
              <p className="text-neutral">
                Today, we work with businesses of all sizes, from startups to established brands, helping them achieve their digital goals through custom web solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="/lovable-uploads/2d155762-9090-45c9-bd91-9a55dffd4171.png" 
                alt="Our team" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-background-dark relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground-dark mb-4">Our Values</h2>
            <p className="text-neutral max-w-2xl mx-auto">
              Our core values guide everything we do, from how we approach projects to how we interact with our clients.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-foreground-dark mb-3">Excellence</h3>
              <p className="text-neutral">
                We strive for excellence in everything we do, from the code we write to the designs we create and the support we provide.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-foreground-dark mb-3">Integrity</h3>
              <p className="text-neutral">
                We believe in honest, transparent communication with our clients, setting realistic expectations and delivering on our promises.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-neutral-dark/20 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-foreground-dark mb-3">Innovation</h3>
              <p className="text-neutral">
                We're constantly learning and evolving, embracing new technologies and methodologies to provide the best solutions possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <CompanyStats />

      {/* Team Section */}
      <TeamMembers />

      <Footer />
    </motion.div>
  );
};

export default AboutPage;
