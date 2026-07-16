import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Hero, Reveal, EditorialButton } from "@/components/editorial";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atelier Studio" },
      { name: "description", content: "Begin a conversation about your dream project." },
      { property: "og:title", content: "Contact — Atelier Studio" },
      { property: "og:description", content: "Begin a conversation about your dream project." },
    ],
  }),
  component: ContactPage,
});

const yesNo = z.enum(["Yes", "No"], { message: "Please choose an option" });

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Required").max(40),
  callWindow: z.string().trim().min(1, "Required").max(120),
  service: z.enum(
    ["New Home", "New Event Venue", "Renovation / Addition", "Other"],
    { message: "Please choose a service" },
  ),
  budget: z.string().trim().min(1, "Required").max(120),
  completion: z.string().trim().min(1, "Required").max(120),
  address: z.string().trim().min(1, "Required").max(300),
  ownsProperty: yesNo,
  hoa: yesNo,
  projectDescription: z.string().trim().min(1, "Required").max(2000),
  referral: z.string().trim().min(1, "Required").max(500),
  captcha: z.literal(true, { message: "Please confirm you're not a robot" }),
});

type FormValues = z.input<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  callWindow: "",
  service: "" as FormValues["service"],
  budget: "",
  completion: "",
  address: "",
  ownsProperty: "" as FormValues["ownsProperty"],
  hoa: "" as FormValues["hoa"],
  projectDescription: "",
  referral: "",
  captcha: false,
};

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <label htmlFor={htmlFor} className="eyebrow text-muted-foreground">
        {label}
      </label>
      {children}
      {error ? <p className="text-xs text-destructive tracking-wide">{error}</p> : null}
    </div>
  );
}

const inputBase =
  "w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors";

