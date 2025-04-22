
import { YouTubeEmbedProps } from "@/types/blog";

export const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  return (
    <div className="my-8 youtube-embed">
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
        className="w-full aspect-video rounded-lg shadow-lg border border-primary/20"
      />
    </div>
  );
};
