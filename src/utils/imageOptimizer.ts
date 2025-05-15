
/**
 * Image Optimization Utility
 * 
 * This utility helps with image optimization best practices for SEO.
 */

// Determine appropriate image size based on viewport
export const getResponsiveImageSize = (
  defaultSize: string,
  sizes: { sm: string; md: string; lg: string; xl: string }
): string => {
  if (typeof window === 'undefined') return defaultSize;
  
  const width = window.innerWidth;
  
  if (width < 640) return sizes.sm;
  if (width < 768) return sizes.md;
  if (width < 1024) return sizes.lg;
  return sizes.xl;
};

// Add loading attribute to images
export const lazyLoadImage = (img: HTMLImageElement): void => {
  if (!img) return;
  
  // Add loading="lazy" for images below the fold
  if (!isElementInViewport(img)) {
    img.setAttribute('loading', 'lazy');
  }
  
  // Add decoding="async" for better performance
  img.setAttribute('decoding', 'async');
};

// Check if element is in viewport
const isElementInViewport = (el: HTMLElement): boolean => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Generate image srcset for responsive images
export const generateSrcSet = (basePath: string, widths: number[]): string => {
  return widths
    .map(width => `${basePath}?w=${width} ${width}w`)
    .join(', ');
};
