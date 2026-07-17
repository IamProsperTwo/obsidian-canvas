import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Reveal,
  SectionHeading,
  EditorialSplit,
  EditorialTabs,
  EditorialAccordion,
  type EditorialTab,
  type EditorialAccordionItem,
} from "@/components/editorial";

// ── Images (remote — replace with local imports later) ──
const approachHero =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=80";
const visionImage =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80";
const collaborationImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";
const locationDesert =
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=2000&q=80";
const locationMountain =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80";
const locationWater =
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=80";
const locationWoods =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80";
const preDesignOne =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80";
const preDesignTwo =
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Approach — Design philosophy & process" },
      {
        name: "description",
        content:
          "How we work: vision, collaboration, specialties, project locations, and the phases of every project.",
      },
      { property: "og:title", content: "Approach — Design philosophy & process" },
      {
        property: "og:description",
        content:
          "How we work: vision, collaboration, specialties, project locations, and the phases of every project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApproachPage,
});

const locationTabs: EditorialTab[] = [
  {
    id: "desert",
    label: "Desert",
    content: (
      <LocationPanel
        image={locationDesert}
        title="Designing for the desert."
        body="[How we design for arid climates — thermal mass, shade, orientation, and materials that age gracefully under a hard sun.]"
      />
    ),
  },
  {
    id: "mountain",
    label: "Mountain",
    content: (
      <LocationPanel
        image={locationMountain}
        title="Designing for the mountain."
        body="[Building on slope, working with snow loads, framing views of the range while sheltering from wind.]"
      />
    ),
  },
  {
    id: "water",
    label: "Water",
    content: (
      <LocationPanel
        image={locationWater}
        title="Designing for the water."
        body="[Coastal and lakeside homes — salt, humidity, tide, and the discipline of a horizon-facing plan.]"
      />
    ),
  },
  {
    id: "woods",
    label: "Woods",
    content: (
      <LocationPanel
        image={locationWoods}
        title="Designing for the woods."
        body="[Nestling a home into a forest — dappled light, natural materials, and a quiet dialogue with the trees.]"
      />
    ),
  },
];

