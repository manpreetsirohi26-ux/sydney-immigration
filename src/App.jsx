import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

const page = (element) => <PageTransition>{element}</PageTransition>;

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={page(<Home />)} />
          <Route path="/about" element={page(<About />)} />
          <Route path="/services" element={page(<Services />)} />
          <Route path="/gallery" element={page(<Gallery />)} />
          <Route path="/apply" element={page(<Apply />)} />
          <Route path="/contact" element={page(<Contact />)} />
          <Route path="*" element={page(<NotFound />)} />
        </Routes>
      </AnimatePresence>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid #d4a843',
            borderRadius: '12px',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#d4a843',
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
