
import { useState, useEffect } from 'react';
import { supabase, handleSupabaseError } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

type TeamMember = {
  id: string;
  name: string;
  position: string;
  bio?: string;
  avatar_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  github_url?: string;
};

export const TeamMembers = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .eq('is_active', true)
          .order('order_index');

        if (error) throw error;
        setMembers(data);
      } catch (error) {
        handleSupabaseError(error as Error, "Failed to load team members");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <section className="py-20 px-4 bg-background-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground-dark mb-4">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Meet the talented individuals who make our vision a reality. Our diverse team brings a wealth of experience and passion to every project.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-primary">Loading team members...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-dark/20 backdrop-blur-sm rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-full overflow-hidden border-4 border-primary/20 w-32 h-32">
                  {member.avatar_url ? (
                    <img
                      src={member.avatar_url}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground-dark mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.position}</p>
                
                {member.bio && (
                  <p className="text-neutral text-sm mb-4">{member.bio}</p>
                )}
                
                <div className="flex space-x-3 mt-auto pt-3">
                  {member.linkedin_url && (
                    <a
                      href={member.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.twitter_url && (
                    <a
                      href={member.twitter_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.github_url && (
                    <a
                      href={member.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral hover:text-primary transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
