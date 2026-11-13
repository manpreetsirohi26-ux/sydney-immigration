import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Reusable hero banner used at the top of every inner page.
 * Shows a breadcrumb, page title and optional subtitle over a dark blue background.
 */
export default function PageBanner({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative h-72 sm:h-80 overflow-hidden flex items-end">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-105"
          width="1920"
          height="600"
          loading="eager"
          decoding="async"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-navy/80 via-blue-navy/35 to-blue-navy/10" />
      <div className="relative max-w-5xl mx-auto px-8 sm:px-14 lg:px-20 w-full pb-12 z-10 text-center">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="!text-white/90 text-sm mb-3"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center justify-center text-white/90 drop-shadow-sm">
            <li>
              <Link to="/" className="hover:text-blue-primary-light transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1 text-white/70">/</li>
            <li aria-current="page" className="text-white font-medium">{breadcrumb || title}</li>
          </ol>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="!text-white font-heading font-extrabold text-4xl sm:text-5xl drop-shadow-md mx-auto"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="!text-white/90 mt-2 max-w-2xl mx-auto drop-shadow-sm"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
