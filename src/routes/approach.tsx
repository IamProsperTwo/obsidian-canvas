import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/page-placeholder";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Approach — Atelier Studio" },
      { name: "description", content: "How we work: process, materials, and craft." },
      { property: "og:title", content: "Approach — Atelier Studio" },
      { property: "og:description", content: "How we work: process, materials, and craft." },
    ],
  }),
  component: () => <PagePlaceholder eyebrow="Approach" title="A considered process." />,
});
