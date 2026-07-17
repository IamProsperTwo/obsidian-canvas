import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

// ── Images ──
import logo from "@/assets/ingabe-logo.png";

interface LogoProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export function Logo({ size = 32, className, onClick }: LogoProps) {
  // Scale wordmark relative to mark height so the two read as one lockup.
  const primarySize = Math.round(size * 0.62);
  const secondarySize = Math.round(size * 0.34);

  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn("inline-flex items-center gap-[10px]", className)}
    >
      <img
        src={logo}
        alt="Ingabe Creations"
        style={{ height: size }}
        className="w-auto object-contain"
      />
      <span className="flex flex-col items-start leading-[0.95] font-display font-light text-foreground">
        <span
          className="uppercase tracking-[0.2em]"
          style={{ fontSize: primarySize }}
        >
          INGABE
        </span>
        <span
          className="uppercase tracking-[0.18em] text-foreground/80"
          style={{ fontSize: secondarySize, marginTop: Math.round(size * 0.06) }}
        >
          Creations
        </span>
      </span>
    </Link>
  );
}
