import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Define global __WS_TOKEN__ for development tools
declare global {
  var __WS_TOKEN__: string | undefined;
}

// Ensure __WS_TOKEN__ is available globally
if (typeof window !== 'undefined') {
  (window as any).__WS_TOKEN__ = (window as any).__WS_TOKEN__ || '';

  // Also define it on the global object
  if (!(window as any).global) {
    (window as any).global = window;
  }
  (window as any).global.__WS_TOKEN__ = (window as any).global.__WS_TOKEN__ || '';
}

createRoot(document.getElementById("root")!).render(<App />);
