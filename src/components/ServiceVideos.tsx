
const serviceVideos = [
  {
    title: "Web Design Process Explained",
    description: "A detailed walkthrough of our professional web design process",
    embedUrl: "https://www.youtube.com/embed/FmrOLNyPPOk"
  },
  {
    title: "SEO Strategy Guide",
    description: "Learn about effective SEO strategies for your business",
    embedUrl: "https://www.youtube.com/embed/h3RglfBb1As"
  },
  {
    title: "Marketing Solutions Overview",
    description: "Discover our comprehensive marketing solutions",
    embedUrl: "https://www.youtube.com/embed/iQ6rqgLoLdA"
  },
  {
    title: "Social Media Marketing Tips",
    description: "Expert tips for successful social media marketing",
    embedUrl: "https://www.youtube.com/embed/RWU8nKUCfEw"
  },
  {
    title: "Digital Marketing Essentials",
    description: "Essential strategies for digital marketing success",
    embedUrl: "https://www.youtube.com/embed/JAqMroYPvkI"
  },
  {
    title: "Web Development Insights",
    description: "Understanding modern web development practices",
    embedUrl: "https://www.youtube.com/embed/ycgxVirLuFY"
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
