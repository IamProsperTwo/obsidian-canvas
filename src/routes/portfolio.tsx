import { useMemo, useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Hero, Reveal } from "@/components/editorial";
import { cn } from "@/lib/utils";


// ── Images (remote — replace with local imports later) ──
import portfolioHero from "@/assets/A_4 - Photo.png";
import sandHouseCover from "@/assets/AZIZ/AZ_OPTION A FACADE DESIGN.png";
import sandHouseGallery1 from "@/assets/AZIZ/AZ_OPTION A FACADE DESIGN.png";
import sandHouseGallery2 from "@/assets/AZIZ/AZ_option A facade 2.png";
import sandHouseGallery3 from "@/assets/AZIZ/AZ_OPTION A FACADE DESIGN.png";
import sandHouseGallery4 from "@/assets/AZIZ/AZ_OPTION A.png";

import ochreRetreatCover from "@/assets/GERALD APARTMENT/1GA_Scene 2_upscale01.png";
import ochreRetreatGallery1 from "@/assets/GERALD APARTMENT/1GA_Scene 2_upscale01.png";
import ochreRetreatGallery2 from "@/assets/GERALD APARTMENT/2GA_Scene 4_1_upscale01.png";
import ochreRetreatGallery3 from "@/assets/GERALD APARTMENT/3GA_Scene 5_upscale01.png";
import ochreRetreatGallery4 from "@/assets/GERALD APARTMENT/4GA_Scene 1_upscale01.png";

import ridgeCabinCover from "@/assets/CAPITOLINE/1BB_Clear.png";
import ridgeCabinGallery1 from "@/assets/CAPITOLINE/1BB_Clear.png";
import ridgeCabinGallery2 from "@/assets/CAPITOLINE/2CAP_Rainy.png";
import ridgeCabinGallery3 from "@/assets/CAPITOLINE/3CAP_Photo - 9.png";
import ridgeCabinGallery4 from "@/assets/CAPITOLINE/4cc_Photo - 10.png";

import alpineHouseCover from "@/assets/HILL VIEW HOTEL/3test_10 - Photo.jpg";
import alpineHouseGallery1 from "@/assets/HILL VIEW HOTEL/3test_10 - Photo.jpg";
import alpineHouseGallery2 from "@/assets/HILL VIEW HOTEL/2Photo.jpg";
import alpineHouseGallery3 from "@/assets/HILL VIEW HOTEL/5test_16 - Photo.jpg";
import alpineHouseGallery4 from "@/assets/HILL VIEW HOTEL/4test_14 - Photo.jpg";

import stillWaterCover from "@/assets/KABAIJA INTERIORS/1D_dinning.jpg";
import stillWaterGallery1 from "@/assets/KABAIJA INTERIORS/1D_dinning.jpg";
import stillWaterGallery2 from "@/assets/KABAIJA INTERIORS/3x_ent.png";
import stillWaterGallery3 from "@/assets/KABAIJA INTERIORS/D_kitchen .jpg";
import stillWaterGallery4 from "@/assets/KABAIJA INTERIORS/1.jpg";

import tidalHouseCover from "@/assets/NDERA/5NDERA_7 - Photo.png";
import tidalHouseGallery1 from "@/assets/NDERA/5NDERA_7 - Photo.png";
import tidalHouseGallery2 from "@/assets/NDERA/3NDERA_16 - Photo.png";
import tidalHouseGallery3 from "@/assets/NDERA/2NDERA_3 - Photo.png";
import tidalHouseGallery4 from "@/assets/NDERA/4NDERA_9 - Photo.png";

import canopyHouseCover from "@/assets/NYABIHU MILL PROJECT/1NYABIHU_1 - Photo.png";
import canopyHouseGallery1 from "@/assets/NYABIHU MILL PROJECT/1NYABIHU_1 - Photo.png";
import canopyHouseGallery2 from "@/assets/NYABIHU MILL PROJECT/2NYABIHU_9 - Photo.png";
import canopyHouseGallery3 from "@/assets/NYABIHU MILL PROJECT/3NYABIHU_13 - Photo.png";
import canopyHouseGallery4 from "@/assets/NYABIHU MILL PROJECT/4NYABIHU_4 - Photo.png";

import blackForestCover from "@/assets/TIMOTHY RESIDENCE/1A_1 - Photo.png";
import blackForestGallery1 from "@/assets/TIMOTHY RESIDENCE/1A_1 - Photo.png";
import blackForestGallery2 from "@/assets/TIMOTHY RESIDENCE/2A_3 - Photo.png";
import blackForestGallery3 from "@/assets/TIMOTHY RESIDENCE/5A_11 - Photo.png";
import blackForestGallery4 from "@/assets/TIMOTHY RESIDENCE/4A_5 - Photo.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ingabe Studio" },
      { name: "description", content: "Selected projects across homes, commercial buildings, interior design and spaces." },
      { property: "og:title", content: "Portfolio — Ingabe Studio" },
      { property: "og:description", content: "Selected projects in architecture and interior design." },
    ],
  }),
  component: PortfolioPage,
});

