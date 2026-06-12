import Link from "next/link";
import Image from "next/image";
import type { Artwork } from "@/data/artworks";

type Props = {
  artwork: Artwork;
  priority?: boolean;
};

export default function ArtworkCard({ artwork, priority = false }: Props) {
  return (
    <Link href={`/works/${artwork.slug}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden bg-border aspect-[4/5] w-full">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          unoptimized={artwork.image.endsWith(".svg")}
        />
      </div>

      {/* Label block — museum card style */}
      <div className="mt-4 space-y-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-base font-normal leading-snug group-hover:opacity-60 transition-opacity">
            {artwork.title}
          </h3>
          <span
            className={`label mt-0.5 shrink-0 ${
              artwork.available ? "text-muted" : "text-muted/50"
            }`}
          >
            {artwork.available ? "Available" : "Sold"}
          </span>
        </div>
        <p className="label">
          {artwork.year} &nbsp;·&nbsp; {artwork.medium} &nbsp;·&nbsp;{" "}
          {artwork.dimensions}
        </p>
        {artwork.price && artwork.available && (
          <p className="label text-ink">{artwork.price}</p>
        )}
      </div>
    </Link>
  );
}
