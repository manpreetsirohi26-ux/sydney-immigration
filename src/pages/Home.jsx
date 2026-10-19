import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Minus,
  Plus,
  MessageCircle,
  BadgeCheck,
  Award,
  TrendingUp,
  Globe2,
  Star,
  GraduationCap,
  Briefcase,
  Home as HomeIcon,
  Plane,
  Building2,
  HeartHandshake,
  CheckCircle2,
  Quote,
  BookOpen,
  Clock,
  MapPin,
  Mail,
  Images,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';
import Button from '../components/Button';
import { siteContent } from '../data/content';
import { galleryImages } from '../data/gallery';
import { getVisaIcon } from '../components/VisaIcons';

const hero = siteContent.hero ?? {};
const visaServices = siteContent.visaServices ?? [];
const destinations = siteContent.destinations ?? [];
const whyChooseUs = siteContent.whyChooseUs ?? [];
const processSteps = siteContent.processSteps ?? [];
const testimonials = siteContent.testimonials ?? [];
const stats = siteContent.about?.stats ?? [];
const cta = siteContent.cta ?? {};
const contact = siteContent.contact ?? {};
const credentials = siteContent.credentials ?? [];
const goals = siteContent.goals ?? [];
const successStories = siteContent.successStories ?? [];
const insights = siteContent.insights ?? [];
const team = siteContent.about?.team ?? [];
const branchInfo = siteContent.about?.branchInfo ?? {};

const credentialIcons = [BadgeCheck, Award, TrendingUp, Globe2, Star, CheckCircle];
const goalIcons = {
  study: GraduationCap,
  work: Briefcase,
  pr: HomeIcon,
  visit: Plane,
  business: Building2,
  family: HeartHandshake,
};

const trustBadges = [
  { title: 'Expert Guidance', desc: 'Licensed consultants, 15+ years' },
  { title: 'Transparent Process', desc: 'Clear fees, honest advice' },
  { title: 'End-to-End Support', desc: 'From counselling to landing' },
];

const faqs = [
  { q: 'How long does the visa process take?', a: 'The processing time varies by visa type and country, typically from a few weeks to several months. We give you a realistic timeline during your free consultation.' },
  { q: 'Do you guarantee visa approval?', a: 'No consultant can guarantee approval — visa decisions rest with the respective immigration authorities. We focus on preparing complete, accurate applications that maximise your chances.' },
  { q: 'Can I apply for multiple countries at once?', a: 'Yes, we can assess and design a strategy covering multiple destinations, but each application is handled independently to avoid conflicts.' },
  { q: 'What documents do I need?', a: 'Documents depend on visa type — generally identity proof, education certificates, experience letters, language test results, and financial evidence. We provide a personalised checklist.' },
  { q: 'Are your fees refundable?', a: 'Fees are discussed transparently upfront. Refund terms depend on the service stage and stage of work completed, which we share in writing before you proceed.' },
];

