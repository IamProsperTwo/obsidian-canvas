import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/page-placeholder";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atelier Studio" },
      { name: "description", content: "Begin a conversation with the studio." },
      { property: "og:title", content: "Contact — Atelier Studio" },
      { property: "og:description", content: "Begin a conversation with the studio." },
    ],
  }),
  component: () => <PagePlaceholder eyebrow="Contact" title="Begin a conversation." />,
});
