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
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55] contrast-110"
          width="1920"
          height="600"
          loading="eager"
          decoding="async"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-navy/95 via-blue-navy/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.25),_transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 z-10">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-blue-tint-dark text-sm mb-3"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center">
            <li>
              <Link to="/" className="hover:text-blue-primary-light transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">/</li>
            <li aria-current="page" className="text-white/90">{breadcrumb || title}</li>
          </ol>
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
            className="text-blue-tint-lightest mt-2 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
