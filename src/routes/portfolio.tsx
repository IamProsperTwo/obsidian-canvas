import { useMemo, useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Hero, Reveal } from "@/components/editorial";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Atelier Studio" },
      { name: "description", content: "Selected projects in architecture and interior design across desert, mountain, water and woodland sites." },
      { property: "og:title", content: "Portfolio — Atelier Studio" },
      { property: "og:description", content: "Selected projects in architecture and interior design." },
    ],
  }),
  component: PortfolioPage,
});

type Category = "Desert" | "Mountain" | "Water" | "Woods";

interface Project {
  id: string;
  name: string;
  category: Category;
  location: string;
  year: string;
  cover: string;
  gallery: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: "sand-house",
    name: "Sand House",
    category: "Desert",
    location: "Sonoran Desert, AZ",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80",
    ],
    description: "[A low, horizontal residence carved into the desert floor — courtyards, rammed earth walls, and shaded verandas frame long views across the valley.]",
  },
  {
    id: "ochre-retreat",
    name: "Ochre Retreat",
    category: "Desert",
    location: "Marfa, TX",
    year: "2023",
    cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80",
    ],
    description: "[A pair of pavilions clad in weathered steel — quiet, monastic interiors open onto endless horizon.]",
  },
  {
    id: "ridge-cabin",
    name: "Ridge Cabin",
    category: "Mountain",
    location: "Dolomites, Italy",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1518602164578-cd0074062767?auto=format&fit=crop&w=2000&q=80",
    ],
    description: "[Timber and stone lodge cantilevered over a ridge — vast glazed elevations follow the rock.]",
  },
  {
    id: "alpine-house",
    name: "Alpine House",
    category: "Mountain",
    location: "Zermatt, Switzerland",
    year: "2022",
    cover: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=80",
    ],
    description: "[A chalet reimagined — dark charred cladding, minimal detailing, warm oak interiors.]",
  },
  {
    id: "still-water",
    name: "Still Water",
    category: "Water",
    location: "Sognefjord, Norway",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1600566753086-00f18fe6ba68?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fe6ba68?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1613977257592-4a9a32f9141b?auto=format&fit=crop&w=2000&q=80",
    ],
    description: "[A residence hovering above the water — reflective glass planes dissolve into the fjord.]",
  },
  {
    id: "tidal-house",
    name: "Tidal House",
    category: "Water",
    location: "Big Sur, CA",
    year: "2023",
    cover: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80",
    ],
    description: "[Board-formed concrete anchors the house to a cliff — walls of glass follow the coastline.]",
  },
  {
    id: "canopy-house",
    name: "Canopy House",
    category: "Woods",
    location: "Pacific Northwest, OR",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2000&q=80",
    ],
    description: "[Elevated among old-growth firs — a slender, dark-clad volume with quiet, cathedral-like interiors.]",
  },
  {
    id: "black-forest",
    name: "Black Forest",
    category: "Woods",
    location: "Baden-Württemberg, DE",
    year: "2022",
    cover: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80",
    ],
    description: "[A tight cluster of charred-timber volumes threaded between mature trees.]",
  },
];

const filters = ["All", "Desert", "Mountain", "Water", "Woods"] as const;
type Filter = (typeof filters)[number];

function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Our work"
        headline="Portfolio."
      />

      <section className="section">
        <div className="container-editorial">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pb-12 border-b border-border">
              {filters.map((f) => {
                const isActive = f === filter;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={cn(
                      "relative eyebrow py-2 transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {f}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 right-0 -bottom-0 h-px bg-foreground origin-left transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </button>
                );
              })}
              <span className="ml-auto eyebrow text-muted-foreground">
                {String(visible.length).padStart(2, "0")} projects
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 120}>
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className={cn(
                    "group relative block w-full overflow-hidden bg-background text-left",
                    i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]",
                  )}
                >
                  <img
                    src={p.cover}
                    alt={p.name}
                    className="absolute inset-0 h-full w-full object-cover brightness-90 transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
                    <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <p className="eyebrow text-foreground/80">{p.category}</p>
                      <p className="display-lg mt-2 text-foreground">{p.name}</p>
                      <p className="eyebrow mt-3 text-foreground/70">
                        {p.location} · {p.year}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active ? <ProjectDetail project={active} onClose={() => setActive(null)} /> : null}
    </>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-[60] bg-background overflow-y-auto animate-fade-in"
    >
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-editorial flex items-center justify-between h-16 md:h-20">
          <div>
            <p className="eyebrow text-muted-foreground">{project.category}</p>
            <p className="eyebrow text-foreground mt-1">{project.name}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project"
            className="inline-flex items-center gap-3 eyebrow text-foreground hover:opacity-70 transition-opacity"
          >
            Close <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="container-editorial pt-16 md:pt-24 pb-24">
        <p className="eyebrow">{project.location} · {project.year}</p>
        <h1 className="display-hero mt-6 max-w-5xl">{project.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-24 mt-20">
          <p className="body-lg">{project.description}</p>
          <div className="space-y-4">
            <Detail label="Category" value={project.category} />
            <Detail label="Location" value={project.location} />
            <Detail label="Year" value={project.year} />
            <Detail label="Status" value="Completed" />
          </div>
        </div>

        <div className="mt-24 space-y-8 md:space-y-12">
          {project.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 80}>
              <div className="w-full overflow-hidden">
                <img
                  src={src}
                  alt={`${project.name} — ${i + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-8 border-b border-border pb-3">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  );
}
