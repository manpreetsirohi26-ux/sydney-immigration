# Sydney Immigration India — Kaithal Branch

Modern React + Vite + Tailwind + Framer Motion multi-page website for Sydney Immigration India (Kaithal Branch).

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in the terminal.

## Build
```bash
npm run build
npm run preview
```

## Form submissions
The Contact and Apply forms send email through the Vercel `/api/enquiry` function and Brevo. Set these environment variables in the Vercel project before submitting forms:

- `BREVO_API_KEY`: a newly generated Brevo API key. Revoke any key previously shared in chat.
- `BREVO_SENDER_EMAIL`: an email address verified as a sender in Brevo.
- `ENQUIRY_TO_EMAIL`: optional; defaults to `sydneyimmigration.kaithal@gmail.com`.

After adding or changing environment variables, redeploy the Vercel project. The Render-hosted static site uses the same Vercel API and needs no Brevo credentials of its own. Passport numbers and dates of birth are not collected by the application form.

## Editing content
- All text: `src/data/content.js`
- Images: `src/assets/images` (or image URLs in content.js)
- Colors/fonts: `tailwind.config.js`
- Components: `src/components`
- Pages: `src/pages`

## Routes
`/` (Home), `/about`, `/services`, `/gallery`, `/contact`, `*` (404)