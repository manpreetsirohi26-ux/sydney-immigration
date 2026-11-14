import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Home as HomeIcon,
  Plane,
  Star,
} from 'lucide-react';
import Button from '../components/Button';
import Counter from '../components/Counter';
import { getVisaIcon } from '../components/VisaIcons';
import Seo from '../components/Seo';
import { siteContent } from '../data/content';
import { galleryImages } from '../data/gallery';

const goalIcons = {
  study: GraduationCap,
  work: Briefcase,
  pr: HomeIcon,
  visit: Plane,
  business: Building2,
  family: HeartHandshake,
};

const serviceSummaries = {
  study: 'Course selection, admissions and student visa support.',
  work: 'Work permits, sponsorship and eligibility guidance.',
  pr: 'Skilled migration, family sponsorship and PR support.',
  visitor: 'Tourist, family visit and short-stay visa support.',
  business: 'Business travel and investor visa guidance.',
  spouse: 'Partner visa applications and relationship evidence.',
  family: 'Family reunification and dependent visa support.',
  citizenship: 'Citizenship eligibility, applications and test guidance.',
};

const content = siteContent;
const stats = content.about?.stats ?? [];
const goals = content.goals ?? [];

export default function Home() {
  const [activeGoal, setActiveGoal] = useState(goals[0]?.id ?? null);
  const activeGoalData = goals.find((goal) => goal.id === activeGoal) ?? goals[0] ?? {};
  const ActiveGoalIcon = goalIcons[activeGoalData.id] ?? GraduationCap;
  const hero = content.hero ?? {};
  const services = content.visaServices ?? [];
  const destinations = content.destinations ?? [];
  const processSteps = content.processSteps ?? [];
  const testimonials = content.testimonials ?? [];

  return (
    <>
      <Seo
        title="Visa Consultant in Kaithal | Sydney Immigration India"
        description="Trusted visa consultancy in Kaithal for study, work, PR, visitor and business immigration to Australia, Canada, UK, USA, New Zealand and Europe."
        keywords="immigration consultant Kaithal, visa consultant Kaithal, visa consultancy Haryana, study visa consultant, PR consultant Haryana"
      />
      {/* HERO */}
      <section className="relative min-h-[90svh] sm:min-h-[85vh] lg:min-h-[82vh] overflow-x-hidden bg-blue-navy flex items-center">
        {/* Background picture */}
        <div className="absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[55%] h-full">
          <img
            src="https://images.unsplash.com/photo-1529070538774-18298c8fb782?auto=format&fit=crop&w=1920&q=80"
            alt="Airplane flying above the clouds"
            className="h-full w-full object-cover object-center lg:object-right opacity-40 lg:opacity-100"
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
            aria-hidden="true"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-navy/90 via-blue-navy/80 to-blue-navy/90 lg:bg-gradient-to-r lg:from-blue-navy lg:via-blue-navy/90 lg:to-transparent" />
        {/* Blue animations behind content */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] rounded-full bg-blue-primary/20 blur-[80px] sm:blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-56 h-56 sm:w-80 sm:h-80 lg:w-[520px] lg:h-[520px] rounded-full bg-blue-primary/15 blur-[80px] sm:blur-[120px] animate-blob" style={{ animationDelay: '-3s' }} />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 left-1/3 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 rounded-full bg-blue-primary/15 blur-3xl lg:blur-4xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-32 sm:h-44 sm:w-44 lg:h-56 lg:w-56 rounded-full bg-blue-primary-lighter/25 blur-3xl lg:blur-4xl"
          animate={{ x: [0, 35, 0], y: [0, -28, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Flying airplane animation */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-20 text-white/40 drop-shadow-lg hidden sm:block"
          initial={{ x: '-15vw', y: '65vh', rotate: 20, opacity: 0 }}
          animate={{ x: '110vw', y: '10vh', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        >
          <Plane className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-20 text-blue-primary-light/30 hidden sm:block"
          initial={{ x: '-20vw', y: '75vh', rotate: 15, opacity: 0 }}
          animate={{ x: '115vw', y: '25vh', opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear', delay: 6, repeatDelay: 3 }}
        >
          <Plane className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </motion.div>
        {/* Content */}
        <div className="relative z-10 container-custom w-full py-24 sm:py-32 md:py-36 lg:py-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
            className="max-w-3xl mx-auto space-y-8 sm:space-y-9 text-center"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 34 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
              }}
              className="font-heading text-[1.7rem] leading-[1.2] font-bold !text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight break-words"
            >
              {hero.heading || 'Your Gateway to Global Opportunities'}
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              className="max-w-xl mx-auto text-sm leading-6 !text-white/90 sm:text-lg sm:leading-8 md:text-xl md:leading-9 mb-2"
            >
              {hero.subheading}
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
              }}
              className="flex flex-wrap gap-4 sm:gap-5 justify-center"
            >
              <Button
                to={hero.primaryButton?.link || '/contact'}
                variant="blue"
                size="xl"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                {hero.primaryButton?.text || 'Free Consultation'}
              </Button>
              <Button to="/services" variant="secondary" size="xl">
                {hero.secondaryButton?.text || 'Our Services'}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {stats.length > 0 && (
        <section className="bg-section-alt border-y border-blue-tint-dark/40">
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 gap-x-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className="stat-card"
                >
                  <div className="w-10 h-10 mx-auto mb-4 rounded-2xl bg-blue-primary-light flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                  <p className="font-heading text-3xl font-bold text-blue-navy mb-1.5">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ABOUT INTRO */}
      <section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center rounded-3xl border border-blue-tint-dark/40 bg-gradient-to-r from-blue-tint to-white p-8 sm:p-10 shadow-soft"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-primary-light">About Us</p>
              <h2 className="mt-1.5 font-heading text-2xl sm:text-3xl font-bold text-blue-navy">Sydney Immigration India</h2>
              <p className="mt-2.5 max-w-2xl text-sm sm:text-base leading-7 text-slate-muted">
                Kaithal-based guidance for study, work, visitor, and PR visa options abroad.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-blue-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-primary hover:-translate-y-0.5"
            >
              About our team <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-sep" />

      {/* SERVICES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-primary-light text-xs font-bold tracking-widest uppercase mb-3">
              Our Services
            </span>
            <h2 className="section-heading">Support for every visa pathway</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Expert guidance for study, work, PR, visitor, business, and family visas to destinations worldwide.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = getVisaIcon(service.icon);
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="aesthetic-card"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-tint text-blue-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-blue-navy mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-muted mb-5">
                    {serviceSummaries[service.slug] || service.description}
                  </p>
                  <span className="text-xs font-medium text-blue-navy/60">{service.destination}</span>
                  <Link
                    to={`/services#${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-primary hover:gap-3 transition-colors"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROCESS */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-primary-light text-xs font-bold tracking-widest uppercase mb-3">
              Process
            </span>
            <h2 className="section-heading">Your visa process</h2>
            <div className="section-divider" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="aesthetic-card flex flex-col items-center gap-4 text-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-navy text-sm font-bold text-white shadow-blue/30">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-blue-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* GOALS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-primary-light text-xs font-bold tracking-widest uppercase mb-3">
              Choose Your Path
            </span>
            <h2 className="section-heading">Where would you like to go?</h2>
            <div className="section-divider" />
            <p className="section-subheading">Compare destinations and visa options.</p>
          </div>
          <div className="mb-14 flex flex-wrap justify-center gap-3 sm:gap-4">
            {goals.map((goal) => {
              const Icon = goalIcons[goal.id] ?? GraduationCap;
              const selected = goal.id === activeGoalData.id;
              return (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => setActiveGoal(goal.id)}
                  aria-pressed={selected}
                  className={`inline-flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    selected
                      ? 'border-blue-navy bg-blue-navy text-white shadow-blue/25'
                      : 'border-blue-tint-dark/60 bg-white text-blue-navy hover:border-blue-primary-light hover:shadow-blue/20'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {goal.label}
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGoalData.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 rounded-3xl bg-blue-tint p-8 sm:p-10 lg:grid-cols-2 lg:gap-12 shadow-soft border border-blue-tint-dark/40"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-navy shadow-soft">
                  <ActiveGoalIcon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-blue-navy mb-3">
                  {activeGoalData.heading}
                </h3>
                <p className="leading-7 text-slate-muted mb-6">{activeGoalData.blurb}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(activeGoalData.countries ?? []).map((country) => (
                    <span key={country} className="rounded-full bg-blue-tint-dark/40 px-3 py-1.5 text-sm text-blue-navy border border-blue-tint-dark/60">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <ul className="space-y-3">
                  {(activeGoalData.highlights ?? []).slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm leading-7 text-blue-navy">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-primary-light" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Button to="/apply" variant="blue" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Find out more
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <motion.article
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 rounded-3xl border border-blue-tint-dark/40 p-6 transition-all duration-300 hover:border-blue-primary-light/60 hover:bg-white/40 shadow-soft"
              >
                <span className="text-3xl sm:text-4xl" aria-hidden="true">{destination.flag}</span>
                <div>
                  <h3 className="font-heading font-semibold text-blue-navy mb-1">{destination.name}</h3>
                  <p className="line-clamp-2 text-sm leading-6 text-slate-muted">{destination.description}</p>
                  <p className="mt-2 line-clamp-1 text-xs sm:text-sm leading-6 text-blue-navy/60">
                    {(destination.popularVisas ?? []).join(' · ')}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {testimonials.length > 0 && (
            <>
              <div className="text-center mb-16">
                <span className="inline-block text-blue-primary-light text-xs font-bold tracking-widest uppercase mb-3">
                  Client stories
                </span>
                <h2 className="section-heading">What our clients say</h2>
                <div className="section-divider" />
                <p className="section-subheading">Hear from our clients.</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <motion.article
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="aesthetic-card"
                  >
                    <div className="mb-5 flex items-center gap-1 text-blue-primary-light" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm leading-7 text-slate-muted mb-6">“{testimonial.text}”</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="h-12 w-12 rounded-full object-cover border border-blue-tint-dark/40"
                        width="48"
                        height="48"
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <p className="text-sm font-semibold text-blue-navy">{testimonial.name}</p>
                        <p className="text-xs text-slate-muted">{testimonial.visaType} · {testimonial.location}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
          {galleryImages.length > 0 && (
            <div className="mt-20 border-t border-blue-tint-dark/40 pt-16">
              <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-primary-light">Our gallery</p>
                  <h3 className="mt-1 font-heading text-2xl font-semibold text-blue-navy">A glimpse of our work</h3>
                </div>
                <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-navy hover:gap-3 transition-colors">
                  View gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3">
                {galleryImages.slice(0, 3).map((image, index) => (
                  <motion.img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ scale: 1.03 }}
                    className="h-52 sm:h-60 w-full rounded-2xl object-cover shadow-soft border border-blue-tint-dark/40 transition-all duration-500"
                    width="640"
                    height="420"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-blue-navy to-blue-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.35),_transparent_70%)]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-tint-lightest text-base sm:text-lg mb-10 leading-relaxed">
              Book your free consultation today and take the first step towards your dream destination.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center">
              <Button to="/apply" variant="blue" size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Apply Now
              </Button>
              <Button to="/contact" variant="secondary" size="xl" leftIcon={<HeartHandshake className="w-5 h-5" />}>
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
