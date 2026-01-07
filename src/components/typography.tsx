import React from "react";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={`text-2xl md:text-3xl font-bold mb-3 animate-fade-in ${className ?? ""}`}
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
      className={`text-base text-muted-foreground mb-4 max-w-2xl mx-auto ${className ?? ""}`}
      {...props}
    >
      {children}
    </p>
  )
);
SectionLead.displayName = "SectionLead";

