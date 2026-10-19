import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { siteContent } from '../data/content';
import { getVisaIcon } from '../components/VisaIcons';

const visaServices = siteContent.visaServices ?? [];
const destinations = siteContent.destinations ?? [];
const whyChooseUs = siteContent.whyChooseUs ?? [];
const contact = siteContent.contact ?? {};

const visaImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
];

export default function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive immigration support for every pathway — expertly guided, transparently priced."
        breadcrumb="Our Services"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      />

      {/* SERVICES (alternating) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
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
                <div className={`scroll-mt-32 ${isReverse ? 'lg:col-start-2' : ''}`} id={id}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-primary-gold" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-navy/5 text-primary-navy text-xs font-bold mb-3">
                    {service.destination}
                  </span>
                  <h2 className="font-heading font-bold text-3xl text-primary-navy mb-3">{service.title}</h2>
                  <div className="w-16 h-0.5 bg-primary-gold mb-5 rounded-full" />
                  <p className="text-secondary-gray leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5 mb-7">
                    {(service.features ?? []).map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-secondary-gray text-sm">
                        <CheckCircle className="w-5 h-5 text-primary-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="gold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Enquire Now
                  </Button>
                </div>
                <div className={isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-3xl overflow-hidden shadow-elevated">
                    <img
                      src={visaImages[index % visaImages.length]}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-heading font-bold text-lg">{service.title}</p>
                      <p className="text-gray-200 text-xs">Sydney Immigration India — Kaithal Branch</p>
                    </div>
                  </motion.div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {['Expert policy knowledge', 'Document verification', 'End-to-end filing', 'Interview prep'].map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-secondary-gray">
                        <CheckCircle className="w-4 h-4 text-primary-gold shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-20 sm:py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Destinations"
            title="Countries We Serve"
            subtitle="Specialized expertise for the world's top immigration destinations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((country, index) => (
              <ScrollReveal key={country.id} y={30} delay={index * 0.08} className="h-full">
                <div
                  id={country.slug}
                  className="h-full scroll-mt-32 bg-white rounded-2xl p-7 shadow-soft border border-gray-100 hover:shadow-elevated transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{country.flag}</span>
                    <h3 className="font-heading font-bold text-xl text-primary-navy">{country.name}</h3>
                  </div>
                  <p className="text-secondary-gray text-sm mb-4">{country.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {(country.popularVisas ?? []).map((v, i) => (
                      <span key={i} className="badge badge-navy text-xs">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Why Us" title="The SII Advantage" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.id} y={30} delay={index * 0.1} className="h-full">
                <div className="h-full bg-white rounded-2xl p-7 shadow-soft border border-gray-100 hover:shadow-elevated text-center transition-all">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 text-primary-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-navy text-lg mb-2">{item.title}</h3>
                  <p className="text-secondary-gray text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-primary-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,55,0.2),_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">Book a free consultation with our expert consultants today.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Button to="/apply" variant="gold" rightIcon={<ArrowRight className="w-5 h-5" />}>
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
      </section>
    </>
  );
}
