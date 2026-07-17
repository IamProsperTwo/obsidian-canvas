import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Reveal,
  SectionHeading,
  EditorialSplit,
  TeamMemberCard,
  EditorialAccordion,
  type EditorialAccordionItem,
} from "@/components/editorial";

// ── Images (remote — replace with local imports later) ──
const aboutHero =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80";
const missionImage =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80";
const teamOne =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80";
const teamTwo =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80";
const teamThree =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80";
const teamFour =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The studio, its people and philosophy" },
      {
        name: "description",
        content:
          "Who we are: the origin of the studio, our firm today, our mission, our team, and the recognition we've received.",
      },
      { property: "og:title", content: "About — The studio, its people and philosophy" },
      {
        property: "og:description",
        content:
          "Who we are: the origin of the studio, our firm today, our mission, our team, and the recognition we've received.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "[Name]",
    role: "Project Architect",
    image: teamOne,
  },
  {
    name: "[Name]",
    role: "Project Architect",
    image: teamTwo,
  },
  {
    name: "[Name]",
    role: "Visualization Specialist",
    image: teamThree,
  },
  {
    name: "[Name]",
    role: "Project Designer",
    image: teamFour,
  },
];

const awardsIntl: EditorialAccordionItem[] = [
  {
    id: "intl-1",
    title: "National and International Awards & Honors",
    content: (
      <ul className="space-y-3">
        <li>[Award Name] — [Institution], [Year]</li>
        <li>[Award Name] — [Institution], [Year]</li>
        <li>[Award Name] — [Institution], [Year]</li>
        <li>[Award Name] — [Institution], [Year]</li>
      </ul>
    ),
  },
];

const awardsLocal: EditorialAccordionItem[] = [
  {
    id: "local-1",
    title: "Local Awards & Honors",
    content: (
      <ul className="space-y-3">
        <li>[Local Award] — [Year]</li>
        <li>[Local Award] — [Year]</li>
        <li>[Local Award] — [Year]</li>
      </ul>
    ),
  },
];

const books: EditorialAccordionItem[] = [
  {
    id: "books-1",
    title: "Books",
    content: (
      <ul className="space-y-3">
        <li>[Book Title] — [Publisher], [Year]</li>
        <li>[Book Title] — [Publisher], [Year]</li>
        <li>[Book Title] — [Publisher], [Year]</li>
      </ul>
    ),
  },
];

const podcasts: EditorialAccordionItem[] = [
  {
    id: "pod-1",
    title: "Podcasts",
    content: (
      <ul className="space-y-3">
        <li>[Episode Title] — [Podcast Name], [Year]</li>
        <li>[Episode Title] — [Podcast Name], [Year]</li>
        <li>[Episode Title] — [Podcast Name], [Year]</li>
      </ul>
    ),
  },
];

const regions: EditorialAccordionItem[] = [
  {
    id: "reg-1",
    title: "Where we've worked so far",
    content: (
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8">
        <li>[Region]</li>
        <li>[Region]</li>
        <li>[Region]</li>
        <li>[Region]</li>
        <li>[Region]</li>
        <li>[Region]</li>
      </ul>
    ),
  },
];

function AboutPage() {
  return (
    <div>
      <Hero
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Who we are"
        headline="About."
        imageAlt="A building at dusk"
      />

      {/* Our origin */}
      <section className="section container-editorial">
        <Reveal>
          <EditorialSplit
            ratio="balanced"
            left={<h2 className="display-xl">Our origin.</h2>}
            right={
              <p className="body-lg text-muted-foreground">
                [Founding story — how the studio began, early projects, what put you on the map.]
              </p>
            }
          />
        </Reveal>
      </section>

      {/* Our firm */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="Today" heading="Our firm." />
        </Reveal>
        <Reveal delay={120}>
          <p className="body-lg text-muted-foreground max-w-3xl mt-12">
            [Team size, philosophy, awards, reach, how you work with clients. A longer paragraph
            describing the studio as it exists today — its size and shape, the kinds of projects it
            takes on, the values that guide the work, and the way we partner with clients from the
            first conversation through the final walkthrough.]
          </p>
        </Reveal>
      </section>

      {/* Mission callout */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30"
        />
        <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-16 md:pb-24">
          <Reveal>
            <p className="eyebrow text-foreground/80">Our mission</p>
            <p className="display-xl mt-6 max-w-5xl">[Your mission in one sentence.]</p>
          </Reveal>
        </div>
      </section>

      {/* Our team */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="The people" heading="Our team." />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {team.map((m, i) => (
            <Reveal key={m.name + i} delay={i * 100}>
              <TeamMemberCard
                image={m.image}
                name={m.name}
                role={m.role}
                bio={
                  <p>
                    [Short bio — background, focus, what they bring to the studio, personal
                    interests.]
                  </p>
                }
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="section container-editorial">
        <Reveal>
          <SectionHeading eyebrow="Recognition" heading="Awards, press & reach." />
        </Reveal>
        <div className="mt-16 space-y-16">
          <Reveal>
            <EditorialAccordion items={awardsIntl} />
          </Reveal>
          <Reveal>
            <EditorialAccordion items={awardsLocal} />
          </Reveal>
          <Reveal>
            <EditorialAccordion items={books} />
          </Reveal>
          <Reveal>
            <EditorialAccordion items={podcasts} />
          </Reveal>
          <Reveal>
            <EditorialAccordion items={regions} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
