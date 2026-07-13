import { createFileRoute } from "@tanstack/react-router";

type Props = { eyebrow: string; title: string; description?: string };

export function PagePlaceholder({ eyebrow, title, description }: Props) {
  return (
    <section className="section container-editorial">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-hero mt-8 max-w-5xl">{title}</h1>
      {description ? (
        <p className="body-lg mt-10 max-w-2xl">{description}</p>
      ) : null}
      <hr className="hairline mt-24" />
      <p className="eyebrow mt-8">Content coming soon</p>
    </section>
  );
}

export { createFileRoute };
