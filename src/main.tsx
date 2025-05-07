
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Improved error handling for production
const handleError = (error: Error) => {
  console.error('Application Error:', error);
  // Only render the error UI if the root element exists and the app hasn't mounted yet
  const rootElement = document.getElementById("root");
  if (rootElement && rootElement.childElementCount === 0) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'font-family: sans-serif; color: #721c24; background-color: #f8d7da; padding: 1rem; margin: 1rem; border-radius: 0.25rem; text-align: center;';
    errorDiv.innerHTML = '<h2>Something went wrong</h2><p>The application encountered an error. Please try refreshing the page.</p>';
    rootElement.appendChild(errorDiv);
  }
};

try {
  // Create root and render app
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  } else {
    throw new Error("Root element not found! Check if the DOM is properly loaded.");
  }
} catch (error) {
  handleError(error as Error);
}

// Add error event listeners to catch unhandled errors
window.addEventListener('error', (event) => {
  event.preventDefault();
  handleError(event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  event.preventDefault();
  handleError(new Error(event.reason || 'Promise rejection'));
});
