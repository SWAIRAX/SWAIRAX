import { useState } from "react";
import { useNavigationWithScroll } from "@/utils/navigation";
import { openMeeting } from "@/utils/meeting";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Users,
  Building2,
  Scissors,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Eyebrow, Heading } from "@/components/ui/section";
import PlexusBackground from "@/components/PlexusBackground";
import Parallax from "@/components/Parallax";
import HeroDivider from "@/components/HeroDivider";
import SectionDivider from "@/components/SectionDivider";
import TechMarquee from "@/components/TechMarquee";
import { services, getTechLogo, logoToneClass } from "@/data/services";

const Index = () => {
  const { navigateToTop, navigateToAnchor } = useNavigationWithScroll();
  const [productIndex, setProductIndex] = useState(0);

  const stats = [
    { value: "2+", label: "Products Launched" },
    { value: "5", label: "Service Lines" },
    { value: "20+", label: "Technologies" },
    { value: "🇹🇿", label: "Proudly Tanzanian" },
  ];

  const products = [
    {
      icon: Building2,
      image: "/build.webp",
      imageDark: "/build2.webp",
      tag: "Construction Tech",
      title: "TanzaBuild",
      description:
        "Tanzania's premier construction services platform. Connect with contractors, source materials, and manage your build — all in one place.",
      stack: ["React Native", "Django", "PostgreSQL"],
      status: "Live",
      live: true,
      learnMore: "/products#tanzabuild",
      website: "https://tanzabuild.com",
    },
    {
      icon: Scissors,
      image: "/florre.webp",
      imageDark: "/florre.webp",
      tag: "Beauty Tech",
      title: "Florré",
      description:
        "Luxury salon booking and beauty discovery app for Tanzania. Find your perfect stylist, book in seconds, pay with mobile money.",
      stack: ["React Native", "Node.js", "Supabase"],
      status: "Coming Soon",
      live: false,
      learnMore: "/products#florre",
      website: null,
    },
  ];

  const whySwairax = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Africa-First Thinking",
      description:
        "We build for local realities — mobile money, local languages, and infrastructure constraints.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Full-Stack Expertise",
      description:
        "From AI models to mobile apps, we cover the entire technology stack.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partnership Approach",
      description:
        "We work with you, not just for you — your success is our mission.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-32 sm:py-0">
        {/* Animated red plexus network background — drifts on scroll for depth */}
        <Parallax speed={-0.22} clamp={170} className="absolute inset-x-0 -inset-y-[26%] h-[152%]">
          <PlexusBackground className="absolute inset-0 h-full w-full" />
        </Parallax>
        {/* Radial vignette so the headline stays legible over the network */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_58%,hsl(var(--background)/0.85)_100%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Heading
              as="h1"
              size="display"
              className="mb-5 sm:mb-6 text-[clamp(1.75rem,11vw,2.5rem)] sm:text-5xl lg:text-6xl uppercase tracking-tight text-foreground"
            >
              Building Africa's <br />
              Digital Future
            </Heading>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
              SWAIRAX delivers cutting-edge AI, Data Science, Cybersecurity, and Software
              Engineering solutions — built for Africa, ready for the world.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Glossy primary button */}
              <button
                onClick={() => navigateToTop("/services")}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-95
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04)),linear-gradient(180deg,#3a3a42,#15151b)]
                  ring-1 ring-white/10"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </button>
              {/* Red outline button */}
              <button
                onClick={() => navigateToTop("/products")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary/60 bg-primary/5 px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-primary/10 hover:border-primary active:scale-95"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                View Our Products
              </button>
            </div>
          </div>
        </div>

        {/* Red data-matrix divider (with central scroll-ring) along the bottom — lecdt-style */}
        <HeroDivider className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full text-[#ff0000]" />
      </section>

      {/* Red tagline band — fills the hero divider's red gaps */}
      <section className="relative overflow-hidden bg-[#ff0000] -mt-1" aria-label="SWAIRAX tagline">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
          <p className="text-center text-base sm:text-xl font-semibold tracking-wide text-primary-foreground">
            Built for Africa, ready for the world.
          </p>
        </div>
      </section>

      {/* Red data-matrix divider — red teeth on a white (bg-card) backing */}
      <SectionDivider className="-mt-1 w-full bg-card text-[#ff0000]" />

      {/* Stats Section — Two Column Layout */}
      <section className="relative py-0 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
            {/* Left Column — Content */}
            <ScrollReveal className="space-y-6 sm:space-y-8">
              <div>
                <Eyebrow className="mb-3 sm:mb-4">By the numbers</Eyebrow>
                <Heading as="h2" size="h2" className="leading-tight">
                  An Africa-first technology company
                </Heading>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                Driving innovation across the continent with trusted products, comprehensive service lines, and cutting-edge technologies that empower businesses to thrive.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md md:max-w-none md:grid-cols-4 lg:max-w-md lg:grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="metric-card p-4 sm:p-5 rounded-lg border border-primary/10 animate-slide-in-bottom"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="metric-value text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Column — on-brand recreation of the POS-style visual:
                animated concentric red-dot rings with OUR capability labels
                radiating from the circle's arc (like passionlabs). Drawn in a
                single SVG so the dots, rings and labels stay aligned and scale
                together; dots are red, labels use the theme foreground colour,
                so it blends on both light and dark backgrounds. */}
            <ScrollReveal className="relative flex items-center justify-center lg:h-[480px]">
              <svg
                viewBox="0 0 380 200"
                className="h-auto w-full max-w-[560px] text-primary lg:max-w-none"
                aria-hidden="true"
                style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
              >
                {/* concentric rotating rings of red dots */}
                {[
                  { r: 92, n: 46, dr: 3, op: 0.95, dur: "42s", rev: false },
                  { r: 66, n: 34, dr: 2.3, op: 0.7, dur: "30s", rev: true },
                  { r: 42, n: 24, dr: 1.7, op: 0.5, dur: "22s", rev: false },
                ].map((ring, ri) => (
                  <g
                    key={ri}
                    className={`animate-spin-slow origin-center [transform-box:fill-box] ${ring.rev ? "[animation-direction:reverse]" : ""}`}
                    style={{ animationDuration: ring.dur }}
                  >
                    {Array.from({ length: ring.n }).map((_, i) => {
                      const a = (i / ring.n) * Math.PI * 2;
                      return (
                        <circle
                          key={i}
                          cx={100 + ring.r * Math.cos(a)}
                          cy={100 + ring.r * Math.sin(a)}
                          r={ring.dr}
                          fill="currentColor"
                          opacity={ring.op}
                        />
                      );
                    })}
                  </g>
                ))}

                {/* labels radiating from the right arc — SWAIRAX capabilities */}
                {[
                  "AI & Machine Learning",
                  "Data Science & Analytics",
                  "Cybersecurity",
                  "Big Data Engineering",
                  "Software Engineering",
                  "Cloud & DevOps",
                ].map((label, i) => {
                  const a = ((-52 + i * 20.8) * Math.PI) / 180;
                  const dx = 100 + 110 * Math.cos(a);
                  const dy = 100 + 110 * Math.sin(a);
                  return (
                    <g key={label}>
                      <circle cx={dx} cy={dy} r={3.5} className="fill-[hsl(var(--primary))]" />
                      <text
                        x={dx + 9}
                        y={dy}
                        dominantBaseline="middle"
                        fontSize="10"
                        fontWeight="600"
                        letterSpacing="0.6"
                        className="fill-[hsl(var(--foreground))]"
                        style={{ textTransform: "uppercase" }}
                      >
                        {label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Overview — "quadro" style: cards flank a centre logo with
          rotating rings (desktop); a simple icon list on mobile. */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Eyebrow className="mb-3 sm:mb-4">What We Do</Eyebrow>
            <Heading as="h2" size="h2" className="mb-4">
              End-to-end technology solutions for modern businesses
            </Heading>
          </ScrollReveal>

          {/* Desktop / tablet: left column — centre rings+logo — right column.
              Each column is its own flex stack (not equal-height grid rows),
              so every card sizes to its own content instead of stretching. */}
          <div className="hidden md:grid md:grid-cols-[minmax(220px,1fr)_minmax(220px,480px)_minmax(220px,1fr)] md:items-center md:gap-x-6 lg:gap-x-10">
            <div className="flex flex-col gap-5">
              {services.slice(0, 3).map((service) => (
                <button
                  type="button"
                  key={service.slug}
                  onClick={() => navigateToTop(`/services/${service.slug}`)}
                  className="group flex items-center gap-4 rounded-xl bg-card p-5 text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* left column: icon faces right (inward, toward the centre) */}
                  <span className="flex flex-col">
                    <h3 className="text-base font-bold text-foreground">{service.cardTitle}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </span>
                  <span className="ml-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </span>
                </button>
              ))}
            </div>

            {/* Centre — rotating rings around a still, gently pulsing logo */}
            <div className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden="true">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-primary">
                {/* outer ring — anticlockwise, slow. Inline animation (not a
                    class) so duration/direction always win, regardless of
                    Tailwind/CSS source order against the base .animate-spin-slow rule. */}
                <circle
                  className="origin-center [transform-box:fill-box]"
                  style={{ animation: "spin-slow 110s linear infinite reverse" }}
                  cx="200" cy="200" r="192" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="12 14"
                />
                <circle cx="200" cy="200" r="156" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
                {/* inner ring — clockwise, slow */}
                <circle
                  className="origin-center [transform-box:fill-box]"
                  style={{ animation: "spin-slow 80s linear infinite" }}
                  cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="4 10"
                />
              </svg>
              {/* Symmetric inset (not translate math) so the mark is centred
                  by the browser's own object-fit — robust regardless of the
                  image's internal padding. */}
              <div className="absolute inset-[5%] animate-scale-pulse">
                <img
                  src="/SWAY.png"
                  alt="SWAIRAX"
                  width={686}
                  height={988}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {services.slice(3, 6).map((service) => (
                <button
                  type="button"
                  key={service.slug}
                  onClick={() => navigateToTop(`/services/${service.slug}`)}
                  className="group flex items-center gap-4 rounded-xl bg-card p-5 text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col">
                    <h3 className="text-base font-bold text-foreground">{service.cardTitle}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: logo mark above a single-column list */}
          <div className="md:hidden">
            <div className="relative mx-auto mb-8 aspect-square w-full max-w-[260px]" aria-hidden="true">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-primary">
                {/* outer ring — anticlockwise, slow (inline animation so it
                    always wins, matching the desktop rings above) */}
                <circle
                  className="origin-center [transform-box:fill-box]"
                  style={{ animation: "spin-slow 110s linear infinite reverse" }}
                  cx="200" cy="200" r="192" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="12 14"
                />
                <circle cx="200" cy="200" r="156" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
                {/* inner ring — clockwise, slow */}
                <circle
                  className="origin-center [transform-box:fill-box]"
                  style={{ animation: "spin-slow 80s linear infinite" }}
                  cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="4 10"
                />
              </svg>
              {/* Symmetric inset (not translate math) so the mark is centred
                  by the browser's own object-fit — robust regardless of the
                  image's internal padding. */}
              <div className="absolute inset-[8%] animate-scale-pulse">
                <img
                  src="/SWAY.png"
                  alt="SWAIRAX"
                  width={686}
                  height={988}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            {/* Sticky stacking deck — each card pins below the header as you
                scroll, and the next one slides up over it (rising z-index +
                a shadow cast upward), matching the reference's mobile
                "services-home__item" behaviour. */}
            <div className="flex flex-col">
              {services.map((service, index) => (
                <button
                  type="button"
                  key={service.slug}
                  onClick={() => navigateToTop(`/services/${service.slug}`)}
                  style={{ zIndex: index + 1 }}
                  className={`sticky top-[78px] flex min-h-[220px] flex-col items-start gap-3.5 rounded-2xl bg-card px-6 pb-[30px] pt-[26px] text-left shadow-[0_-12px_30px_-6px_rgba(16,18,35,0.18)] ${
                    index < services.length - 1 ? "mb-8" : ""
                  }`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col">
                    <h3 className="text-lg font-bold text-foreground">{service.cardTitle}</h3>
                    <p className="mt-1 text-base text-muted-foreground">{service.description}</p>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3"
              onClick={() => navigateToTop("/services")}
            >
              See All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="bg-card pb-4 sm:pb-5 lg:pb-6">
        {/* Tone-on-tone interlocking top divider */}
        <SectionDivider variant="matrix" flip className="w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12">
          {/* Big mockup on the left covers the whole section; the header + the
              one-at-a-time product details + controls sit on the right. */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
            {/* LEFT — large, theme-aware mockup for the active product */}
            {(() => {
              const product = products[productIndex];
              return (
                <div key={`img-${productIndex}`} className="group order-2 flex animate-fade-in justify-center lg:order-1">
                  <img
                    src={product.image}
                    alt={`${product.title} app mockup`}
                    loading="lazy"
                    className="h-80 w-auto rotate-6 object-contain drop-shadow-2xl transition-transform duration-300 ease-out hover:rotate-0 hover:scale-105 sm:h-[28rem] lg:h-[34rem] dark:hidden"
                  />
                  <img
                    src={product.imageDark}
                    alt={`${product.title} app mockup`}
                    loading="lazy"
                    className="hidden h-80 w-auto rotate-6 object-contain drop-shadow-2xl transition-transform duration-300 ease-out hover:rotate-0 hover:scale-105 sm:h-[28rem] lg:h-[34rem] dark:block"
                  />
                </div>
              );
            })()}

            {/* RIGHT — header + active product details + slider controls */}
            <div className="order-1 lg:order-2">
              <ScrollReveal className="mb-8">
                <Eyebrow className="mb-3 sm:mb-4">Our Products</Eyebrow>
                <Heading as="h2" size="h2">
                  Innovative platforms solving real problems
                </Heading>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  In Tanzania and beyond.
                </p>
              </ScrollReveal>

              {(() => {
                const product = products[productIndex];
                return (
                  <div key={productIndex} className="group animate-fade-in border-t border-border pt-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        <product.icon className="h-3.5 w-3.5 text-primary" />
                        {product.tag}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <span className={`h-2 w-2 rounded-full ${product.live ? "bg-green-500" : "bg-amber-500"}`} />
                        {product.status}
                      </span>
                    </div>
                    <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {product.description}
                    </p>
                    <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                      {product.stack.map((tech) => {
                        const logo = getTechLogo(tech);
                        return (
                          <span key={tech} className="inline-flex items-center gap-1.5">
                            {logo ? (
                              <img
                                src={logo}
                                alt=""
                                loading="lazy"
                                className={`h-4 w-auto max-w-[64px] object-contain ${logoToneClass(tech)}`}
                              />
                            ) : (
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            )}
                            <span className="font-mono text-[11px] font-medium tracking-tight text-foreground/70">
                              {tech}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button
                        variant="ghost"
                        className="bg-transparent p-0 text-foreground transition-transform hover:bg-transparent hover:text-primary focus-visible:ring-0 group-hover:translate-x-1"
                        onClick={() => navigateToAnchor(product.learnMore)}
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      {product.website && (
                        <a
                          href={product.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-primary hover:underline"
                        >
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* slider controls — prev / next + position */}
              <div className="mt-7 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setProductIndex((i) => (i - 1 + products.length) % products.length)}
                  aria-label="Previous product"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setProductIndex((i) => (i + 1) % products.length)}
                  aria-label="Next product"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="ml-1 text-sm tabular-nums text-muted-foreground">
                  {String(productIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SWAIRAX */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Eyebrow className="mb-3 sm:mb-4">Why SWAIRAX?</Eyebrow>
            <Heading as="h2" size="h2">
              Why Choose SWAIRAX?
            </Heading>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {whySwairax.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 120} className="text-center">
                <div className="card-icon rounded-xl bg-primary/10 p-4 w-fit mx-auto text-primary mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack — moving logo marquee */}
      <TechMarquee />

      {/* CTA Banner — flows straight on from the tech band (both bg-card) */}
      <section className="bg-card pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
          <div className="rounded-3xl bg-primary px-6 sm:px-10 py-12 sm:py-16 text-center">
            <Heading as="h2" size="h2" className="mb-4 sm:mb-6 text-primary-foreground">
              Ready to Build Something Great?
            </Heading>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with SWAIRAX and bring your technology vision to life.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-lg"
              onClick={() => openMeeting()}
            >
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
