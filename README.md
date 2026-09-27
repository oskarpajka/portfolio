# Oskar Pajka - Personal Portfolio

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

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

Site content (projects, skills, bio, and social links) is managed in `lib/data.ts`. You can update this file to modify the portfolio's content without changing the underlying UI components.

## Environment Variables

Copy `.env.example` to `.env.local` and adjust the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the deployed site (metadata, sitemap, robots). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email shown on the site. |

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server. |
| `pnpm build` | Create a production build. |
| `pnpm lint` | Run ESLint. |
| `pnpm typecheck` | Run TypeScript checks without emitting files. |

## License

This project is open-source and available under the MIT License.
The Lora font used in this project is licensed under the SIL Open Font License, Version 1.1 (see `public/fonts/OFL.txt`).