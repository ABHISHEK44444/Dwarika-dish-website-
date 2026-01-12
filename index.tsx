
import React, { ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

interface GlobalErrorBoundaryProps {
  children?: ReactNode;
}

interface GlobalErrorBoundaryState {
  hasError: boolean;
}

// Fix: Use React.Component to ensure that 'props' and 'state' are correctly inherited and typed
class GlobalErrorBoundary extends React.Component<GlobalErrorBoundaryProps, GlobalErrorBoundaryState> {
  public state: GlobalErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_error: any): GlobalErrorBoundaryState { 
    return { hasError: true }; 
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    console.error("Critical Render Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 text-center">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 max-w-md">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Application Error</h1>
            <p className="text-slate-600 mb-8">We've encountered a display issue. Please try refreshing the page or clearing your cache.</p>
            <button onClick={() => window.location.reload()} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md">
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    
    // Fix: Accessing children through this.props which is now correctly recognized via inheritance
    return this.props.children || null;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <GlobalErrorBoundary>
        <HashRouter>
          <App />
        </HashRouter>
      </GlobalErrorBoundary>
    </React.StrictMode>
  );
}
