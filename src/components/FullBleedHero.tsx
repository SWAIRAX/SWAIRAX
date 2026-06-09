import React from "react";
import { useParallax } from "@/hooks/useParallax";

export interface FullBleedHeroProps {
  /** Background image src. */
  imageSrc: string;
  /** Alt text for the image. */
  imageAlt?: string;
  /** Small uppercase label above the headline. */
  eyebrow?: React.ReactNode;
  /** Main headline. Pass your own <Heading /> for control over size/level. */
  title?: React.ReactNode;
  /** Supporting paragraph below the headline. */
  subtitle?: React.ReactNode;
  /** CTA buttons / links sitting below the subtitle. */
  cta?: React.ReactNode;
  /** Where the text block anchors inside the card. Default "bottom-left". */
  align?: "bottom-left" | "bottom-center" | "center" | "top-left";
  /** Hero card height. Defaults to "sm" (compact) — set "md" or "lg" for
   *  taller heroes when the content/image warrants it. */
  size?: "sm" | "md" | "lg";
  /** Extra classes on the rounded card itself. */
  className?: string;
  /** Make the dark gradient overlay stronger when the image fights the
   *  text. 0 = none, 1 = full default gradient. Default 1. */
  overlayStrength?: number;
}

// Scale.com-style FullBleedMediaSection hero.
//
// A rounded card-style hero with a full-bleed background image, the
// headline content sitting in the bottom-left over a subtle dark gradient
// for legibility, and white "frame" padding around the card so it floats
// inside the page instead of touching the edges. Min height steps up from
// 480 px on mobile to 720 px on desktop, mirroring scale.com exactly.
const ALIGN_CLASSES: Record<NonNullable<FullBleedHeroProps["align"]>, string> = {
  "bottom-left":   "items-end",
  "bottom-center": "items-end justify-center text-center",
  "center":        "items-center justify-center text-center",
  "top-left":      "items-start",
};

// Compact by default. `sm` keeps the hero short so it doesn't dominate the
// fold; `md` and `lg` are available for splashier landing pages.
const SIZE_CLASSES: Record<NonNullable<FullBleedHeroProps["size"]>, string> = {
  sm: "p-6 md:p-10 min-h-[280px] md:min-h-[400px]",
  md: "p-8 md:p-14 min-h-[360px] md:min-h-[520px]",
  lg: "p-8 md:p-16 min-h-[480px] md:min-h-[720px]",
};

const FullBleedHero = ({
  imageSrc,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  cta,
  align = "bottom-left",
  size = "sm",
  className = "",
  overlayStrength = 1,
}: FullBleedHeroProps) => {
  const alignClasses = ALIGN_CLASSES[align];
  const sizeClasses = SIZE_CLASSES[size];
  const overlayOpacity = Math.max(0, Math.min(1, overlayStrength));
  // Background image lags behind the content as you scroll (oversized so the
  // shift never reveals an edge). Kept gentle so the image stays centred and
  // fits the hero instead of being heavily cropped/zoomed.
  const imgRef = useParallax<HTMLImageElement>(-0.12, "y", 48);

  return (
    <div className="ClipScrollSection isolate relative w-full bg-background pt-24 pb-10 px-4 md:px-8 lg:px-12">
      <section
        className={`FullBleedMediaSection relative overflow-hidden rounded-3xl bg-background text-foreground ${className}`}
        style={{ clipPath: "inset(0 round 1.5rem)" }}
      >
        <div className={`relative flex ${sizeClasses} ${alignClasses}`}>
          {/* Background media */}
          <div className="absolute inset-0">
            <img
              ref={imgRef}
              src={imageSrc}
              alt={imageAlt}
              loading="eager"
              decoding="async"
              className="absolute inset-x-0 -inset-y-[12%] h-[124%] w-full object-cover object-center"
            />
            {/* Bottom-anchored dark shadow — mirrors scale.com/enterprise.
                Heavy black at the floor, eases to mid-dark around 30 %, and
                is completely transparent above ~60 % so the upper half of
                the image stays vivid instead of being dimmed by a flat
                wash. Multi-stop linear-gradient so the falloff is sharper
                than from-X via-Y to-Z lets you express. */}
            <div
              className="absolute inset-0"
              style={{
                opacity: overlayOpacity,
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.74) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.4) 100%)",
              }}
            />
          </div>

          {/* Foreground content */}
          <div className="relative z-10 max-w-3xl text-white">
            {eyebrow && (
              <div className="mb-4 inline-flex items-center text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/85">
                {eyebrow}
              </div>
            )}
            {title && <div className="mb-4">{title}</div>}
            {subtitle && (
              <div className="mb-6 max-w-2xl text-base md:text-lg text-white/85">
                {subtitle}
              </div>
            )}
            {cta && <div className="flex flex-wrap gap-3">{cta}</div>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullBleedHero;
