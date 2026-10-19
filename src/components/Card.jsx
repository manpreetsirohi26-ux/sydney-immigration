import { motion } from 'framer-motion';

const variantStyles = {
  default: 'bg-white border border-gray-100 rounded-2xl shadow-soft',
  elevated: 'bg-white rounded-2xl shadow-elevated',
  outlined: 'bg-white border-2 border-gray-200 rounded-2xl',
  gradient: 'bg-gradient-to-br from-primary-navy to-primary-navy-dark rounded-2xl text-white',
};

const hoverMotion = {
  default: { y: -8, boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)' },
  elevated: { y: -8, boxShadow: '0 30px 60px -12px rgba(15, 23, 42, 0.2)' },
  outlined: { y: -8, borderColor: '#d4a843', boxShadow: '0 20px 40px -12px rgba(212, 168, 67, 0.15)' },
  gradient: { y: -8, boxShadow: '0 25px 50px -12px rgba(212, 168, 67, 0.3)' },
};

/**
 * Reusable content card. Uses framer-motion for a subtle lift on hover.
 */
export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
  variant = 'default',
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? hoverMotion[variant] || hoverMotion.default : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`${variantStyles[variant] || variantStyles.default} ${padding} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
