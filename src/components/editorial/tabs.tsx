import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface EditorialTab {
  id: string;
  label: string;
  content: ReactNode;
}

interface Props {
  tabs: EditorialTab[];
  defaultTab?: string;
  className?: string;
}

export function EditorialTabs({ tabs, defaultTab, className }: Props) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const current = tabs.find((t) => t.id === active);

  return (
    <div className={className}>
      <div className="border-b border-border overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-10 md:gap-14 min-w-max">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "relative pb-5 pt-2 eyebrow whitespace-nowrap transition-colors",
                  isActive ? "text-foreground" : "hover:text-foreground/80",
                )}
              >
                {tab.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 right-0 -bottom-px h-px bg-foreground transition-transform duration-300 origin-left",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="pt-12 animate-fade-in" key={active}>
        {current?.content}
      </div>
    </div>
  );
}
