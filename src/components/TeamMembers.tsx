
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { fetchTeamMembers, TeamMember } from "@/lib/supabase/team";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Twitter, Github } from "lucide-react";

export const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const getTeamMembers = async () => {
      try {
        const members = await fetchTeamMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error("Error fetching team members:", error);
        toast({
          title: "Error",
          description: "Failed to load team members. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    getTeamMembers();
  }, [toast]);

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="animate-pulse">Loading team members...</div>
          </div>
        </div>
      </section>
    );
  }

  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Our dedicated team of experts is committed to delivering exceptional results
            for every client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <Avatar className="h-24 w-24 mb-4 border-2 border-primary/20">
                    <AvatarImage src={member.avatar_url || ''} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-foreground-dark mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  
                  {member.bio && (
                    <p className="text-sm text-neutral mb-4 line-clamp-3">{member.bio}</p>
                  )}
                  
                  <div className="flex space-x-3 mt-auto pt-4">
                    {member.linkedin_url && (
                      <a 
                        href={member.linkedin_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral hover:text-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.twitter_url && (
                      <a 
                        href={member.twitter_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.github_url && (
                      <a 
                        href={member.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral hover:text-primary transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
