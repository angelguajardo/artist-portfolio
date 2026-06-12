import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Angel Guajardo — painter, New York.",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 py-16 max-w-3xl">
      {/* Page header */}
      <div className="border-b border-border pb-8 mb-16">
        <h1 className="font-serif text-3xl md:text-4xl font-light">About</h1>
      </div>

      {/* Bio */}
      <section className="mb-16">
        <p className="label mb-6">Biography</p>
        <div className="space-y-4 text-sm text-muted leading-relaxed max-w-xl">
          <p>
            Angel Guajardo is a painter based in Brooklyn, New York. Originally from Houston, Texas.
          </p>
          <p>
          </p>
          {/* Replace these paragraphs with your own bio */}
        </div>
      </section>

      {/* Artist statement */}
      <section className="mb-16 border-t border-border pt-12">
        <p className="label mb-6">Statement</p>
        <div className="space-y-4 text-sm leading-relaxed max-w-xl">
          <p className="font-serif text-xl font-light leading-relaxed text-ink">
            "I am interested in the painting as a record of attention, what it
            means to look at something long enough that it begins to transport you."
          </p>
          <p className="text-muted">
            The subjects are mostly ordinary: a table near a window, a stretch
            of field in the late afternoon, florals on a beautiful day. With watercolor specificity of
            light and time are everything. I am not interested in transcendence
            or statement. I am interested in what is actually there and their true colors.
          </p>
          <p className="text-muted">
            The paintings are built slowly, in layers, often over weeks or
            months. I frequently return to the same subjects across different
            seasons and conditions. Imperfection in Perfection.
          </p>
          {/* Replace with your own statement */}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border pt-12">
        <p className="label mb-6">Process &amp; influence</p>
        <div className="space-y-4 text-sm text-muted leading-relaxed max-w-xl">
          <p>
          </p>
          <p>
            My influences are wide but include Van Gogh, Claude Monet. I love painters that can see beyond their own scope of vision.
          </p>
          <p>
            I work in watercolor on cotton paper. Most paintings begin
            with a thin layer and build toward color only after the
            drawing is resolved.
          </p>
          {/* Replace with your own process notes */}
        </div>
      </section>
    </div>
  );
}
