import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteContent } from '../data/content';

const SITE_URL = 'https://sydneyimmigrationindia.com';
const DEFAULT_IMAGE = '/sydney-immigration-logo.png';
const PAGE_LABELS = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Visa Services',
  '/gallery': 'Gallery',
  '/apply': 'Apply',
  '/contact': 'Contact',
};

const normalizePath = (pathname) => {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
};

const absoluteUrl = (url) => new URL(url, SITE_URL).href;

const setMetaTag = (selector, attr, value, content) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
  tag.content = content;
};

const setCanonicalLink = (url) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

const buildStructuredData = ({ currentUrl, title, description, pathname }) => {
  const businessId = `${SITE_URL}/#business`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${currentUrl}#webpage`;
  const pathParts = pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/` },
    ...pathParts.map((part, index) => {
      const path = `/${pathParts.slice(0, index + 1).join('/')}`;
      return {
        name: PAGE_LABELS[path] || part.replace(/-/g, ' '),
        url: `${SITE_URL}${path}`,
      };
    }),
  ];
  const serviceList =
    pathname === '/services'
      ? {
          '@type': 'ItemList',
          itemListElement: (siteContent.visaServices ?? []).map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              serviceType: service.title,
              areaServed: service.destination,
              provider: { '@id': businessId },
            },
          })),
        }
      : undefined;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: siteContent.siteName,
        image: absoluteUrl(DEFAULT_IMAGE),
        logo: absoluteUrl(DEFAULT_IMAGE),
        url: SITE_URL,
        telephone: siteContent.contact?.phone,
        email: siteContent.contact?.emails?.[0],
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteContent.contact?.address,
          addressLocality: 'Kaithal',
          addressRegion: 'Haryana',
          addressCountry: 'IN',
          postalCode: '136027',
        },
        openingHours: 'Mo-Sa 09:00-18:00',
        areaServed: 'Kaithal, Haryana, India',
        sameAs: Object.values(siteContent.social ?? {}),
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_URL}/`,
        name: siteContent.siteName,
        publisher: { '@id': businessId },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebPage',
        '@id': pageId,
        url: currentUrl,
        name: title,
        description,
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        inLanguage: 'en-IN',
        breadcrumb: { '@id': `${pageId}-breadcrumb` },
        mainEntity: serviceList,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageId}-breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    ],
  };
};

export default function Seo({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  robots = 'index, follow',
  structuredData,
}) {
  const location = useLocation();

  useEffect(() => {
    const pathname = normalizePath(location.pathname);
    const canonicalUrl = `${SITE_URL}${pathname}`;
    const pageTitle = title || `${siteContent.siteName} | Visa Consultant in Kaithal`;
    const metaDescription =
      description ||
      'Visa consultancy in Kaithal for study, work, permanent residency, visitor and business visas to popular destinations worldwide.';
    const imageUrl = absoluteUrl(image);

    document.title = pageTitle;
    setMetaTag('meta[name="description"]', 'name', 'description', metaDescription);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords || '');
    setMetaTag('meta[name="robots"]', 'name', 'robots', robots);
    setMetaTag('meta[name="author"]', 'name', 'author', siteContent.siteName);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', siteContent.siteName);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${siteContent.siteName} logo`);
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    setCanonicalLink(canonicalUrl);

    let jsonLdTag = document.head.querySelector('script[data-seo-jsonld]');
    if (!jsonLdTag) {
      jsonLdTag = document.createElement('script');
      jsonLdTag.setAttribute('type', 'application/ld+json');
      jsonLdTag.setAttribute('data-seo-jsonld', 'true');
      document.head.appendChild(jsonLdTag);
    }
    jsonLdTag.textContent = JSON.stringify(
      structuredData || buildStructuredData({ currentUrl: canonicalUrl, title: pageTitle, description: metaDescription, pathname })
    );
  }, [description, image, keywords, location.pathname, robots, structuredData, title, type]);

  return null;
}
