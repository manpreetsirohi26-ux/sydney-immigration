import { motion } from 'framer-motion';
import { Target, Eye, Award, MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { siteContent } from '../data/content';

const about = siteContent.about ?? {};
const story = about.story ?? {};
const paragraphs = story.paragraphs ?? [];
const values = about.values ?? [];
const stats = about.stats ?? [];
const branchInfo = about.branchInfo ?? {};
const contact = siteContent.contact ?? {};
const cta = siteContent.cta ?? {};

const branchDetails = [
  { icon: MapPin, label: 'Address', value: branchInfo.address, link: contact.mapUrl },
  { icon: Phone, label: 'Phone', value: branchInfo.phone, link: contact.phoneLink },
  { icon: Mail, label: 'Email', value: branchInfo.email, link: branchInfo.email ? `mailto:${branchInfo.email}` : null },
  { icon: Clock, label: 'Working Hours', value: branchInfo.hours, link: null },
].filter((item) => item.value);

export default function About() {
  return (
    <>
      <Seo
        title="About Sydney Immigration India | Kaithal Visa Guidance"
        description="Meet Sydney Immigration India in Kaithal. Learn about our team, approach and visa guidance for students, workers and families planning to travel abroad."
        keywords="Sydney Immigration India Kaithal, Kaithal immigration consultancy, visa guidance Haryana, immigration consultant background"
      />
      <PageBanner
        title="About Sydney Immigration India in Kaithal"
        subtitle={siteContent.tagline}
        breadcrumb="About Us"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      {/* STORY */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="section-padding bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal x={-30} y={0} className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                  alt="Immigration consultants discussing visa options"
                  className="rounded-3xl shadow-blue w-full h-[460px] object-cover"
                  width="900"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-3xl border-4 border-blue-primary-light opacity-90" />
                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-3xl bg-blue-primary-light/20" />
              </div>
            </ScrollReveal>
            <ScrollReveal x={30} y={0} delay={0.15}>
              <span className="inline-block text-blue-primary-light text-xs font-bold tracking-widest uppercase mb-3 block">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-blue-navy mb-4 leading-tight">
                {story.heading || 'Our Story'}
              </h2>
              <div className="w-16 h-1 bg-blue-primary mb-8 rounded-full" />
              <div className="space-y-5 text-slate-muted leading-relaxed text-sm sm:text-base">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-12">
                <Button to="/contact" variant="blue" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start Your Journey
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </motion.section>

      <div className="section-sep" />

      {/* MISSION & VISION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="section-padding bg-section-alt"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-primary-light text-xs font-bold tracking-widest uppercase mb-3">
              Our Purpose
            </span>
            <h2 className="section-heading">Mission & Vision</h2>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal y={30} className="h-full">
              <div className="aesthetic-card flex h-full flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-primary-light/20 to-blue-primary/5 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-blue-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-blue-navy mb-3">
                  {about.mission?.heading || 'Our Mission'}
                </h3>
                <p className="text-slate-muted leading-relaxed flex-1">{about.mission?.text}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal y={30} delay={0.1} className="h-full">
              <div className="aesthetic-card flex h-full flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-primary-light/20 to-blue-primary/5 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-blue-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-blue-navy mb-3">
                  {about.vision?.heading || 'Our Vision'}
                </h3>
                <p className="text-slate-muted leading-relaxed flex-1">{about.vision?.text}</p>
              </div>
            </ScrollReveal>
          </div>

          {values.length > 0 && (
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} y={20} delay={i * 0.08}>
                  <div className="aesthetic-card p-6">
                    <h4 className="font-heading font-bold text-blue-navy mb-2">{v.title}</h4>
                    <p className="text-slate-muted text-sm leading-6">{v.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      <div className="section-sep" />

      {/* STATS */}
      {stats.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="py-20 sm:py-24 bg-gradient-to-r from-blue-navy to-blue-navy-dark relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.3),_transparent_70%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">Our Achievements</h2>
              <p className="text-blue-tint-lightest mt-3">Numbers that reflect our commitment to client success.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} y={20} delay={i * 0.1}>
                  <div className="text-center p-6 rounded-3xl bg-white/10 backdrop-blur border border-white/10 shadow-soft">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-blue-primary-light/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-primary-light" />
                    </div>
                    <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-1.5">
                      <Counter end={stat.value} suffix={stat.suffix} duration={2.2} />
                    </p>
                    <p className="text-blue-tint-lightest text-sm">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <div className="section-sep" />

      {/* BRANCH INFO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="section-padding bg-section-alt"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-primary-light text-xs font-bold tracking-widest uppercase mb-3">
              Visit Us
            </span>
            <h2 className="section-heading">{branchInfo.heading || 'Kaithal Branch'}</h2>
            <div className="section-divider" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal x={-30} y={0}>
              <div className="aesthetic-card p-7 space-y-5 h-full">
                {branchDetails.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-primary-light/20 to-blue-primary/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-blue-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-blue-navy text-sm">{item.label}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-slate-muted text-sm hover:text-blue-primary transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-muted text-sm break-words">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                <Button to="/contact" variant="blue" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Get Directions
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal x={30} y={0}>
              <div className="rounded-3xl overflow-hidden shadow-blue border border-blue-tint-dark/40 h-[460px]">
                <iframe
                  src={branchInfo.mapEmbedUrl || contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sydney Immigration Kaithal Branch"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </motion.section>

      <div className="section-sep" />

      {/* CTA */}
      <CtaSection cta={cta} contact={contact} />
    </>
  );
}

function CtaSection({ cta, contact }) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-navy to-blue-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.3),_transparent_70%)]" />
      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4 leading-tight text-center"
        >
          {cta.heading || 'Ready to Start Your Journey?'}
        </motion.h2>
        <p className="text-blue-tint-lightest text-base sm:text-lg mb-12 text-center leading-relaxed">{cta.subheading}</p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Button to="/apply" variant="blue" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Apply Now
          </Button>
          <Button to={cta.buttonLink || '/contact'} variant="secondary" leftIcon={<MessageCircle className="w-5 h-5" />}>
            {cta.buttonText || 'Book Free Consultation'}
          </Button>
          <Button href={contact.phoneLink} variant="secondary" leftIcon={<Phone className="w-5 h-5" />}>
            {cta.phone || contact.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
