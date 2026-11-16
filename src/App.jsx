import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import './index.css';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Apply = lazy(() => import('./pages/Apply'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const page = (element) => <PageTransition>{element}</PageTransition>;

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-live="polite" aria-busy="true">
      <div className="w-10 h-10 rounded-full border-4 border-blue-tint-dark border-t-blue-primary animate-spin" />
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<PageFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={page(<Home />)} />
            <Route path="/about" element={page(<About />)} />
            <Route path="/services" element={page(<Services />)} />
            <Route path="/gallery" element={page(<Gallery />)} />
            <Route path="/apply" element={page(<Apply />)} />
            <Route path="/contact" element={page(<Contact />)} />
            <Route path="*" element={page(<NotFound />)} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid #3b82f6',
            borderRadius: '12px',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#3b82f6',
              secondary: '#0f172a',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </Layout>
  );
}

export default App;
