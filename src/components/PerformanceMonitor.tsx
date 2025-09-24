import React, { useEffect } from 'react';
import { usePerformance, useResourceTiming } from '../hooks/usePerformance';

const PerformanceMonitor: React.FC = () => {
  const metrics = usePerformance();
  const slowResources = useResourceTiming();

  useEffect(() => {
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.group('Performance Metrics');
      
      if (metrics.fcp) {
        console.log(`First Contentful Paint: ${metrics.fcp.toFixed(2)}ms`);
      }
      if (metrics.lcp) {
        console.log(`Largest Contentful Paint: ${metrics.lcp.toFixed(2)}ms`);
      }
      if (metrics.fid) {
        console.log(`First Input Delay: ${metrics.fid.toFixed(2)}ms`);
      }
      if (metrics.cls) {
        console.log(`Cumulative Layout Shift: ${metrics.cls.toFixed(4)}`);
      }
      if (metrics.ttfb) {
        console.log(`Time to First Byte: ${metrics.ttfb.toFixed(2)}ms`);
      }

      // Performance warnings
      if (metrics.lcp && metrics.lcp > 2500) {
        console.warn('LCP is slower than recommended (>2.5s)');
      }
      if (metrics.fid && metrics.fid > 100) {
        console.warn('FID is slower than recommended (>100ms)');
      }
      if (metrics.cls && metrics.cls > 0.1) {
        console.warn('CLS is higher than recommended (>0.1)');
      }

      console.groupEnd();
    }

    // Send metrics to analytics in production
    if (process.env.NODE_ENV === 'production' && metrics.lcp) {
      // Replace with your analytics service
      // gtag('event', 'web_vitals', {
      //   event_category: 'Performance',
      //   event_label: 'LCP',
      //   value: Math.round(metrics.lcp)
      // });
    }
  }, [metrics]);

  useEffect(() => {
    if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('Slow resources detected:', slowResources);
    }
  }, [slowResources]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;