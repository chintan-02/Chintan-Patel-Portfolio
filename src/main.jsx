import React from 'react';
import ReactDOM from 'react-dom/client';
import { MDXProvider } from '@mdx-js/react';
import App from './App.jsx';
import { mdxComponents } from './components/mdx/MDXComponents.jsx';
import { AppErrorBoundary } from './components/system/AppErrorBoundary.jsx';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <MDXProvider components={mdxComponents}>
        <App />
      </MDXProvider>
    </AppErrorBoundary>
  </React.StrictMode>
);
