
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type SiteSettings = {
  [key: string]: any;
};

export async function fetchSiteSettings(id: string = 'general'): Promise<SiteSettings | null> {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw error;
    
    // Make sure the value is an object before returning it
    // If it's not an object, wrap it in an object with a default key
    const value = data?.value;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value as SiteSettings;
    } else if (value !== null && value !== undefined) {
      return { value } as SiteSettings;
    }
    
    return null;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch site settings");
  }
}

export async function updateSiteSettings(id: string = 'general', value: any): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('site_settings')
      .upsert({ id, value, updated_at: new Date().toISOString() });
    
    if (error) throw error;
    
    return true;
  } catch (error) {
    handleSupabaseError(error as Error, "Failed to update site settings");
    return false;
  }
}
