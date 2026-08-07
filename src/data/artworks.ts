// ─────────────────────────────────────────────────────────────────────────────
// artworks.ts  —  Edit this file to manage your portfolio
//
// To add or update a work:
//   1. Add your image to /public/images/
//   2. Copy one of the entries below and update the fields
//   3. Set `available: false` and remove `price` once sold
//   4. Set `purchaseUrl` if you're selling through an external platform
//
// Works are listed strongest-first; the gallery renders them in this order.
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
  statusBadge?: string;   // shown as a badge instead of price, e.g. "Available at Worlds 2026"
};

export const artworks: Artwork[] = [
  {
    slug: "jinx",
    title: "Jinx",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "The loose cannon glancing back over her shoulder, blue braids swinging, pink powder-burns blooming across the paper around her. This piece will be available for purchase in person at the League of Legends 2026 World Championship Grand Final on Saturday, November 14, 2026, at the Barclays Center in Brooklyn, New York.",
    image: "/images/jinx.jpg",
    available: true,
    statusBadge: "Available at Worlds 2026",
  },
  {
    slug: "dragon-in-the-mist",
    title: "Dragon in the Mist",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "12 × 16 in",
    description:
      "A small blue-haired figure stands at the edge of a cliff, staff in hand, facing a dragon that is mostly cloud. Grey washes layered until the mist felt like weather.",
    image: "/images/dragon-in-the-mist.jpg",
    available: true,
    price: "$2,200",
  },
  {
    slug: "heron-rising",
    title: "Heron Rising",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "A great blue heron caught mid-dance, one foot barely touching the water. The ripples came last — quick concentric strokes while the paper was still damp.",
    image: "/images/heron-rising.jpg",
    available: true,
    price: "$1,600",
  },
  {
    slug: "ahri",
    title: "Ahri",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "The nine-tailed fox mid-glance, a charm burning pink at her shoulder, dark hair pooling into ink. This piece will be available for purchase in person at the League of Legends 2026 World Championship Grand Final on Saturday, November 14, 2026, at the Barclays Center in Brooklyn, New York.",
    image: "/images/ahri.jpg",
    available: true,
    statusBadge: "Available at Worlds 2026",
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
    featured: true,
  },
  {
    slug: "moon-prayer",
    title: "Moon Prayer",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "A figure with folded hands, haloed in white against a full moon and a sea of crimson. The most saturated palette I've allowed myself in a long time.",
    image: "/images/moon-prayer.jpg",
    available: true,
    price: "$1,900",
  },
  {
    slug: "ekko",
    title: "Ekko",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "The boy who shattered time, standing still for once — arms crossed, white dreads lit against a wall of green. This piece will be available for purchase in person at the League of Legends 2026 World Championship Grand Final on Saturday, November 14, 2026, at the Barclays Center in Brooklyn, New York.",
    image: "/images/ekko.jpg",
    available: true,
    statusBadge: "Available at Worlds 2026",
    featured: true,
  },
  {
    slug: "pond-with-butterfly",
    title: "Pond with Butterfly",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "12 × 16 in",
    description:
      "Two fish circle beneath the surface while a blue butterfly skims the ripples between them. Greens on greens — the pond from above, all reflection and depth at once.",
    image: "/images/pond-with-butterfly.jpg",
    available: true,
    price: "$1,800",
  },
  {
    slug: "lilac-braids",
    title: "Lilac Braids",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "A portrait built almost entirely from one color family — lilac hair in heavy braids, magenta dress, a soft grey arch behind. The face is the only quiet place on the page.",
    image: "/images/lilac-braids.jpg",
    available: true,
    price: "$1,700",
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
    slug: "serpent-and-songbirds",
    title: "Serpent and Songbirds",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "12 × 16 in",
    description:
      "A pale serpent coils through a scatter of ink spray while two bluebirds hover close — closer than they should. Painted wet-into-wet in a single sitting.",
    image: "/images/serpent-and-songbirds.jpg",
    available: true,
    price: "$1,700",
  },
  {
    slug: "adrift",
    title: "Adrift",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "An astronaut drifting through a violet nebula, one arm reaching for nothing in particular. Salt was dropped into the wet wash to make the stars.",
    image: "/images/adrift.jpg",
    available: true,
    price: "$1,600",
  },
  {
    slug: "lotus-bowl",
    title: "Lotus Bowl",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "A girl looks up from behind a painted bowl, a sunset pond dissolving into pattern behind her. Everything in this one wants to be ornament, including the light.",
    image: "/images/lotus-bowl.jpg",
    available: true,
    price: "$1,500",
  },
  {
    slug: "genesis",
    title: "Genesis",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "An open hand, a red helix, a crescent of blood-colored moon — origins layered over one another until they blur. The densest composition in this series.",
    image: "/images/genesis.jpg",
    available: true,
    price: "$2,000",
  },
  {
    slug: "girl-with-a-rose",
    title: "Girl with a Rose",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "A quiet figure wrapped in a green veil, eyes closed, a single red rose in her hair. Most of the sheet is left empty on purpose — the stillness is the subject.",
    image: "/images/girl-with-a-rose.jpg",
    available: true,
    price: "$1,300",
  },
  {
    slug: "harbor-at-dusk",
    title: "Harbor at Dusk",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "Three sailboats at anchor as the sky turns amber over a darkening shoreline. The masts reflect in water that hasn't decided whether it's blue or gold.",
    image: "/images/harbor-at-dusk.jpg",
    available: true,
    price: "$1,400",
  },
  {
    slug: "white-horse-green-water",
    title: "White Horse, Green Water",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "A horse in motion against a field of teal, its body carrying traces of every color that surrounds it. About momentum, and about letting the white of the paper do the work.",
    image: "/images/white-horse-green-water.jpg",
    available: true,
    price: "$1,500",
  },
  {
    slug: "night-garden",
    title: "Night Garden",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "9 × 12 in",
    description:
      "A pale figure in a rose-colored dress under a crescent moon, flanked by shapes that might be flowers or might be hands. Painted from a dream, finished before it faded.",
    image: "/images/night-garden.jpg",
    available: true,
    price: "$1,400",
  },
  {
    slug: "carousel-study",
    title: "Carousel Study",
    year: 2026,
    medium: "Watercolor on paper",
    dimensions: "12 × 16 in",
    description:
      "Horses tumbling up the page, each one looser than the last. A study in how little information a figure needs before it stops being one.",
    image: "/images/carousel-study.jpg",
    available: true,
    price: "$1,100",
    featured: true,
  },
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

// Artworks to show on the home page, in display order.
// Slugs listed here appear first (in this order); any other `featured: true`
// works follow in gallery order.
const featuredOrder = ["ekko", "stone-coast", "carousel-study"];
export const featuredArtworks = artworks
  .filter((a) => a.featured)
  .sort((a, b) => {
    const ai = featuredOrder.indexOf(a.slug);
    const bi = featuredOrder.indexOf(b.slug);
    return (ai === -1 ? featuredOrder.length : ai) - (bi === -1 ? featuredOrder.length : bi);
  });
