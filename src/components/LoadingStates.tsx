import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Page Loading Spinner
export const PageLoader: React.FC<{ message?: string }> = ({ message = "Loading..." }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center justify-center min-h-[60vh] space-y-4"
  >
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <motion.div
        className="absolute inset-0 w-16 h-16 border-2 border-transparent border-t-primary/60 rounded-full animate-ping"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.3, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
    <motion.p 
      className="text-muted-foreground font-medium"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      {message}
    </motion.p>
  </motion.div>
);

// Blog Post Skeleton
export const BlogPostSkeleton: React.FC = () => (
  <Card className="h-full">
    <div className="aspect-video">
      <Skeleton className="w-full h-full rounded-t-lg" />
    </div>
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2 mt-2" />
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="flex items-center justify-between mt-4">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-8 w-20" />
      </div>
    </CardContent>
  </Card>
);

// Service Card Skeleton
export const ServiceCardSkeleton: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <Skeleton className="h-10 w-full mt-4" />
    </CardContent>
  </Card>
);

// Testimonial Skeleton
export const TestimonialSkeleton: React.FC = () => (
  <Card className="h-full">
    <CardContent className="pt-6">
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-4 h-4 rounded-full mr-1" />
        ))}
      </div>
    </CardContent>
  </Card>
);

// Navigation Skeleton
export const NavigationSkeleton: React.FC = () => (
  <nav className="bg-background/80 backdrop-blur-md border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Skeleton className="h-8 w-32" />
        <div className="hidden md:flex items-center space-x-8">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-16" />
          ))}
        </div>
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  </nav>
);

// Contact Form Skeleton
export const ContactFormSkeleton: React.FC = () => (
  <Card className="w-full max-w-2xl mx-auto">
    <CardHeader>
      <Skeleton className="h-8 w-48 mx-auto" />
      <Skeleton className="h-4 w-64 mx-auto mt-2" />
    </CardHeader>
    <CardContent className="space-y-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </CardContent>
  </Card>
);

// Generic Grid Skeleton
export const GridSkeleton: React.FC<{ 
  items?: number; 
  columns?: number;
  aspect?: 'square' | 'video' | 'auto';
}> = ({ 
  items = 6, 
  columns = 3,
  aspect = 'auto' 
}) => {
  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-video', 
    auto: 'h-48'
  }[aspect];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {[...Array(items)].map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className={`w-full ${aspectClass}`} />
          <CardContent className="p-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Button Loading State
export const ButtonLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClass = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }[size];

  return (
    <div className={`${sizeClass} border-2 border-current border-t-transparent rounded-full animate-spin`} />
  );
};