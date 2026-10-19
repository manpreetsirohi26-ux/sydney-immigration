import { useState } from 'react';
import { siteContent } from '../data/content';

const SIZES = {
  sm: { box: 'w-9 h-9', text: 'text-sm' },
  md: { box: 'w-10 h-10', text: 'text-base' },
  lg: { box: 'w-12 h-12', text: 'text-xl' },
};

/**
 * Site logo with a built-in fallback.
 *
 * Drop your own logo file into the project's `public/` folder and point
 * `siteContent.logoImage` (in src/data/content.js) at it, e.g. "/logo.png".
 * If the image is missing it automatically falls back to the "SII" monogram
 * badge, so a broken image is never shown.
 */
export default function Logo({ size = 'md', variant = 'navy', className = '', alt }) {
  const [failed, setFailed] = useState(false);
  const { logoImage, logoText, siteName } = siteContent;
  const s = SIZES[size] ?? SIZES.md;

  if (logoImage && !failed) {
    return (
      <img
        src={logoImage}
        alt={alt ?? `${siteName} logo`}
        onError={() => setFailed(true)}
        className={`${s.box} object-contain ${className}`}
        decoding="async"
      />
    );
  }

  const badgeStyles =
    variant === 'gold'
      ? 'bg-gradient-to-br from-primary-gold to-primary-gold-light shadow-gold'
      : 'bg-gradient-to-br from-primary-navy to-primary-navy-dark shadow-gold';
  const textStyles = variant === 'gold' ? 'text-primary-navy' : 'text-primary-gold';

  return (
    <div className={`${s.box} rounded-xl flex items-center justify-center ${badgeStyles} ${className}`}>
      <span className={`font-heading font-bold ${s.text} ${textStyles}`}>{logoText}</span>
    </div>
  );
}
