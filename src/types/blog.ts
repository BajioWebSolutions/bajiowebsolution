
export interface BlogPost {
  title: string;
  date: string;
  category: string;
  content: string;
  author: string;
  tags: string[];
  excerpt?: string;
  metaDescription?: string;
  image?: string;
  slug?: string;
}

export interface BlogHeaderProps {
  title: string;
  date: string;
  category: string;
  author: string;
  tags: string[];
}

export interface BlogContentProps {
  content: string;
}

export interface BlogDetailViewProps {
  slug?: string;
}

export interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}
