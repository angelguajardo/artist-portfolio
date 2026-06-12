// ─────────────────────────────────────────────────────────────────────────────
// artworks.ts  —  Edit this file to manage your portfolio
//
// To add or update a work:
//   1. Add your image to /public/images/
//   2. Copy one of the entries below and update the fields
//   3. Set `available: false` and remove `price` once sold
//   4. Set `purchaseUrl` if you're selling through an external platform
// ─────────────────────────────────────────────────────────────────────────────

export type Artwork = {
  slug: string;           // URL-safe identifier, e.g. "morning-light-i"
  title: string;
  year: number;
  medium: string;
  dimensions: string;     // e.g. "24 × 36 in"
  description: string;
  image: string;          // path relative to /public, e.g. "/images/work-01.jpg"
  available: boolean;
  price?: string;         // e.g. "$2,400" — omit if not displaying price
  purchaseUrl?: string;   // link to external shop (Artsy, Saatchi, etc.)
  featured?: boolean;     // show on home page
};

export const artworks: Artwork[] = [
  {
    slug: "still-water-i",
    title: "Still Water I",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "12 × 16 in",
    description:
      "Painted over three sessions across a single week with a blue-pink palette",
    image: "/images/unnamed.jpg",
    available: true,
    price: "$3,200",
    featured: true,
  },
  {
    slug: "interior-november",
    title: "Interior, November",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "Late afternoon light across my dog. The particular quality of November sun low and amber has interested me for years. This is the third attempt at capturing it honestly.",
    image: "/images/unnamed (2).jpg",
    available: true,
    price: "$1,800",
    featured: true,
  },
  {
    slug: "field-study-grey",
    title: "Field Study (Grey)",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "One of a series of small field paintings made in a single afternoon. The grass had just been cut. The horizon was a single unbroken line. I was interested in doing as little as possible.",
    image: "/images/unnamed (3).jpg",
    available: false,
    featured: true,
  },
  {
    slug: "figure-at-window",
    title: "Figure at Window",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "The light changed twice. I kept painting through both changes and let the canvas hold all three moments.",
    image: "/images/unnamed (3).jpg",
    available: true,
    price: "$4,600",
    purchaseUrl: "https://www.artsy.net", // replace with your actual listing
  },
  {
    slug: "stone-coast",
    title: "Stone Coast",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "Painted on location in one session. The tide was coming in. I was working faster than usual, the sunset lasts less than an hour in October.",
    image: "/images/unnamed (4).jpg",
    available: true,
    price: "$1,200",
  },
  {
    slug: "two-vessels",
    title: "Two Vessels",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "A pair of ceramic vessels on a white cloth. The cloth is the subject, really — the way it folds and gathers around the bases, the quiet conversation between the two objects.",
    image: "/images/placeholder-6.svg",
    available: false,
  },
];

// Artworks to show on the home page (featured: true), in order
export const featuredArtworks = artworks.filter((a) => a.featured);
