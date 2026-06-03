import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/section";
import HeroBackdrop from "@/components/HeroBackdrop";
import { useNavigationWithScroll } from "@/utils/navigation";

interface CTAAction {
  label: string;
  href: string;
}

interface CTASectionProps {
  /** small uppercase label above the heading */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primary?: CTAAction;
  secondary?: CTAAction;
  className?: string;
}

/**
 * Shared closing CTA — the "Services page" style: an animated red plexus
 * backdrop (HeroBackdrop) with a centered glassmorphic card holding the
 * heading, copy and action buttons. Used across the site (except the
 * homepage, which has its own bespoke CTA).
 */
const CTASection = ({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  className = "",
}: CTASectionProps) => {
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  // In-page anchors (e.g. "#solutions") scroll to the element; everything else
  // is a route navigation.
  const go = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href.slice(1));
    } else {
      navigateToTop(href);
    }
  };

  return (
    <section
      className={`relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <HeroBackdrop />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-background/85 p-8 text-center shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md md:p-10">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}
          <Heading as="h2" size="h2" className="font-bold leading-tight text-foreground">
            {title}
          </Heading>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
              {description}
            </p>
          )}
          {(primary || secondary) && (
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primary && (
                <Button
                  className="h-11 bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90"
                  onClick={() => go(primary.href)}
                >
                  {primary.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
              {secondary && (
                <Button
                  variant="outline"
                  className="h-11 border-foreground/30 bg-transparent px-6 text-base text-foreground hover:border-foreground/50 hover:bg-foreground/5 hover:text-foreground"
                  onClick={() => go(secondary.href)}
                >
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
