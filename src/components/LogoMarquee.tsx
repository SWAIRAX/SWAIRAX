import type { CSSProperties } from "react";

interface Logo {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
  /** left-column eyebrow / heading / subtitle */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** scroll duration (lower = faster) */
  speed?: string;
  className?: string;
}

/**
 * Red partner section modeled on the lecdt.com "cliente" block: a left title
 * column and a right side with partner logos scrolling in two rows moving in
 * opposite directions. Each row is the logo list duplicated and translated -50%
 * for a seamless loop. Logos sit on white chips so they stay legible on the red.
 * Pauses on hover.
 */
const Row = ({ logos, reverse, speed }: { logos: Logo[]; reverse?: boolean; speed: string }) => {
  const track = [...logos, ...logos];
  return (
    <div
      className="flex w-max items-center animate-logo-marquee hover:[animation-play-state:paused]"
      style={
        {
          "--marquee-duration": speed,
          animationDirection: reverse ? "reverse" : "normal",
        } as CSSProperties
      }
    >
      {track.map((logo, i) => (
        <div key={i} className="flex shrink-0 items-center justify-center px-6 sm:px-10">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-9 sm:h-11 w-auto object-contain"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

const LogoMarquee = ({
  logos,
  eyebrow = "Our Trusted Partners",
  title = "Trusted across the region",
  subtitle = "Companies, institutions, and innovators rely on our work.",
  speed = "30s",
  className = "",
}: LogoMarqueeProps) => (
  <section className={`relative overflow-hidden bg-[#ff0000] ${className}`} aria-label="Our partners">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Left title */}
        <div className="text-center lg:text-left text-primary-foreground">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
            {eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{title}</h2>
          <p className="mt-3 max-w-md mx-auto lg:mx-0 text-sm sm:text-base text-primary-foreground/85">{subtitle}</p>
        </div>

        {/* Right: two scrolling logo rows moving in opposite directions */}
        <div className="relative space-y-4 sm:space-y-5 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#ff0000] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#ff0000] to-transparent" />
          {/* top row → moves right */}
          <Row logos={logos} reverse speed={speed} />
          {/* bottom row → moves left */}
          <Row logos={logos} speed={speed} />
        </div>
      </div>
    </div>
  </section>
);

export default LogoMarquee;
