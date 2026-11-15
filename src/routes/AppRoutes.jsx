import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell.jsx';

const LazyHome = lazy(() => import('../pages/Home.jsx').then((module) => ({ default: module.Home })));
const LazyProjects = lazy(() => import('../pages/Projects.jsx').then((module) => ({ default: module.Projects })));
const LazyCaseStudy = lazy(() => import('../pages/CaseStudy.jsx').then((module) => ({ default: module.CaseStudy })));
const LazyEngineering = lazy(() => import('../pages/Engineering.jsx').then((module) => ({ default: module.Engineering })));
const LazyWriting = lazy(() => import('../pages/Writing.jsx').then((module) => ({ default: module.Writing })));
const LazyArticle = lazy(() => import('../pages/Article.jsx').then((module) => ({ default: module.Article })));
const LazyAbout = lazy(() => import('../pages/About.jsx').then((module) => ({ default: module.About })));
const LazyContact = lazy(() => import('../pages/Contact.jsx').then((module) => ({ default: module.Contact })));
const LazyPrivacy = lazy(() => import('../pages/Privacy.jsx').then((module) => ({ default: module.Privacy })));
const LazyNotFound = lazy(() => import('../pages/NotFound.jsx').then((module) => ({ default: module.NotFound })));

function RouteFallback() {
  return (
    <div className="px-6 py-24 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
      Loading
    </div>
  );
}

export function AppRoutes({ pages = {} }) {
  const Home = pages.Home ?? LazyHome;
  const Projects = pages.Projects ?? LazyProjects;
  const CaseStudy = pages.CaseStudy ?? LazyCaseStudy;
  const Engineering = pages.Engineering ?? LazyEngineering;
  const Writing = pages.Writing ?? LazyWriting;
  const Article = pages.Article ?? LazyArticle;
  const About = pages.About ?? LazyAbout;
  const Contact = pages.Contact ?? LazyContact;
  const Privacy = pages.Privacy ?? LazyPrivacy;
  const NotFound = pages.NotFound ?? LazyNotFound;
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
