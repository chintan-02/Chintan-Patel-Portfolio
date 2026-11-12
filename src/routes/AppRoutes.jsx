import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell.jsx';

const Home = lazy(() => import('../pages/Home.jsx').then((module) => ({ default: module.Home })));
const Projects = lazy(() => import('../pages/Projects.jsx').then((module) => ({ default: module.Projects })));
const CaseStudy = lazy(() => import('../pages/CaseStudy.jsx').then((module) => ({ default: module.CaseStudy })));
const Engineering = lazy(() => import('../pages/Engineering.jsx').then((module) => ({ default: module.Engineering })));
const Writing = lazy(() => import('../pages/Writing.jsx').then((module) => ({ default: module.Writing })));
const Article = lazy(() => import('../pages/Article.jsx').then((module) => ({ default: module.Article })));
const About = lazy(() => import('../pages/About.jsx').then((module) => ({ default: module.About })));
const Contact = lazy(() => import('../pages/Contact.jsx').then((module) => ({ default: module.Contact })));
const Privacy = lazy(() => import('../pages/Privacy.jsx').then((module) => ({ default: module.Privacy })));
const NotFound = lazy(() => import('../pages/NotFound.jsx').then((module) => ({ default: module.NotFound })));

function RouteFallback() {
  return (
    <div className="px-6 py-24 text-center font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
      Loading
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<PageShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<Navigate to="/projects" replace />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
