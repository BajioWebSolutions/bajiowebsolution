import React from 'react';
import { motion } from 'framer-motion';

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