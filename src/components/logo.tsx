import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/Ingabe_logo.png.asset.json";

interface LogoProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export function Logo({ size = 32, className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn("inline-flex items-center gap-[10px]", className)}
    >
      <img
        src={logoAsset.url}
        alt="Ingabe"
        style={{ height: size }}
        className="w-auto object-contain"
      />
      <span className="font-display font-light uppercase text-foreground tracking-[0.2em]">
        INGABE
      </span>
    </Link>
  );
}
