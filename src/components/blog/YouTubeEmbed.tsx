
interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  return (
    <div className="my-8 youtube-embed">
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
      />
    </div>
  );
};
