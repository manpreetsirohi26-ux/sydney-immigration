import { motion } from 'framer-motion';

/**
 * Wraps each route so AnimatePresence can fade pages in/out.
 * The animation always ends at opacity 1, so a page can never stay invisible.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
