import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border border-foreground bg-transparent text-foreground uppercase tracking-[0.22em] font-medium transition-colors duration-300 ease-out hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      size: {
        default: "text-xs px-8 py-4",
        sm: "text-[0.65rem] px-5 py-2.5",
      },
    },
    defaultVariants: { size: "default" },
  },
);

export interface EditorialButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const EditorialButton = forwardRef<HTMLButtonElement, EditorialButtonProps>(
  ({ className, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ size }), className)} {...props} />
  ),
);
EditorialButton.displayName = "EditorialButton";
