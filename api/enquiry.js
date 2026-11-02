const allowedOrigins = new Set([
  'https://sydney-immigration.vercel.app',
  'https://sydney-immigration.onrender.com',
  'http://localhost:5173',
  'http://localhost:4173',
]);
const allowedVercelPreviewOrigin =
  /^https:\/\/sydney-immigration-[a-z0-9-]+-manpreetsirohi26-ux\.vercel\.app$/;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactFields = ['name', 'email', 'phone', 'countryOfInterest', 'visaType', 'message'];
const applicationFields = [
  'fullName',
  'email',
  'phone',
  'gender',
  'maritalStatus',
  'nationality',
  'city',
  'highestQualification',
  'englishTest',
  'englishScore',
  'countryOfInterest',
  'visaType',
  'intake',
  'message',
];

function getText(value, maxLength = 1000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isAllowedOrigin(origin) {
  return allowedOrigins.has(origin) || allowedVercelPreviewOrigin.test(origin);
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin && isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  if (!origin || !isAllowedOrigin(origin)) {
    return res.status(403).json({ error: 'This website is not allowed to submit enquiries.' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  if (Buffer.byteLength(JSON.stringify(body)) > 12000) {
    return res.status(413).json({ error: 'The submitted form is too large.' });
  }
  if (getText(body.website, 200)) return res.status(200).json({ ok: true });

  const formType = body.formType;
  const fields = formType === 'contact'
    ? contactFields
    : formType === 'application'
      ? applicationFields
      : null;
  if (!fields) return res.status(400).json({ error: 'Invalid form submission.' });

  const values = Object.fromEntries(fields.map((field) => [field, getText(body[field])]));
  const senderName = getText(body.name || body.fullName, 120);
  if (!senderName || !emailPattern.test(values.email) || !values.phone) {
    return res.status(400).json({ error: 'Please check your name, email, and phone number.' });
  }
  if (!values.countryOfInterest || !values.visaType) {
    return res.status(400).json({ error: 'Please select a country and visa type.' });
  }
  if (formType === 'contact' && values.message.length < 20) {
    return res.status(400).json({ error: 'Please enter a message of at least 20 characters.' });
  }
  if (formType === 'application' && body.consent !== true) {
    return res.status(400).json({ error: 'Please accept the consent before submitting.' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const recipientEmail = process.env.ENQUIRY_TO_EMAIL || 'sydneyimmigration.kaithal@gmail.com';
  if (!apiKey || !senderEmail || !emailPattern.test(senderEmail) || !emailPattern.test(recipientEmail)) {
    console.error('Brevo email settings are missing or invalid.');
    return res.status(503).json({ error: 'Enquiry email is not configured yet. Please call or WhatsApp us.' });
  }

  const subject = formType === 'contact' ? 'New website contact enquiry' : 'New visa application enquiry';
  const lines = [
    `Form: ${formType === 'contact' ? 'Contact enquiry' : 'Visa application enquiry'}`,
    ...fields
      .filter((field) => field !== 'email' && values[field])
      .map((field) => `${field.replace(/([A-Z])/g, ' $1')}: ${values[field]}`),
    `Reply email: ${values.email}`,
  ];

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: 'Sydney Immigration India' },
        to: [{ email: recipientEmail }],
        replyTo: { email: values.email, name: senderName },
        subject,
        textContent: lines.join('\n'),
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error(`Brevo rejected an enquiry email with status ${response.status}.`);
      return res.status(502).json({ error: 'We could not send your enquiry. Please call or WhatsApp us.' });
    }
  } catch (error) {
    console.error('Brevo enquiry email request failed.', error);
    return res.status(502).json({ error: 'We could not send your enquiry. Please try again or call us.' });
  }

  return res.status(200).json({ ok: true });
}
