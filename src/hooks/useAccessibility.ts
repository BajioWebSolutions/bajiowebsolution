import { useEffect, useState, useRef } from 'react';

// Hook for managing focus trap
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement?.focus();
          e.preventDefault();
        }
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Dispatch custom event for parent components to handle
        container.dispatchEvent(new CustomEvent('closeFocusTrap'));
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscapeKey);
    
    // Focus first element when trap becomes active
    firstFocusableElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isActive]);

  return containerRef;
}

// Hook for keyboard navigation
export function useKeyboardNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef<HTMLElement[]>([]);

  const registerItem = (element: HTMLElement | null, index: number) => {
    if (element) {
      itemsRef.current[index] = element;
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const items = itemsRef.current.filter(Boolean);
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'Home':
        e.preventDefault();
        setCurrentIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setCurrentIndex(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        items[currentIndex]?.click();
        break;
    }
  };

  useEffect(() => {
    const currentItem = itemsRef.current[currentIndex];
    currentItem?.focus();
  }, [currentIndex]);

  return {
    currentIndex,
    setCurrentIndex,
    registerItem,
    handleKeyDown,
  };
}

// Hook for screen reader announcements
export function useAnnouncer() {
  const [announcement, setAnnouncement] = useState('');

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    setAnnouncement(''); // Clear previous announcement
    setTimeout(() => setAnnouncement(message), 100);
  };

  return {
    announcement,
    announce,
  };
}

// Hook for reduced motion preferences
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// Hook for high contrast mode
export function useHighContrast() {
  const [prefersHighContrast, setPrefersHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setPrefersHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersHighContrast;
}

// Hook for managing ARIA live regions
export function useAriaLive() {
  const [liveElement, setLiveElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.createElement('div');
    element.className = 'sr-only';
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
    document.body.appendChild(element);
    setLiveElement(element);

    return () => {
      if (document.body.contains(element)) {
        document.body.removeChild(element);
      }
    };
  }, []);

  const announce = (
    message: string, 
    level: 'off' | 'polite' | 'assertive' = 'polite'
  ) => {
    if (liveElement) {
      liveElement.setAttribute('aria-live', level);
      liveElement.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        if (liveElement) {
          liveElement.textContent = '';
        }
      }, 1000);
    }
  };

  return { announce };
}

// Hook for skip links functionality
export function useSkipLinks() {
  const skipLinksRef = useRef<HTMLElement[]>([]);

  const registerSkipLink = (element: HTMLElement | null) => {
    if (element) {
      skipLinksRef.current.push(element);
    }
  };

  const focusMain = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.focus();
      mainElement.scrollIntoView();
    }
  };

  const focusNavigation = () => {
    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.focus();
      navElement.scrollIntoView();
    }
  };

  return {
    registerSkipLink,
    focusMain,
    focusNavigation,
  };
}