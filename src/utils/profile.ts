
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * Updates a user's profile information in Supabase
 */
export const updateUserProfile = async (userId: string, updates: {
  full_name?: string;
  website?: string;
  company?: string;
  avatar_url?: string;
}) => {
  try {
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: userId,
        ...updates,
        updated_at: new Date().toISOString(),
      });

    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error("Error updating profile:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Uploads a profile avatar to Supabase storage
 */
export const uploadAvatar = async (userId: string, file: File) => {
  try {
    // Create a unique file path
    const fileExt = file.name.split('.').pop();
    const filePath = `${userId}/avatar-${Date.now()}.${fileExt}`;

    // Upload the file to Supabase storage
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // Get the public URL for the uploaded file
    const { data } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    if (!data.publicUrl) throw new Error("Failed to get public URL for uploaded file");

    // Update the user's profile with the new avatar URL
    const { success, error } = await updateUserProfile(userId, {
      avatar_url: data.publicUrl,
    });

    if (!success) throw error;

    return { success: true, url: data.publicUrl };
  } catch (error: any) {
    console.error("Error uploading avatar:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Fetches a user's profile data from Supabase
 */
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return { success: true, profile: data };
  } catch (error: any) {
    console.error("Error fetching profile:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Sends a welcome email to a new user via Edge Function
 */
export const sendWelcomeEmail = async (email: string, fullName: string) => {
  try {
    const { error } = await supabase.functions.invoke('send-welcome-email', {
      body: { email, fullName },
    });
    
    if (error) throw error;
    
    toast.success("Welcome email sent successfully!");
    return { success: true };
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
    toast.error(error.message || "Failed to send welcome email");
    return { success: false, error: error.message };
  }
};
