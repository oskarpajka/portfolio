# Oskar Pajka - Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)

A personal portfolio website built to showcase my projects, skills, and experience as a Full-Stack Developer.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- TypeScript

## Local Development

To run this project locally, you will need Node.js and pnpm installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/oskarpajka/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. (Optional) Configure environment variables in a `.env.local` file:
   ```bash
   NEXT_PUBLIC_CONTACT_EMAIL=hello@oskarpajka.me
   NEXT_PUBLIC_SITE_URL=https://oskarpajka.me
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | `hello@oskarpajka.me` | Contact email shown in the contact section, footer, and copy-email button. Falls back to the default when unset or invalid. |
| `NEXT_PUBLIC_SITE_URL` | No | `https://oskarpajka.me` | Canonical site URL used for metadata and sitemap. |

## Scripts

- `pnpm dev` — start the development server.
- `pnpm build` — create a production build.
- `pnpm start` — serve the production build.
- `pnpm lint` — run ESLint.
- `pnpm type-check` — run `tsc --noEmit` (strict TypeScript).

## Screenshots

> Screenshots coming soon. To add one, save an image under `public/screenshots/` and reference it here, e.g. `![Homepage](public/screenshots/homepage.png)`.

## Customization

Site content (projects, skills, bio, and social links) is managed in `lib/data.ts`. You can update this file to modify the portfolio's content without changing the underlying UI components.

Reusable contact helpers (`buildMailto`, `buildContactMailto`) live in `lib/utils.ts`; pass `siteData.personal.email` and `siteData.contact.emailSubject` so Agent 1 can wire the CTA into layout later.

## License

This project is open-source and available under the MIT License.
The Lora font used in this project is licensed under the SIL Open Font License, Version 1.1 (see `public/fonts/OFL.txt`).