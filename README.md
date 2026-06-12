# Elena Marsh — Artist Portfolio

A minimal, gallery-style portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## How to customize

### 1. Your name and info

- **Artist name / site title:** `src/app/layout.tsx` → update `metadata`
- **Nav name:** `src/components/Nav.tsx` → update "Elena Marsh"
- **Footer:** `src/components/Footer.tsx` → update copyright and Instagram link
- **About page:** `src/app/about/page.tsx` → replace bio, statement, process text
- **Contact page:** `src/app/contact/page.tsx` → replace email and Instagram handle

### 2. Adding and editing artworks

Open `src/data/artworks.ts` — this is the only file you need to edit for your works.

Each artwork has these fields:

```ts
{
  slug: "my-painting",        // used in the URL: /works/my-painting
  title: "My Painting",
  year: 2024,
  medium: "Oil on linen",
  dimensions: "24 × 36 in",
  description: "...",
  image: "/images/my-painting.jpg",
  available: true,
  price: "$2,400",            // optional — remove if not showing price
  purchaseUrl: "https://...", // optional — links to Artsy, Saatchi, etc.
  featured: true,             // optional — shows on home page
}
```

### 3. Adding artwork images

Drop your images into `public/images/`. Reference them as `/images/your-file.jpg`.

Recommended dimensions: at least **1200 × 1500px** for portrait works, or **1500 × 1200px** for landscape.

### 4. Contact form backend

The contact form currently opens the user's mail client (mailto). To use a proper backend:

- **Formspree:** replace `handleSubmit` in `src/app/contact/page.tsx` with a POST to your Formspree endpoint
- **Resend / SendGrid:** add an API route at `src/app/api/contact/route.ts` and POST from the form
- **Netlify Forms:** add `data-netlify="true"` to the `<form>` element

---

## Deployment

This is a standard Next.js app. Deploy to:

- **Vercel** (recommended): `npx vercel` or connect your GitHub repo
- **Netlify:** `npm run build && netlify deploy --dir=.next`
- **Any Node.js host:** `npm run build && npm start`

---

## Project structure

```
src/
  app/
    layout.tsx          ← Root layout, nav, footer
    page.tsx            ← Home page
    works/
      page.tsx          ← Works grid
      [slug]/page.tsx   ← Artwork detail
    about/page.tsx
    contact/page.tsx
  components/
    Nav.tsx
    Footer.tsx
    ArtworkCard.tsx     ← Card used in grid + featured
    InquiryButton.tsx   ← Reusable inquiry CTA
  data/
    artworks.ts         ← ✏️ Edit your works here
public/
  images/               ← Drop artwork images here
```
