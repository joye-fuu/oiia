import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById("root");

// Ensure TypeScript knows this won't be `null`
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

