import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/page-placeholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Atelier Studio" },
      { name: "description", content: "About the studio, its people and its philosophy." },
      { property: "og:title", content: "About — Atelier Studio" },
      { property: "og:description", content: "About the studio, its people and its philosophy." },
    ],
  }),
  component: () => <PagePlaceholder eyebrow="About" title="The studio." />,
});