function ContactPage() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const firstKey = result.error.issues[0]?.path[0] as string | undefined;
      if (firstKey) {
        const el = document.getElementById(firstKey);
        el?.focus();
      }
      return;
    }
    setErrors({});
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Hero
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Contact"
        headline="Let's start a conversation about your dream."
      />

      <section className="py-24 md:py-40 container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-24 pb-20 md:pb-28">
          <Reveal>
            <a href="#faq" className="eyebrow underline-offset-8 hover:underline">
              Here are some frequently asked questions.
            </a>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-lg max-w-xl">
              [Tell us about your site, your rituals, and the atmosphere you're after. We read every inquiry ourselves and respond within a few days.]
            </p>
          </Reveal>
        </div>

        {submitted ? (
          <Reveal>
            <div className="border border-border py-24 px-8 md:px-16 text-center max-w-3xl mx-auto">
              <p className="eyebrow text-muted-foreground">Received</p>
              <h2 className="display-xl mt-6">Thank you.</h2>
              <p className="body-lg mt-8 max-w-xl mx-auto">
                Your inquiry is with the studio. We'll be in touch shortly to arrange an
                introductory conversation.
              </p>
              <div className="mt-12 flex justify-center">
                <EditorialButton
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setValues(initial);
                  }}
                >
                  Send another
                </EditorialButton>
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form noValidate onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <Field label="First name*" htmlFor="firstName" error={errors.firstName}>
                <input
                  id="firstName"
                  className={inputBase}
                  value={values.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  autoComplete="given-name"
                />
              </Field>
              <Field label="Last name*" htmlFor="lastName" error={errors.lastName}>
                <input
                  id="lastName"
                  className={inputBase}
                  value={values.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  autoComplete="family-name"
                />
              </Field>

              <Field label="Email address*" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  className={inputBase}
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone*" htmlFor="phone" error={errors.phone}>
                <input
                  id="phone"
                  type="tel"
                  className={inputBase}
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  autoComplete="tel"
                />
              </Field>

              <Field
                label="Best day and time to call (M–F, 9AM–5PM)*"
                htmlFor="callWindow"
                error={errors.callWindow}
                className="md:col-span-2"
              >
                <input
                  id="callWindow"
                  className={inputBase}
                  value={values.callWindow}
                  onChange={(e) => set("callWindow", e.target.value)}
                  placeholder="e.g. Tuesday 2–4 PM MT"
                />
              </Field>

              <Field
                label="What design service are you considering?*"
                htmlFor="service"
                error={errors.service}
                className="md:col-span-2"
              >
                <select
                  id="service"
                  className={cn(inputBase, "appearance-none pr-8")}
                  value={values.service}
                  onChange={(e) => set("service", e.target.value as FormValues["service"])}
                >
                  <option value="" className="bg-background">Select an option</option>
                  <option value="New Home" className="bg-background">New Home</option>
                  <option value="New Event Venue" className="bg-background">New Event Venue</option>
                  <option value="Renovation / Addition" className="bg-background">Renovation / Addition</option>
                  <option value="Other" className="bg-background">Other</option>
                </select>
              </Field>

              <Field label="What is your budget for the project?*" htmlFor="budget" error={errors.budget}>
                <input
                  id="budget"
                  className={inputBase}
                  value={values.budget}
                  onChange={(e) => set("budget", e.target.value)}
                />
              </Field>
              <Field label="What is your ideal completion date?*" htmlFor="completion" error={errors.completion}>
                <input
                  id="completion"
                  className={inputBase}
                  value={values.completion}
                  onChange={(e) => set("completion", e.target.value)}
                />
              </Field>

              <Field
                label="Project address (address, city, state, zip)*"
                htmlFor="address"
                error={errors.address}
                className="md:col-span-2"
              >
                <input
                  id="address"
                  className={inputBase}
                  value={values.address}
                  onChange={(e) => set("address", e.target.value)}
                  autoComplete="street-address"
                />
              </Field>

              <Field
                label="Do you currently own the property listed above?*"
                htmlFor="ownsProperty"
                error={errors.ownsProperty}
              >
                <select
                  id="ownsProperty"
                  className={cn(inputBase, "appearance-none pr-8")}
                  value={values.ownsProperty}
                  onChange={(e) => set("ownsProperty", e.target.value as FormValues["ownsProperty"])}
                >
                  <option value="" className="bg-background">Select</option>
                  <option value="Yes" className="bg-background">Yes</option>
                  <option value="No" className="bg-background">No</option>
                </select>
              </Field>
              <Field
                label="Does this property have an HOA or CC&Rs?*"
                htmlFor="hoa"
                error={errors.hoa}
              >
                <select
                  id="hoa"
                  className={cn(inputBase, "appearance-none pr-8")}
                  value={values.hoa}
                  onChange={(e) => set("hoa", e.target.value as FormValues["hoa"])}
                >
                  <option value="" className="bg-background">Select</option>
                  <option value="Yes" className="bg-background">Yes</option>
                  <option value="No" className="bg-background">No</option>
                </select>
              </Field>

              <Field
                label="Please describe a little about your project (reason, desired square footage, room types/quantities, landscape features, etc.)*"
                htmlFor="projectDescription"
                error={errors.projectDescription}
                className="md:col-span-2"
              >
                <textarea
                  id="projectDescription"
                  rows={5}
                  className={cn(inputBase, "resize-y")}
                  value={values.projectDescription}
                  onChange={(e) => set("projectDescription", e.target.value)}
                />
              </Field>

              <Field
                label="How did you hear about us?*"
                htmlFor="referral"
                error={errors.referral}
                className="md:col-span-2"
              >
                <textarea
                  id="referral"
                  rows={3}
                  className={cn(inputBase, "resize-y")}
                  value={values.referral}
                  onChange={(e) => set("referral", e.target.value)}
                />
              </Field>

              <div className="md:col-span-2 pt-4">
                <label className="flex items-center gap-4 cursor-pointer select-none">
                  <input
                    id="captcha"
                    type="checkbox"
                    checked={values.captcha}
                    onChange={(e) => set("captcha", e.target.checked as never)}
                    className="h-5 w-5 border border-border bg-transparent accent-foreground"
                  />
                  <span className="eyebrow text-muted-foreground">I'm not a robot</span>
                </label>
                {errors.captcha ? (
                  <p className="text-xs text-destructive tracking-wide mt-3">{errors.captcha}</p>
                ) : null}
              </div>

              <div className="md:col-span-2 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-xs text-muted-foreground">* Required</p>
                <EditorialButton type="submit">Submit</EditorialButton>
              </div>
            </form>
          </Reveal>
        )}
      </section>
    </main>
  );
}
