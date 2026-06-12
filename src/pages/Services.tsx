import { useNavigationWithScroll } from "@/utils/navigation";
import { openMeeting } from "@/utils/meeting";
import { SEOSchema } from "@/components/SEOSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/section";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { services } from "@/data/services";
import { Code2, Cpu, Lightbulb, Rocket } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Hero decoration (passionlabs style): six red animated dot-motifs placed
// around the headline and joined by faint connecting lines. The motifs sit
// directly on the page background (no card) so they blend in; the dots are
// red (text-primary) and visible in both light and dark themes.
const HERO_NODES = [
  { x: 11, y: 23, motif: "eq", show: "md" },
  { x: 89, y: 23, motif: "ring", show: "md" },
  { x: 5, y: 52, motif: "concentric", show: "lg" },
  { x: 95, y: 52, motif: "cross", show: "lg" },
  { x: 17, y: 80, motif: "rows", show: "md" },
  { x: 83, y: 80, motif: "scatter", show: "md" },
] as const;

// Perimeter only — no diagonals through the centre, so lines never cross the
// headline/subtext in the middle of the hero.
const HERO_EDGES: [number, number][] = [
  [0, 1], [0, 2], [2, 4], [1, 3], [3, 5], [4, 5],
];

const renderMotif = (type: string) => {
  switch (type) {
    case "eq":
      return (
        <div className="flex h-12 items-end gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="animate-eq-bar h-full w-1.5 rounded-full bg-primary"
              style={{ animationDelay: `${i * 0.13}s` }}
            />
          ))}
        </div>
      );
    case "ring":
      return (
        <svg className="animate-spin-slow h-14 w-14" viewBox="0 0 100 100" fill="currentColor">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return <circle key={i} cx={50 + 38 * Math.cos(a)} cy={50 + 38 * Math.sin(a)} r="5" opacity={0.2 + (i / 11) * 0.8} />;
          })}
        </svg>
      );
    case "concentric":
      return (
        <svg className="h-16 w-16 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="14" strokeWidth="3" strokeDasharray="1 7" strokeLinecap="round" />
          <circle cx="50" cy="50" r="30" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" />
          <circle cx="50" cy="50" r="46" strokeWidth="3" strokeDasharray="1 9" strokeLinecap="round" />
        </svg>
      );
    case "cross":
      return (
        <svg className="h-14 w-14 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="6" />
          <circle cx="50" cy="33" r="4" /><circle cx="50" cy="16" r="5.5" />
          <circle cx="50" cy="67" r="4" /><circle cx="50" cy="84" r="5.5" />
          <circle cx="33" cy="50" r="4" /><circle cx="16" cy="50" r="5.5" />
          <circle cx="67" cy="50" r="4" /><circle cx="84" cy="50" r="5.5" />
        </svg>
      );
    case "rows":
      return (
        <svg className="h-14 w-14 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
          {[20, 40, 60, 80].map((x) =>
            [16, 34, 52, 70, 86].map((y, r) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="4" opacity={1 - r * 0.17} />
            )),
          )}
        </svg>
      );
    case "scatter":
      return (
        <svg className="h-14 w-14 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="18" cy="22" r="3" opacity="0.5" />
          <circle cx="40" cy="14" r="5" opacity="0.9" />
          <circle cx="70" cy="24" r="2.5" opacity="0.4" />
          <circle cx="84" cy="40" r="4" opacity="0.7" />
          <circle cx="26" cy="46" r="6" opacity="1" />
          <circle cx="56" cy="50" r="3" opacity="0.5" />
          <circle cx="80" cy="68" r="5" opacity="0.85" />
          <circle cx="34" cy="74" r="3.5" opacity="0.6" />
          <circle cx="60" cy="82" r="4.5" opacity="0.8" />
        </svg>
      );
    default:
      return null;
  }
};

