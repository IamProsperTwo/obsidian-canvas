import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface EditorialAccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

interface Props {
  items: EditorialAccordionItem[];
  singleOpen?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export function EditorialAccordion({
  items,
  singleOpen = true,
  defaultOpen = [],
  className,
}: Props) {
  const [open, setOpen] = useState<Set<string>>(new Set(defaultOpen));

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(singleOpen ? [] : prev);
      if (prev.has(id)) {
        // closing
        if (singleOpen) return new Set();
        next.delete(id);
        return next;
      }
      next.add(id);
      return next;
    });
  };

  return (
    <div className={cn("border-t border-border", className)}>
      {items.map((item) => {
        const isOpen = open.has(item.id);
        return (
          <div key={item.id} className="border-b border-border">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-8 py-8 text-left group"
            >
              <span className="display-lg font-light">{item.title}</span>
              <span
                aria-hidden
                className={cn(
                  "font-display text-3xl leading-none text-muted-foreground transition-transform duration-500 ease-out group-hover:text-foreground",
                  isOpen && "rotate-45 text-foreground",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-10 pr-12 body-lg max-w-3xl">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
