
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order_index?: number;
};

export type FAQCategory = {
  name: string;
  items: FAQItem[];
};

export async function fetchFAQs(): Promise<FAQItem[]> {
  try {
    const { data, error } = await supabase
      .from('faq_items')
      .select('*')
      .order('order_index');
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch FAQs") || [];
  }
}

export async function fetchFAQsByCategory(): Promise<FAQCategory[]> {
  try {
    const { data, error } = await supabase
      .from('faq_items')
      .select('*')
      .order('order_index');
    
    if (error) throw error;
    
    const categories: Record<string, FAQItem[]> = {};
    
    data.forEach(item => {
      const category = item.category || 'General';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(item);
    });
    
    return Object.entries(categories).map(([name, items]) => ({
      name,
      items
    }));
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch FAQs by category") || [];
  }
}
