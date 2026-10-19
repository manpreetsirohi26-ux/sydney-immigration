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
    <footer className="bg-primary-navy text-white relative mt-0 border-t-4 border-primary-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5" aria-label="Sydney Immigration India Home">
              <Logo size="lg" variant="gold" className="shrink-0" />
              <div>
                <span className="block font-heading font-bold text-white text-lg">{siteContent.siteName}</span>
                <span className="block text-xs text-gray-400 font-medium">{siteContent.branchName}</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs">{footer.tagline}</p>
            <p className="text-gray-500 text-xs italic mb-6 max-w-xs break-words">{footer.disclaimer}</p>
            <div className="flex gap-2">
              {socials.map(({ key, url, Icon, label }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold hover:text-primary-navy transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-gold rounded-full" />
            </h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 text-sm hover:text-primary-gold transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-gold rounded-full" />
            </h4>
            <ul className="space-y-2.5">
              {footer.servicesLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 text-sm hover:text-primary-gold transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-gold rounded-full" />
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-gold transition-colors flex items-start gap-2.5"
                >
                  <MapPin className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                  <span className="break-words">{contact.address}</span>
                </a>
              </li>
              <li>
                <a href={contact.phoneLink} className="text-gray-300 hover:text-primary-gold transition-colors flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-primary-gold shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li className="flex flex-col gap-1.5">
                {contact.emails.map((email, i) => (
                  <a
                    key={i}
                    href={`mailto:${email}`}
                    className="text-gray-300 hover:text-primary-gold transition-colors flex items-start gap-2.5"
                  >
                    <Mail className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <span className="break-all">{email}</span>
                  </a>
                ))}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                <span className="text-gray-300">{contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>{footer.copyright.replace('2025', '2026')}</p>
          <p>{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}