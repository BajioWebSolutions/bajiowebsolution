
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  featured_image?: string;
  client?: string;
  completed_date?: string;
  is_featured?: boolean;
  created_at: string;
  updated_at: string;
  tags?: ProjectTag[];
  gallery?: ProjectGalleryItem[];
};

export type ProjectTag = {
  id: string;
  name: string;
  slug: string;
};

export type ProjectGalleryItem = {
  id: string;
  project_id: string;
  image_url: string;
  caption?: string;
  order_index?: number;
};

export async function fetchProjects(options: {
  featured?: boolean;
  tagSlug?: string;
  limit?: number;
} = {}): Promise<Project[]> {
  const { featured, tagSlug, limit } = options;
  
  try {
    let query = supabase
      .from('projects')
      .select('*');
    
    if (featured !== undefined) {
      query = query.eq('is_featured', featured);
    }
    
    if (limit) {
      query = query.limit(limit);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    const projectIds = data.map(project => project.id);
    
    // Fetch tags for projects
    let tagsMap: Record<string, ProjectTag[]> = {};
    if (projectIds.length > 0) {
      const { data: tagsData, error: tagsError } = await supabase
        .from('project_to_tags')
        .select(`
          project_id,
          project_tags(id, name, slug)
        `)
        .in('project_id', projectIds);
      
      if (!tagsError && tagsData) {
        tagsMap = tagsData.reduce((acc, item) => {
          if (!acc[item.project_id]) {
            acc[item.project_id] = [];
          }
          if (item.project_tags) {
            acc[item.project_id].push({
              id: item.project_tags.id,
              name: item.project_tags.name,
              slug: item.project_tags.slug
            });
          }
          return acc;
        }, {} as Record<string, ProjectTag[]>);
      }
    }
    
    // Fetch gallery items for projects
    let galleryMap: Record<string, ProjectGalleryItem[]> = {};
    if (projectIds.length > 0) {
      const { data: galleryData, error: galleryError } = await supabase
        .from('project_gallery')
        .select('*')
        .in('project_id', projectIds)
        .order('order_index');
      
      if (!galleryError && galleryData) {
        galleryMap = galleryData.reduce((acc, item) => {
          if (!acc[item.project_id]) {
            acc[item.project_id] = [];
          }
          acc[item.project_id].push(item);
          return acc;
        }, {} as Record<string, ProjectGalleryItem[]>);
      }
    }
    
    // If filtering by tag, we need to check if projects have the tag
    let projectsWithTags = data;
    if (tagSlug) {
      const { data: taggedProjectIds, error: taggedProjectsError } = await supabase
        .from('project_to_tags')
        .select('project_id')
        .eq('project_tags.slug', tagSlug);
      
      if (!taggedProjectsError && taggedProjectIds) {
        const validIds = new Set(taggedProjectIds.map(item => item.project_id));
        projectsWithTags = data.filter(project => validIds.has(project.id));
      }
    }
    
    return projectsWithTags.map(project => ({
      id: project.id,
      title: project.title,
      slug: project.slug,
      description: project.description,
      featured_image: project.featured_image,
      client: project.client,
      completed_date: project.completed_date,
      is_featured: project.is_featured,
      created_at: project.created_at,
      updated_at: project.updated_at,
      tags: tagsMap[project.id] || [],
      gallery: galleryMap[project.id] || []
    }));
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch projects") || [];
  }
}

export async function fetchProjectTags(): Promise<ProjectTag[]> {
  try {
    const { data, error } = await supabase
      .from('project_tags')
      .select('*')
      .order('name');
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch project tags") || [];
  }
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();
    
    if (error) throw error;
    if (!data) return null;
    
    // Fetch tags for this project
    const { data: tagsData, error: tagsError } = await supabase
      .from('project_to_tags')
      .select(`
        project_tags(id, name, slug)
      `)
      .eq('project_id', data.id);
    
    let tags: ProjectTag[] = [];
    if (!tagsError && tagsData) {
      tags = tagsData
        .filter(item => item.project_tags)
        .map(item => ({
          id: item.project_tags.id,
          name: item.project_tags.name,
          slug: item.project_tags.slug
        }));
    }
    
    // Fetch gallery items for this project
    const { data: galleryData, error: galleryError } = await supabase
      .from('project_gallery')
      .select('*')
      .eq('project_id', data.id)
      .order('order_index');
    
    let gallery: ProjectGalleryItem[] = [];
    if (!galleryError && galleryData) {
      gallery = galleryData;
    }
    
    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      description: data.description,
      featured_image: data.featured_image,
      client: data.client,
      completed_date: data.completed_date,
      is_featured: data.is_featured,
      created_at: data.created_at,
      updated_at: data.updated_at,
      tags,
      gallery
    };
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch project");
  }
}
