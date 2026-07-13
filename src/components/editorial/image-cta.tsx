import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  image: string;
  eyebrow: string;
  label: string;
  imageAlt?: string;
  aspect?: "portrait" | "landscape" | "square";
}

const aspects = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

export function ImageCTACard({
  image,
  eyebrow,
  label,
  imageAlt = "",
  aspect = "portrait",
  className,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      className={cn(
        "group relative block overflow-hidden bg-background",
        aspects[aspect],
        className,
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover brightness-90 transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:brightness-110"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent"
      />
      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
        <p className="eyebrow text-foreground/80">{eyebrow}</p>
        <p className="display-lg mt-3 text-foreground">{label}</p>
      </div>
    </a>
  );
}
