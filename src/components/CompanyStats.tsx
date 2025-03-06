
import { useState, useEffect } from 'react';
import { supabase, handleSupabaseError } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { Award, Users, CheckCircle, Calendar } from 'lucide-react';

type CompanyStat = {
  id: string;
  title: string;
  value: string;
  icon?: string;
  is_featured?: boolean;
};

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-12 h-12 text-primary" />,
  users: <Users className="w-12 h-12 text-primary" />,
  check: <CheckCircle className="w-12 h-12 text-primary" />,
  calendar: <Calendar className="w-12 h-12 text-primary" />,
};

export const CompanyStats = () => {
  const [stats, setStats] = useState<CompanyStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('company_stats')
          .select('*')
          .eq('is_featured', true)
          .order('order_index');

        if (error) throw error;
        setStats(data);
      } catch (error) {
        handleSupabaseError(error as Error, "Failed to load company stats");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

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
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            We're proud of the results we've achieved and the relationships we've built with our clients.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-primary">Loading stats...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-dark/20 backdrop-blur-sm rounded-lg p-8 shadow-lg text-center"
              >
                <div className="mb-4 mx-auto">
                  {stat.icon && iconMap[stat.icon] ? (
                    iconMap[stat.icon]
                  ) : (
                    <Award className="w-12 h-12 text-primary mx-auto" />
                  )}
                </div>
                <h3 className="text-4xl font-bold text-foreground-dark mb-2">{stat.value}</h3>
                <p className="text-neutral">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
