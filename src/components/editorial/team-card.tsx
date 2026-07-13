import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  image: string;
  name: string;
  role: string;
  bio: ReactNode;
  imageAlt?: string;
}

export function TeamMemberCard({ image, name, role, bio, imageAlt }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-background">
        <img
          src={image}
          alt={imageAlt ?? name}
          className="absolute inset-0 h-full w-full object-cover grayscale-[15%] transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent"
        />
        <div className="absolute inset-0 flex items-end justify-between gap-4 p-6 md:p-8">
          <div>
            <p className="display-lg text-foreground">{name}</p>
            <p className="eyebrow mt-2 text-foreground/80">{role}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? `Collapse ${name} bio` : `Expand ${name} bio`}
            className="shrink-0 h-10 w-10 border border-foreground/60 hover:border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            <span
              aria-hidden
              className={cn(
                "font-display text-2xl leading-none transition-transform duration-500",
                open && "rotate-45",
              )}
            >
              +
            </span>
          </button>
        </div>
      </div>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="body-lg max-w-xl">{bio}</div>
        </div>
      </div>
    </div>
  );
}
