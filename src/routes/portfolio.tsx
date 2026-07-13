import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/page-placeholder";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Atelier Studio" },
      { name: "description", content: "Selected projects in architecture and interior design." },
      { property: "og:title", content: "Portfolio — Atelier Studio" },
      { property: "og:description", content: "Selected projects in architecture and interior design." },
    ],
  }),
  component: () => <PagePlaceholder eyebrow="Portfolio" title="Selected works." />,
});
