import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Reveal,
  SectionHeading,
  EditorialSplit,
  TeamMemberCard,
} from "@/components/editorial";


// ── Images (remote — replace with local imports later) ──
import aboutHero from "@/assets/Sceneupscale.png";
import missionImage from "@/assets/BB_Clear.png";
import teamOne from "@/assets/Founder.jpeg";
import teamTwo from "@/assets/no_profile.jpg";
import teamThree from "@/assets/no_profile.jpg";
import teamFour from "@/assets/no_profile.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The studio, its people and philosophy" },
      {
        name: "description",
        content:
          "Who we are: the origin of the studio, our firm today, our mission, and our team.",
      },
      { property: "og:title", content: "About — The studio, its people and philosophy" },
      {
        property: "og:description",
        content:
          "Who we are: the origin of the studio, our firm today, our mission, and our team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Madhvan Deo",
    role: "Senior Architect",
    image: teamOne,
  },
  {
    name: "Mugabo Joseph",
    role: "Structural Engineer",
    image: teamTwo,
  },
  {
    name: "Nshuti Eric",
    role: "Quantity Surveyor",
    image: teamThree,
  },
  {
    name: "Zaninka Betty",
    role: "Project Managment",
    image: teamFour,
  },
];

function AboutPage() {
  return (
    <div>
      <Hero
        image={aboutHero}
        eyebrow=""
        headline="About Us"
        imageAlt="A building at dusk"
      />

      {/* Our origin */}
      <section className="section container-editorial">
        <Reveal>
          <EditorialSplit
            ratio="balanced"
            left={<h2 className="display-xl">Our origin.</h2>}
            right={
              <p className="body-lg text-justify text-muted-foreground">
                Ingabe began in 2023 with two architects, one drafting table, and a commission to renovate a farmhouse that everyone else had advised the owners to demolish. That project taught us the thing we've built the studio on: the constraint is the brief. What survived of the original structure became the spine of the new house, and the work that followed — a chapel, a pair of desert houses, a lakeside pavilion — came almost entirely from people who had stood inside that farmhouse and wanted to know who made it.
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
            Today Ingabe is a studio of dedicated architects, designers, and a visualization team. We take on six to eight projects a year, which means every client works directly with the people drawing their building. Our work has been recognised internationally and built across four continents, but the studio is organised around depth rather than volume. We would rather do a small number of buildings properly than a large number adequately.
          </p>
        </Reveal>
      </section>

      {/* Mission callout */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden">
        <img
          src={missionImage}
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
            <p className="display-xl mt-6 max-w-5xl">To make buildings that feel inevitable — as though the site had been waiting for them.</p>
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
                    Oversees and leads the studio's projects, from schematic design through construction administration.
                  </p>
                }
              />
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}
