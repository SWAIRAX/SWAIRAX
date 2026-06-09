import type { CSSProperties } from "react";
import { Eyebrow, Heading } from "@/components/ui/section";
import SectionDivider from "@/components/SectionDivider";

interface TechLogo {
  src: string;
  /** Display name shown beside the logo so it's clear even if the mark is unfamiliar. */
  name: string;
}

const TECH: TechLogo[] = [
  { src: "/uploads/tech/python.svg", name: "Python" },
  { src: "/uploads/tech/django.svg", name: "Django" },
  { src: "/uploads/tech/react.svg", name: "React Native" },
  { src: "/uploads/tech/nodedotjs.svg", name: "Node.js" },
  { src: "/uploads/tech/typescript.svg", name: "TypeScript" },
  { src: "/uploads/tech/javascript.svg", name: "JavaScript" },
  { src: "/uploads/tech/postgresql.svg", name: "PostgreSQL" },
  { src: "/uploads/tech/mongodb.svg", name: "MongoDB" },
  { src: "/uploads/tech/supabase.svg", name: "Supabase" },
  { src: "/uploads/tech/firebase.svg", name: "Firebase" },
  { src: "/uploads/tech/tensorflow.svg", name: "TensorFlow" },
  { src: "/uploads/tech/docker.svg", name: "Docker" },
  { src: "/uploads/tech/git.svg", name: "Git" },
  { src: "/uploads/tech/github.svg", name: "GitHub" },
  { src: "/uploads/tech/railway.svg", name: "Railway" },
  { src: "/uploads/tech/tailwindcss.svg", name: "Tailwind CSS" },
  { src: "/uploads/tech/figma.svg", name: "Figma" },
  { src: "/uploads/tech/redis.svg", name: "Redis" },
  { src: "/uploads/tech/graphql.svg", name: "GraphQL" },
];

// One seamless-looping row: the list is duplicated and translated -50% by the
// `logo-marquee` keyframe. Each item is just the logo + its name — no chip.
const Row = ({ reverse, speed }: { reverse?: boolean; speed: string }) => {
  const track = [...TECH, ...TECH];
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
        <div key={i} className="flex shrink-0 items-center gap-2.5 px-6 sm:px-9">
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            loading="lazy"
            draggable={false}
            className="h-6 w-6 sm:h-8 sm:w-8 shrink-0 object-contain"
          />
          <span className="whitespace-nowrap text-base sm:text-lg font-semibold text-foreground">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  );
};

const TechMarquee = () => (
  <section className="bg-card pb-12 sm:pb-16 lg:pb-20" aria-label="Technologies we use">
    {/* Interlocking divider transitions from the section above into this card band */}
    <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--background))]" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
      <div className="text-center mb-8 sm:mb-10">
        <Eyebrow className="mb-3">Technologies We Use</Eyebrow>
        <Heading as="h2" size="h2">
          A modern, battle-tested stack
        </Heading>
      </div>
    </div>

    {/* Two angled bands that cross over each other (reference "faixa" style). */}
    <div className="relative overflow-hidden py-10 sm:py-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-28 sm:w-48 bg-gradient-to-r from-card from-30% to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-28 sm:w-48 bg-gradient-to-l from-card from-30% to-transparent" />

      {/* Band 1 — tilts one way */}
      <div className="relative z-10 rotate-[2.5deg]">
        <div className="w-[120%] -ml-[10%] border-y border-border/60 bg-gradient-to-r from-secondary/40 via-secondary/70 to-secondary/40 py-3 sm:py-4 shadow-sm">
          <Row speed="52s" />
        </div>
      </div>

      {/* Band 2 — tilts the other way and overlaps so they cross */}
      <div className="relative z-0 -mt-4 sm:-mt-6 -rotate-[2.5deg]">
        <div className="w-[120%] -ml-[10%] border-y border-border/60 bg-gradient-to-r from-secondary/40 via-secondary/70 to-secondary/40 py-3 sm:py-4 shadow-sm">
          <Row reverse speed="46s" />
        </div>
      </div>
    </div>
  </section>
);

export default TechMarquee;
