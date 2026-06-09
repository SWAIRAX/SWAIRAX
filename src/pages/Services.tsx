// React imports removed (no hooks needed here)
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { SEOSchema } from "@/components/SEOSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceGraphHero from "@/components/ServiceGraphHero";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading, Lead } from "@/components/ui/section";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { services } from "@/data/services";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Code2,
  Cpu,
  Database,
  Lightbulb,
  Play,
  Rocket,
  ShieldCheck,
} from "lucide-react";

// Module-level constants — passing inline JSX arrays would re-trigger the
// graph hero's effects on every parent paint.
//
// Layout mirrors scale.com/enterprise: tiles ring the centred headline
// along the perimeter of the section so none of them sit underneath the
// title/subtitle/CTA block. 7 tiles: 3 across the top, 2 on the sides,
// 2 across the bottom.
//
// `connections` forms TWO triangles (left + right) so the network reads as
// two clusters "pushing each other" across the page.
//
// `href` makes the tile clickable with the "card opens" hover affordance.
// Array order drives parallax depth via `parallaxDepth = 1 + 0.4 * index`.
const HERO_GRAPH_NODES = [
  // ─── LEFT TRIANGLE: Annotate (0) ─ Analytics (1) ─ AI Studio (3) ───
  //   Each of these 3 nodes lists the OTHER TWO in its connections array,
  //   so the deduped edges (0-1, 0-3, 1-3) form a closed triangle.
  { id: "annotate",  src: "/uploads/ANNOTATE.jpg",         alt: "SWAIRAX Annotate",   label: "Annotate",  href: "/quantum-annotate",  x: 9,  y: 22, size: 130, rotation: -3, connections: [1, 3] },
  { id: "analytics", src: "/uploads/QUANTUM ANALYTICS.png", alt: "SWAIRAX Analytics",  label: "Analytics", href: "/quantum-analytics", x: 50, y: 10, size: 100, rotation:  2, connections: [0, 3, 2] },
  // ─── RIGHT TRIANGLE: GenAI (2) ─ MLOps (4) ─ Finance (6) ───
  { id: "genai",     src: "/uploads/GENAI.webp",            alt: "SWAIRAX GenAI",      label: "GenAI",     href: "/quantum-genai",     x: 91, y: 22, size: 130, rotation: -2, connections: [1, 4, 6] },
  // AI Studio closes the left triangle; bridges down to Health.
  { id: "service",   src: "/uploads/SERVICE.webp",          alt: "AI Studio",          label: "AI Studio", href: "/ai-studio",         x: 5,  y: 52, size: 110, rotation:  3, connections: [0, 1, 5] },
  // MLOps closes the right triangle; bridges down to Finance.
  { id: "mlops",     src: "/uploads/MLOPS&DEVOPS.webp",     alt: "MLOps & DevOps",     label: "MLOps",     href: "/mlops-devops",      x: 95, y: 52, size: 130, rotation: -1, connections: [2, 6] },
  // Bottom bridges.
  { id: "health",    src: "/uploads/HEALTHCARE.webp",       alt: "Healthcare",         label: "Health",    href: "/industries/healthcare-pharmacy", x: 22, y: 86, size: 100, rotation:  1, connections: [3, 6] },
  { id: "finance",   src: "/uploads/FINANCIAL SERVICE.jpg", alt: "Financial Services", label: "Finance",   href: "/industries/financial-services",  x: 78, y: 86, size: 110, rotation: -3, connections: [2, 4, 5] },
];

// Edges are now derived from each node's `connections` array — keep an empty
// fallback so the legacy prop on the component doesn't kick in.
const HERO_GRAPH_EDGES: Array<[number, number]> = [];

const Services = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();

  const heroHighlights = [
    {
      title: "AI that ships",
      description: "Copilots and automations with evals, safety, and uptime baked in.",
      pill: "Production ready",
    },
    {
      title: "Data-first & ethical",
      description: "Human + machine pipelines to keep datasets current, inclusive, and trusted.",
      pill: "Responsible AI",
    },
    {
      title: "Operational MLOps",
      description: "CI/CD, observability, and drift defense so models stay healthy after launch.",
      pill: "Always-on",
    },
  ];

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

      {/* Hero — Scale.com-style graph network with service tiles as nodes */}
      <ServiceGraphHero
        title={
          <Heading as="h1" size="display" className="leading-tight text-black">
            Our Services
          </Heading>
        }
        subtitle={
          <Lead className="mx-auto max-w-2xl text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800">
            End-to-end technology solutions for businesses of all sizes.
          </Lead>
        }
        cta={
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-6 text-base font-semibold shadow-lg"
            onClick={() => navigateToTop("/contact")}
          >
            Build with our team <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        }
        nodes={HERO_GRAPH_NODES}
        edges={HERO_GRAPH_EDGES}
        onNodeClick={(node) => {
          // Use React Router's navigateToTop so we get smooth SPA routing +
          // scroll-to-top, not a full page reload via window.location.
          if (node.href) navigateToTop(node.href);
        }}
      />

      {/*
        Ring-variant divider matching the lecdt-style `class="divisor"`
        SVG (1920×150 viewBox).

        Positioning: pulled up with a large negative margin so the entire
        95-px divider overlaps the bottom of the hero card. With
        `bg-transparent` + `relative z-10` the red SVG shapes paint on top
        of the hero, and the drifting graph tiles remain visible through
        the gaps in the maze — exactly the "components in the hero are
        visible across the SVG" effect.

        `pointer-events-none` ensures the divider doesn't intercept clicks
        from the tiles underneath.
      */}
      <SectionDivider
        variant="ring"
        className="relative z-10 -mt-[65px] w-full bg-transparent text-[#ff0000] pointer-events-none"
      />

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
              <Button
                variant="outline"
                className="border-white bg-white text-[#ff0000] hover:bg-transparent hover:text-white hover:border-white w-fit mt-4 md:mt-0"
                onClick={() => navigateToTop("/research")}
              >
                View proofs & case notes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text column wrapped in a glass card so it stays readable on
              top of the HeroBackdrop's red plexus canvas. */}
          <ScrollReveal className="space-y-4 rounded-2xl border border-border/60 bg-background/85 p-6 md:p-8 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md">
            <Heading
              as="h2"
              size="h2"
              className="leading-tight text-foreground font-bold"
            >
              Not Sure Which Service You Need?
            </Heading>
            <p className="text-foreground/85 text-sm md:text-base max-w-xl leading-relaxed">
              Tell us your challenge and we'll recommend the right solution.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-auto h-10 sm:h-12 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                onClick={() => navigateToTop("/contact")}
              >
                Talk to Us →
              </Button>
              <Button
                variant="outline"
                className="hidden border-foreground/30 text-foreground bg-transparent hover:bg-foreground/5 hover:border-foreground/50 hover:text-foreground w-full sm:w-auto"
                onClick={() => navigateToTop("/careers")}
              >
                Partner with us
              </Button>
            </div>
          </ScrollReveal>

          <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-neutral-900 via-neutral-900/70 to-black shadow-lg">
            <div className="absolute -inset-12 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative">
              <img
                src="/uploads/cta-square.gif"
                alt="SWAIRAX in motion"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-72 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
