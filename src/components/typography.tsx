import React from "react";
import { cn } from "@/lib/utils";

// Re-export the layout/typography primitives so pages can import everything
// from one place: import { Section, PageHero, Eyebrow, Heading, Lead } from "@/components/typography";
export { Container, Section, Eyebrow, Heading, Lead, PageHero } from "@/components/ui/section";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

// Kept for backwards compatibility; now aligned to the shared display type scale.
export const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-3 animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
);
SectionHeading.displayName = "SectionHeading";

interface SectionLeadProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const SectionLead = React.forwardRef<HTMLParagraphElement, SectionLeadProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto", className)}
      {...props}
    >
      {children}
    </p>
  )
);
SectionLead.displayName = "SectionLead";