export default function Home() {
  const [activeGoal, setActiveGoal] = useState(goals[0]?.id ?? null);
  const activeGoalData = goals.find((g) => g.id === activeGoal) ?? goals[0] ?? {};
  const ActiveGoalIcon = goalIcons[activeGoalData.id] ?? GraduationCap;

  return (
    <>
      {/* HERO / PAGE BANNER */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1529070538774-18298c8fb782?auto=format&fit=crop&w=1920&q=80"
          alt="Airport runway"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/80 to-primary-navy/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,165,55,0.25),_transparent_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-gold text-xs font-bold tracking-widest uppercase mb-6">
              Kaithal Branch · Established 2010
            </span>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              {hero.heading || 'Your Gateway to Global Opportunities'}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">{hero.subheading}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button to={hero.primaryButton?.link || '/contact'} variant="gold" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                {hero.primaryButton?.text || 'Free Consultation'}
              </Button>
              <Button to={hero.secondaryButton?.link || '/services'} variant="secondary" size="lg">
                {hero.secondaryButton?.text || 'Our Services'}
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              {trustBadges.map((b) => (
                <div key={b.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-gold/20 backdrop-blur flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{b.title}</p>
                    <p className="text-gray-300 text-xs">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {stats.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 hidden sm:block">
            <div className="max-w-5xl mx-auto px-4">
              <ScrollReveal y={30}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-elevated border border-gray-100 p-6">
                  {stats.map((st) => (
                    <div key={st.label} className="text-center">
                      <p className="font-heading font-extrabold text-3xl text-primary-navy">
                        <Counter end={st.value} suffix={st.suffix} />
                      </p>
                      <p className="text-secondary-gray text-xs uppercase tracking-wide mt-1">{st.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}
      </section>

      <div className="h-20" />

      {/* CREDENTIALS / TRUST STRIP */}
      {credentials.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {credentials.map((c, i) => {
                const Icon = credentialIcons[i % credentialIcons.length];
                return (
                  <ScrollReveal key={c.title} y={20} delay={i * 0.06}>
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-gold" />
                      </div>
                      <p className="font-heading font-bold text-primary-navy text-sm">{c.title}</p>
                      <p className="text-secondary-gray text-xs">{c.text}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* VISA SERVICES */}
      <section className="py-20 sm:py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Visa Services"
            title="Comprehensive Immigration Solutions"
            subtitle="Expert guidance for every visa category. Choose your pathway to global opportunities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaServices.map((service, index) => {
              const Icon = getVisaIcon(service.icon);
              return (
                <ScrollReveal key={service.id} y={30} delay={(index % 4) * 0.1} className="h-full">
                  <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-soft hover:shadow-elevated hover:border-primary-gold/40 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                      <Icon className="w-7 h-7 text-primary-gold" />
                    </div>
                    <h3 className="font-heading font-bold text-primary-navy text-lg mb-2">{service.title}</h3>
                    <p className="text-secondary-gray text-sm leading-relaxed mb-4">{service.description}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-primary-gold font-semibold text-sm group-hover:gap-2 transition-all"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal y={20} className="text-center mt-12">
            <Button to="/services" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore All Services
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* FIND YOUR PATH (interactive) */}
      {goals.length > 0 && (
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Find Your Path"
              title="What's Your Goal?"
              subtitle="Select your aim and see how we help you achieve it — with the right country, visa and support."
            />
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {goals.map((g) => {
                const Icon = goalIcons[g.id] ?? GraduationCap;
                const active = g.id === activeGoalData.id;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setActiveGoal(g.id)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                      active
                        ? 'bg-primary-navy text-white border-primary-navy shadow-elevated'
                        : 'bg-white text-primary-navy border-gray-200 hover:border-primary-gold'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {g.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGoalData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid lg:grid-cols-2 gap-10 items-center bg-secondary-light rounded-3xl p-7 sm:p-10 border border-gray-100"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center mb-5">
                    <ActiveGoalIcon className="w-7 h-7 text-primary-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-primary-navy mb-3">
                    {activeGoalData.heading}
                  </h3>
                  <p className="text-secondary-gray mb-6">{activeGoalData.blurb}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {(activeGoalData.countries ?? []).map((c) => (
                      <span key={c} className="text-sm px-3 py-1 rounded-full bg-white border border-gray-200 text-primary-navy">
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button to="/apply" variant="gold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Apply Now
                    </Button>
                    <Button to="/contact" variant="outline">
                      Talk to an Expert
                    </Button>
                  </div>
                </div>
                <ul className="space-y-3">
                  {(activeGoalData.highlights ?? []).map((h) => (
                    <li key={h} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-soft">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-primary-navy font-medium text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* DESTINATIONS */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Popular Destinations"
            title="Your Dream Destinations"
            subtitle="We specialize in immigration to the world's most sought-after countries."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((country, index) => (
              <ScrollReveal key={country.id} y={30} delay={index * 0.08}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80"
                    alt={country.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/40 to-transparent" />
                  <div className="absolute top-4 right-4 text-5xl">{country.flag}</div>
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="font-heading font-bold text-white text-2xl mb-1">{country.name}</h3>
                    <p className="text-gray-200 text-sm">{country.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {(country.popularVisas ?? []).slice(0, 3).map((v, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur text-white">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal y={20} className="text-center mt-12">
            <Button to="/services" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Compare Destinations
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal x={-30} y={0} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
                  alt="Consultation"
                  className="w-full h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-white rounded-2xl shadow-elevated p-5 border border-primary-gold/30">
                <p className="font-heading font-extrabold text-3xl text-primary-navy">15+</p>
                <p className="text-secondary-gray text-xs uppercase tracking-wide">Years Experience</p>
              </div>
            </ScrollReveal>
            <ScrollReveal x={30} y={0} delay={0.15}>
              <span className="inline-block text-primary-gold text-xs font-bold tracking-widest uppercase mb-3">
                Why Choose Us
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary-navy mb-4">
                Your Trusted Immigration Partner
              </h2>
              <div className="w-16 h-0.5 bg-primary-gold mb-6 rounded-full" />
              <p className="text-secondary-gray text-base sm:text-lg mb-8">
                Four pillars that make us the preferred choice for thousands of successful applicants.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <ScrollReveal key={item.id} x={30} y={0} delay={i * 0.1}>
                    <div className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-soft hover:shadow-elevated transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-primary-navy mb-1">{item.title}</h3>
                        <p className="text-secondary-gray text-sm">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      {successStories.length > 0 && (
        <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Success Stories"
              title="Real People, Real Results"
              subtitle="A few of the many families we've helped move abroad with confidence."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((s, i) => (
                <ScrollReveal key={s.id} y={30} delay={i * 0.1} className="h-full">
                  <div className="h-full bg-secondary-light rounded-2xl p-7 border border-gray-100 shadow-soft hover:shadow-elevated transition-all relative">
                    <Quote className="w-9 h-9 text-primary-gold/25 absolute top-5 right-5" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(s.rating || 5)].map((_, k) => (
                        <Star key={k} className="w-4 h-4 text-primary-gold fill-primary-gold" />
                      ))}
                    </div>
                    <p className="font-heading font-bold text-lg text-primary-navy mb-2">{s.result}</p>
                    <div className="flex flex-wrap gap-2 mb-4 text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-primary-navy text-white font-semibold">{s.visa}</span>
                      <span className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-secondary-gray inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-primary-gold" /> {s.time}
                      </span>
                    </div>
                    <p className="text-secondary-gray text-sm leading-relaxed mb-5">&ldquo;{s.text}&rdquo;</p>
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <div>
                        <p className="font-heading font-bold text-primary-navy text-sm">{s.name}</p>
                        <p className="text-secondary-gray text-xs inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-primary-gold" /> {s.from}
                        </p>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal y={20} className="text-center mt-12">
              <Button to="/gallery" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                See More Success Stories
              </Button>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* PROCESS TIMELINE */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-light/50 to-white" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Our Process" title="Step-by-Step Journey to Your Visa" />
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-gold to-primary-navy -translate-x-1/2" />
            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <ScrollReveal
                  key={step.step}
                  x={index % 2 === 0 ? -40 : 40}
                  y={0}
                  delay={index * 0.08}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}
                >
                  <div className="absolute md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-navy to-primary-navy-dark text-white font-heading font-bold text-lg flex items-center justify-center shadow-gold border-4 border-white z-10">
                    {step.step}
                  </div>
                  <div className="ml-16 md:ml-0 bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-elevated transition-shadow">
                    <h3 className="font-heading font-bold text-primary-navy mb-1">{step.title}</h3>
                    <p className="text-secondary-gray text-sm">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      {galleryImages.length > 0 && (
        <section className="py-20 sm:py-24 bg-secondary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Gallery"
              title="A Glimpse Into Our World"
              subtitle="Our office, our events and our happy clients."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.slice(0, 6).map((img, i) => (
                <ScrollReveal key={img.id} y={20} delay={(i % 3) * 0.08}>
                  <Link to="/gallery" className="group block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <p className="text-white font-semibold text-sm">{img.caption}</p>
                      <span className="text-primary-gold text-xs inline-flex items-center gap-1">
                        View gallery <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal y={20} className="text-center mt-12">
              <Button to="/gallery" variant="gold" leftIcon={<Images className="w-4 h-4" />}>
                View Full Gallery
              </Button>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* TEAM PREVIEW */}
      {team.length > 0 && (
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Our Team"
              title="Experts Behind Your Success"
              subtitle="Licensed consultants and specialists dedicated to your case."
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <ScrollReveal key={m.id} y={30} delay={i * 0.08}>
                  <div className="group text-center bg-secondary-light rounded-2xl p-6 border border-gray-100 hover:shadow-elevated transition-all">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-soft mb-4 bg-white">
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <h3 className="font-heading font-bold text-primary-navy">{m.name}</h3>
                    <p className="text-primary-gold text-xs font-semibold mb-1">{m.role}</p>
                    <p className="text-secondary-gray text-xs mb-3">{m.specialization}</p>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white border border-gray-200 text-primary-navy hover:bg-primary-navy hover:text-white transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal y={20} className="text-center mt-12">
              <Button to="/about" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Meet The Full Team
              </Button>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="py-20 sm:py-24 bg-secondary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Client Stories" title="What Our Clients Say" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.id} y={30} delay={i * 0.1} className="h-full">
                  <div className="h-full bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-elevated transition-all">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating || 5)].map((_, k) => (
                        <svg key={k} className="w-4 h-4 text-primary-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-secondary-gray text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="font-heading font-bold text-primary-navy text-sm">{t.name}</p>
                      <p className="text-secondary-gray text-xs">
                        {t.location} · {t.visaType}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INSIGHTS / TIPS */}
      {insights.length > 0 && (
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Insights & Tips"
              title="Immigration Insights & Tips"
              subtitle="Practical guidance to help you plan a successful move abroad."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((a, i) => (
                <ScrollReveal key={a.id} y={30} delay={i * 0.1} className="h-full">
                  <div className="h-full flex flex-col bg-secondary-light rounded-2xl border border-gray-100 shadow-soft hover:shadow-elevated transition-all overflow-hidden">
                    <div className="h-28 bg-gradient-to-br from-primary-navy to-primary-navy-dark relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,55,0.25),_transparent_70%)]" />
                      <BookOpen className="w-10 h-10 text-primary-gold relative" />
                      <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary-gold text-primary-navy">
                        {a.tag}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-primary-navy text-lg mb-2">{a.title}</h3>
                      <p className="text-secondary-gray text-sm leading-relaxed flex-1">{a.excerpt}</p>
                      <Link
                        to="/services"
                        className="mt-5 inline-flex items-center gap-1 text-primary-gold font-semibold text-sm hover:gap-2 transition-all"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={i} item={f} />
            ))}
          </div>
        </div>
      </section>

      {/* VISIT OUR OFFICE */}
      <section className="py-20 sm:py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal x={-30} y={0}>
              <span className="inline-block text-primary-gold text-xs font-bold tracking-widest uppercase mb-3">
                Visit Us
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary-navy mb-4">
                Meet Us at Our Kaithal Office
              </h2>
              <div className="w-16 h-0.5 bg-primary-gold mb-6 rounded-full" />
              <p className="text-secondary-gray mb-8">
                Prefer to talk in person? Drop by our office for a free, no-obligation consultation. We&apos;re happy to
                answer all your questions face to face.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-gray-100">
                    <MapPin className="w-5 h-5 text-primary-gold" />
                  </div>
                  <span className="text-secondary-gray text-sm pt-2">{branchInfo.address || contact.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-gray-100">
                    <Phone className="w-5 h-5 text-primary-gold" />
                  </div>
                  <a href={contact.phoneLink} className="text-secondary-gray text-sm pt-2 hover:text-primary-gold transition-colors">
                    {branchInfo.phone || contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-gray-100">
                    <Clock className="w-5 h-5 text-primary-gold" />
                  </div>
                  <span className="text-secondary-gray text-sm pt-2">{branchInfo.hours || contact.workingHours}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-gray-100">
                    <Mail className="w-5 h-5 text-primary-gold" />
                  </div>
                  <a href={`mailto:${branchInfo.email || contact.emails?.[0]}`} className="text-secondary-gray text-sm pt-2 hover:text-primary-gold transition-colors break-all">
                    {branchInfo.email || contact.emails?.[0]}
                  </a>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button to="/apply" variant="gold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Apply Online
                </Button>
                <Button to="/contact" variant="outline" leftIcon={<MessageCircle className="w-4 h-4" />}>
                  Contact Us
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal x={30} y={0} delay={0.15}>
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-gray-100 bg-white">
                <iframe
                  src={contact.mapEmbedUrl || branchInfo.mapEmbedUrl}
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sydney Immigration Kaithal Branch Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-primary-navy to-primary-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,55,0.2),_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4">
            {cta.heading || 'Ready to Start Your Journey?'}
          </h2>
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
    </>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-heading font-semibold text-primary-navy hover:bg-secondary-light transition-colors"
      >
        <span>{item.q}</span>
        {open ? (
          <Minus className="w-5 h-5 text-primary-gold shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-primary-gold shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-secondary-gray text-sm leading-relaxed">{item.a}</div>
      </motion.div>
    </div>
  );
}
