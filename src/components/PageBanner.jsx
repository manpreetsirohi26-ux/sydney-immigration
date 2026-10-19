import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Reusable hero banner used at the top of every inner page.
 * Shows a breadcrumb, page title and optional subtitle over a background image.
 */
export default function PageBanner({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative h-72 sm:h-80 overflow-hidden flex items-end">
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/70 to-primary-navy/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-white/70 text-sm mb-3"
        >
          <Link to="/" className="hover:text-primary-gold transition-colors">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-white/90">{breadcrumb || title}</span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-200 mt-2 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
