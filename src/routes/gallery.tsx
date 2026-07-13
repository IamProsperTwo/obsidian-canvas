import { createFileRoute } from "@tanstack/react-router";
import {
  EditorialButton,
  Reveal,
  Hero,
  SectionHeading,
  EditorialSplit,
  EditorialAccordion,
  EditorialTabs,
  ImageCTACard,
  TeamMemberCard,
} from "@/components/editorial";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Component Gallery — Atelier" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Gallery,
});

const arch1 =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";
const arch2 =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";
const arch3 =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80";
const arch4 =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80";
const portrait1 =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80";
const portrait2 =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80";
const portrait3 =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80";

function Label({ n, name }: { n: string; name: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="eyebrow text-muted-foreground">{n}</span>
      <span className="eyebrow text-foreground">{name}</span>
    </div>
  );
}

function Gallery() {
  return (
    <div className="pb-32">
      <div className="container-editorial pt-16 pb-12 border-b border-border">
        <p className="eyebrow">Internal / Not linked</p>
        <h1 className="display-xl mt-6">Component gallery</h1>
        <p className="body-lg mt-6 max-w-2xl">
          Preview of the reusable editorial components. Review each before we compose pages.
        </p>
      </div>

      {/* 1. Buttons */}
      <section className="container-editorial section">
        <Label n="01" name="Button" />
        <div className="flex flex-wrap items-center gap-6">
          <EditorialButton>View portfolio</EditorialButton>
          <EditorialButton size="sm">Read more</EditorialButton>
          <EditorialButton disabled>Disabled</EditorialButton>
        </div>
      </section>

      <hr className="hairline" />

      {/* 2. Hero */}
      <section>
        <div className="container-editorial pt-24 pb-8">
          <Label n="02" name="Eyebrow + Headline hero" />
        </div>
        <Hero
          image={arch1}
          eyebrow="Selected Works — 2015 / 2025"
          headline="A decade of quiet architecture."
        />
      </section>

      <hr className="hairline" />

      {/* 3. Section heading */}
      <section className="container-editorial section">
        <Label n="03" name="Section heading" />
        <SectionHeading
          eyebrow="Studio"
          heading="Architecture rooted in restraint."
          action={<EditorialButton size="sm">All projects</EditorialButton>}
        />
      </section>

      <hr className="hairline" />

      {/* 4. Editorial split */}
      <section className="container-editorial section">
        <Label n="04" name="Editorial two-column split" />
        <EditorialSplit
          ratio="narrow-left"
          left={
            <div>
              <p className="eyebrow">On practice</p>
              <h3 className="display-lg mt-4">The studio</h3>
            </div>
          }
          right={
            <div className="body-lg space-y-6">
              <p>
                We design spaces that recede — where the material, the light, and the proportion do
                the speaking. Our work moves between residential, hospitality, and cultural
                commissions across four continents.
              </p>
              <p>
                Each project begins with a slow reading of place. Nothing is added that isn't
                necessary; everything remaining is considered.
              </p>
            </div>
          }
        />
        <div className="mt-24">
          <EditorialSplit
            left={
              <img src={arch3} alt="" className="w-full aspect-[4/5] object-cover" />
            }
            right={
              <div className="flex flex-col justify-center h-full">
                <p className="eyebrow">Casa Ligure</p>
                <h3 className="display-lg mt-4">A weekend house above the Ligurian Sea.</h3>
                <p className="body-lg mt-8">
                  Cast concrete, oiled oak, sea-glass — a slow orchestration of coastal light.
                </p>
              </div>
            }
          />
        </div>
      </section>

      <hr className="hairline" />

      {/* 5. Accordion */}
      <section className="container-editorial section">
        <Label n="05" name="Accordion" />
        <EditorialAccordion
          items={[
            {
              id: "process",
              title: "Process",
              content:
                "From first conversation to occupancy, our process is deliberately unhurried. Every project passes through six defined phases, each closing with a moment of collective review.",
            },
            {
              id: "materials",
              title: "Materials",
              content:
                "We work with a restrained palette: lime plaster, cast concrete, aged brass, oiled hardwoods, hand-glazed ceramic. Nothing is chosen for effect.",
            },
            {
              id: "collaboration",
              title: "Collaboration",
              content:
                "Our closest work happens alongside a small circle of makers, engineers, and landscape architects we have known for years.",
            },
          ]}
        />
      </section>

      <hr className="hairline" />

      {/* 6. Tabs */}
      <section className="container-editorial section">
        <Label n="06" name="Tab panel" />
        <EditorialTabs
          tabs={[
            {
              id: "residential",
              label: "Residential",
              content: (
                <div className="body-lg max-w-2xl">
                  Private houses and apartments — commissions grounded in daily ritual, light, and
                  material honesty.
                </div>
              ),
            },
            {
              id: "hospitality",
              label: "Hospitality",
              content: (
                <div className="body-lg max-w-2xl">
                  Hotels, restaurants and retreats designed as slow, atmospheric worlds.
                </div>
              ),
            },
            {
              id: "cultural",
              label: "Cultural",
              content: (
                <div className="body-lg max-w-2xl">
                  Galleries and civic interiors — spaces of quiet gathering.
                </div>
              ),
            },
            {
              id: "objects",
              label: "Objects &amp; Interiors",
              content: (
                <div className="body-lg max-w-2xl">
                  Furniture and fittings developed in-house, often bespoke to a single project.
                </div>
              ),
            },
          ]}
        />
      </section>

      <hr className="hairline" />

      {/* 7. Image CTA cards */}
      <section className="container-editorial section">
        <Label n="07" name="Image CTA card" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImageCTACard image={arch2} eyebrow="Residence 04" label="Villa Nera" href="#" />
          <ImageCTACard image={arch3} eyebrow="Hospitality" label="Hotel Sanremo" href="#" />
          <ImageCTACard image={arch4} eyebrow="Cultural" label="Kōbō Pavilion" href="#" />
        </div>
      </section>

      <hr className="hairline" />

      {/* 8. Team card */}
      <section className="container-editorial section">
        <Label n="08" name="Team member card" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMemberCard
            image={portrait1}
            name="Élise Marchand"
            role="Founding Partner"
            bio="Trained in Paris and Tokyo, Élise founded the studio in 2015 after a decade with SANAA. Her work has been exhibited at the Venice Biennale and the V&A."
          />
          <TeamMemberCard
            image={portrait2}
            name="Ansel Vogel"
            role="Partner, Architecture"
            bio="Ansel leads architectural projects across Europe. He teaches design studio at ETH Zürich and writes occasionally on material culture."
          />
          <TeamMemberCard
            image={portrait3}
            name="Ines Okafor"
            role="Head of Interiors"
            bio="Ines shapes the studio's interior work — a practice built on tactility, restraint, and a long attention to craft."
          />
        </div>
      </section>

      <hr className="hairline" />

      {/* 9. Reveal */}
      <section className="container-editorial section">
        <Label n="09" name="Scroll reveal (fade + rise)" />
        <div className="space-y-16">
          <Reveal>
            <div className="border border-border p-12">
              <p className="eyebrow">Block one</p>
              <h3 className="display-lg mt-4">Appears on scroll.</h3>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border border-border p-12">
              <p className="eyebrow">Block two — delayed</p>
              <h3 className="display-lg mt-4">Softly, in sequence.</h3>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="border border-border p-12">
              <p className="eyebrow">Block three</p>
              <h3 className="display-lg mt-4">Reduced motion respected.</h3>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
