import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import { siteContent } from '../data/content';

const contact = siteContent.contact ?? {};
const contactPage = siteContent.contactPage ?? {};
const form = contactPage.form ?? {};
const fields = form.fields ?? {};
const info = contactPage.info ?? {};
const social = siteContent.social ?? {};

const visaTypeOptions = fields.visaType?.options ?? [];
const countryOptions = fields.countryOfInterest?.options ?? [];

const EMPTY_FORM = { name: '', email: '', phone: '', countryOfInterest: '', visaType: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Invalid email format';
    if (!formData.phone.trim()) next.phone = 'Phone number is required';
    else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) next.phone = 'Invalid phone number';
    if (!formData.countryOfInterest) next.countryOfInterest = 'Please select a country';
    if (!formData.visaType) next.visaType = 'Please select a visa type';
    if (!formData.message.trim()) next.message = 'Message is required';
    else if (formData.message.trim().length < 20) next.message = 'Message must be at least 20 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitStatus('success');
    toast.success(form.successMessage || 'Thank you! Your enquiry has been submitted.');
    setFormData(EMPTY_FORM);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const infoItems = [
    {
      icon: MapPin,
      label: info.address?.label || 'Visit Our Office',
      value: info.address?.value || contact.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(info.address?.value || contact.address || '')}`,
      external: true,
    },
    {
      icon: Phone,
      label: info.phone?.label || 'Call Us',
      value: info.phone?.value || contact.phone,
      link: info.phone?.link || contact.phoneLink,
      external: false,
    },
    {
      icon: Mail,
      label: info.emails?.label || 'Email Us',
      value: (info.emails?.values ?? contact.emails?.map((t) => ({ text: t, link: `mailto:${t}` })) ?? [])
        .map((e) => e.text)
        .join(', '),
      link: null,
      external: false,
    },
    {
      icon: Clock,
      label: info.hours?.label || 'Working Hours',
      value: info.hours?.value || contact.workingHours,
      link: null,
      external: false,
    },
  ].filter((item) => item.value);

  const emailList =
    info.emails?.values ?? (contact.emails ?? []).map((t) => ({ text: t, link: `mailto:${t}` }));

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-xl border ${
      hasError ? 'border-red-400' : 'border-gray-200'
    } focus:outline-none focus:ring-2 focus:ring-primary-gold/40 focus:border-primary-gold transition-all`;

  return (
    <>
      <PageBanner
        title={contactPage.heading || 'Get in Touch'}
        subtitle={contactPage.subheading}
        breadcrumb="Contact"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 sm:py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-elevated border border-gray-100"
            >
              <h2 className="font-heading font-bold text-2xl text-primary-navy mb-2">
                {form.title || 'Send Us a Message'}
              </h2>
              <p className="text-secondary-gray mb-6 text-sm">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-navy mb-1">
                    {fields.name?.label || 'Full Name'} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={fields.name?.placeholder || 'Enter your full name'}
                    className={inputClass(errors.name)}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-navy mb-1">
                    {fields.email?.label || 'Email Address'} *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={fields.email?.placeholder || 'Enter your email'}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary-navy mb-1">
                    {fields.phone?.label || 'Phone Number'} *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={fields.phone?.placeholder || 'Enter your phone number'}
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="countryOfInterest" className="block text-sm font-semibold text-primary-navy mb-1">
                    {fields.countryOfInterest?.label || 'Country of Interest'} *
                  </label>
                  <select
                    id="countryOfInterest"
                    name="countryOfInterest"
                    value={formData.countryOfInterest}
                    onChange={handleChange}
                    className={`${inputClass(errors.countryOfInterest)} bg-white`}
                  >
                    <option value="">{fields.countryOfInterest?.placeholder || 'Select a country'}</option>
                    {countryOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.countryOfInterest && <p className="text-red-500 text-xs mt-1">{errors.countryOfInterest}</p>}
                </div>
                <div>
                  <label htmlFor="visaType" className="block text-sm font-semibold text-primary-navy mb-1">
                    {fields.visaType?.label || 'Visa Type'} *
                  </label>
                  <select
                    id="visaType"
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    className={`${inputClass(errors.visaType)} bg-white`}
                  >
                    <option value="">{fields.visaType?.placeholder || 'Select visa type'}</option>
                    {visaTypeOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  {errors.visaType && <p className="text-red-500 text-xs mt-1">{errors.visaType}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-navy mb-1">
                    {fields.message?.label || 'Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={fields.message?.placeholder || 'Tell us about your immigration goals...'}
                    className={`${inputClass(errors.message)} resize-y`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary-gold to-primary-gold-light text-primary-navy font-bold shadow-gold hover:shadow-elevated disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : form.submitButton || 'Submit Enquiry'}
                  <Send className="w-4 h-4" />
                </button>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                    role="status"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-green-800 text-sm">
                      {form.successMessage || 'Thank you! Your enquiry has been submitted successfully.'}
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-elevated border border-gray-100"
            >
              <h2 className="font-heading font-bold text-2xl text-primary-navy mb-6">
                {info.heading || 'Contact Information'}
              </h2>
              <div className="space-y-6">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-gold" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-bold text-primary-navy text-sm">{item.label}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-secondary-gray text-sm hover:text-primary-gold transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-secondary-gray text-sm whitespace-pre-line break-words">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* per-email links */}
              {emailList.length > 0 && (
                <div className="mt-4 space-y-1">
                  {emailList.map((e, i) => (
                    <a
                      key={i}
                      href={e.link}
                      className="block text-sm text-secondary-gray hover:text-primary-gold transition-colors break-all"
                    >
                      {e.text}
                    </a>
                  ))}
                </div>
              )}

              {/* WhatsApp */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors shadow-soft"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-elevated border border-gray-100"
          >
            <iframe
              src={contact.mapEmbedUrl || info.mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sydney Immigration Kaithal Branch Location"
            />
          </motion.div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-20 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-primary-navy mb-3">Connect With Us</h2>
          <p className="text-secondary-gray mb-8">Follow us for immigration updates, success stories and tips.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-soft flex items-center justify-center hover:bg-primary-navy hover:text-white hover:-translate-y-1 transition-all duration-300 text-primary-navy"
                aria-label={`Follow us on ${platform}`}
              >
                <span className="text-xs font-bold uppercase">{platform.slice(0, 2)}</span>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <Button to="/apply" variant="gold" rightIcon={<Send className="w-4 h-4" />}>
              Apply Online
            </Button>
            <Button to="/services" variant="outline">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
