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
import SectionTitle from '../components/SectionTitle';
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
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529070538774-18298c8fb782?auto=format&fit=crop&w=1920&q=80"
          alt="Airplane flying above the clouds"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 via-primary-navy/75 to-primary-navy/35" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 sm:py-40 lg:py-44">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl space-y-6 sm:space-y-7"
          >
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {hero.heading || 'Your Gateway to Global Opportunities'}
            </h1>
            <p className="max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              {hero.subheading}
            </p>
            <motion.img
              src="/sydney-immigration-logo.png"
              alt="Sydney Immigration"
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.2 },
                scale: { duration: 0.5, delay: 0.2 },
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="h-auto w-36 rounded-xl shadow-elevated sm:w-44"
            />
            <div className="flex flex-wrap gap-4">
              <Button
                to={hero.primaryButton?.link || '/contact'}
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {hero.primaryButton?.text || 'Free Consultation'}
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                {hero.secondaryButton?.text || 'Our Services'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Visa guidance, every step of the way"
            className="mb-8"
          />
          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-y-6 border-y border-primary-navy/10 py-7 md:grid-cols-4 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary-navy">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-secondary-gray">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding mb-6 bg-secondary-light sm:mb-8">
        <div className="container-custom">
          <SectionTitle
            title="Support for every visa pathway"
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = getVisaIcon(service.icon);
              return (
                <article key={service.id} className="soft-card rounded-2xl p-5">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-gold/15 text-primary-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary-gray">
                    {serviceSummaries[service.slug] || service.description}
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary-navy/75">{service.destination}</p>
                  <Link
                    to={`/services#${service.slug}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-gold-dark hover:gap-3"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="mt-20 border-t border-primary-navy/10 pt-12">
            <SectionTitle
              title="Your visa process"
              className="mb-8"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-navy text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-secondary-gray">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Where would you like to go?"
            subtitle="Compare destinations and visa options."
            className="mb-8"
          />
          <div className="mb-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {goals.map((goal) => {
              const Icon = goalIcons[goal.id] ?? GraduationCap;
              const selected = goal.id === activeGoalData.id;
              return (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => setActiveGoal(goal.id)}
                  aria-pressed={selected}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                    selected
                      ? 'border-primary-navy bg-primary-navy text-white'
                      : 'border-primary-navy/15 bg-white text-primary-navy hover:border-primary-gold'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {goal.label}
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGoalData.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 rounded-3xl bg-secondary-light p-6 sm:p-8 lg:grid-cols-2 lg:gap-10"
            >
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-gold/15 text-primary-navy">
                  <ActiveGoalIcon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-primary-navy">{activeGoalData.heading}</h3>
                <p className="mt-3 leading-6 text-secondary-gray">{activeGoalData.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(activeGoalData.countries ?? []).map((country) => (
                    <span key={country} className="rounded-full bg-white px-3 py-1.5 text-sm text-primary-navy">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <ul className="space-y-2">
                  {(activeGoalData.highlights ?? []).slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-primary-navy">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-gold-dark" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Button to="/apply" variant="gold" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Find out more
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.id}
                className="flex items-start gap-4 rounded-2xl border border-primary-navy/10 p-5"
              >
                <span className="text-3xl" aria-hidden="true">{destination.flag}</span>
                <div>
                  <h3 className="font-heading font-semibold text-primary-navy">{destination.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-5 text-secondary-gray">{destination.description}</p>
                  <p className="mt-2 line-clamp-1 text-xs leading-5 text-primary-navy/75">
                    {(destination.popularVisas ?? []).join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {testimonials.length > 0 && (
            <>
              <SectionTitle
                eyebrow="Client stories"
                title="What our clients say"
                subtitle="Thoughtful support can make a complex process feel simpler."
              />
              <div className="grid gap-5 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <article key={testimonial.id} className="rounded-2xl border border-primary-navy/10 p-6 sm:p-7">
                    <div className="mb-4 flex items-center gap-1 text-primary-gold-dark" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: testimonial.rating }, (_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm leading-7 text-secondary-gray">“{testimonial.text}”</p>
                    <div className="mt-5 flex items-center gap-3">
                      <img src={testimonial.image} alt="" className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                      <div>
                        <p className="text-sm font-semibold text-primary-navy">{testimonial.name}</p>
                        <p className="text-xs text-secondary-gray">{testimonial.visaType} · {testimonial.location}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
          {galleryImages.length > 0 && (
            <div className="mt-14 border-t border-primary-navy/10 pt-10">
              <div className="mb-7 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-gold-dark">Our gallery</p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-primary-navy">A glimpse of our work</h3>
                </div>
                <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-navy">
                  View gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {galleryImages.slice(0, 3).map((image) => (
                  <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    className="h-40 w-full rounded-2xl object-cover sm:h-52"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
