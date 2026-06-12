import Link from "next/link";

type Props = {
  artworkTitle?: string;
  variant?: "outline" | "solid";
  className?: string;
};

export default function InquiryButton({
  artworkTitle,
  variant = "outline",
  className = "",
}: Props) {
  const subject = artworkTitle
    ? `Inquiry: ${artworkTitle}`
    : "Studio Inquiry";

  const href = `/contact?subject=${encodeURIComponent(subject)}`;

  const base =
    "inline-block label tracking-widest2 px-6 py-3 transition-all duration-200";

  const styles =
    variant === "solid"
      ? `${base} bg-ink text-paper hover:bg-muted`
      : `${base} border border-ink text-ink hover:bg-ink hover:text-paper`;

  return (
    <Link href={href} className={`${styles} ${className}`}>
      Inquire
    </Link>
  );
}
