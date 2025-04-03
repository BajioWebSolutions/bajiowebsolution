
import { useEffect } from 'react';

export const ScrollObserver = () => {
  useEffect(() => {
    // Select elements that will use dynamic hover effects
    const cards = document.querySelectorAll('.card');
    const ctaButtons = document.querySelectorAll('.cta-button');
    const serviceCards = document.querySelectorAll('.glass-card');
    
    // Intersection Observer for triggering effects when elements come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When element enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('can-hover');
          
          // Add specific effects based on element type
          if (entry.target.classList.contains('card')) {
            entry.target.addEventListener('mousemove', tiltEffect);
            entry.target.addEventListener('mouseleave', resetTilt);
          }
          
          // Stop observing after animation is applied
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    // 3D tilt effect for cards
    const tiltEffect = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPerc = x / rect.width;
      const yPerc = y / rect.height;
      
      // Calculate rotation based on mouse position
      const tiltX = (yPerc - 0.5) * 10; // -5 to 5 degrees
      const tiltY = (0.5 - xPerc) * 10; // -5 to 5 degrees
      
      target.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    // Reset card position when mouse leaves
    const resetTilt = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = '';
    };
    
    // Observe all elements
    cards.forEach(card => observer.observe(card));
    ctaButtons.forEach(button => observer.observe(button));
    serviceCards.forEach(card => observer.observe(card));
    
    // Check for user preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--hover-intensity', '0.5');
    } else {
      document.documentElement.style.setProperty('--hover-intensity', '1');
    }
    
    // Clean up event listeners
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', tiltEffect);
        card.removeEventListener('mouseleave', resetTilt);
      });
    };
  }, []);
  
  return null; // This component doesn't render anything
};
