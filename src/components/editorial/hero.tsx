interface Props {
  image: string;
  eyebrow: string;
  headline: string;
  imageAlt?: string;
}

export function Hero({ image, eyebrow, headline, imageAlt = "" }: Props) {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10"
      />
      <div aria-hidden className="absolute inset-0 bg-background/20" />
      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-16 md:pb-24">
        <p className="eyebrow text-foreground/80">{eyebrow}</p>
        <h1 className="display-hero mt-6 max-w-6xl text-foreground">{headline}</h1>
      </div>
    </section>
  );
}
