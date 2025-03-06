
import { ShapeLandingHero } from "@/components/ShapeLandingHero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { motion } from "framer-motion";
import { ServiceVideos } from "@/components/ServiceVideos";
import { BlogSection } from "@/components/BlogSection";
import { CompanyStats } from "@/components/CompanyStats";
import { TeamMembers } from "@/components/TeamMembers";
import { ClientShowcase } from "@/components/ClientShowcase";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NewsletterPopup />
      <main>
        <ShapeLandingHero />
        <WhyChooseUs />
        <Services />
        <CompanyStats />
        <ServiceVideos />
        <TeamMembers />
        <ClientShowcase />
        <Testimonials />
        <BlogSection />
        <FAQ />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
