import { motion } from 'framer-motion';

const variantStyles = {
  default: 'bg-white border border-slate-line rounded-2xl shadow-soft',
  elevated: 'bg-white rounded-2xl shadow-elevated',
  outlined: 'bg-white border-2 border-blue-tint-dark rounded-2xl',
  gradient: 'bg-gradient-to-br from-blue-navy to-blue-navy-dark rounded-2xl text-white',
};

const hoverMotion = {
  default: { y: -8, boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)' },
  elevated: { y: -8, boxShadow: '0 30px 60px -12px rgba(15, 23, 42, 0.2)' },
  outlined: { y: -8, borderColor: '#3b82f6', boxShadow: '0 20px 40px -12px rgba(59, 130, 246, 0.15)' },
  gradient: { y: -8, boxShadow: '0 25px 50px -12px rgba(30, 58, 138, 0.3)' },
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
