import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Phone, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import { siteContent } from '../data/content';

const contact = siteContent.contact ?? {};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="text-9xl font-bold text-primary-gold/20 mb-4 font-heading">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-navy mb-4">Page Not Found</h1>
        <p className="text-secondary-gray mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Go Home
          </Button>
          <Button to="/contact" variant="gold" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Contact Us
          </Button>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a href={contact.phoneLink} className="inline-flex items-center gap-2 text-primary-navy hover:text-primary-gold">
            <Phone className="w-4 h-4 text-primary-gold" /> {contact.phone}
          </a>
          <a
            href={`https://wa.me/${contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-navy hover:text-primary-gold"
          >
            <MessageSquare className="w-4 h-4 text-primary-gold" /> WhatsApp
          </a>
        </div>
        <p className="mt-10 text-sm text-gray-500">
          {siteContent.siteName} - {siteContent.branchName}
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Popular: <Link to="/" className="hover:text-primary-gold">Home</Link> ·{' '}
          <Link to="/services" className="hover:text-primary-gold">Services</Link> ·{' '}
          <Link to="/gallery" className="hover:text-primary-gold">Gallery</Link> ·{' '}
          <Link to="/contact" className="hover:text-primary-gold">Contact</Link>
        </p>
      </motion.div>
    </div>
  );
}
