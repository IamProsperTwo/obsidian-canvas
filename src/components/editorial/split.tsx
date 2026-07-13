import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  left: ReactNode;
  right: ReactNode;
  ratio?: "balanced" | "narrow-left" | "narrow-right";
  className?: string;
}

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  balanced: "md:grid-cols-2",
  "narrow-left": "md:grid-cols-[1fr_2fr]",
  "narrow-right": "md:grid-cols-[2fr_1fr]",
};

export function EditorialSplit({ left, right, ratio = "balanced", className }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-12 md:gap-24 lg:gap-32",
        ratios[ratio],
        className,
      )}
    >
      <div className="min-w-0">{left}</div>
      <div className="min-w-0">{right}</div>
    </div>
  );
}
