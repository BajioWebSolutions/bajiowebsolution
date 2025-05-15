
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Google Search Console verification
if (typeof window !== 'undefined') {
  // This simulates GSC verification - in production, you would use the actual meta tag from Google
  const gscMeta = document.createElement('meta');
  gscMeta.name = 'google-site-verification';
  gscMeta.content = 'your-google-verification-code'; // Replace with actual code from Google Search Console
  document.head.appendChild(gscMeta);
}

createRoot(document.getElementById("root")!).render(<App />);
