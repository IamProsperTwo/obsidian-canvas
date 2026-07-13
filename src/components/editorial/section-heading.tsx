import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  heading: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, heading, action, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-border",
        className,
      )}
    >
      <div className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-xl mt-6">{heading}</h2>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
