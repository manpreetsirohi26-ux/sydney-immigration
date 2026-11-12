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
        width={size === 'lg' ? 48 : size === 'sm' ? 36 : 40}
        height={size === 'lg' ? 48 : size === 'sm' ? 36 : 40}
        onError={() => setFailed(true)}
        className={`${s.box} object-contain ${className}`}
        decoding="async"
      />
    );
  }

  const badgeStyles =
    variant === 'gold'
      ? 'bg-gradient-to-br from-blue-primary-light to-blue-primary shadow-blue'
      : 'bg-gradient-to-br from-blue-navy to-blue-navy-dark shadow-blue';
  const textStyles = variant === 'gold' ? 'text-blue-navy' : 'text-blue-primary-light';

  return (
    <div className={`${s.box} rounded-xl flex items-center justify-center ${badgeStyles} ${className}`}>
      <span className={`font-heading font-bold ${s.text} ${textStyles}`}>{logoText}</span>
    </div>
  );
}
