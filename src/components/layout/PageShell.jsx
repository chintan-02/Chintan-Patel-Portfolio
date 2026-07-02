import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';
import { SocialStrip } from './SocialStrip.jsx';
import { Cursor } from './Cursor.jsx';
import { Scene } from '../three/Scene.jsx';
import { SmoothScroll } from './SmoothScroll.jsx';

export function PageShell() {
  return (
    <SmoothScroll>
      {/* fixed ambient 3D backdrop (behind everything, pointer-events: none) */}
      <Scene />
      <Cursor />
      <div className="relative min-h-screen overflow-hidden">
        <Navbar />
        <SocialStrip />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
