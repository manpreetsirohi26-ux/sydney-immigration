import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { galleryImages as images, galleryCategories as categories } from '../data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = useMemo(
    () => (activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory)),
    [activeCategory]
  );

  const selectCategory = (cat) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (filteredImages.length ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : 0));
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (filteredImages.length ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : 0));
  }, [filteredImages.length]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Keyboard controls for the lightbox.
  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, closeLightbox, goToPrev, goToNext]);

  const currentImage = filteredImages[currentIndex] || filteredImages[0];

  return (
    <>
      <PageBanner
        title="Our Gallery"
        subtitle="Glimpses of our office, success stories and community events."
        breadcrumb="Gallery"
        image="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => selectCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary-gold to-primary-gold-light text-primary-navy shadow-gold'
                    : 'bg-secondary-light text-secondary-gray hover:bg-primary-gold/10 hover:text-primary-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-soft"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Search className="w-4 h-4 text-primary-navy" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <p className="font-heading font-bold text-sm">{image.caption}</p>
                    <p className="text-xs opacity-80">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="w-12 h-12 mx-auto text-gray-300 mb-3" />
              <p className="text-secondary-gray">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-navy/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={currentImage.src} alt={currentImage.alt} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="mt-4 text-center text-white">
                <p className="font-heading font-bold">{currentImage.caption}</p>
                <p className="text-sm text-gray-300">{currentImage.category}</p>
              </div>
            </motion.div>
            {filteredImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
