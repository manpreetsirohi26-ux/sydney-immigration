import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animated number counter (replacement for the broken `react-countup` import).
 * Starts counting when it scrolls into view and always finishes at `end`.
 */
export default function Counter({
  start = 0,
  end = 0,
  duration = 2,
  separator = ',',
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!inView) return undefined;
    const target = Number(end) || 0;
    const from = Number(start) || 0;
    const totalMs = Math.max(duration, 0) * 1000;
    let raf;
    let timer;

    if (totalMs === 0) {
      setValue(target);
      return undefined;
    }

    const t0 = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - t0) / totalMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Safety net: if something stops the animation, snap to the final value.
    timer = setTimeout(() => setValue(target), totalMs + 400);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [inView, start, end, duration]);

  const formatted = separator ? value.toLocaleString('en-US') : String(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
