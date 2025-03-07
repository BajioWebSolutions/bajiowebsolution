
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  is_published?: boolean;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  author?: {
    id: string;
    full_name?: string;
    avatar_url?: string;
  };
};

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  post_count?: number;
};

export async function fetchBlogPosts(options: { 
  limit?: number; 
  category?: string;
  published?: boolean;
} = {}): Promise<BlogPost[]> {
  const { limit = 10, category, published = true } = options;
  
  try {
    let query = supabase
      .from('blog_posts')
      .select(`
        id, 
        title, 
        slug, 
        excerpt, 
        content, 
        featured_image,
        created_at,
        updated_at,
        published_at,
        is_published,
        category_id,
        blog_categories(id, name, slug),
        author_id
      `)
      .order('published_at', { ascending: false })
      .limit(limit);
    
    if (published) {
      query = query.eq('is_published', true);
    }
    
    if (category) {
      query = query.eq('blog_categories.slug', category);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // Get author information separately
    const authorIds = data
      .filter(post => post.author_id)
      .map(post => post.author_id);
    
    let authorData: Record<string, { id: string; full_name?: string; avatar_url?: string }> = {};
    
    if (authorIds.length > 0) {
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, full_name, avatar_url')
        .in('id', authorIds);
      
      if (!profilesError && profiles) {
        authorData = profiles.reduce((acc, profile) => {
          acc[profile.id] = profile;
          return acc;
        }, {} as Record<string, { id: string; full_name?: string; avatar_url?: string }>);
      }
    }
    
    return data.map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image,
      created_at: post.created_at,
      updated_at: post.updated_at,
      published_at: post.published_at,
      is_published: post.is_published,
      category: post.blog_categories ? {
        id: post.blog_categories.id,
        name: post.blog_categories.name,
        slug: post.blog_categories.slug
      } : undefined,
      author: post.author_id && authorData[post.author_id] ? {
        id: authorData[post.author_id].id,
        full_name: authorData[post.author_id].full_name,
        avatar_url: authorData[post.author_id].avatar_url
      } : undefined
    }));
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch blog posts") || [];
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        id, 
        title, 
        slug, 
        excerpt, 
        content, 
        featured_image,
        created_at,
        updated_at,
        published_at,
        is_published,
        category_id,
        blog_categories(id, name, slug),
        author_id
      `)
      .eq('slug', slug)
      .maybeSingle();
    
    if (error) throw error;
    if (!data) return null;
    
    // Fetch author information if available
    let author = undefined;
    
    if (data.author_id) {
      const { data: authorData, error: authorError } = await supabase
        .from('profiles')
        .select('id, full_name, avatar_url')
        .eq('id', data.author_id)
        .maybeSingle();
      
      if (!authorError && authorData) {
        author = {
          id: authorData.id,
          full_name: authorData.full_name,
          avatar_url: authorData.avatar_url
        };
      }
    }
    
    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      featured_image: data.featured_image,
      created_at: data.created_at,
      updated_at: data.updated_at,
      published_at: data.published_at,
      is_published: data.is_published,
      category: data.blog_categories ? {
        id: data.blog_categories.id,
        name: data.blog_categories.name,
        slug: data.blog_categories.slug
      } : undefined,
      author
    };
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch blog post");
  }
}

export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('id, name, slug, description')
      .order('name');
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch blog categories") || [];
  }
}
