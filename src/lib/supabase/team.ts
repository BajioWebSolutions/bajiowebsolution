
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type TeamMember = {
  id: string;
  name: string;
  position: string;
  bio?: string;
  avatar_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  github_url?: string;
  is_active?: boolean;
  order_index?: number;
};

export async function fetchTeamMembers(options: {
  activeOnly?: boolean;
} = {}): Promise<TeamMember[]> {
  const { activeOnly = true } = options;
  
  try {
    let query = supabase
      .from('team_members')
      .select('*')
      .order('order_index');
    
    if (activeOnly) {
      query = query.eq('is_active', true);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch team members") || [];
  }
}

export async function fetchTeamMember(id: string): Promise<TeamMember | null> {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch team member");
  }
}
