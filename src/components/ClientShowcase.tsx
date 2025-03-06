
import { useState, useEffect } from 'react';
import { fetchClients, Client } from '@/lib/supabase/clients';
import { motion } from 'framer-motion';

export const ClientShowcase = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadClients = async () => {
      try {
        setIsLoading(true);
        const data = await fetchClients({ featured: true });
        setClients(data);
      } catch (error) {
        console.error("Error loading clients:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadClients();
  }, []);

  if (clients.length === 0 && !isLoading) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Trusted by <span className="text-primary">Leading Brands</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            We've partnered with companies both large and small to create outstanding digital experiences.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-pulse text-primary">Loading clients...</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full flex items-center justify-center p-4"
              >
                {client.logo_url ? (
                  <a 
                    href={client.website_url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    <img
                      src={client.logo_url}
                      alt={client.name}
                      className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                ) : (
                  <a 
                    href={client.website_url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-neutral hover:text-primary transition-colors"
                  >
                    {client.name}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
