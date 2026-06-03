import * as React from "react";
import { cn } from "@/lib/utils";
import Parallax from "@/components/Parallax";

/* ============================================================
   LAYOUT & TYPOGRAPHY PRIMITIVES

   One fixed spacing + type scale for every page, so heroes and
   sections share the same rhythm instead of each page inventing
   its own padding and heading sizes.

   - <Container>      consistent max-width + horizontal gutters
   - <Section>        standardized vertical padding + background
   - <Eyebrow>        the small label above a heading (text | pill)
   - <Heading>        fixed heading type scale (display/h1/h2/h3)
   - <Lead>           lead paragraph under a heading
   - <PageHero>       standardized top-of-page hero rhythm
   ============================================================ */

/* ---------- Container ---------- */
export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
);
Container.displayName = "Container";

/* ---------- Section ---------- */
const sectionSpacing = {
  default: "py-16 sm:py-20 lg:py-24",
  compact: "py-10 sm:py-12 lg:py-16",
  none: "",
} as const;

const sectionBg = {
  transparent: "",
  default: "bg-background",
  card: "bg-card",
  muted: "bg-muted",
} as const;

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** vertical rhythm — default for normal sections, compact for tighter ones */
  spacing?: keyof typeof sectionSpacing;
  /** background surface */
  bg?: keyof typeof sectionBg;
  /** wrap children in a <Container> (default true) */
  container?: boolean;
  containerClassName?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { spacing = "default", bg = "transparent", container = true, containerClassName, className, children, ...props },
    ref
  ) => (
    <section
      ref={ref}
      className={cn("relative", sectionSpacing[spacing], sectionBg[bg], className)}
      {...props}
    >
      {container ? <Container className={containerClassName}>{children}</Container> : children}
    </section>
  )
);
Section.displayName = "Section";

/* ---------- Eyebrow ---------- */
interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "text" = small uppercase label, "pill" = rounded badge */
  variant?: "text" | "pill";
  icon?: React.ReactNode;
}

export const Eyebrow = React.forwardRef<HTMLDivElement, EyebrowProps>(
  ({ variant = "text", icon, className, children, ...props }, ref) => {
    if (variant === "pill") {
      return (
        <div
          ref={ref}
          className={cn(
            "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary",
            className
          )}
          {...props}
        >
          {icon}
          {children}
        </div>
      );
    }
    return (
      <p
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={cn("text-sm font-semibold uppercase tracking-wide text-primary", className)}
        {...(props as React.HTMLAttributes<HTMLParagraphElement>)}
      >
        {children}
      </p>
    );
  }
);
Eyebrow.displayName = "Eyebrow";

/* ---------- Heading ---------- */
const headingSizes = {
  display: "text-4xl sm:text-5xl lg:text-6xl",
  h1: "text-3xl sm:text-4xl lg:text-5xl",
  h2: "text-3xl sm:text-4xl lg:text-5xl",
  h3: "text-xl sm:text-2xl",
} as const;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** rendered element */
  as?: "h1" | "h2" | "h3" | "h4";
  /** type scale step (independent of the element for flexibility) */
  size?: keyof typeof headingSizes;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Comp = "h2", size = "h2", className, children, ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn("font-bold leading-tight tracking-tight text-foreground", headingSizes[size], className)}
      {...props}
    >
      {children}
    </Comp>
  )
);
Heading.displayName = "Heading";

/* ---------- Lead ---------- */
export const Lead = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base sm:text-lg leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  )
);
Lead.displayName = "Lead";

/* ---------- PageHero ---------- */
interface PageHeroProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: React.ReactNode;
  eyebrowVariant?: "text" | "pill";
  eyebrowIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  /** content alignment */
  align?: "center" | "left";
  /** absolutely-positioned background layer(s) rendered behind the content */
  background?: React.ReactNode;
  containerClassName?: string;
}

export const PageHero = React.forwardRef<HTMLElement, PageHeroProps>(
  (
    {
      eyebrow,
      eyebrowVariant = "text",
      eyebrowIcon,
      title,
      description,
      actions,
      align = "center",
      background,
      containerClassName,
      className,
      ...props
    },
    ref
  ) => {
    const center = align === "center";
    return (
      <section
        ref={ref}
        className={cn("relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20", className)}
        {...props}
      >
        {background && (
          <Parallax speed={-0.22} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
            {background}
          </Parallax>
        )}
        <Container className={cn("relative z-10", containerClassName)}>
          <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
            {eyebrow && (
              <Eyebrow
                variant={eyebrowVariant}
                icon={eyebrowIcon}
                className={cn("mb-4", center && eyebrowVariant === "text" && "mx-auto")}
              >
                {eyebrow}
              </Eyebrow>
            )}
            <Heading as="h1" size="display" className="mb-5">
              {title}
            </Heading>
            {description && (
              <Lead className={cn("mb-8", center ? "mx-auto max-w-2xl" : "max-w-2xl")}>{description}</Lead>
            )}
            {actions && (
              <div
                className={cn(
                  "flex flex-col sm:flex-row gap-4",
                  center ? "items-center justify-center" : "items-start"
                )}
              >
                {actions}
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }
);
PageHero.displayName = "PageHero";
