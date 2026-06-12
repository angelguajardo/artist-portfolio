import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Angel Guajardo — Painter",
    template: "%s | Angel Guajardo",
  },
  description:
    "Angel Guajardo is a painter working in watercolor, based in Brooklyn, New York. His work explores light, landscape, and novel moments.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Angel Guajardo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
