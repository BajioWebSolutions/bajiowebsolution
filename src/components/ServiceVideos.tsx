
const serviceVideos = [
  {
    title: "Web Design Solutions",
    description: "Stunning web design solutions that enhance user experience",
    embedUrl: "https://www.youtube.com/embed/ycgxVirLuFY",
    bgColor: "bg-[#8B5CF6]/10" // Vivid Purple
  },
  {
    title: "SEO Services Guide",
    description: "Learn about effective SEO strategies for your business",
    embedUrl: "https://www.youtube.com/embed/JAqMroYPvkI",
    bgColor: "bg-[#D946EF]/10" // Magenta Pink
  },
  {
    title: "Digital Marketing Solutions",
    description: "Discover our comprehensive digital marketing solutions",
    embedUrl: "https://www.youtube.com/embed/iQ6rqgLoLdA",
    bgColor: "bg-[#F97316]/10" // Bright Orange
  },
  {
    title: "Web Development Expertise",
    description: "Understanding modern web development practices",
    embedUrl: "https://www.youtube.com/embed/h3RglfBb1As",
    bgColor: "bg-[#0EA5E9]/10" // Ocean Blue
  },
  {
    title: "Social Media Marketing",
    description: "Expert tips for successful social media marketing",
    embedUrl: "https://www.youtube.com/embed/RWU8nKUCfEw",
    bgColor: "bg-[#1EAEDB]/10" // Bright Blue
  },
  {
    title: "PPC Advertising Strategies",
    description: "Learn about effective PPC advertising campaigns",
    embedUrl: "https://www.youtube.com/embed/FmrOLNyPPOk",
    bgColor: "bg-[#0FA0CE]/10" // Bright Blue variant
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
              className={`${video.bgColor} backdrop-blur-sm rounded-lg overflow-hidden animate-fade-up border border-white/10 hover:border-primary/20 transition-all duration-300`}
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
