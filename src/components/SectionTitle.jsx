import { motion } from 'framer-motion';

/**
 * Reusable section heading (eyebrow + title + divider + subtitle).
 * Reveals on scroll with viewport once/amount so it never stays hidden.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const isCenter = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${isCenter ? 'text-center' : ''} mb-14 ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-primary-gold text-xs font-bold tracking-widest uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading font-bold text-3xl sm:text-4xl ${light ? 'text-white' : 'text-primary-navy'}`}>
        {title}
      </h2>
      <div className={`w-16 h-0.5 bg-primary-gold mt-4 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-3xl mt-4 ${light ? 'text-gray-300' : 'text-secondary-gray'} ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
