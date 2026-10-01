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
import approachHero from "@/assets/CAP_Photo - 10.png";
import visionImage from "@/assets/A_2 - Photo.png";
import collaborationImage from "@/assets/NDERA_2 - Photo (copy).png";
import typeHomes from "@/assets/A_4 - Photo.png";
import typeCommercial from "@/assets/AZ_option A facade 2.png";
import typeInteriorDesign from "@/assets/KABAIJA INTERIORS/1D_dinning.jpg";
import typeSpaces from "@/assets/NYABIHU_1 - Photo.png";
import preDesignOne from "@/assets/CAP_Photo - 10.png";
import preDesignTwo from "@/assets/NYABIHU_14 - Photo.png";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Approach — Design philosophy & process" },
      {
        name: "description",
        content:
          "How we work: vision, collaboration, specialties, project types, and the phases of every project.",
      },
      { property: "og:title", content: "Approach — Design philosophy & process" },
      {
        property: "og:description",
        content:
          "How we work: vision, collaboration, specialties, project types, and the phases of every project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApproachPage,
});

const projectTypeTabs: EditorialTab[] = [
  {
    id: "homes",
    label: "Homes",
    content: (
      <LocationPanel
        image={typeHomes}
        title="Designing homes."
        body="A home is the longest conversation we have with a client. We design houses around how people actually live — where the morning light lands, where the quiet corners are, the route from the kitchen to the garden — and we stay on site until the last detail is right."
      />
    ),
  },
  {
    id: "commercial",
    label: "Commercial",
    content: (
      <LocationPanel
        image={typeCommercial}
        title="Designing for commerce."
        body="Commercial buildings have to work hard: for the people inside them, for the street they sit on, and for the business they carry. We design offices, hotels, and mixed-use buildings that earn their place in the city and keep earning it as they age."
      />
    ),
  },
  {
    id: "interior-design",
    label: "Interior Design",
    content: (
      <LocationPanel
        image={typeInteriorDesign}
        title="Designing interiors."
        body="Interiors are where a building meets daily life. We carry the architecture through to the last detail — materials, light, joinery, furniture — so the inside of the building tells the same story as the outside."
      />
    ),
  },
  {
    id: "spaces",
    label: "Spaces",
    content: (
      <LocationPanel
        image={typeSpaces}
        title="Designing spaces."
        body="Some projects are not a single building but the space around and between buildings — workplaces, public areas, facilities people move through every day. We start with how the space is actually used, then let that use lead the design."
      />
    ),
  },
];

const phases: EditorialAccordionItem[] = [
  {
    id: "pre-design",
    title: "Pre-Design",
    content: (
      <div className="space-y-6">
        <p>
          We visit the site, survey it, and study its climate, zoning, and constraints. We interview you — properly, at length — and write a brief together. Nothing is drawn in this phase, and it's the phase that determines whether the project succeeds.
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
    title: "Schematic Design",
    content: (
      <p>The first drawings. We develop two or three genuinely different approaches rather than one option with variations, and we argue for each of them. You'll see plans, sections, and early models. We expect to be pushed back on.</p>
    ),
  },
  {
    id: "dd",
    title: "Design Development",
    content: <p>The chosen direction gets resolved. Materials, structure, systems, and light are worked out in detail alongside our engineering consultants, and the renderings become accurate enough to make decisions from. Costs are tested against reality here, not later.</p>,
  },
  {
    id: "cd",
    title: "Construction Documents",
    content: <p>The full technical set — everything a contractor needs to build the project exactly as designed. Permitting runs in parallel. This phase is unglamorous and it is where most projects are quietly lost or saved.</p>,
  },
  {
    id: "ca",
    title: "Construction Administration",
    content: <p>We stay involved through construction: reviewing submittals, answering questions from the field, and visiting the site regularly. Buildings change during construction. We're there to make sure they change in the right direction.</p>,
  },
];

const expertiseTabs: EditorialTab[] = [
  {
    id: "continents",
    label: "Continents",
    content: (
      <ExpertisePanel
        title="Across continents."
        body="Our built work spans four continents, which has taught us that good architecture doesn't travel — but a good method does."
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
        body="We've run projects across nine time zones. The studio is built for it: early site visits, long handovers, and a documentation habit that assumes nobody is awake to ask."
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
        body="From the tropics to the near-Arctic. The further you get from the equator, the more the sun stops being a nuisance and starts being a resource."
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
        body="Thin air changes everything — how materials cure, how people breathe, how buildings hold heat. We've designed at both ends of that range."
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
        body="The extremes our buildings have had to survive. Every envelope we detail is designed for the worst week of the year, not the average one."
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
        body="Snow load has shaped more of our roof geometry than aesthetics ever has. We consider that a feature."
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
        body="Water is the thing that ends buildings. We design for the drainage, the overflow, and the failure — in that order."
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
                className="aspect-[4/3.5] w-full object-cover"
              />
            }
            right={
              <div>
                <p className="eyebrow">Vision</p>
                <h2 className="display-xl mt-6">Vision & philosophy.</h2>
                <p className="body-lg text-muted-foreground mt-8 max-w-xl">
                  We believe a building's first obligation is to its site. Before we draw, we spend time on the land — watching where the light lands in the morning, where the wind comes from, where people naturally walk. The design that follows is an argument for that specific place, and it should be impossible to move it somewhere else without the argument falling apart.
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
            Every project starts with listening. Not a questionnaire — a conversation, usually several, about how you live, what you're tired of, and what you've never been able to articulate to an architect before. Most clients arrive with a plan they think they want. Our job in the first weeks is to find out what's underneath it. The brief we write together at the end of that process is almost never the one we started with, and the building is better for it.
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
                  Architecture is not a solo act. We work alongside structural and environmental engineers from the first sketch rather than handing drawings over at the end, and we bring in craftspeople — joiners, masons, metalworkers — while decisions are still reversible. It makes the design process slower and the construction process dramatically faster. Clients are part of that room too. You'll see the building change, and you'll know why.
                </p>
              </div>
            }
            right={
              <img
                src={collaborationImage}
                alt=""
                className="aspect-[4/3.5] w-full object-cover"
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
            
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            {
              title: "Single Family Homes",
              body: "Ground-up houses on unusual sites — steep, remote, exposed, or protected. We handle the project from site analysis and feasibility through construction administration, and we stay on site until the last detail is right. These projects typically run 18–30 months from first conversation to move-in.",
            },
            {
              title: "Home Renovation / Additions",
              body: "Work on existing buildings, where the constraint is the design. We're interested in what should be kept and why — structure, character, memory — and in making the new work legible against the old rather than pretending it was always there.",
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

      {/* Project types */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="What we take on" heading="Project types." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-16">
            <EditorialTabs tabs={projectTypeTabs} />
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
