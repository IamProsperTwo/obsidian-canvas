import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/page-placeholder";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Atelier Studio" },
      { name: "description", content: "Words from clients and collaborators." },
      { property: "og:title", content: "Testimonials — Atelier Studio" },
      { property: "og:description", content: "Words from clients and collaborators." },
    ],
  }),
  component: () => <PagePlaceholder eyebrow="Testimonials" title="In their words." />,
});
