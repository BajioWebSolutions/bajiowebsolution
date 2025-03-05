
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { updateUserProfile, uploadAvatar, sendWelcomeEmail } from "@/utils/profile";
import { Camera, Loader2 } from "lucide-react";

interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  website: string | null;
  company: string | null;
}

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<any>(null);
  const [fullName, setFullName] = useState('');
  const [website, setWebsite] = useState('');
  const [company, setCompany] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (!session) {
        navigate('/auth');
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (error) throw error;
        
        if (data) {
          setProfile(data);
          setFullName(data.full_name || '');
          setWebsite(data.website || '');
          setCompany(data.company || '');
        }
      } catch (error: any) {
        toast.error(error.message || "Error loading profile");
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (!session) navigate('/auth');
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session) return;

    try {
      setLoading(true);
      
      const { success, error } = await updateUserProfile(session.user.id, {
        full_name: fullName,
        website,
        company
      });

      if (!success) throw new Error(error);
      
      // Update the local profile state
      setProfile(prev => {
        if (!prev) return null;
        return {
          ...prev,
          full_name: fullName,
          website,
          company
        };
      });
      
      toast.success("Profile updated successfully!");
    } catch (error: any) {
      toast.error(error.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !session) {
      return;
    }

    try {
      setUploading(true);
      const file = e.target.files[0];
      const { success, url, error } = await uploadAvatar(session.user.id, file);
      
      if (!success) throw new Error(error);
      
      // Update the local profile state
      setProfile(prev => {
        if (!prev) return null;
        return {
          ...prev,
          avatar_url: url
        };
      });
      
      toast.success("Profile picture updated!");
    } catch (error: any) {
      toast.error(error.message || "Error uploading avatar");
    } finally {
      setUploading(false);
      // Clear the file input so the same file can be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/auth');
    } catch (error: any) {
      toast.error(error.message || "Error signing out");
    }
  };

  const handleSendWelcomeEmail = async () => {
    if (!session || !profile?.full_name) return;
    
    await sendWelcomeEmail(session.user.email, profile.full_name);
  };

  if (!session) return null;

  return (
    <motion.div 
      className="flex items-center justify-center min-h-[80vh] py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md bg-neutral-dark/30 backdrop-blur-sm border border-primary/10 shadow-lg">
        <CardHeader className="text-center">
          <div className="relative mx-auto mb-4">
            <Avatar 
              className="h-24 w-24 cursor-pointer group relative" 
              onClick={handleAvatarClick}
            >
              {uploading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <>
                  <AvatarImage src={profile?.avatar_url || ''} alt={profile?.full_name || 'User'} />
                  <AvatarFallback className="bg-primary/20 text-primary text-2xl relative">
                    {profile?.full_name?.charAt(0) || 'U'}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-full transition-opacity">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </AvatarFallback>
                </>
              )}
            </Avatar>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleAvatarChange}
              accept="image/*"
              className="hidden" 
            />
          </div>
          <CardTitle className="text-2xl text-foreground-dark">Your Profile</CardTitle>
          <CardDescription className="text-neutral-light">
            {session?.user?.email}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={updateProfile} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground-dark">Full Name</label>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-neutral-dark/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground-dark">Website</label>
              <Input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="bg-neutral-dark/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground-dark">Company</label>
              <Input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-neutral-dark/20"
              />
            </div>
            <div className="space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary" 
                disabled={loading}
              >
                {loading ? "Saving..." : "Update Profile"}
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleSendWelcomeEmail}
                >
                  Send Welcome Email
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Profile;