const phases: EditorialAccordionItem[] = [
  {
    id: "pre-design",
    title: "Thoughtful — Pre-Design",
    content: (
      <div className="space-y-6">
        <p>
          [We start by listening. Site visits, program conversations, understanding the client's
          life and aspirations before a line is drawn.]
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={preDesignOne}
            alt=""
            className="aspect-[4/3] w-full object-cover"
          />
          <img
            src={preDesignTwo}
            alt=""
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    id: "schematic",
    title: "Thought Provoking — Schematic Design",
    content: (
      <p>[Early massing, plan diagrams, and material studies that test the big ideas.]</p>
    ),
  },
  {
    id: "dd",
    title: "Thought On — Design Development",
    content: <p>[Refining the design, resolving detail, coordinating engineering and systems.]</p>,
  },
  {
    id: "cd",
    title: "Thought Through — Construction Documents",
    content: <p>[The drawings that make the building real — precise, coordinated, buildable.]</p>,
  },
  {
    id: "ca",
    title: "Thought Out — Construction Administration",
    content: <p>[On site with the builder — protecting design intent through to completion.]</p>,
  },
];

const expertiseTabs: EditorialTab[] = [
  {
    id: "continents",
    label: "Continents",
    content: (
      <ExpertisePanel
        title="Across continents."
        body="[The studio has worked across multiple continents, adapting to climate, culture, and code.]"
        graphic={<WorldMap />}
      />
    ),
  },
  {
    id: "timezones",
    label: "Time Zones",
    content: (
      <ExpertisePanel
        title="Across time zones."
        body="[Coordinating projects across time zones — from first light to last.]"
        graphic={<TimeZoneStrip />}
      />
    ),
  },
  {
    id: "parallels",
    label: "Parallels",
    content: (
      <ExpertisePanel
        title="Across parallels."
        body="[From equatorial to polar — a range of latitudes shapes how a building meets the sun.]"
        graphic={<ParallelsGraphic />}
      />
    ),
  },
  {
    id: "altitudes",
    label: "Altitudes",
    content: (
      <ExpertisePanel
        title="Across altitudes."
        body="[Sea level to alpine — pressure, air, and light change the way a home performs.]"
        graphic={<AltitudeChart />}
      />
    ),
  },
  {
    id: "temperatures",
    label: "Temperatures",
    content: (
      <ExpertisePanel
        title="Across temperatures."
        body="[From desert heat to sub-zero winters — envelopes tuned to their climate.]"
        graphic={<RangeBar min="-30°" max="45°" />}
      />
    ),
  },
  {
    id: "snowfall",
    label: "Snowfall",
    content: (
      <ExpertisePanel
        title="Across snowfall."
        body="[Roofs and rooms that welcome deep snow without fighting it.]"
        graphic={<RangeBar min="0 cm" max="8 m" />}
      />
    ),
  },
  {
    id: "rainfall",
    label: "Rainfall",
    content: (
      <ExpertisePanel
        title="Across rainfall."
        body="[Dry-land drainage to rainforest downpour — water routed and celebrated.]"
        graphic={<RangeBar min="50 mm" max="4000 mm" />}
      />
    ),
  },
];

function ApproachPage() {
  return (
    <div>
      <Hero
        image={approachHero}
        eyebrow="How we work"
        headline="Design approach."
        imageAlt="Aerial view of a hillside home"
      />

      {/* Vision & philosophy */}
      <section className="section container-editorial">
        <Reveal>
          <EditorialSplit
            ratio="balanced"
            left={
              <img
                src={visionImage}
                alt=""
                className="aspect-[4/5] w-full object-cover"
              />
            }
            right={
              <div>
                <p className="eyebrow">Vision</p>
                <h2 className="display-xl mt-6">Vision & philosophy.</h2>
                <p className="body-lg text-muted-foreground mt-8 max-w-xl">
                  [Your design philosophy in 2–3 sentences. What you believe about place, material,
                  and the discipline of restraint.]
                </p>
              </div>
            }
          />
        </Reveal>
      </section>

      {/* Tailored to you */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="Every project" heading="Tailored to you." />
        </Reveal>
        <Reveal delay={120}>
          <p className="body-lg text-muted-foreground max-w-3xl mt-12">
            [How every project starts with listening and understanding the client's needs and
            aspirations before any design work begins.]
          </p>
        </Reveal>
      </section>

      {/* Collaborative process */}
      <section className="section container-editorial">
        <Reveal>
          <EditorialSplit
            ratio="balanced"
            left={
              <div>
                <p className="eyebrow">Together</p>
                <h2 className="display-xl mt-6">Collaborative process.</h2>
                <p className="body-lg text-muted-foreground mt-8 max-w-xl">
                  [How you collaborate with clients, engineers, and craftspeople — a shared
                  authorship that produces better buildings.]
                </p>
              </div>
            }
            right={
              <img
                src={collaborationImage}
                alt=""
                className="aspect-[4/5] w-full object-cover"
              />
            }
          />
        </Reveal>
      </section>

      {/* Specialties */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="Specialties" heading="What we build." />
        </Reveal>
        <Reveal delay={80}>
          <p className="body-lg text-muted-foreground max-w-2xl mt-12">
            [A short intro line about the two main streams of work in the studio.]
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            {
              title: "New Build Single Family Homes",
              body: "[Ground-up homes designed for a specific site, climate, and life.]",
            },
            {
              title: "Home Renovation / Additions",
              body: "[Reworking and extending existing homes with the same care as new construction.]",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="border border-border p-10 md:p-12 h-full">
                <h3 className="display-lg">{c.title}</h3>
                <p className="body-lg text-muted-foreground mt-6">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Project locations */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="Where we work" heading="Project locations." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-16">
            <EditorialTabs tabs={locationTabs} />
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="How we work" heading="Process." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-16">
            <EditorialAccordion items={phases} />
          </div>
        </Reveal>
      </section>

      {/* Expertise */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="Reach" heading="Expertise." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-16">
            <EditorialTabs tabs={expertiseTabs} />
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function LocationPanel({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
      <img src={image} alt="" className="aspect-[4/3] w-full object-cover" />
      <div>
        <h3 className="display-lg">{title}</h3>
        <p className="body-lg text-muted-foreground mt-6">{body}</p>
      </div>
    </div>
  );
}

function ExpertisePanel({
  title,
  body,
  graphic,
}: {
  title: string;
  body: string;
  graphic: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className="border border-border p-8 md:p-10">{graphic}</div>
      <div>
        <h3 className="display-lg">{title}</h3>
        <p className="body-lg text-muted-foreground mt-6">{body}</p>
      </div>
    </div>
  );
}

/* --- Simple SVG placeholder graphics --- */

function WorldMap() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto" aria-hidden>
      <rect width="400" height="220" fill="none" />
      {/* very abstract continent blobs */}
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9">
        <path d="M40,80 q20,-30 60,-20 t60,10 q10,20 -10,40 t-70,20 q-40,-10 -40,-50z" />
        <path d="M180,60 q40,-20 80,-5 t60,20 q10,30 -30,50 t-90,15 q-30,-30 -20,-80z" />
        <path d="M110,150 q30,-10 60,5 t50,10 q10,15 -20,25 t-70,5 q-30,-10 -20,-45z" />
        <path d="M300,140 q20,-5 40,5 t30,15" />
      </g>
      <g fill="currentColor" opacity="0.35">
        <circle cx="80" cy="90" r="2" />
        <circle cx="220" cy="80" r="2" />
        <circle cx="180" cy="170" r="2" />
        <circle cx="320" cy="150" r="2" />
      </g>
    </svg>
  );
}

function TimeZoneStrip() {
  return (
    <svg viewBox="0 0 400 120" className="w-full h-auto" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1={(i * 400) / 24}
          x2={(i * 400) / 24}
          y1="20"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity={i % 6 === 0 ? 0.9 : 0.25}
        />
      ))}
      <line x1="0" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="0.5" />
      {["−12", "−6", "0", "+6", "+12"].map((l, i) => (
        <text
          key={l}
          x={(i * 400) / 4}
          y="115"
          fontSize="9"
          fill="currentColor"
          textAnchor="middle"
          opacity="0.7"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}

function ParallelsGraphic() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-auto" aria-hidden>
      <circle cx="150" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
      {[-60, -30, 0, 30, 60].map((lat) => {
        const y = 100 - (lat / 90) * 80;
        return (
          <ellipse
            key={lat}
            cx="150"
            cy={y}
            rx={80 * Math.cos((lat * Math.PI) / 180)}
            ry="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.6"
          />
        );
      })}
    </svg>
  );
}

function AltitudeChart() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-auto" aria-hidden>
      <polyline
        points="0,140 60,120 110,100 170,70 230,90 290,50 350,30 400,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <text x="0" y="20" fontSize="9" fill="currentColor" opacity="0.7">
        4000m
      </text>
      <text x="0" y="150" fontSize="9" fill="currentColor" opacity="0.7">
        0m
      </text>
    </svg>
  );
}

function RangeBar({ min, max }: { min: string; max: string }) {
  return (
    <svg viewBox="0 0 400 80" className="w-full h-auto" aria-hidden>
      <line x1="20" y1="40" x2="380" y2="40" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="40" r="4" fill="currentColor" />
      <circle cx="380" cy="40" r="4" fill="currentColor" />
      <text x="20" y="65" fontSize="10" fill="currentColor" opacity="0.7">
        {min}
      </text>
      <text x="380" y="65" fontSize="10" fill="currentColor" opacity="0.7" textAnchor="end">
        {max}
      </text>
    </svg>
  );
}
