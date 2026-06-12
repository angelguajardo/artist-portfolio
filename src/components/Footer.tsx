import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 border-t border-border mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <span className="label">
        © {new Date().getFullYear()} Angel Guajardo
      </span>
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/angelgiogu" // replace with your Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="label hover:text-ink transition-colors"
        >
          Instagram
        </a>
        <Link href="/contact" className="label hover:text-ink transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}
