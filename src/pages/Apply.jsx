import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import toast from 'react-hot-toast';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { siteContent } from '../data/content';
import { submitEnquiry } from '../lib/submitEnquiry';

const contact = siteContent.contact ?? {};
const applyPage = siteContent.applyPage ?? {};
const form = applyPage.form ?? {};
const fields = form.fields ?? {};
const sections = form.sections ?? {};

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  gender: '',
  maritalStatus: '',
  nationality: '',
  city: '',
  highestQualification: '',
  englishTest: '',
  englishScore: '',
  countryOfInterest: '',
  visaType: '',
  intake: '',
  message: '',
};

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-xl border ${
    hasError ? 'border-red-400' : 'border-slate-200'
  } bg-white text-slate-text focus:outline-none focus:ring-2 focus:ring-blue-primary-light/40 focus:border-blue-primary-light transition`;

function Field({ id, label, required, error, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-blue-navy mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function Apply() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!formData.fullName.trim()) next.fullName = 'Full name is required';
    if (!formData.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Invalid email format';
    if (!formData.phone.trim()) next.phone = 'Phone number is required';
    else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) next.phone = 'Invalid phone number';
    if (!formData.city.trim()) next.city = 'Current city / state is required';
    if (!formData.countryOfInterest) next.countryOfInterest = 'Please select a country';
    if (!formData.visaType) next.visaType = 'Please select a visa type';
    if (!consent) next.consent = 'Please accept to continue';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fill all required fields correctly.');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await submitEnquiry({ formType: 'application', ...formData, consent });
      setSubmitStatus('success');
      toast.success(form.successMessage || 'Application submitted successfully!');
    } catch (error) {
      setSubmitStatus('error');
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = useMemo(() => {
    const lines = [
      `*New Visa Application - ${siteContent.siteName}*`,
      formData.fullName && `Name: ${formData.fullName}`,
      formData.email && `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.countryOfInterest && `Preferred Country: ${formData.countryOfInterest}`,
      formData.visaType && `Visa Type: ${formData.visaType}`,
      formData.city && `City/State: ${formData.city}`,
      formData.message && `Details: ${formData.message}`,
    ].filter(Boolean);
    return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
  }, [formData]);

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setConsent(false);
    setErrors({});
    setSubmitStatus(null);
  };

  const selectProps = (key) => ({
    id: key,
    name: key,
    value: formData[key],
    onChange: handleChange,
    className: `${inputClass(errors[key])} bg-white`,
  });

  return (
    <>
      <Seo
        title="Apply for Visa Services in Kaithal | Sydney Immigration"
        description="Start your visa enquiry online with Sydney Immigration India in Kaithal. Share your study, work, PR or visitor visa goals for an initial review."
        keywords="visa application Kaithal, apply for visa guidance, immigration enquiry Kaithal, student visa application help"
      />
      <PageBanner
        title={applyPage.heading || 'Apply for Visa Guidance'}
        subtitle={applyPage.subheading || 'Share your details and our team will get back to you with the right guidance.'}
        breadcrumb="Apply Now"
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 sm:py-20 bg-blue-tint/30">
        <div className="max-w-5xl mx-auto px-8 sm:px-14 lg:px-20">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-blue-tint-dark/40"
            >
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                  role="status"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-blue-tint flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-10 h-10 text-blue-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-blue-navy mb-2">Application Received</h2>
                  <p className="text-slate-muted mb-8 max-w-md mx-auto">
                    {form.successMessage || 'Your application has been submitted successfully. We will contact you soon.'}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="blue" leftIcon={<MessageSquare className="w-4 h-4" />}>
                      Send on WhatsApp
                    </Button>
                    <Button onClick={resetForm} variant="secondary">
                      Submit Another
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  <input
                    type="text"
                    name="website"
                    value={formData.website || ''}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  <div className="text-center">
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-blue-navy">Visa Application Form</h2>
                    <p className="text-slate-muted text-sm mt-1">Fields marked with * are required.</p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="font-heading font-semibold text-blue-navy text-base border-b border-blue-tint-dark/40 pb-2">
                      {sections.personal || 'Personal Details'}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field id="fullName" label={fields.fullName?.label || 'Full Name'} required error={errors.fullName}>
                        <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder={fields.fullName?.placeholder || 'Your full name'} className={inputClass(errors.fullName)} />
                      </Field>
                      <Field id="email" label={fields.email?.label || 'Email Address'} required error={errors.email}>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={fields.email?.placeholder || 'you@example.com'} className={inputClass(errors.email)} />
                      </Field>
                      <Field id="phone" label={fields.phone?.label || 'Phone Number'} required error={errors.phone}>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={fields.phone?.placeholder || '+91 XXXXX XXXXX'} className={inputClass(errors.phone)} />
                      </Field>
                      <Field id="city" label={fields.city?.label || 'City / State'} required error={errors.city}>
                        <input id="city" name="city" type="text" value={formData.city} onChange={handleChange} placeholder={fields.city?.placeholder || 'e.g. Kaithal, Haryana'} className={inputClass(errors.city)} />
                      </Field>
                      <Field id="nationality" label={fields.nationality?.label || 'Nationality'}>
                        <input id="nationality" name="nationality" type="text" value={formData.nationality} onChange={handleChange} placeholder={fields.nationality?.placeholder || 'e.g. Indian'} className={inputClass(errors.nationality)} />
                      </Field>
                      <Field id="maritalStatus" label={fields.maritalStatus?.label || 'Marital Status'}>
                        <select {...selectProps('maritalStatus')}>
                          <option value="">{fields.maritalStatus?.placeholder || 'Select'}</option>
                          {(fields.maritalStatus?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h3 className="font-heading font-semibold text-blue-navy text-base border-b border-blue-tint-dark/40 pb-2">
                      {sections.passport || 'Education & Background'}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field id="highestQualification" label={fields.highestQualification?.label || 'Highest Qualification'}>
                        <select {...selectProps('highestQualification')}>
                          <option value="">{fields.highestQualification?.placeholder || 'Select'}</option>
                          {(fields.highestQualification?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="englishTest" label={fields.englishTest?.label || 'English Test'}>
                        <select {...selectProps('englishTest')}>
                          <option value="">{fields.englishTest?.placeholder || 'Select'}</option>
                          {(fields.englishTest?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="englishScore" label={fields.englishScore?.label || 'Test Score'} className="sm:col-span-2">
                        <input id="englishScore" name="englishScore" type="text" value={formData.englishScore} onChange={handleChange} placeholder={fields.englishScore?.placeholder || 'e.g. IELTS 7.0 (optional)'} className={inputClass(errors.englishScore)} />
                      </Field>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h3 className="font-heading font-semibold text-blue-navy text-base border-b border-blue-tint-dark/40 pb-2">
                      {sections.application || 'Visa Preference'}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field id="countryOfInterest" label={fields.countryOfInterest?.label || 'Preferred Country'} required error={errors.countryOfInterest}>
                        <select {...selectProps('countryOfInterest')}>
                          <option value="">{fields.countryOfInterest?.placeholder || 'Select country'}</option>
                          {(fields.countryOfInterest?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="visaType" label={fields.visaType?.label || 'Visa Type'} required error={errors.visaType}>
                        <select {...selectProps('visaType')}>
                          <option value="">{fields.visaType?.placeholder || 'Select visa type'}</option>
                          {(fields.visaType?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="intake" label={fields.intake?.label || 'Preferred Intake'} className="sm:col-span-2">
                        <select {...selectProps('intake')}>
                          <option value="">{fields.intake?.placeholder || 'Select (optional)'}</option>
                          {(fields.intake?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="message" label={fields.message?.label || 'Additional Details'} className="sm:col-span-2">
                        <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} placeholder={fields.message?.placeholder || 'Anything else you want us to know (optional)'} className={`${inputClass(errors.message)} resize-y`} />
                      </Field>
                    </div>
                  </div>

                  <div className="pt-2 space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }));
                        }}
                        className="mt-1 w-4 h-4 accent-blue-primary rounded"
                      />
                      <span className="text-sm text-slate-muted leading-relaxed">
                        {fields.consent || form.consent || 'I confirm the information is correct and agree to be contacted by Sydney Immigration India.'}
                      </span>
                    </label>
                    {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}

                    {submitStatus === 'error' && (
                      <p className="text-red-700 text-sm bg-red-50 rounded-lg px-3 py-2" role="alert">
                        Your enquiry could not be sent. Please try again or contact us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-navy text-white font-semibold hover:bg-blue-primary disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-soft"
                    >
                      {isSubmitting ? 'Submitting...' : form.submitButton || 'Submit Application'}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5 lg:sticky lg:top-28"
            >
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-blue-tint-dark/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-blue-navy">Why apply with us</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-muted">
                  {[
                    'Free profile assessment',
                    'Expert visa guidance',
                    'End-to-end documentation help',
                    'Transparent process',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-navy rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-1">Need help?</h3>
                <p className="text-blue-tint-lightest text-sm mb-5">Talk to our team for quick guidance.</p>
                <div className="space-y-3 text-sm">
                  <a href={contact.phoneLink} className="flex items-center gap-2.5 hover:text-blue-primary-light transition-colors">
                    <Phone className="w-4 h-4 text-blue-primary-light" /> {contact.phone}
                  </a>
                  {contact.emails?.[0] && (
                    <a href={`mailto:${contact.emails[0]}`} className="flex items-center gap-2.5 hover:text-blue-primary-light transition-colors break-all">
                      <Mail className="w-4 h-4 text-blue-primary-light shrink-0" /> {contact.emails[0]}
                    </a>
                  )}
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
