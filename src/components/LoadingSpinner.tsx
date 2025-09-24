import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'minimal' | 'pulse' | 'dots';
  text?: string;
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

const textSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  variant = 'default', 
  text,
  className 
}) => {
  const renderSpinner = () => {
    switch (variant) {
      case 'minimal':
        return (
          <Loader2 
            className={cn(
              sizeClasses[size], 
              'animate-spin text-primary',
              className
            )} 
          />
        );

      case 'pulse':
        return (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={cn(
              'rounded-full bg-primary',
              sizeClasses[size],
              className
            )}
          />
        );

      case 'dots':
        return (
          <div className={cn('flex space-x-1', className)}>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={cn(
              'rounded-full border-2 border-primary/20 border-t-primary',
              sizeClasses[size],
              className
            )}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderSpinner()}
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            'text-neutral font-medium',
            textSizeClasses[size]
          )}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Page loading component with glass morphism
export const PageLoader: React.FC<{ message?: string }> = ({ 
  message = 'Loading...' 
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex items-center justify-center min-h-[60vh] glass-card mx-4 mt-8 rounded-2xl"
  >
    <div className="text-center space-y-4">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex justify-center"
      >
        <div className="p-4 bg-primary/10 rounded-full">
          <Zap className="h-8 w-8 text-primary" />
        </div>
      </motion.div>
      
      <div className="space-y-2">
        <LoadingSpinner size="lg" variant="dots" />
        <p className="text-primary text-lg font-medium">{message}</p>
        <p className="text-neutral text-sm">Please wait while we load the content</p>
      </div>
    </div>
  </motion.div>
);

// Skeleton loader for content
export const SkeletonLoader: React.FC<{
  lines?: number;
  className?: string;
}> = ({ lines = 3, className }) => (
  <div className={cn('space-y-3', className)}>
    {Array.from({ length: lines }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: index * 0.1,
        }}
        className={cn(
          'h-4 bg-neutral/20 rounded',
          index === lines - 1 && 'w-2/3' // Last line shorter
        )}
      />
    ))}
  </div>
);