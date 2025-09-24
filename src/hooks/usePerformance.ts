import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export function usePerformance(): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Function to update metrics
    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Get navigation timing
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics({
        ttfb: navigationEntry.responseStart - navigationEntry.fetchStart
      });
    }

    // Performance Observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint & Largest Contentful Paint
        const paintObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              updateMetrics({ fcp: entry.startTime });
            }
          }
        });
        paintObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          updateMetrics({ lcp: lastEntry.startTime });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fidEntry = entry as any;
            updateMetrics({ fid: fidEntry.processingStart - fidEntry.startTime });
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          updateMetrics({ cls: clsValue });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          paintObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance observer not supported:', error);
      }
    }
  }, []);

  return metrics;
}

// Hook to measure component render time
export function useRenderTime(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
        
        // Log slow renders
        if (renderTime > 16.67) { // More than one frame at 60fps
          console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
        }
      }
    };
  });
}

// Hook to detect slow resources
export function useResourceTiming() {
  const [slowResources, setSlowResources] = useState<PerformanceResourceTiming[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkResources = () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const slow = resources.filter(resource => resource.duration > 1000);
      
      if (slow.length > 0) {
        setSlowResources(slow);
        
        if (process.env.NODE_ENV === 'development') {
          console.warn('Slow loading resources detected:', slow);
        }
      }
    };

    // Check on load and periodically
    window.addEventListener('load', checkResources);
    const interval = setInterval(checkResources, 5000);

    return () => {
      window.removeEventListener('load', checkResources);
      clearInterval(interval);
    };
  }, []);

  return slowResources;
}