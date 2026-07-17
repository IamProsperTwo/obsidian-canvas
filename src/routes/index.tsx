import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  EditorialButton,
  Hero,
  Reveal,
  SectionHeading,
} from "@/components/editorial";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80";

const projects = [
  {
    name: "Desert",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Mountain",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Water",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Woods",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
  },
];

const specialties = [
  {
    label: "Homes",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    label: "Event venues",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fe6ba68?auto=format&fit=crop&w=1800&q=85",
  },
  {
    label: "Boutique resorts",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=85",
  },
];

const press = ["Architectural Digest", "Dezeen", "Wallpaper*", "Dwell", "Domus", "The New York Times"];

function Home() {
  const [activeSpec, setActiveSpec] = useState(0);

  return (
    <>
      {/* 1. Hero */}
      <Hero
        image={HERO_IMG}
        eyebrow="What we do"
        headline="Architecture that connects people with nature."
      />

      {/* 2. Intro statement */}
      <section className="container-editorial section">
        <Reveal>
          <p className="eyebrow">The studio</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="display-xl mt-10 max-w-5xl">
            [Describe your firm — what you design, your scale and reach, notable press or awards, in
            one confident paragraph that reads with quiet authority.]
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      {/* 3. Our work */}
      <section className="container-editorial section">
        <Reveal>
          <SectionHeading
            eyebrow="Selected"
            heading="Our work"
            action={
              <Link to="/portfolio">
                <EditorialButton size="sm">View more</EditorialButton>
              </Link>
            }
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <Link
                to="/portfolio"
                className="group relative block aspect-[3/4] overflow-hidden bg-background"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover brightness-90 transition-all duration-[900ms] ease-out group-hover:scale-[1.05] group-hover:brightness-110"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="eyebrow text-foreground">{p.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="hairline" />

      {/* 4. Our services */}
      <section className="container-editorial section">
        <Reveal>
          <SectionHeading eyebrow="Practice" heading="Our services" />
        </Reveal>
        <Reveal delay={120}>
          <p className="body-lg mt-16 max-w-3xl">
            [What projects you take on — e.g. private homes, event venues, boutique resorts — and
            how each is shaped by climate, context, and the client's vision. Keep it a single
            confident paragraph.]
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      {/* 5. Specialties sticky showcase */}
      <SpecialtiesShowcase
        items={specialties}
        activeIndex={activeSpec}
        onActiveChange={setActiveSpec}
      />

      <hr className="hairline" />

      {/* 6. Featured testimonial */}
      <section className="container-editorial section">
        <Reveal>
          <p className="eyebrow">People are saying</p>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="display-xl mt-12 max-w-5xl font-display font-light leading-[1.05]">
            <span aria-hidden className="text-muted-foreground">"</span>
            [Insert a standout client quote — one or two sentences that capture the essence of
            working with the studio.]
            <span aria-hidden className="text-muted-foreground">"</span>
          </blockquote>
        </Reveal>
        <Reveal delay={220}>
          <p className="eyebrow mt-12">— [Client Name], [Project]</p>
        </Reveal>
      </section>

      <hr className="hairline" />

      {/* 7. Featured in */}
      <section className="container-editorial section">
        <Reveal>
          <p className="eyebrow">Featured in</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
            {press.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center border border-border py-8 px-4 text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
              >
                <span className="font-display text-lg text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

function SpecialtiesShowcase({
  items,
  activeIndex,
  onActiveChange,
}: {
  items: { label: string; image: string }[];
  activeIndex: number;
  onActiveChange: (i: number) => void;
}) {
  return (
    <section className="container-editorial section">
      <Reveal>
        <p className="eyebrow">Specialties</p>
      </Reveal>

      {/* Desktop sticky-scroll */}
      <div className="hidden md:grid mt-16 grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
        <div>
          <div className="sticky top-32">
            <p className="eyebrow text-muted-foreground">Currently viewing</p>
            <div className="mt-6 relative h-[8.5rem]">
              {items.map((item, i) => (
                <h3
                  key={item.label}
                  className={cn(
                    "display-xl absolute inset-0 transition-all duration-700 ease-out",
                    i === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4",
                  )}
                  aria-hidden={i !== activeIndex}
                >
                  {item.label}
                </h3>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4">
              {items.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => onActiveChange(i)}
                  className={cn(
                    "eyebrow text-left transition-colors",
                    i === activeIndex ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="tabular-nums mr-4">0{i + 1}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-24">
          {items.map((item, i) => (
            <SpecialtyPanel
              key={item.label}
              index={i}
              item={item}
              onEnter={() => onActiveChange(i)}
            />
          ))}
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="md:hidden mt-12 space-y-16">
        {items.map((item) => (
          <div key={item.label}>
            <h3 className="display-xl">{item.label}</h3>
            <img
              src={item.image}
              alt={item.label}
              className="mt-6 w-full aspect-[3/4] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function SpecialtyPanel({
  item,
  onEnter,
}: {
  index: number;
  item: { label: string; image: string };
  onEnter: () => void;
}) {
  return (
    <div
      className="relative aspect-[16/10] h-[85vh] w-full overflow-hidden"
      onMouseEnter={onEnter}
      ref={(el) => {
        if (!el) return;
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting && e.intersectionRatio > 0.5) onEnter();
            });
          },
          { threshold: [0.5] },
        );
        io.observe(el);
      }}
    >
      <img src={item.image} alt={item.label} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}
