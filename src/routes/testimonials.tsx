import { createFileRoute } from "@tanstack/react-router";
import { Hero, Reveal, EditorialAccordion, type EditorialAccordionItem } from "@/components/editorial";

// ── Images (remote — replace with local imports later) ──
const testimonialsHero =
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2400&q=80";
const sevenCanyonsImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const hiveImage =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80";
const biancoImage =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80";
const stillWaterImage =
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80";
const ridgeImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80";
const canopyImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80";
const tidalImage =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80";
const blackForestImage =
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80";
const alpineImage =
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80";
const ochreImage =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Atelier Studio" },
      { name: "description", content: "Words from clients across new builds, additions, and renovations." },
      { property: "og:title", content: "Testimonials — Atelier Studio" },
      { property: "og:description", content: "Words from clients across new builds, additions, and renovations." },
    ],
  }),
  component: TestimonialsPage,
});

interface Testimonial {
  id: string;
  project: string;
  attribution: string;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "seven-canyons",
    project: "'Seven Canyons' New Build",
    attribution: "Homeowner review",
    review: "[The studio listened deeply — to the site, to our family, to the light. What we received back was a home that feels inevitable, as though it had always belonged to the land.]",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "hive",
    project: "'Hive' New Build",
    attribution: "Homeowner review",
    review: "[From the first sketch to the last handle, every decision felt considered. We live differently now — more slowly, more attentively — because of this house.]",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "bianco",
    project: "'Bianco' Addition / Renovation",
    attribution: "Homeowner review",
    review: "[They took a difficult, historic structure and made it sing without erasing its memory. The old and the new speak to each other in every room.]",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "still-water",
    project: "'Still Water' New Build",
    attribution: "Client review",
    review: "[A rare combination of rigor and warmth. The team is exacting where it matters and generous everywhere else. We would build with them again tomorrow.]",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "ridge",
    project: "'Ridge' New Build",
    attribution: "Homeowner review",
    review: "[We wanted a house that would disappear into the mountain and appear only when you looked twice. They gave us exactly that — and a place to live inside it.]",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "canopy",
    project: "'Canopy' New Build",
    attribution: "Homeowner review",
    review: "[The details are quiet — hairline reveals, hidden hardware, thresholds you feel rather than see. Living here is a lesson in restraint.]",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "tidal",
    project: "'Tidal' Addition / Renovation",
    attribution: "Client review",
    review: "[They navigated coastal setbacks, an anxious HOA, and a demanding brief with grace. The finished addition looks as though the original architect had planned it that way.]",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "black-forest",
    project: "'Black Forest' New Build",
    attribution: "Homeowner review",
    review: "[A dark, quiet house that holds the weather at arm's length. It is the most calming space we have ever lived in.]",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "alpine",
    project: "'Alpine' New Build",
    attribution: "Homeowner review",
    review: "[Every window is a composition. Every room has a reason. We did not know a house could be edited this carefully.]",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "ochre",
    project: "'Ochre' Addition / Renovation",
    attribution: "Client review",
    review: "[Working with the studio was calm from beginning to end. The result is a home that feels considered in every square inch.]",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
  },
];

function Stars() {
  return (
    <span aria-label="Five out of five stars" className="tracking-[0.35em] text-foreground text-sm">
      ★★★★★
    </span>
  );
}

function TestimonialContent({ t }: { t: Testimonial }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
      <div className="min-w-0">
        <p className="body-lg text-foreground">{t.review}</p>
        <p className="eyebrow mt-8 text-muted-foreground">— {t.attribution}</p>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden bg-background">
        <img
          src={t.image}
          alt={t.project}
          className="absolute inset-0 h-full w-full object-cover brightness-90"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function TestimonialsPage() {
  const items: EditorialAccordionItem[] = testimonials.map((t) => ({
    id: t.id,
    title: t.project,
    content: <TestimonialContent t={t} />,
  }));

  return (
    <main>
      <Hero
        image="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Testimonials"
        headline="What others have said?"
      />

      <section className="py-24 md:py-40 container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-24 pb-20 md:pb-32">
          <Reveal>
            <p className="eyebrow">In their words</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-lg max-w-xl">
              [A collection of reviews from former clients across new builds, additions, and renovations.]
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="space-y-0">
            {/* Custom rows: star + project name, using the accordion */}
            <EditorialAccordion
              items={items.map((item, i) => ({
                ...item,
                title: (
                  <span className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
                    <Stars />
                    <span>{testimonials[i].project}</span>
                  </span>
                ),
              }))}
              singleOpen
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
