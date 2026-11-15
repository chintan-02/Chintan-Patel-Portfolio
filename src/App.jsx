import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes.jsx';
import { ScrollToTop } from './components/layout/ScrollToTop.jsx';
import { ThemeProvider } from './lib/themeStore.jsx';

export default function App({ location, pages }) {
  const Router = location ? StaticRouter : BrowserRouter;
  return (
    <ThemeProvider>
      <Router location={location}>
        <ScrollToTop />
        <AppRoutes pages={pages} />
      </Router>
    </ThemeProvider>
  );
}
