import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
}

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as never}
      style={{ transitionDelay: visible && delay ? `${delay}ms` : undefined }}
      className={cn(
        "transition-all duration-[600ms] ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className,
      )}
    >
      {children}
    </Component>
  );
}
