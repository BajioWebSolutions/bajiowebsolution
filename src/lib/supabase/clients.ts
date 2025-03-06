
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type Client = {
  id: string;
  name: string;
  logo_url?: string;
  website_url?: string;
  is_featured?: boolean;
  order_index?: number;
};

export async function fetchClients(options: {
  featured?: boolean;
  limit?: number;
} = {}): Promise<Client[]> {
  const { featured, limit } = options;
  
  try {
    let query = supabase
      .from('clients')
      .select('*')
      .order('order_index');
    
    if (featured !== undefined) {
      query = query.eq('is_featured', featured);
    }
    
    if (limit) {
      query = query.limit(limit);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch clients") || [];
  }
}

export async function fetchClient(id: string): Promise<Client | null> {
  try {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch client");
  }
}
