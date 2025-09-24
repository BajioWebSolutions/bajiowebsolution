// Development tools and debugging utilities

interface DebugInfo {
  performance: PerformanceNavigationTiming;
  userAgent: string;
  viewport: { width: number; height: number };
  colorScheme: string;
  reducedMotion: boolean;
  connection?: NetworkInformation;
  memory?: any;
}

// Enhanced console logging for development
export const logger = {
  info: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(`🔵 ${message}`, data || '');
    }
  },
  
  warn: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`🟡 ${message}`, data || '');
    }
  },
  
  error: (message: string, error?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(`🔴 ${message}`, error || '');
    }
  },
  
  success: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🟢 ${message}`, data || '');
    }
  },
  
  performance: (label: string, startTime: number) => {
    if (process.env.NODE_ENV === 'development') {
      const endTime = performance.now();
      const duration = endTime - startTime;
      console.log(`⚡ ${label}: ${duration.toFixed(2)}ms`);
    }
  }
};

// Debug information collector
export const collectDebugInfo = (): DebugInfo => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    performance: navigation,
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    // @ts-ignore - Connection API is experimental
    connection: navigator.connection,
    // @ts-ignore - Memory API is experimental  
    memory: (performance as any).memory
  };
};

// Performance profiler
export class PerformanceProfiler {
  private marks: Map<string, number> = new Map();
  
  start(label: string) {
    if (process.env.NODE_ENV === 'development') {
      this.marks.set(label, performance.now());
      performance.mark(`${label}-start`);
    }
  }
  
  end(label: string) {
    if (process.env.NODE_ENV === 'development') {
      const startTime = this.marks.get(label);
      if (startTime) {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        performance.mark(`${label}-end`);
        performance.measure(label, `${label}-start`, `${label}-end`);
        
        logger.performance(label, startTime);
        
        if (duration > 100) {
          logger.warn(`Slow operation detected: ${label}`, `${duration.toFixed(2)}ms`);
        }
        
        this.marks.delete(label);
      }
    }
  }
  
  getEntries() {
    return performance.getEntriesByType('measure');
  }
  
  clear() {
    performance.clearMarks();
    performance.clearMeasures();
    this.marks.clear();
  }
}

// Memory usage monitor
export const memoryMonitor = {
  log: () => {
    if (process.env.NODE_ENV === 'development' && (performance as any).memory) {
      const memory = (performance as any).memory;
      logger.info('Memory Usage', {
        used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
        total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
        limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`
      });
    }
  },
  
  track: (interval: number = 30000) => {
    if (process.env.NODE_ENV === 'development') {
      setInterval(() => {
        memoryMonitor.log();
      }, interval);
    }
  }
};

// Bundle analyzer helper
export const bundleAnalyzer = {
  logChunkSizes: () => {
    if (process.env.NODE_ENV === 'development') {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const scripts = resources.filter(r => r.name.endsWith('.js'));
      const styles = resources.filter(r => r.name.endsWith('.css'));
      
      logger.info('JavaScript Bundles', 
        scripts.map(s => ({
          name: s.name.split('/').pop(),
          size: `${(s.transferSize / 1024).toFixed(2)} KB`,
          loadTime: `${s.duration.toFixed(2)}ms`
        }))
      );
      
      logger.info('CSS Bundles',
        styles.map(s => ({
          name: s.name.split('/').pop(),
          size: `${(s.transferSize / 1024).toFixed(2)} KB`,
          loadTime: `${s.duration.toFixed(2)}ms`
        }))
      );
    }
  }
};

// React DevTools helpers
export const reactDevtools = {
  logRenderCount: (componentName: string) => {
    if (process.env.NODE_ENV === 'development') {
      const count = parseInt(sessionStorage.getItem(`render-count-${componentName}`) || '0') + 1;
      sessionStorage.setItem(`render-count-${componentName}`, count.toString());
      
      if (count > 10) {
        logger.warn(`High render count detected for ${componentName}`, `${count} renders`);
      }
    }
  },
  
  clearRenderCounts: () => {
    if (process.env.NODE_ENV === 'development') {
      Object.keys(sessionStorage)
        .filter(key => key.startsWith('render-count-'))
        .forEach(key => sessionStorage.removeItem(key));
    }
  }
};

// Accessibility checker
export const a11yChecker = {
  checkColorContrast: (foreground: string, background: string) => {
    // Simple color contrast checker
    // In a real implementation, you'd use a proper color contrast library
    logger.info('Color Contrast Check', { foreground, background });
  },
  
  checkAriaLabels: () => {
    if (process.env.NODE_ENV === 'development') {
      const elementsWithoutLabels = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby]), input:not([aria-label]):not([aria-labelledby])');
      if (elementsWithoutLabels.length > 0) {
        logger.warn('Elements without ARIA labels found', elementsWithoutLabels);
      }
    }
  },
  
  checkHeadingStructure: () => {
    if (process.env.NODE_ENV === 'development') {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      const structure = headings.map(h => ({ level: h.tagName, text: h.textContent?.slice(0, 50) }));
      logger.info('Heading Structure', structure);
    }
  }
};

// Global debug object for console access
if (process.env.NODE_ENV === 'development') {
  (window as any).debug = {
    logger,
    collectDebugInfo,
    PerformanceProfiler,
    memoryMonitor,
    bundleAnalyzer,
    reactDevtools,
    a11yChecker
  };
  
  logger.info('Debug tools available at window.debug');
}