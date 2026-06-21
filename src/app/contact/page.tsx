"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get("subject") ?? "";

  const [sent, setSent] = useState(false);

  // This is a simple mailto-based form. To use a real backend,
  // replace handleSubmit with a fetch() call to your API endpoint
  // or a service like Resend, Formspree, or Netlify Forms.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    // Opens the user's mail client as a fallback
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:guajardoangel@ymail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      {sent ? (
        <div className="border border-border p-8 max-w-md">
          <p className="font-serif text-xl font-light mb-2">Thank you.</p>
          <p className="text-sm text-muted">
            If your mail client did not open,
            please write directly to{" "}
            <a
              href="mailto:guajardoangel@ymail"
              className="text-ink underline underline-offset-2"
            >
              guajardoangel@ymail.com
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="name" className="label block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="label block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="label block mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              defaultValue={defaultSubject}
              className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
              placeholder="General inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="label block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors resize-none"
              placeholder="Your message…"
            />
          </div>

          <button
            type="submit"
            className="label border border-ink px-8 py-3 hover:bg-ink hover:text-paper transition-all duration-200"
          >
            Send message
          </button>
        </form>
      )}
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 py-16">
      {/* Page header */}
      <div className="border-b border-border pb-8 mb-16 max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl font-light">Contact</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-3xl">
        {/* Left: form */}
        <Suspense fallback={<div className="text-sm text-muted">Loading…</div>}>
          <ContactForm />
        </Suspense>

        {/* Right: direct contact info */}
        <div className="space-y-8 lg:pt-0">
          <div>
            <p className="label mb-3">Email</p>
            <a
              href="mailto:guajardoangel@ymail"
              className="text-sm text-muted hover:text-ink transition-colors underline underline-offset-4"
            >
              guajardoangel@ymail.com {/* replace with your email */}
            </a>
          </div>

          <div>
            <p className="label mb-3">Instagram</p>
            <a
              href="https://www.instagram.com/angelgioguajardo" // replace with your handle
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-ink transition-colors underline underline-offset-4"
            >
              @angelgioguajardo {/* replace with your handle */}
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              For inquiries about purchasing a work, commissions, or press,
              please get in touch. I respond to all messages personally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
