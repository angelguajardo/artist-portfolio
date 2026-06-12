import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";
import InquiryButton from "@/components/InquiryButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);

  if (!artwork) return {};

  return {
    title: artwork.title,
    description: `${artwork.title}, ${artwork.year}. ${artwork.medium}, ${artwork.dimensions}.`,
  };
}

export default async function ArtworkDetailPage({ params }: Props) {
  const { slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);

  if (!artwork) notFound();

  return (
    <div className="px-6 md:px-12 py-16">
      <Link href="/works" className="label text-muted hover:text-ink transition-colors">
        ← All works
      </Link>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="relative w-full aspect-[4/5] bg-border overflow-hidden">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            unoptimized={artwork.image.endsWith(".svg")}
          />
        </div>

        <div className="lg:pt-4">
          <h1 className="font-serif text-3xl md:text-4xl font-light leading-snug mb-2">
            {artwork.title}
          </h1>
          <p className="label text-muted mb-10">{artwork.year}</p>

          <dl className="space-y-4 mb-10 border-t border-border pt-8">
            <div className="flex gap-8">
              <dt className="label w-24 shrink-0">Medium</dt>
              <dd className="text-sm">{artwork.medium}</dd>
            </div>
            <div className="flex gap-8">
              <dt className="label w-24 shrink-0">Dimensions</dt>
              <dd className="text-sm">{artwork.dimensions}</dd>
            </div>
            <div className="flex gap-8">
              <dt className="label w-24 shrink-0">Status</dt>
              <dd className="text-sm">
                {artwork.available ? "Available" : "In a private collection"}
              </dd>
            </div>
            {artwork.price && artwork.available && (
              <div className="flex gap-8">
                <dt className="label w-24 shrink-0">Price</dt>
                <dd className="text-sm">{artwork.price}</dd>
              </div>
            )}
          </dl>

          <p className="text-sm text-muted leading-relaxed mb-10 max-w-md">
            {artwork.description}
          </p>

          {artwork.available && (
            <div className="flex flex-wrap gap-4">
              <InquiryButton artworkTitle={artwork.title} variant="solid" />
              {artwork.purchaseUrl && (
                <a
                  href={artwork.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label border border-border px-6 py-3 hover:border-ink transition-colors"
                >
                  Purchase online →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}