type Category = "Homes" | "Commercial" | "Interior Design" | "Spaces";

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
    name: "Aziz Complex",
    category: "Commercial",
    location: "Rubavu",
    year: "2025",
    cover: sandHouseCover,
    gallery: [sandHouseGallery1, sandHouseGallery2, sandHouseGallery3, sandHouseGallery4],
    description: "The site sat on a north-facing slope with a fall of eleven metres across its width and a single access track that washed out twice a year. The client's brief asked for four bedrooms and a view. What the site asked for was a building that touched the ground in as few places as possible.",
  },
  {
    id: "ochre-retreat",
    name: "Gerald Apartment",
    category: "Homes",
    location: "Kigali",
    year: "2025",
    cover: ochreRetreatCover,
    gallery: [ochreRetreatGallery1, ochreRetreatGallery2, ochreRetreatGallery3, ochreRetreatGallery4],
    description: "The site sat on a north-facing slope with a fall of eleven metres across its width and a single access track that washed out twice a year. The client's brief asked for four bedrooms and a view. What the site asked for was a building that touched the ground in as few places as possible.",
  },
  {
    id: "ridge-cabin",
    name: "Capitoline",
    category: "Commercial",
    location: "Kigali",
    year: "2024",
    cover: ridgeCabinCover,
    gallery: [ridgeCabinGallery1, ridgeCabinGallery2, ridgeCabinGallery3, ridgeCabinGallery4],
    description: "The site sat on a north-facing slope with a fall of eleven metres across its width and a single access track that washed out twice a year. The client's brief asked for four bedrooms and a view. What the site asked for was a building that touched the ground in as few places as possible.",
  },
  {
    id: "alpine-house",
    name: "Hill View Hotel",
    category: "Commercial",
    location: "Musanze",
    year: "2022",
    cover: alpineHouseCover,
    gallery: [alpineHouseGallery1, alpineHouseGallery2, alpineHouseGallery3, alpineHouseGallery4],
    description: "The site sat on a north-facing slope with a fall of eleven metres across its width and a single access track that washed out twice a year. The client's brief asked for four bedrooms and a view. What the site asked for was a building that touched the ground in as few places as possible.",
  },
  {
    id: "still-water",
    name: "Kabayija Interiors",
    category: "Interior Design",
    location: "Kigali",
    year: "2025",
    cover: stillWaterCover,
    gallery: [stillWaterGallery1, stillWaterGallery2, stillWaterGallery3, stillWaterGallery4],
    description: "The site sat on a north-facing slope with a fall of eleven metres across its width and a single access track that washed out twice a year. The client's brief asked for four bedrooms and a view. What the site asked for was a building that touched the ground in as few places as possible.",
  },
  {
    id: "tidal-house",
    name: "Ndera",
    category: "Homes",
    location: "Ndera",
    year: "2023",
    cover: tidalHouseCover,
    gallery: [tidalHouseGallery1, tidalHouseGallery2, tidalHouseGallery3, tidalHouseGallery4],
    description: "The site sat on a north-facing slope with a fall of eleven metres across its width and a single access track that washed out twice a year. The client's brief asked for four bedrooms and a view. What the site asked for was a building that touched the ground in as few places as possible.",
  },
  {
    id: "canopy-house",
    name: "Nyabihu Mill Project",
    category: "Spaces",
    location: "Nyabihu",
    year: "2024",
    cover: canopyHouseCover,
    gallery: [canopyHouseGallery1, canopyHouseGallery2, canopyHouseGallery3, canopyHouseGallery4],
    description: "The site sat on a north-facing slope with a fall of eleven metres across its width and a single access track that washed out twice a year. The client's brief asked for four bedrooms and a view. What the site asked for was a building that touched the ground in as few places as possible.",
  },
  {
    id: "black-forest",
    name: "Timothy Residence",
    category: "Homes",
    location: "Kigali",
    year: "2025",
    cover: blackForestCover,
    gallery: [blackForestGallery1, blackForestGallery2, blackForestGallery3, blackForestGallery4],
    description: "The site sat on a north-facing slope with a fall of eleven metres across its width and a single access track that washed out twice a year. The client's brief asked for four bedrooms and a view. What the site asked for was a building that touched the ground in as few places as possible.",
  },
];

const filters = ["All", "Homes", "Commercial", "Interior Design", "Spaces"] as const;
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
        image={portfolioHero}
        eyebrow=""
        headline="Explore Our work"
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
                  className="group relative block w-full aspect-[4/3] overflow-hidden bg-background text-left"
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
