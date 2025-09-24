import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email is too short')
    .max(100, 'Email is too long'),
  
  phone: z
    .string()
    .regex(/^[\+]?[(]?[\d\s\-\(\)]{10,}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  
  company: z
    .string()
    .max(100, 'Company name is too long')
    .optional(),
  
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(100, 'Subject must be less than 100 characters'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  
  budget: z
    .string()
    .optional(),
  
  timeline: z
    .string()
    .optional(),
    
  consent: z
    .boolean()
    .refine(val => val === true, 'You must agree to our privacy policy'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email is too short')
    .max(100, 'Email is too long'),
  
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name is too long')
    .optional(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Comment form schema (for blog)
export const commentSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name is too long'),
  
  email: z
    .string()
    .email('Please enter a valid email address'),
  
  website: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  
  comment: z
    .string()
    .min(5, 'Comment must be at least 5 characters')
    .max(500, 'Comment is too long'),
});

export type CommentData = z.infer<typeof commentSchema>;

// Search schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, 'Search query is required')
    .max(100, 'Search query is too long')
    .trim(),
  
  category: z
    .enum(['all', 'services', 'blog', 'pages'])
    .default('all'),
});

export type SearchData = z.infer<typeof searchSchema>;

// Utility functions for validation
export const validateEmail = (email: string): boolean => {
  return z.string().email().safeParse(email).success;
};

export const validatePhone = (phone: string): boolean => {
  return z.string().regex(/^[\+]?[(]?[\d\s\-\(\)]{10,}$/).safeParse(phone).success;
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, ''); // Remove event handlers
};

export const formatValidationErrors = (errors: z.ZodError) => {
  return errors.errors.reduce((acc, error) => {
    const path = error.path.join('.');
    acc[path] = error.message;
    return acc;
  }, {} as Record<string, string>);
};