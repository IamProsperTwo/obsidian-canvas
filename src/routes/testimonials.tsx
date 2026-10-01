import { createFileRoute } from "@tanstack/react-router";
import { Hero, Reveal, EditorialAccordion, type EditorialAccordionItem } from "@/components/editorial";


// ── Images (remote — replace with local imports later) ──
import testimonialsHero from "@/assets/C_ceiling .jpg";
import sevenCanyonsImage from "@/assets/AZIZ/AZ_OPTION A FACADE DESIGN.png";
import hiveImage from "@/assets/GERALD APARTMENT/1GA_Scene 2_upscale01.png";
import biancoImage from "@/assets/CAPITOLINE/1BB_Clear.png";
import stillWaterImage from "@/assets/HILL VIEW HOTEL/3test_10 - Photo.jpg";
import ridgeImage from "@/assets/KABAIJA INTERIORS/1D_dinning.jpg";
import canopyImage from "@/assets/NDERA/5NDERA_7 - Photo.png";
import tidalImage from "@/assets/NYABIHU MILL PROJECT/1NYABIHU_1 - Photo.png";
import blackForestImage from "@/assets/TIMOTHY RESIDENCE/1A_1 - Photo.png";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Ingabe Studio" },
      { name: "description", content: "Words from clients across new builds, additions, and renovations." },
      { property: "og:title", content: "Testimonials — Ingabe Studio" },
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
    project: "Aziz Complex",
    attribution: "Aziz CEO",
    review: "We came to Ingabe with a difficult site and a vague idea. They spent the first month asking questions and drawing nothing, which honestly worried us at the time. What we ended up with is the only house that could have been built on that hill. Three years in, we still find ourselves noticing decisions they made that we didn't understand until we'd lived through a full summer.",
    image: sevenCanyonsImage,
  },
  {
    id: "hive",
    project: "Gerald Apartment",
    attribution: "Homeowner review",
    review: "What struck us was how seriously they took the climate. Every other architect we spoke to showed us a beautiful house and then talked about adding air conditioning. Ingabe designed a house that doesn't need much of it. Our energy bills are a fraction of what we budgeted for.",
    image: hiveImage,
  },
  {
    id: "bianco",
    project: "Capitoline",
    attribution: "Homeowner review",
    review: "The old part of the house had been added to badly three times over eighty years. Ingabe were the first people to walk in and tell us what was worth keeping and, more importantly, why. The new wing doesn't imitate the old one and doesn't fight it either. Visitors can't always tell where one stops.",
    image: biancoImage,
  },
  {
    id: "still-water",
    project: "Hill View Hotel",
    attribution: "Client review",
    review: "Building at altitude in Switzerland is not straightforward and we hit real problems on site — weather, access, a subcontractor who walked. Théo was there for all of it. That's the part you don't know you're buying when you hire an architect, and it's the part that mattered most.",
    image: stillWaterImage,
  },
  {
    id: "ridge",
    project: "Interior Design",
    attribution: "Homeowner review",
    review: "They surveyed every tree on the plot before drawing a line. We lost four. The original scheme from the previous architect would have lost thirty. That tells you most of what you need to know about how this studio works.",
    image: ridgeImage,
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
    <div className="grid md:grid-cols-2 gap-1 md:gap-20 items-start">
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
        image={testimonialsHero}
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
              A collection of reviews from former clients across new builds, additions, and renovations — in their words, lightly edited for length.
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
