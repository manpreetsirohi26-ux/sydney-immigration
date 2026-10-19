import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  ClipboardList,
  Users,
  FileCheck2,
  PlaneTakeoff,
} from 'lucide-react';
import toast from 'react-hot-toast';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import { siteContent } from '../data/content';

const contact = siteContent.contact ?? {};
const applyPage = siteContent.applyPage ?? {};
const form = applyPage.form ?? {};
const fields = form.fields ?? {};
const sections = form.sections ?? {};
const steps = applyPage.steps ?? [];

const STEP_ICONS = [ClipboardList, Users, FileCheck2, PlaneTakeoff];

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  maritalStatus: '',
  nationality: '',
  city: '',
  passportNumber: '',
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
    hasError ? 'border-red-400' : 'border-gray-200'
  } focus:outline-none focus:ring-2 focus:ring-primary-gold/40 focus:border-primary-gold transition-all`;

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-primary-navy mb-1">
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
    if (!formData.dateOfBirth) next.dateOfBirth = 'Date of birth is required';
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
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitStatus('success');
    toast.success(form.successMessage || 'Application submitted successfully!');
  };

  // Build a WhatsApp message with the entered details (available any time).
  const whatsappLink = useMemo(() => {
    const lines = [
      `*New Visa Application - ${siteContent.siteName}*`,
      formData.fullName && `Name: ${formData.fullName}`,
      formData.email && `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.dateOfBirth && `DOB: ${formData.dateOfBirth}`,
      formData.gender && `Gender: ${formData.gender}`,
      formData.maritalStatus && `Marital Status: ${formData.maritalStatus}`,
      formData.nationality && `Nationality: ${formData.nationality}`,
      formData.city && `City/State: ${formData.city}`,
      formData.passportNumber && `Passport: ${formData.passportNumber}`,
      formData.highestQualification && `Qualification: ${formData.highestQualification}`,
      formData.englishTest && `English Test: ${formData.englishTest}`,
      formData.englishScore && `English Score: ${formData.englishScore}`,
      formData.countryOfInterest && `Preferred Country: ${formData.countryOfInterest}`,
      formData.visaType && `Visa Type: ${formData.visaType}`,
      formData.intake && `Intake/Time: ${formData.intake}`,
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
      <PageBanner
        title={applyPage.heading || 'Apply Online'}
        subtitle={applyPage.subheading}
        breadcrumb="Apply Now"
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
      />

      {/* STEPS */}
      {steps.length > 0 && (
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => {
                const Icon = STEP_ICONS[i] ?? ClipboardList;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center mb-3 relative">
                      <Icon className="w-6 h-6 text-primary-gold" />
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-navy text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-primary-navy text-sm mb-1">{step.title}</h3>
                    <p className="text-secondary-gray text-xs leading-relaxed">{step.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FORM */}
      <section className="py-20 sm:py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-white rounded-3xl p-7 sm:p-9 shadow-elevated border border-gray-100"
            >
              <h2 className="font-heading font-bold text-2xl text-primary-navy mb-2">
                {form.title || 'Visa Application Form'}
              </h2>
              <p className="text-secondary-gray mb-8 text-sm">
                {sections.personal || 'Personal Details'} · Fields marked with * are required.
              </p>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                  role="status"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary-navy mb-2">Application Received!</h3>
                  <p className="text-secondary-gray mb-6 max-w-md mx-auto">
                    {form.successMessage || 'Your application has been submitted successfully.'}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="gold" leftIcon={<MessageSquare className="w-4 h-4" />}>
                      {form.whatsappButton || 'Send Details on WhatsApp'}
                    </Button>
                    <Button onClick={resetForm} variant="outline" leftIcon={<ClipboardList className="w-4 h-4" />}>
                      Submit Another Application
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  {/* Personal */}
                  <fieldset className="space-y-5">
                    <legend className="font-heading font-bold text-primary-navy text-lg mb-2 border-b border-gray-100 pb-2 w-full">
                      {sections.personal || 'Personal Details'}
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="fullName" label={fields.fullName?.label || 'Full Name'} required error={errors.fullName}>
                        <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder={fields.fullName?.placeholder || 'Enter your full name'} className={inputClass(errors.fullName)} />
                      </Field>
                      <Field id="email" label={fields.email?.label || 'Email Address'} required error={errors.email}>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={fields.email?.placeholder || 'Enter your email'} className={inputClass(errors.email)} />
                      </Field>
                      <Field id="phone" label={fields.phone?.label || 'Phone Number'} required error={errors.phone}>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={fields.phone?.placeholder || 'Enter your phone number'} className={inputClass(errors.phone)} />
                      </Field>
                      <Field id="dateOfBirth" label={fields.dateOfBirth?.label || 'Date of Birth'} required error={errors.dateOfBirth}>
                        <input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} className={inputClass(errors.dateOfBirth)} />
                      </Field>
                      <Field id="gender" label={fields.gender?.label || 'Gender'}>
                        <select {...selectProps('gender')}>
                          <option value="">{fields.gender?.placeholder || 'Select gender'}</option>
                          {(fields.gender?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="maritalStatus" label={fields.maritalStatus?.label || 'Marital Status'}>
                        <select {...selectProps('maritalStatus')}>
                          <option value="">{fields.maritalStatus?.placeholder || 'Select marital status'}</option>
                          {(fields.maritalStatus?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="nationality" label={fields.nationality?.label || 'Nationality'}>
                        <input id="nationality" name="nationality" type="text" value={formData.nationality} onChange={handleChange} placeholder={fields.nationality?.placeholder || 'e.g. Indian'} className={inputClass(errors.nationality)} />
                      </Field>
                      <Field id="city" label={fields.city?.label || 'Current City / State'} required error={errors.city}>
                        <input id="city" name="city" type="text" value={formData.city} onChange={handleChange} placeholder={fields.city?.placeholder || 'e.g. Kaithal, Haryana'} className={inputClass(errors.city)} />
                      </Field>
                    </div>
                  </fieldset>

                  {/* Passport & Education */}
                  <fieldset className="space-y-5">
                    <legend className="font-heading font-bold text-primary-navy text-lg mb-2 border-b border-gray-100 pb-2 w-full">
                      {sections.passport || 'Passport & Education'}
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="passportNumber" label={fields.passportNumber?.label || 'Passport Number'}>
                        <input id="passportNumber" name="passportNumber" type="text" value={formData.passportNumber} onChange={handleChange} placeholder={fields.passportNumber?.placeholder || 'Enter passport number (if available)'} className={inputClass(errors.passportNumber)} />
                      </Field>
                      <Field id="highestQualification" label={fields.highestQualification?.label || 'Highest Qualification'}>
                        <select {...selectProps('highestQualification')}>
                          <option value="">{fields.highestQualification?.placeholder || 'Select qualification'}</option>
                          {(fields.highestQualification?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="englishTest" label={fields.englishTest?.label || 'English Test'}>
                        <select {...selectProps('englishTest')}>
                          <option value="">{fields.englishTest?.placeholder || 'Select test'}</option>
                          {(fields.englishTest?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field id="englishScore" label={fields.englishScore?.label || 'English Test Score'}>
                        <input id="englishScore" name="englishScore" type="text" value={formData.englishScore} onChange={handleChange} placeholder={fields.englishScore?.placeholder || 'e.g. IELTS 6.5 overall'} className={inputClass(errors.englishScore)} />
                      </Field>
                    </div>
                  </fieldset>

                  {/* Application preference */}
                  <fieldset className="space-y-5">
                    <legend className="font-heading font-bold text-primary-navy text-lg mb-2 border-b border-gray-100 pb-2 w-full">
                      {sections.application || 'Application Preference'}
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="countryOfInterest" label={fields.countryOfInterest?.label || 'Preferred Country'} required error={errors.countryOfInterest}>
                        <select {...selectProps('countryOfInterest')}>
                          <option value="">{fields.countryOfInterest?.placeholder || 'Select a country'}</option>
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
                      <Field id="intake" label={fields.intake?.label || 'Preferred Intake / Travel Time'}>
                        <select {...selectProps('intake')}>
                          <option value="">{fields.intake?.placeholder || 'Select intake'}</option>
                          {(fields.intake?.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <div className="sm:col-span-2">
                        <Field id="message" label={fields.message?.label || 'Additional Details'} error={errors.message}>
                          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder={fields.message?.placeholder || 'Tell us anything else we should know...'} className={`${inputClass(errors.message)} resize-y`} />
                        </Field>
                      </div>
                    </div>
                  </fieldset>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }));
                        }}
                        className="mt-1 w-4 h-4 accent-primary-gold"
                      />
                      <span className="text-sm text-secondary-gray">
                        {fields.consent || form.consent || 'I confirm the information provided is correct and consent to be contacted.'}
                      </span>
                    </label>
                    {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary-gold to-primary-gold-light text-primary-navy font-bold shadow-gold hover:shadow-elevated disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? 'Submitting...' : form.submitButton || 'Submit Application'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-7 shadow-elevated border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-navy">Why Apply Through Us?</h3>
                </div>
                <ul className="space-y-3 text-sm text-secondary-gray">
                  {[
                    'Free profile assessment & eligibility check',
                    'Expert guidance by certified consultants',
                    'End-to-end documentation support',
                    'High visa success rate & honest advice',
                    'Transparent process, no hidden charges',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-navy rounded-3xl p-7 text-white">
                <h3 className="font-heading font-bold text-lg mb-2">Need help filling the form?</h3>
                <p className="text-gray-300 text-sm mb-5">
                  Talk to our experts — we&apos;ll guide you through the whole process.
                </p>
                <div className="space-y-3">
                  <a href={contact.phoneLink} className="flex items-center gap-3 text-sm hover:text-primary-gold transition-colors">
                    <Phone className="w-4 h-4 text-primary-gold" /> {contact.phone}
                  </a>
                  <a href={`mailto:${contact.emails?.[0]}`} className="flex items-center gap-3 text-sm hover:text-primary-gold transition-colors break-all">
                    <Mail className="w-4 h-4 text-primary-gold shrink-0" /> {contact.emails?.[0]}
                  </a>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
