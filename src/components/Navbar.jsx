import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Menu, X, MessageCircle } from 'lucide-react';
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
      <div className="hidden md:block bg-primary-navy text-white h-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-sm">
          <div className="flex items-center gap-5">
            <a href={contact.phoneLink} className="flex items-center gap-2 hover:text-primary-gold transition-colors">
              <Phone className="w-4 h-4 text-primary-gold" />
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.emails[0]}`} className="flex items-center gap-2 hover:text-primary-gold transition-colors">
              <Mail className="w-4 h-4 text-primary-gold" />
              <span className="truncate">{contact.emails[0]}</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-gray-300">
            <Clock className="w-4 h-4 text-primary-gold" />
            <span>{contact.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? 'shadow-soft border-gray-100' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label={siteContent.siteName}>
            <Logo size="md" variant="navy" className="shrink-0" />
            <div className="leading-tight">
              <span className="block font-heading font-bold text-primary-navy text-base sm:text-lg">{siteContent.siteName}</span>
              <span className="block text-[11px] text-secondary-gray font-medium tracking-wide">{siteContent.branchName}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={`relative px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-navy'
                    : 'text-secondary-gray hover:text-primary-navy'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 bg-primary-gold transition-all duration-300 ${
                    location.pathname === item.path ? 'w-5' : 'w-0 group-hover:w-5'
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-gold to-primary-gold-light text-primary-navy font-bold text-sm shadow-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-light transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6 text-primary-navy" />
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
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <span className="font-heading font-bold text-primary-navy">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-secondary-light"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-primary-navy" />
                </button>
              </div>
              <nav className="flex-1 p-5 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-gold/15 text-primary-navy border border-primary-gold/40'
                        : 'text-secondary-gray hover:bg-secondary-light hover:text-primary-navy'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mt-4 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-primary-gold to-primary-gold-light text-primary-navy font-bold text-sm shadow-gold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Free Consultation
                </Link>
              </nav>
              <div className="p-5 text-xs text-secondary-gray border-t">
                {contact.phone} · {contact.workingHours}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-primary-navy/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}