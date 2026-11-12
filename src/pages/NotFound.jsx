import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Phone, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { siteContent } from '../data/content';

const contact = siteContent.contact ?? {};

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Sydney Immigration India"
        description="The page you are looking for could not be found. Visit Sydney Immigration India for trusted visa services in Kaithal."
        robots="noindex, nofollow"
      />
      <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-md"
        >
          <div className="text-9xl font-bold text-blue-tint-dark mb-6 font-heading">404</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-navy mb-4">Page Not Found</h1>
          <p className="text-slate-muted mb-10">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/" variant="blue" leftIcon={<Home className="w-4 h-4" />}>
              Go Home
            </Button>
            <Button to="/contact" variant="secondary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Contact Us
            </Button>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href={contact.phoneLink} className="inline-flex items-center gap-2 text-blue-navy hover:text-blue-primary">
              <Phone className="w-4 h-4 text-blue-primary" /> {contact.phone}
            </a>
            <a
              href={`https://wa.me/${contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-navy hover:text-blue-primary"
            >
              <MessageSquare className="w-4 h-4 text-blue-primary" /> WhatsApp
            </a>
          </div>
          <p className="mt-14 text-sm text-slate-muted">
            {siteContent.siteName} - {siteContent.branchName}
          </p>
          <p className="mt-2 text-xs text-slate-muted/60">
            Popular: <Link to="/" className="hover:text-blue-primary">Home</Link> ·{' '}
            <Link to="/services" className="hover:text-blue-primary">Services</Link> ·{' '}
            <Link to="/gallery" className="hover:text-blue-primary">Gallery</Link> ·{' '}
            <Link to="/contact" className="hover:text-blue-primary">Contact</Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}
