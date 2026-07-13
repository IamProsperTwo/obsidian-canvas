import { Link } from "@tanstack/react-router";

const links: { to: "/" | "/about" | "/approach" | "/portfolio" | "/testimonials" | "/contact"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Index", exact: true },
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl tracking-tight">
          Atelier<span className="text-muted-foreground"> / Studio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-xs uppercase tracking-[0.22em] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-editorial py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="eyebrow">© {new Date().getFullYear()} — Atelier Studio</p>
        <p className="eyebrow">Architecture &amp; Interior Design</p>
      </div>
    </footer>
  );
}
