
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type Service = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price?: number;
  icon?: string;
  is_featured?: boolean;
  category?: ServiceCategory;
  created_at: string;
  updated_at: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  services?: Service[];
};

export async function fetchServices(options: {
  featured?: boolean;
  categorySlug?: string;
  limit?: number;
} = {}): Promise<Service[]> {
  const { featured, categorySlug, limit } = options;
  
  try {
    let query = supabase
      .from('services')
      .select(`
        *,
        service_categories:category_id(id, name, slug, description, icon)
      `);
    
    if (featured !== undefined) {
      query = query.eq('is_featured', featured);
    }
    
    if (categorySlug) {
      query = query.eq('service_categories.slug', categorySlug);
    }
    
    if (limit) {
      query = query.limit(limit);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    return data.map(service => ({
      id: service.id,
      name: service.name,
      slug: service.slug,
      description: service.description,
      price: service.price,
      icon: service.icon,
      is_featured: service.is_featured,
      category: service.service_categories ? {
        id: service.service_categories.id,
        name: service.service_categories.name,
        slug: service.service_categories.slug,
        description: service.service_categories.description,
        icon: service.service_categories.icon
      } : undefined,
      created_at: service.created_at,
      updated_at: service.updated_at
    }));
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch services") || [];
  }
}

export async function fetchServiceCategories(): Promise<ServiceCategory[]> {
  try {
    const { data, error } = await supabase
      .from('service_categories')
      .select('*')
      .order('order_index');
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch service categories") || [];
  }
}

export async function fetchServiceCategoriesWithServices(): Promise<ServiceCategory[]> {
  try {
    const categoriesResult = await fetchServiceCategories();
    const servicesResult = await fetchServices();
    
    return categoriesResult.map(category => {
      const categoryServices = servicesResult.filter(
        service => service.category?.id === category.id
      );
      
      return {
        ...category,
        services: categoryServices
      };
    });
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch service categories with services") || [];
  }
}

export async function fetchServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        service_categories:category_id(id, name, slug, description, icon)
      `)
      .eq('slug', slug)
      .maybeSingle();
    
    if (error) throw error;
    if (!data) return null;
    
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description,
      price: data.price,
      icon: data.icon,
      is_featured: data.is_featured,
      category: data.service_categories ? {
        id: data.service_categories.id,
        name: data.service_categories.name,
        slug: data.service_categories.slug,
        description: data.service_categories.description,
        icon: data.service_categories.icon
      } : undefined,
      created_at: data.created_at,
      updated_at: data.updated_at
    };
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch service");
  }
}
