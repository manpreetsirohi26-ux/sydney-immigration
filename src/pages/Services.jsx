import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { siteContent } from '../data/content';
import { getVisaIcon } from '../components/VisaIcons';

const visaServices = siteContent.visaServices ?? [];
const contact = siteContent.contact ?? {};

const visaImagesBySlug = {
  study: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  work: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  pr: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  visitor: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  business: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  spouse: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
  family: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
  citizenship: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
};

const fallbackVisaImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
];

export default function Services() {
  return (
    <>
      <Seo
        title="Visa Services in Kaithal | Sydney Immigration India"
        description="Explore study, work, PR, visitor, business and family visa services in Kaithal, with guidance for applications to popular destinations worldwide."
        keywords="visa services Kaithal, study visa consultant, work visa services, PR visa guidance, visitor visa consultant Haryana"
      />
      <PageBanner
        title="Visa & Immigration Services in Kaithal"
        subtitle="Comprehensive immigration support for every pathway — expertly guided, transparently priced."
        breadcrumb="Our Services"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      />

      {/* SERVICES (alternating) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto px-8 sm:px-14 lg:px-20 space-y-20">
          {visaServices.map((service, index) => {
            const Icon = getVisaIcon(service.icon);
            const isReverse = index % 2 === 1;
            const id = service.slug || String(service.title || '').toLowerCase().replace(/\s+/g, '-');
            return (
              <ScrollReveal
                key={service.id}
                y={40}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`scroll-mt-32 ${isReverse ? 'lg:col-start-2' : ''} text-center`} id={id}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-primary-light/20 to-blue-primary/5 flex items-center justify-center mb-5 mx-auto">
                    <Icon className="w-8 h-8 text-blue-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-tint text-blue-navy text-xs font-bold mb-3">
                    {service.destination}
                  </span>
                  <h2 className="font-heading font-bold text-3xl text-blue-navy mb-3">{service.title}</h2>
                  <div className="w-16 h-0.5 bg-blue-primary mb-5 rounded-full mx-auto" />
                  <p className="text-slate-muted leading-relaxed mb-6 max-w-xl mx-auto">{service.description}</p>
                  <ul className="space-y-3 mb-8 inline-block text-left mx-auto">
                    {(service.features ?? []).map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-muted text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    <Button to="/contact" variant="blue" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Enquire Now
                    </Button>
                  </div>
                </div>
                <div className={isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-3xl overflow-hidden shadow-blue border border-blue-tint-dark">
                    <img
                      src={visaImagesBySlug[service.slug] || fallbackVisaImages[index % fallbackVisaImages.length]}
                      alt={service.title}
                      className="w-full h-[420px] object-cover"
                      width="900"
                      height="600"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-navy/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-heading font-bold text-lg">{service.title}</p>
                      <p className="text-blue-tint-lightest text-xs">Sydney Immigration India — Kaithal Branch</p>
                    </div>
                  </motion.div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {['Expert policy knowledge', 'Document verification', 'End-to-end filing', 'Interview prep'].map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-muted">
                        <CheckCircle className="w-4 h-4 text-blue-primary shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-blue-navy to-blue-navy-dark relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.3),_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-blue-tint-lightest text-base sm:text-lg mb-10">Book a free consultation with our expert consultants today.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Button to="/apply" variant="blue" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Apply Now
            </Button>
            <Button to="/contact" variant="secondary" leftIcon={<MessageCircle className="w-5 h-5" />}>
              Book Free Consultation
            </Button>
            <Button href={contact.phoneLink} variant="secondary" leftIcon={<Phone className="w-5 h-5" />}>
              {contact.phone}
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
