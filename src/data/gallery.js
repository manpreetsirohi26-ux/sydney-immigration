import { siteContent } from './content';

// ---------------------------------------------------------------------------
// AUTO-LOADED GALLERY PHOTOS
// ---------------------------------------------------------------------------
// Drop your own photos into:  src/assets/images/gallery/
//
//   • Any .jpg .jpeg .png .webp .avif .svg file placed there shows up
//     automatically in the Gallery (and the Home page preview).
//   • Optional sub-folders set the category automatically:
//         office/    -> "Office"
//         success/   -> "Success Stories"
//         events/    -> "Events"
//   • Want a custom caption or category for a specific file? Add it under
//     siteContent.gallery.photoMeta in src/data/content.js, e.g.
//         photoMeta: {
//           "reception.jpg": { caption: "Our Modern Reception", category: "Office" },
//         }
//
// The bundled placeholder images below stay as a fallback until you add your
// own photos. Your uploaded photos are shown first.
// ---------------------------------------------------------------------------

const modules = import.meta.glob('../assets/images/gallery/**/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  import: 'default',
});

const CATEGORY_BY_FOLDER = {
  office: 'Office',
  success: 'Success Stories',
  events: 'Events',
};

const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());

const fromFilename = (file) => titleCase(file.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim());

const photoMeta = siteContent.gallery?.photoMeta ?? {};

const autoImages = Object.entries(modules)
  // Stable order (by file path) so the gallery doesn't jump around.
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], i) => {
    const file = path.split('/').pop();
    const folder = (path.split('/').slice(-2)[0] || '').toLowerCase();
    const meta = photoMeta[file] ?? {};
    const fallbackCaption = fromFilename(file);
    return {
      id: `upload-${i}-${file}`,
      src,
      alt: meta.caption || fallbackCaption,
      caption: meta.caption || fallbackCaption,
      category: meta.category || CATEGORY_BY_FOLDER[folder] || 'Gallery',
    };
  });

const baseImages = siteContent.gallery?.images ?? [];

export const galleryImages = [...autoImages, ...baseImages];

export const galleryCategories = siteContent.gallery?.categories ?? ['All'];

export default galleryImages;
