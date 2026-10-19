import { motion } from 'framer-motion';
import { Target, Eye, Award, MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';
import Button from '../components/Button';
import { siteContent } from '../data/content';

const about = siteContent.about ?? {};
const story = about.story ?? {};
const paragraphs = story.paragraphs ?? [];
const values = about.values ?? [];
const stats = about.stats ?? [];
const team = about.team ?? [];
const branchInfo = about.branchInfo ?? {};
const contact = siteContent.contact ?? {};
const cta = siteContent.cta ?? {};

const branchDetails = [
  { icon: MapPin, label: 'Address', value: branchInfo.address, link: null },
  { icon: Phone, label: 'Phone', value: branchInfo.phone, link: contact.phoneLink },
  { icon: Mail, label: 'Email', value: branchInfo.email, link: branchInfo.email ? `mailto:${branchInfo.email}` : null },
  { icon: Clock, label: 'Working Hours', value: branchInfo.hours, link: null },
].filter((item) => item.value);

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle={siteContent.tagline}
        breadcrumb="About Us"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      {/* STORY */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal x={-30} y={0} className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                  alt="Team discussion"
                  className="rounded-3xl shadow-elevated w-full h-[420px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl border-4 border-primary-gold" />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-3xl bg-primary-gold/20" />
              </div>
            </ScrollReveal>
            <ScrollReveal x={30} y={0} delay={0.15}>
              <span className="inline-block text-primary-gold text-xs font-bold tracking-widest uppercase mb-3">
                Our Journey
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary-navy mb-4">
                {story.heading || 'Our Story'}
              </h2>
              <div className="w-16 h-0.5 bg-primary-gold mb-6 rounded-full" />
              <div className="space-y-4 text-secondary-gray leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="gold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Start Your Journey
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 sm:py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Our Purpose" title="Mission & Vision" />
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal y={30} className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary-gold" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary-navy mb-3">
                  {about.mission?.heading || 'Our Mission'}
                </h3>
                <p className="text-secondary-gray leading-relaxed">{about.mission?.text}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal y={30} delay={0.1} className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-primary-gold" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary-navy mb-3">
                  {about.vision?.heading || 'Our Vision'}
                </h3>
                <p className="text-secondary-gray leading-relaxed">{about.vision?.text}</p>
              </div>
            </ScrollReveal>
          </div>

          {values.length > 0 && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} y={20} delay={i * 0.08}>
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-soft h-full">
                    <h4 className="font-heading font-bold text-primary-navy mb-1">{v.title}</h4>
                    <p className="text-secondary-gray text-sm">{v.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* STATS */}
      {stats.length > 0 && (
        <section className="py-20 sm:py-24 bg-gradient-to-r from-primary-navy to-primary-navy-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,55,0.15),_transparent_70%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">Our Achievements</h2>
              <p className="text-gray-300 mt-2">Numbers that reflect our commitment to client success.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} y={20} delay={i * 0.1}>
                  <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 h-full">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-gold/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-gold" />
                    </div>
                    <p className="font-heading font-extrabold text-4xl text-white">
                      <Counter end={stat.value} suffix={stat.suffix} duration={2.2} />
                    </p>
                    <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TEAM */}
      {team.length > 0 && (
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Our Team"
              title="Meet Our Experts"
              subtitle="Licensed consultants and dedicated professionals committed to your success."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <ScrollReveal key={m.id ?? m.name} y={30} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-elevated transition-all h-full">
                    <div className="aspect-square relative bg-gradient-to-br from-primary-navy to-primary-navy-dark overflow-hidden">
                      <img
                        src={m.image || '/team-placeholder.svg'}
                        alt={m.name}
                        className="w-full h-full object-cover opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/70 to-transparent" />
                      {m.linkedin && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <a
                            href={m.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-primary-gold text-primary-navy flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label={`${m.name} on LinkedIn`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-heading font-bold text-primary-navy">{m.name}</h3>
                      <p className="text-primary-gold text-sm font-semibold mt-0.5">{m.role}</p>
                      <p className="text-secondary-gray text-xs mt-2">
                        {[m.experience, m.specialization].filter(Boolean).join(' · ')}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BRANCH INFO */}
      <section className="py-20 sm:py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Visit Us" title={branchInfo.heading || 'Kaithal Branch'} />
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal x={-30} y={0}>
              <div className="bg-white rounded-2xl p-7 shadow-soft border border-gray-100 space-y-5 h-full">
                {branchDetails.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-gold" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-primary-navy text-sm">{item.label}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-secondary-gray text-sm hover:text-primary-gold transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-secondary-gray text-sm break-words">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                <Button to="/contact" variant="gold" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Get Directions
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal x={30} y={0}>
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-gray-100 h-[420px]">
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
      </section>

      {/* CTA */}
      <CtaSection cta={cta} contact={contact} />
    </>
  );
}

function CtaSection({ cta, contact }) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-navy to-primary-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,55,0.2),_transparent_70%)]" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4"
        >
          {cta.heading || 'Ready to Start Your Journey?'}
        </motion.h2>
        <p className="text-gray-300 text-base sm:text-lg mb-8">{cta.subheading}</p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Button to="/apply" variant="gold" rightIcon={<ArrowRight className="w-5 h-5" />}>
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
