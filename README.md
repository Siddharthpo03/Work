# Siddharth Pulugujja Portfolio

Modern, minimal, conversion-focused freelancer portfolio for Siddharth Pulugujja.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

## Sections

- Hero with clear positioning and CTAs
- About and services
- Featured projects
- Skills and testimonials
- Contact form and footer

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Email Setup

The contact form sends email through a Next.js server action using Nodemailer. Add the SMTP settings below in a local `.env.local` file:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
CONTACT_FROM_EMAIL=contact@siddharthp.com
CONTACT_TO_EMAIL=contact@siddharthp.com
```

This does not require a separate backend service, but it does require server-side SMTP credentials.

## Scripts

- `npm run dev` - start the development server
- `npm run lint` - run ESLint
- `npm run build` - build the production app
