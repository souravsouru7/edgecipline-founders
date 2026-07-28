# Edgecipline — Founder Profiles

An investor-facing “Meet the Founders” page built with Next.js, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm start
```

## Content and confirmation checklist

Founder content is centralized in [`data/founders.ts`](./data/founders.ts). Before publishing, confirm:

- Approved founder photographs are mapped from `sourav.png` and `munaveer.png` in `public/images/founders/`.
- Confirm whether the employer name is **JK Studio** or **JK Industries**.
- Confirm Sourav’s Brototype training dates if they should be displayed.
- LinkedIn profiles are wired to the URLs provided for Sourav and Munavvir.
- Confirm the preferred founder contact email.

If the photo files are not present, the page intentionally falls back to a restrained initials-based portrait placeholder so the layout remains complete during review.

## Cloudflare deployment

This project is configured for Cloudflare Workers using the OpenNext adapter for Next.js.

```bash
npm install
npm run build
npm run preview
npm run deploy
```

In Cloudflare, create a Workers project and connect this GitHub repository. Use `main` as the production branch and `npm run deploy` as the deploy command. Custom domains are configured from the Cloudflare Workers dashboard.

# edgecipline-founders
