import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';
import Logo from './Logo';

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
    <path d="M10.03 18.414V5.586L18.5 12l-8.47 6.414z" />
  </svg>
);

export default function Footer() {
  const { footer, contact, social } = siteContent;

  const socials = [
    { key: 'facebook', url: social.facebook, Icon: FacebookIcon, label: 'Facebook' },
    { key: 'instagram', url: social.instagram, Icon: InstagramIcon, label: 'Instagram' },
    { key: 'linkedin', url: social.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
    { key: 'youtube', url: social.youtube, Icon: YoutubeIcon, label: 'YouTube' },
  ];

  return (
    <footer className="bg-blue-navy text-white relative border-t-4 border-blue-primary">
      {/* Decorative blob */}
      <div className="absolute -top-40 -right-20 w-96 h-96 rounded-full blob-blue opacity-30 pointer-events-none" />
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <Link to="/" className="flex flex-col items-center gap-3 mb-6" aria-label="Sydney Immigration India Home">
              <Logo size="lg" variant="navy" className="shrink-0" />
              <div>
                <span className="block font-heading font-bold text-white text-lg">{siteContent.siteName}</span>
                <span className="block text-xs text-slate-muted font-medium">{siteContent.branchName}</span>
              </div>
            </Link>
            <p className="text-slate-muted text-sm leading-relaxed mb-5 max-w-xs mx-auto">{footer.tagline}</p>
            <p className="text-slate-muted/60 text-xs italic mb-7 max-w-xs mx-auto break-words">{footer.disclaimer}</p>
            <div className="flex gap-3 justify-center">
              {socials.map(({ key, url, Icon, label }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-primary hover:text-white transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-heading font-bold text-white text-base mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-muted text-sm hover:text-blue-primary transition-colors inline-flex items-center justify-center gap-2 group">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center">
            <h4 className="font-heading font-bold text-white text-base mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {footer.servicesLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-muted text-sm hover:text-blue-primary transition-colors inline-flex items-center justify-center gap-2 group">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h4 className="font-heading font-bold text-white text-base mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-primary rounded-full" />
            </h4>
            <ul className="space-y-4 text-sm flex flex-col items-center">
              <li>
                <a
                  href={contact.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-muted hover:text-blue-primary transition-colors inline-flex items-start justify-center gap-2.5 text-center"
                >
                  <MapPin className="w-4 h-4 text-blue-primary shrink-0 mt-0.5" />
                  <span className="break-words max-w-xs">{contact.address}</span>
                </a>
              </li>
              <li>
                <a href={contact.phoneLink} className="text-slate-muted hover:text-blue-primary transition-colors inline-flex items-center justify-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-primary shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li className="flex flex-col gap-2 items-center">
                {contact.emails.map((email, i) => (
                  <a
                    key={i}
                    href={`mailto:${email}`}
                    className="text-slate-muted hover:text-blue-primary transition-colors inline-flex items-start justify-center gap-2.5"
                  >
                    <Mail className="w-4 h-4 text-blue-primary shrink-0 mt-0.5" />
                    <span className="break-all">{email}</span>
                  </a>
                ))}
              </li>
              <li className="inline-flex items-start justify-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-primary shrink-0 mt-0.5" />
                <span className="text-slate-muted">{contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-3 text-xs text-slate-muted/60 relative z-10 text-center">
          <p>{footer.copyright.replace('2025', '2026')}</p>
          <p className="max-w-2xl">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
