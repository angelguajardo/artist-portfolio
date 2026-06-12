import type { Metadata } from "next";
import Link from "next/link";
import { featuredArtworks } from "@/data/artworks";
import ArtworkCard from "@/components/ArtworkCard";
import InquiryButton from "@/components/InquiryButton";

export const metadata: Metadata = {
  title: "Angel Guajardo — Painter",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-20 pb-24 md:pt-28 md:pb-32 max-w-2xl">
        <p className="label mb-6">Brooklyn, New York</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
          Paintings in watercolor.<br />
          
        </h1>
        <p className="text-muted text-sm leading-relaxed max-w-md">
          I paint landscapes, interiors, and figures, slowly.
          The work is about attention: the particular quality of light and color.
        </p>
      </section>

      {/* ── Featured works ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pb-20">
        <div className="flex items-baseline justify-between mb-10 border-t border-border pt-8">
          <h2 className="label">Selected works</h2>
          <Link
            href="/works"
            className="label hover:text-ink transition-colors text-muted"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featuredArtworks.map((artwork, i) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* ── CTA strip ──────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl font-light mb-1">
            Interested in acquiring a work?
          </p>
          <p className="label text-muted">
            Original paintings and commissions available.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/works"
            className="label border border-border px-6 py-3 hover:border-ink transition-colors"
          >
            All works
          </Link>
          <InquiryButton variant="solid" />
        </div>
      </section>
    </>
  );
}
