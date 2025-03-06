
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProjectBySlug, Project } from '@/lib/supabase/projects';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';

const ProjectPage = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        const data = await fetchProjectBySlug(slug);
        setProject(data);
        
        if (data?.gallery && data.gallery.length > 0) {
          setActiveImage(data.gallery[0].image_url);
        } else if (data?.featured_image) {
          setActiveImage(data.featured_image);
        }
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-primary">Loading project details...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground-dark mb-4">Project Not Found</h2>
            <p className="text-neutral mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-20">
        <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary-light mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-foreground-dark mb-4">{project.title}</h1>
              
              {project.client && (
                <div className="mb-6">
                  <span className="text-primary text-lg">Client: {project.client}</span>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags?.map(tag => (
                  <span
                    key={tag.id}
                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              
              {project.completed_date && (
                <div className="flex items-center text-neutral mb-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>
                    Completed: {new Date(project.completed_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              )}
              
              <div className="prose prose-lg max-w-none text-neutral">
                <p>{project.description}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              {activeImage && (
                <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={activeImage}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              {project.gallery && project.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {project.gallery.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveImage(item.image_url)}
                      className={`rounded-md overflow-hidden border-2 ${
                        activeImage === item.image_url
                          ? 'border-primary'
                          : 'border-transparent'
                      }`}
                    >
                      <img
                        src={item.image_url}
                        alt={item.caption || 'Project image'}
                        className="w-full h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default ProjectPage;
