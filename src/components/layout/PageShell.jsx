import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';
import { SocialStrip } from './SocialStrip.jsx';
import { Cursor } from './Cursor.jsx';
import { Scene } from '../three/Scene.jsx';
import { RouteMetadata } from '../seo/RouteMetadata.jsx';
import { SmoothScroll } from './SmoothScroll.jsx';

export function PageShell() {
  return (
    <SmoothScroll>
      <RouteMetadata />
      <a
        href="#main-content"
        className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-20 rounded-card border border-[#0A0A0F] bg-accent px-4 py-3 text-sm font-bold text-[#0A0A0F] opacity-0 shadow-card transition-all focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
      >
        Skip to main content
      </a>
      {/* fixed ambient 3D backdrop (behind everything, pointer-events: none) */}
      <Scene />
      <Cursor />
      <div className="relative min-h-screen overflow-hidden">
        <Navbar />
        <SocialStrip />
        <main id="main-content" tabIndex={-1} className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
