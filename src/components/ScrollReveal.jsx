import { motion } from 'framer-motion';

/**
 * Reveals its children on scroll. Always ends fully visible (opacity 1)
 * and uses viewport `once: true, amount: 0.1` so content never stays hidden.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  amount = 0.1,
  once = true,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