const Services = () => {
  const { navigateToTop } = useNavigationWithScroll();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ctaImageSrc = mounted
    ? resolvedTheme === "dark"
      ? "/services/hero-network-dark.gif"
      : "/services/hero-network-light.gif"
    : "/services/hero-network-light.gif";

  const process = [
    {
      title: "Discover",
      description: "We learn your business, goals, and challenges.",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      title: "Design",
      description: "We design the solution architecture and roadmap.",
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      title: "Build",
      description: "We develop, test, and iterate rapidly.",
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      title: "Deploy & Support",
      description: "We launch and provide ongoing support.",
      icon: <Rocket className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOSchema
        breadcrumbs={[
          { name: "Home", url: "https://swairax.com" },
          { name: "Services", url: "https://swairax.com/services" }
        ]}
      />
      <Header />

      {/* Hero — passionlabs/sectors style: centred bold headline on a
          theme-aware canvas (white in light, dark in dark). No image. */}
      <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-background text-foreground pt-28 pb-20 sm:min-h-[76vh] lg:min-h-[600px]">
        {/* very faint dot-grid texture (theme-agnostic, subtle) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Decorative network: six red animated dot-motifs joined by faint
            connecting lines (passionlabs style). The motifs sit directly on the
            page background so they blend in. The 4 corner motifs show on every
            screen (incl. mobile); the 2 mid-side ones stay lg-only so they
            never crowd the centred headline. */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden text-primary" aria-hidden="true">
          {/* connecting lines between the motif nodes — black in light theme,
              white in dark (text-foreground), at a clearly visible weight */}
          <svg className="absolute inset-0 h-full w-full text-foreground/45" viewBox="0 0 100 100" preserveAspectRatio="none">
            {HERO_EDGES.map(([a, b], i) => (
              <line
                key={i}
                x1={HERO_NODES[a].x}
                y1={HERO_NODES[a].y}
                x2={HERO_NODES[b].x}
                y2={HERO_NODES[b].y}
                stroke="currentColor"
                strokeWidth="1.25"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* the six animated motifs, centred on their nodes */}
          {HERO_NODES.map((n, i) => (
            <div
              key={i}
              className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ${
                n.show === "lg" ? "hidden lg:flex" : ""
              }`}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              {/* background-coloured halo masks the connecting lines around the
                  motif, so the lines stop short and never touch the animation */}
              <span className="pointer-events-none absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
              <span className="relative">{renderMotif(n.motif)}</span>
            </div>
          ))}
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            End-to-end technology that moves your business forward.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            AI, Data Science, Cybersecurity, Big Data, Software Engineering, and Cloud &amp; DevOps —
            for businesses of all sizes.
          </p>
        </div>
      </section>

      <SectionDivider className="-mt-px w-full text-[#ff0000]" />

      {/* Services — brand-red canvas, white type for contrast. */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#ff0000] text-white">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ff0000] to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-6 mb-8">
            <div className="flex-1">
              {/* Force the base headline inside TextRevealCard to render
                  white (it defaults to text-foreground, which would be too
                  dark on red). The reveal layer's primary-red gradient
                  reads softer over red, so we also brighten it via
                  [&_p:nth-of-type(2)]:to-white for clearer contrast. */}
              <TextRevealCard
                text="Built to feel vivid and perform."
                revealText="Design meets functionality"
                className="bg-transparent border-none w-full p-0 mt-3 [&_p]:!text-white"
              />
              <p className="text-base md:text-lg text-white/85 max-w-2xl mt-3">
                Select the lane you need. We pair bold visuals with resilient engineering so every interaction feels alive and every release feels safe.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <Card
                key={service.slug}
                id={service.slug}
                onClick={() => navigateToTop(`/services/${service.slug}`)}
                className="solution-card scroll-mt-24 bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden cursor-pointer hover:border-primary/40 transition-colors"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Animated SVG background */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`card-icon rounded-xl bg-white/10 p-3 shadow-inner ${index % 2 === 1 ? "text-secondary-accent" : "text-primary"}`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/20 transition-colors duration-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2 relative z-10">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${index % 2 === 1 ? "bg-secondary-accent" : "bg-primary"}`} />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary bg-transparent hover:bg-transparent p-0 relative z-10 group-hover:translate-x-1 transition-transform duration-300 focus-visible:ring-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToTop(`/services/${service.slug}`);
                    }}
                  >
                    {service.cta}
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Red data-matrix divider at the end of the (red) Services section.
          Lives OUTSIDE the section so it paints on the next section's
          off-white surface — that way the red shapes are actually visible
          and read as "the Services red is bleeding down into the next
          section". Mirrors the hero pattern at Index.tsx:153. */}
      <SectionDivider className="-mt-px w-full text-[#ff0000]" />

      {/* Process — reduced top padding so the red divider above sits
          closer to the heading, and the section doesn't start with a tall
          empty band. */}
      <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal className="text-center mb-10">
            <TextRevealCard
              text="How we keep motion & reliability aligned"
              revealText="Performance meets dependability"
              className="bg-transparent border-none w-full p-0 mt-3"
            />
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Every engagement is co-built with you. Clear checkpoints, minimal noise, and a visual-first approach that still honors governance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="solution-card group relative overflow-hidden rounded-lg border border-border bg-secondary text-card-foreground p-6"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ${index % 2 === 1 ? "text-secondary-accent" : "text-primary"}`}>
                      {item.icon}
                    </div>
                    <span className="text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (Live experience moved here) */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-40 sm:pb-44 lg:pb-48 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          {/* Text + visual combined into one panel; the image fades into the
              card via a gradient so the two halves read as a single block. */}
          <ScrollReveal className="group mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_50px_-28px_rgba(15,23,42,0.4)]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 p-8 md:p-10">
                <Heading as="h2" size="h2" className="font-bold leading-tight text-foreground">
                  Not Sure Which Service You Need?
                </Heading>
                <p className="max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  Tell us your challenge and we'll recommend the right solution.
                </p>
                <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row">
                  <Button
                    className="h-10 w-auto bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 sm:h-12 sm:px-6 sm:py-3 sm:text-base"
                    onClick={() => openMeeting()}
                  >
                    Talk to Us →
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[240px] lg:min-h-full">
                <img
                  src={ctaImageSrc}
                  alt="SWAIRAX in motion"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* fade the image into the card so there's no hard seam */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-card via-card/20 to-transparent lg:bg-gradient-to-r" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
