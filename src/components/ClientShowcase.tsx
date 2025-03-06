
import { useState, useEffect } from "react";
import { fetchClients, Client } from "@/lib/supabase/clients";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export const ClientShowcase = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const getClients = async () => {
      try {
        const fetchedClients = await fetchClients({ featured: true });
        setClients(fetchedClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
        toast({
          title: "Error",
          description: "Failed to load client showcase. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    getClients();
  }, [toast]);

  if (loading) {
    return (
      <section className="py-16 bg-background-dark/50">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="animate-pulse">Loading clients...</div>
          </div>
        </div>
      </section>
    );
  }

  if (clients.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-background-dark/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            We're proud to work with companies of all sizes across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              {client.website_url ? (
                <a 
                  href={client.website_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  aria-label={client.name}
                >
                  {client.logo_url ? (
                    <img 
                      src={client.logo_url} 
                      alt={client.name} 
                      className="h-12 w-auto object-contain"
                    />
                  ) : (
                    <div className="h-12 flex items-center justify-center text-foreground-dark font-medium">
                      {client.name}
                    </div>
                  )}
                </a>
              ) : (
                <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  {client.logo_url ? (
                    <img 
                      src={client.logo_url} 
                      alt={client.name} 
                      className="h-12 w-auto object-contain"
                    />
                  ) : (
                    <div className="h-12 flex items-center justify-center text-foreground-dark font-medium">
                      {client.name}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
