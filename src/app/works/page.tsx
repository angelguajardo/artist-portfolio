import type { Metadata } from "next";
import { artworks } from "@/data/artworks";
import ArtworkCard from "@/components/ArtworkCard";

export const metadata: Metadata = {
  title: "Works",
  description:
    "All paintings by Angel Guajardo —  watercolor on Coton Paper.",
};

export default function WorksPage() {
  const available = artworks.filter((a) => a.available);
  const sold = artworks.filter((a) => !a.available);

  return (
    <div className="px-6 md:px-12 py-16">
      {/* Page header */}
      <div className="border-b border-border pb-8 mb-12">
        <h1 className="font-serif text-3xl md:text-4xl font-light">Works</h1>
        <p className="label text-muted mt-3">
          {available.length} paintings &nbsp;·&nbsp; {available.length} 
        </p>
      </div>

      {/* Available works */}
      {available.length > 0 && (
        <section className="mb-20">
          <p className="label mb-8">Available</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {available.map((artwork, i) => (
              <ArtworkCard key={artwork.slug} artwork={artwork} priority={i < 3} />
            ))}
          </div>
        </section>
      )}

      {/* Sold / collection works */}
      {/* {sold.length > 0 && (
        <section>
          <div className="border-t border-border pt-8 mb-8">
            <p className="label"></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 opacity-70">
            {sold.map((artwork) => (
              <ArtworkCard key={artwork.slug} artwork={artwork} />
            ))}
          </div>
        </section>
      )} */}
    </div>
  );
}
