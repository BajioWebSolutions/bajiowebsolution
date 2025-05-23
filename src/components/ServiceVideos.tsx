
const serviceVideos = [
  {
    title: "Web Design Process",
    description: "Watch how we transform ideas into beautiful, functional websites",
    embedUrl: "https://www.youtube.com/embed/h3RglfBb1As" 
  },
  {
    title: "Digital Marketing Strategy",
    description: "Learn about our comprehensive digital marketing approach",
    embedUrl: "https://www.youtube.com/embed/JAqMroYPvkI"
  },
  {
    title: "SEO Optimization",
    description: "Discover how we improve your search engine rankings",
    embedUrl: "https://www.youtube.com/embed/FmrOLNyPPOk"
  },
  {
    title: "Content Creation",
    description: "Learn about effective content strategies for your business",
    embedUrl: "https://www.youtube.com/embed/ycgxVirLuFY"
  },
  {
    title: "Social Media Growth",
    description: "Strategies to grow your business through social media",
    embedUrl: "https://www.youtube.com/embed/RWU8nKUCfEw"
  },
  {
    title: "E-commerce Solutions",
    description: "Build and optimize your online store for maximum sales",
    embedUrl: "https://www.youtube.com/embed/iQ6rqgLoLdA"
  }
];

export const ServiceVideos = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services in <span className="text-primary">Action</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceVideos.map((video, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg overflow-hidden shadow-lg border border-primary/10 animate-fade-up transform-gpu transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group will-change-transform hover:-translate-y-2 hover:rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-primary/10 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100">
                <h3 className="font-semibold text-lg mb-2 text-foreground-dark relative z-10 transition-transform duration-300 group-hover:translate-x-1">{video.title}</h3>
                <p className="text-neutral relative z-10 transition-transform duration-300 group-hover:translate-x-1">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
