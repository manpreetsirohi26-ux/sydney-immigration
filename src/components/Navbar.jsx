import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';
import { siteContent } from '../data/content';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { contact, navItems } = siteContent;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Slim navy top bar */}
      <div className="hidden md:block bg-blue-navy text-white h-10">
        <div className="max-w-5xl mx-auto px-8 sm:px-14 lg:px-20 h-full flex items-center justify-between text-sm">
          <div className="flex items-center gap-5">
            <a href={contact.phoneLink} className="flex items-center gap-2 hover:text-blue-primary-light transition-colors">
              <Phone className="w-4 h-4 text-blue-primary-light" />
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.emails[0]}`} className="flex items-center gap-2 hover:text-blue-primary-light transition-colors">
              <Mail className="w-4 h-4 text-blue-primary-light" />
              <span className="truncate">{contact.emails[0]}</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-blue-tint-lightest">
            <Clock className="w-4 h-4 text-blue-primary-light" />
            <span>{contact.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? 'shadow-soft border-blue-tint-lightest' : 'border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-8 sm:px-14 lg:px-20 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label={siteContent.siteName}>
            <Logo size="md" variant="navy" className="shrink-0" />
            <div className="leading-tight">
              <span className="block font-heading font-bold text-blue-navy text-base sm:text-lg">{siteContent.siteName}</span>
              <span className="block text-[11px] text-slate-muted font-medium tracking-wide">{siteContent.branchName}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={`relative px-5 py-2.5 text-sm font-semibold rounded-2xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-blue-primary shadow-blue'
                    : 'text-slate-muted hover:text-blue-primary hover:bg-blue-tint-lightest'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-primary-light" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-2xl hover:bg-blue-tint-lightest transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6 text-blue-navy" />
          </button>
        </div>

        {/* Mobile menu (animated slide-in) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="lg:hidden fixed inset-y-0 right-0 w-72 bg-white shadow-elevated z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-blue-tint-lightest">
                <span className="font-heading font-bold text-blue-navy">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-2xl hover:bg-blue-tint-lightest"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-blue-navy" />
                </button>
              </div>
              <nav className="flex-1 p-5 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                    className={`block px-3 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-tint text-blue-primary border border-blue-tint-dark'
                        : 'text-slate-muted hover:bg-blue-tint-lightest hover:text-blue-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="p-5 text-xs text-slate-muted border-t border-blue-tint-lightest">
                {contact.phone} · {contact.workingHours}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-blue-navy/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}
