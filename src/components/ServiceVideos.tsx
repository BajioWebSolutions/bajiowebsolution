
const serviceVideos = [
  {
    title: "Web Design Process",
    description: "Watch how we transform ideas into beautiful, functional websites",
    embedUrl: "https://www.youtube.com/embed/h3RglfBb1As" // First video link
  },
  {
    title: "Digital Marketing Strategy",
    description: "Learn about our comprehensive digital marketing approach",
    embedUrl: "https://www.youtube.com/embed/JAqMroYPvkI" // Second video link
  },
  {
    title: "SEO Optimization",
    description: "Discover how we improve your search engine rankings",
    embedUrl: "https://www.youtube.com/embed/FmrOLNyPPOk" // Third video link
  }
];

export const ServiceVideos = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services in <span className="text-primary">Action</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceVideos.map((video, index) => (
            <div
              key={index}
              className="bg-neutral-dark/20 rounded-lg overflow-hidden animate-fade-up"
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
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{video.title}</h3>
                <p className="text-neutral">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
