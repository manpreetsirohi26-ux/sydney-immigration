import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsApp from './WhatsApp';
import ChatWidget from './ChatWidget';

/**
 * Global page shell. Renders whatever is passed as `children`
 * (the routed page tree) — it does NOT use <Outlet />.
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-text">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsApp />
      <ChatWidget />
    </div>
  );
}
