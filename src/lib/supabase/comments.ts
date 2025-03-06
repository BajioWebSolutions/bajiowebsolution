
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export type BlogComment = {
  id: string;
  post_id: string;
  user_id?: string;
  parent_id?: string;
  author_name?: string;
  author_email?: string;
  content: string;
  is_approved?: boolean;
  created_at: string;
  author?: {
    id: string;
    full_name?: string;
    avatar_url?: string;
  };
  replies?: BlogComment[];
};

export async function fetchComments(options: {
  postId: string;
  approved?: boolean;
}): Promise<BlogComment[]> {
  const { postId, approved = true } = options;
  
  try {
    let query = supabase
      .from('blog_comments')
      .select('*')
      .eq('post_id', postId)
      .is('parent_id', null) // Get only top-level comments
      .order('created_at', { ascending: false });
    
    if (approved !== undefined) {
      query = query.eq('is_approved', approved);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // Get all the user IDs to fetch profiles
    const userIds = data
      .filter(comment => comment.user_id)
      .map(comment => comment.user_id as string);
    
    // Fetch user profiles
    let profiles: Record<string, { id: string; full_name?: string; avatar_url?: string }> = {};
    
    if (userIds.length > 0) {
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('id, full_name, avatar_url')
        .in('id', userIds);
      
      if (!profilesError && profilesData) {
        profiles = profilesData.reduce((acc, profile) => {
          acc[profile.id] = profile;
          return acc;
        }, {} as Record<string, { id: string; full_name?: string; avatar_url?: string }>);
      }
    }
    
    // Get all comment IDs to fetch replies
    const commentIds = data.map(comment => comment.id);
    
    // Fetch replies
    let replies: Record<string, BlogComment[]> = {};
    
    if (commentIds.length > 0) {
      const { data: repliesData, error: repliesError } = await supabase
        .from('blog_comments')
        .select('*')
        .in('parent_id', commentIds)
        .eq('is_approved', approved)
        .order('created_at');
      
      if (!repliesError && repliesData) {
        // Get user IDs from replies for profiles
        const replyUserIds = repliesData
          .filter(reply => reply.user_id)
          .map(reply => reply.user_id as string)
          .filter(id => !userIds.includes(id));
        
        // Fetch additional profiles if needed
        if (replyUserIds.length > 0) {
          const { data: replyProfiles, error: replyProfilesError } = await supabase
            .from('profiles')
            .select('id, full_name, avatar_url')
            .in('id', replyUserIds);
          
          if (!replyProfilesError && replyProfiles) {
            replyProfiles.forEach(profile => {
              profiles[profile.id] = profile;
            });
          }
        }
        
        // Group replies by parent ID
        replies = repliesData.reduce((acc, reply) => {
          if (!reply.parent_id) return acc;
          
          if (!acc[reply.parent_id]) {
            acc[reply.parent_id] = [];
          }
          
          acc[reply.parent_id].push({
            ...reply,
            author: reply.user_id && profiles[reply.user_id] ? {
              id: profiles[reply.user_id].id,
              full_name: profiles[reply.user_id].full_name,
              avatar_url: profiles[reply.user_id].avatar_url
            } : undefined
          });
          
          return acc;
        }, {} as Record<string, BlogComment[]>);
      }
    }
    
    // Build final comment list with authors and replies
    return data.map(comment => ({
      ...comment,
      author: comment.user_id && profiles[comment.user_id] ? {
        id: profiles[comment.user_id].id,
        full_name: profiles[comment.user_id].full_name,
        avatar_url: profiles[comment.user_id].avatar_url
      } : undefined,
      replies: replies[comment.id] || []
    }));
  } catch (error) {
    return handleSupabaseError(error as Error, "Failed to fetch comments") || [];
  }
}

export async function createComment(comment: {
  post_id: string;
  content: string;
  parent_id?: string;
  user_id?: string;
  author_name?: string;
  author_email?: string;
}): Promise<BlogComment | null> {
  try {
    const { data, error } = await supabase
      .from('blog_comments')
      .insert({
        post_id: comment.post_id,
        content: comment.content,
        parent_id: comment.parent_id,
        user_id: comment.user_id,
        author_name: comment.author_name,
        author_email: comment.author_email,
        is_approved: false // Default to false, require moderation
      })
      .select()
      .single();
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    handleSupabaseError(error as Error, "Failed to create comment");
    return null;
  }
}
