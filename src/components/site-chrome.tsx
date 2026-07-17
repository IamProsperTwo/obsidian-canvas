import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditorialButton } from "@/components/editorial";
import { Logo } from "@/components/logo";

// ── Images (remote — replace with local imports later) ──
const footerPortfolioImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const footerNewsletterImage =
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80";
const footerContactImage =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80";

const links = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
  { to: "/testimonials", label: "Testimonials" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
          scrolled || open
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container-editorial flex items-center justify-between h-16 md:h-20">
          <div className="hidden md:block">
            <Logo size={32} onClick={() => setOpen(false)} />
          </div>
          <div className="md:hidden">
            <Logo size={26} onClick={() => setOpen(false)} />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="text-xs uppercase tracking-[0.22em] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact">
              <EditorialButton size="sm">Get in touch</EditorialButton>
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 -mr-2 inline-flex items-center justify-center text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="container-editorial pt-28 pb-16 h-full flex flex-col">
          <nav className="flex flex-col gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="display-lg text-foreground hover:text-muted-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <hr className="hairline mb-8" />
            <Link to="/contact" onClick={() => setOpen(false)}>
              <EditorialButton className="w-full">Get in touch</EditorialButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const p = scrollable > 0 ? h.scrollTop / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed right-4 top-24 bottom-24 w-px z-40 pointer-events-none hidden md:block"
    >
      <div className="absolute inset-0 bg-foreground/15" />
      <div
        className="absolute top-0 left-0 right-0 bg-foreground origin-top"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24">
      {/* CTA cards */}
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FooterCTA
            image={footerPortfolioImage}
            eyebrow="Our work"
            label="Portfolio"
            to="/portfolio"
          />
          <FooterCTA
            image={footerNewsletterImage}
            eyebrow="Subscribe"
            label="Newsletter"
            to="/contact"
          />
          <FooterCTA
            image={footerContactImage}
            eyebrow="Reach out"
            label="Contact"
            to="/contact"
          />
        </div>
      </div>

      <div className="container-editorial mt-24">
        <hr className="hairline" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
          <div>
            <Logo size={44} />
          </div>
          <div className="md:justify-self-end space-y-3">
            <p className="eyebrow text-foreground">P / [Phone]</p>
            <p className="eyebrow text-foreground">E / [Email]</p>
            <p className="eyebrow text-foreground">[Instagram] / [Facebook]</p>
            <p className="eyebrow text-foreground">Accessibility</p>
          </div>
        </div>
        <hr className="hairline" />
        <div className="py-8">
          <p className="text-xs text-muted-foreground">
            © 2026 [Your Company]. Site by [You].
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCTA({
  image,
  eyebrow,
  label,
  to,
}: {
  image: string;
  eyebrow: string;
  label: string;
  to: "/portfolio" | "/contact";
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden aspect-[4/3] bg-background"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-90 transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:brightness-110"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent"
      />
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <p className="eyebrow text-foreground/80">{eyebrow}</p>
        <p className="display-lg mt-2 text-foreground">{label}</p>
      </div>
    </Link>
  );
}
