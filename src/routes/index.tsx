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

// ── Images ──
import heroImage from "@/assets/AZ_option A facade 2.png";
import projectHomes from "@/assets/A_4 - Photo.png";
import projectCommercial from "@/assets/test_9 - Photo.jpg";
import projectInteriorDesign from "@/assets/D_kitchen .jpg";
import projectSpaces from "@/assets/NYABIHU_1 - Photo.png";
import specialtyHomes from "@/assets/NDERA_2.png";
import specialtyEventVenues from "@/assets/test_3 - Photo.jpg";
import specialtyResorts from "@/assets/C_ceiling .jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const projects = [
  { name: "Homes", image: projectHomes },
  { name: "Commercial", image: projectCommercial },
  { name: "Interior Design", image: projectInteriorDesign },
  { name: "Spaces", image: projectSpaces },
];

const specialties = [
  { label: "Homes", image: specialtyHomes },
  { label: "Commercial", image: specialtyEventVenues },
  { label: "Interior Design", image: specialtyResorts },
];

function Home() {
  const [activeSpec, setActiveSpec] = useState(0);

  return (
    <>
      {/* 1. Hero */}
      <Hero
        image={heroImage}
        eyebrow=""
        headline="Architecture that belongs to its landscape."
      />

      {/* 2. Intro statement */}
      <section className="container-editorial section">
        <Reveal>
          <p className="eyebrow">The studio</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="display-lg text-muted-foreground mt-10">
            Ingabe is an architecture studio working across residential, hospitality, and cultural projects. We design a small number of buildings each year, closely — every project begins with the site, its climate, and a long conversation with the people who will use it. Our work spans four continents and has been shaped by deserts, mountains, coastlines, and forests, but the method never changes: understand the place first, then build something that could only exist there.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      {/* 3. Our work */}
      <section className="container-editorial section">
        <Reveal>
          <SectionHeading
            eyebrow="Explore"
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
            We take on new homes, event venues, and boutique resorts — projects where the building has to hold something more than function. Each one is shaped by three forces: the climate it sits in, the context around it, and the vision of the person commissioning it. We don't carry a house style from one site to the next. What we carry is a way of listening.
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
          <blockquote className="display-lg mt-12 max-w-5xl font-display font-light leading-[1.05]">
            <span aria-hidden className="text-muted-foreground">"</span>
            We came to Ingabe with a difficult site and a vague idea. They spent the first month asking questions and drawing nothing. What we ended up with is the only house that could have been built on that hill.
            <span aria-hidden className="text-muted-foreground">"</span>
          </blockquote>
        </Reveal>
        <Reveal delay={220}>
          <p className="eyebrow mt-12">— CEO, Aziz Complex</p>
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
      <div className="hidden md:grid mt-16 grid-cols-[1fr_2fr] gap-12 lg:gap-16">
        <div>
          <div className="sticky top-32">
            <p className="eyebrow text-muted-foreground">Currently viewing</p>
            <div className="mt-6 relative h-[11rem]">
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
      className="relative h-[85vh] w-full overflow-hidden"
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
