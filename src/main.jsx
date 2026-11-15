import React from 'react';
import ReactDOM from 'react-dom/client';
import { MDXProvider } from '@mdx-js/react';
import App from './App.jsx';
import { mdxComponents } from './components/mdx/MDXComponents.jsx';
import { AppErrorBoundary } from './components/system/AppErrorBoundary.jsx';
import './styles/globals.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <AppErrorBoundary>
      <MDXProvider components={mdxComponents}>
        <App />
      </MDXProvider>
    </AppErrorBoundary>
  </React.StrictMode>
);

if (root.dataset.prerendered === window.location.pathname.replace(/\/+$/, '') ||
    (root.dataset.prerendered === '/' && window.location.pathname === '/')) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}

import './styles/concept.css';
