import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/page-placeholder";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PagePlaceholder
      eyebrow="Atelier — Est. MMXXV"
      title="Quiet architecture, considered in every detail."
      description="A studio practicing architecture and interior design with restraint. Full site coming soon."
    />
  );
}
