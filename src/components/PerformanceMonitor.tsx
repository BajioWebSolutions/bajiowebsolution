import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, Eye } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  fcp: number | null; // First Contentful Paint
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcp: null,
  });
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Only show debug panel in development
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // LCP Observer
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // FID Observer
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ type: 'first-input', buffered: true });

    // CLS Observer
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

    // Navigation timing metrics
    const navObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({
          ...prev,
          ttfb: entry.responseStart - entry.requestStart,
          fcp: entry.firstContentfulPaint,
        }));
      });
    });
    navObserver.observe({ type: 'navigation', buffered: true });

    // Show debug panel in development after a delay
    if (isDevelopment) {
      const timer = setTimeout(() => setShowDebug(true), 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV !== 'development') return null;

  const getScoreColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-neutral';
    
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500';
      case 'fid':
        return value <= 100 ? 'text-green-500' : value <= 300 ? 'text-yellow-500' : 'text-red-500';
      case 'cls':
        return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500';
      case 'ttfb':
        return value <= 800 ? 'text-green-500' : value <= 1800 ? 'text-yellow-500' : 'text-red-500';
      case 'fcp':
        return value <= 1800 ? 'text-green-500' : value <= 3000 ? 'text-yellow-500' : 'text-red-500';
      default:
        return 'text-neutral';
    }
  };

  const formatValue = (value: number | null, unit: string) => {
    if (value === null) return 'Measuring...';
    return `${Math.round(value)}${unit}`;
  };

  return (
    <AnimatePresence>
      {showDebug && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 50 }}
          className="fixed bottom-4 right-4 z-50 glass-card p-4 rounded-xl shadow-xl max-w-xs"
        >
          <div className="flex items-center gap-2 mb-3">
            <Activity className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-sm text-foreground-dark">Performance</h3>
            <button
              onClick={() => setShowDebug(false)}
              className="ml-auto text-neutral hover:text-foreground-dark transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>LCP</span>
              </div>
              <span className={getScoreColor('lcp', metrics.lcp)}>
                {formatValue(metrics.lcp, 'ms')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>FID</span>
              </div>
              <span className={getScoreColor('fid', metrics.fid)}>
                {formatValue(metrics.fid, 'ms')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Activity className="h-3 w-3" />
                <span>CLS</span>
              </div>
              <span className={getScoreColor('cls', metrics.cls)}>
                {metrics.cls !== null ? metrics.cls.toFixed(3) : 'Measuring...'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>TTFB</span>
              </div>
              <span className={getScoreColor('ttfb', metrics.ttfb)}>
                {formatValue(metrics.ttfb, 'ms')}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;