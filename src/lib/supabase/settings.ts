
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type SiteSetting = {
  id: string;
  value: any;
  updated_at: string;
};

export async function getSiteSetting(key: string): Promise<any> {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('id', key)
      .maybeSingle();
    
    if (error) throw error;
    return data?.value ?? null;
  } catch (error) {
    return handleSupabaseError(error as Error, `Failed to load setting: ${key}`);
  }
}

export async function getSiteSettings(keys: string[]): Promise<Record<string, any>> {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .in('id', keys);
    
    if (error) throw error;
    
    const settingsObj: Record<string, any> = {};
    data.forEach(setting => {
      settingsObj[setting.id] = setting.value;
    });
    
    return settingsObj;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to load settings") || {};
  }
}

export async function setSiteSetting(key: string, value: any): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('site_settings')
      .upsert({ id: key, value }, { onConflict: 'id' });
    
    if (error) throw error;
    return true;
  } catch (error) {
    handleSupabaseError(error as Error, `Failed to save setting: ${key}`);
    return false;
  }
}
