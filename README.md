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

For Cloudflare Workers Builds, use these settings:

```text
Production branch: main
Build command: npm run cf-build
Deploy command: npx wrangler deploy
```

Do not use `npm run build` as the Cloudflare build command: it creates the normal `.next` output but does not create the `.open-next` bundle required by Workers. Custom domains are configured from the Cloudflare Workers dashboard.

# edgecipline-founders
