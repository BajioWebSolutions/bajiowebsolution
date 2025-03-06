
import { useState, useEffect } from 'react';
import { fetchProjects, fetchProjectTags, Project, ProjectTag } from '@/lib/supabase/projects';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react';

export const ProjectsGallery = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tags, setTags] = useState<ProjectTag[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [projectsData, tagsData] = await Promise.all([
          fetchProjects({ tagSlug: selectedTag || undefined }),
          fetchProjectTags()
        ]);
        setProjects(projectsData);
        setTags(tagsData);
      } catch (error) {
        console.error("Error loading projects or tags:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [selectedTag]);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground-dark mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              onClick={() => setSelectedTag(null)}
              className="mb-2"
            >
              All
            </Button>
            {tags.map(tag => (
              <Button
                key={tag.id}
                variant={selectedTag === tag.slug ? "default" : "outline"}
                onClick={() => setSelectedTag(tag.slug)}
                className="mb-2"
              >
                {tag.name}
              </Button>
            ))}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-primary">Loading projects...</div>
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-dark/20 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
              >
                {project.featured_image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.featured_image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground-dark mb-2">{project.title}</h3>
                  
                  {project.client && (
                    <p className="text-primary mb-3">Client: {project.client}</p>
                  )}
                  
                  <p className="text-neutral mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map(tag => (
                      <span
                        key={tag.id}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  
                  {project.completed_date && (
                    <div className="flex items-center text-sm text-neutral mb-4">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>
                        Completed: {new Date(project.completed_date).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/projects/${project.slug}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral">No projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
};
