import { useEffect, useState } from "react";
import { openMeeting } from "@/utils/meeting";
import { useParams, Navigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import HeroBackdrop from "@/components/HeroBackdrop";
import FullBleedHero from "@/components/FullBleedHero";
import { SEOSchema } from "@/components/SEOSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading, Lead } from "@/components/ui/section";
import { ArrowRight, AlertCircle, Quote } from "lucide-react";
import { getSectorBySlug } from "@/data/sectors";
import { setSEO } from "@/utils/seo";

const SectorDetail = () => {
  const { slug } = useParams();
  const sector = getSectorBySlug(slug);
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (sector) {
      setSEO({
        title: `${sector.name} - How SWAIRAX Helps`,
        description: sector.description,
        canonicalUrl: `https://swairax.com/sectors/${sector.slug}`,
      });
    }
  }, [sector]);

  if (!sector) {
    return <Navigate to="/sectors" replace />;
  }

  const Icon = sector.icon;

  // Show a product as proof ONLY on the field it actually serves; every other
  // sector gets an execution/vision statement instead of an unrelated product.
  const relatedProduct =
    sector.slug === "construction"
      ? {
          name: "TanzaBuild",
          status: "Live product",
          live: true,
          text: "Tanzania's construction services platform — connecting contractors, suppliers, and builders, with material sourcing and project management in one place.",
        }
      : sector.slug === "beauty-wellness"
        ? {
            name: "Florré",
            status: "In development",
            live: false,
            text: "A luxury salon-booking and beauty-discovery app with mobile-money payments — built for how people actually book and pay in Tanzania.",
          }
        : null;

  return (
    <div className="min-h-screen bg-background">
      <SEOSchema
        breadcrumbs={[
          { name: "Home", url: "https://swairax.com" },
          { name: "Sectors", url: "https://swairax.com/sectors" },
          { name: sector.name, url: `https://swairax.com/sectors/${sector.slug}` },
        ]}
      />
      <Header />

      {/* Hero */}
      <FullBleedHero
        imageSrc={sector.image}
        imageAlt={sector.name}
        size="md"
        eyebrow={<><Icon className="h-4 w-4 mr-2" />{sector.name}</>}
        title={
          <Heading as="h1" size="display" className="font-black text-white">
            {sector.heroTitle}
          </Heading>
        }
        subtitle={sector.description}
        cta={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 text-base font-semibold"
              onClick={() => scrollToSection("how-we-help")}
            >
              See How We Help <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white"
              onClick={() => openMeeting()}
            >
              Work With Us
            </Button>
          </>
        }
      />

      {/* A note from our founder */}
      <section className="py-10 bg-card">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-6 md:p-8 shadow-[0_15px_40px_-30px_rgba(0,0,0,0.4)]">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Quote className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                A note from our founder
              </span>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-foreground/90 italic">
              {sector.founderNote}
            </p>
            <p className="mt-4 text-sm font-semibold text-primary">— Founder &amp; CEO, SWAIRAX</p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="pb-8">
        <SectionDivider variant="ring" flip className="-mt-px w-full text-[hsl(var(--card))]" />
        <div className="container mx-auto px-6 pt-8">
          <div className="text-center mb-8">
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              The challenges we hear every day
            </Heading>
            <Lead className="max-w-3xl mx-auto">
              These are the productivity leaks holding {sector.name.toLowerCase()} back. We've built
              SWAIRAX to close them.
            </Lead>
          </div>

          {/* Mobile: single-column stack, one card per row. Desktop: 2-col grid. */}
          <div className="relative mx-auto flex max-w-md flex-col gap-4 md:max-w-4xl md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:gap-y-14">
            {/* Static brand mark at the centre of the 2x2 grid (desktop only).
                No disc/background behind it, so it blends into the page; it
                pulses gently instead of rotating. */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="relative flex h-80 w-80 items-center justify-center lg:h-[26rem] lg:w-[26rem]">
                {/* the logo stays still, no disc/background — blends into the page */}
                <img
                  src="/SWAY.png"
                  alt="SWAIRAX"
                  width={686}
                  height={988}
                  className="relative h-48 w-48 animate-scale-pulse object-contain lg:h-64 lg:w-64"
                />
              </div>
            </div>
            {sector.challenges.map((challenge, index) => (
              <div
                key={challenge}
                className={`group flex flex-col justify-center gap-3 p-2 transition-all duration-300 hover:-translate-y-1 md:max-w-[260px] md:min-h-[140px] ${index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <span className="text-sm leading-relaxed text-muted-foreground">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section id="how-we-help" className="bg-card pb-8">
        <SectionDivider variant="matrix" flip className="-mt-px w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-6 pt-8">
          <div className="text-center mb-8">
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              How SWAIRAX helps you produce more
            </Heading>
            <Lead className="max-w-3xl mx-auto">
              Practical, end-to-end solutions — built for African realities and proven on our own
              products.
            </Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sector.howWeHelp.map((help, index) => {
              const HelpIcon = help.icon;
              return (
                <Card
                  key={help.title}
                  className="solution-card bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: "reverse" }} />
                      </svg>
                    </div>
                    <div className="mb-6 w-fit card-icon rounded-xl bg-white/10 p-3 text-primary shadow-inner relative z-10">
                      <HelpIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-primary transition-colors">
                      {help.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                      {help.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof — sector-relevant product where one exists; otherwise an
          execution/vision statement. Products appear only on their own field. */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          {relatedProduct ? (
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <Heading as="h2" size="h2" className="mb-3">Proof, not promises</Heading>
                <Lead className="max-w-3xl mx-auto">
                  We didn't learn {sector.name.toLowerCase()} from a slide deck — we built and shipped a
                  real platform for it. Partner with SWAIRAX and you're backing a team that has already
                  done the hard part.
                </Lead>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-foreground">{relatedProduct.name}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <span className={`h-2 w-2 rounded-full ${relatedProduct.live ? "bg-green-500" : "bg-amber-500"}`} />
                    {relatedProduct.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {relatedProduct.text}
                </p>
                <div className="mt-5">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => navigateToTop("/products")}
                  >
                    See what we've built <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl text-center">
              <Heading as="h2" size="h2" className="mb-3">Built to execute</Heading>
              <Lead className="mx-auto">
                SWAIRAX is an Africa-first engineering company that designs, builds, and operates
                production software, data, and AI systems end to end. We build for African realities —
                mobile money, local languages, and real infrastructure — and we ship. That is exactly
                the discipline we bring to {sector.name.toLowerCase()}.
              </Lead>
              <div className="mt-6 flex justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => navigateToTop("/products")}
                >
                  See what we've built <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What better looks like */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Heading as="h2" size="h2" className="mb-3">What better looks like</Heading>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              The kind of outcomes we aim for together — measurable wins, not vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {sector.impact.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-5 rounded-lg border border-border/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we start — low-risk engagement model (removes the "big commitment" fear) */}
      <section className="bg-card pb-10">
        <SectionDivider variant="ring" flip className="-mt-px w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-6 pt-8">
          <div className="text-center mb-8">
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              How we start — low risk, fast proof
            </Heading>
            <Lead className="max-w-3xl mx-auto">
              You don't sign a big contract on a promise. We prove value on one problem first, then scale.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Free discovery call",
                text: "A 30-minute call where we learn your operation and pinpoint your biggest productivity leak. No cost, no obligation.",
              },
              {
                step: "02",
                title: "Focused pilot",
                text: "A small, fixed-scope pilot on that one problem — with clear success metrics, delivered in weeks, not months.",
              },
              {
                step: "03",
                title: "Measured rollout",
                text: "We scale what works, tie every step to outcomes you can see, and keep supporting it long after launch.",
              },
            ].map((p) => (
              <div key={p.step} className="rounded-2xl border border-border bg-secondary/40 p-6">
                <div className="mb-3 text-3xl font-bold tabular-nums text-primary">{p.step}</div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className={`max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              {sector.ctaTitle}
            </Heading>
            <p className="text-sm text-foreground/85 mb-2 max-w-2xl mx-auto">
              {sector.ctaText}
            </p>
            <p className="mb-5 text-sm font-semibold text-foreground max-w-2xl mx-auto">
              Book a free 30-minute operations audit — we'll map your biggest productivity leak and
              the fastest win. No cost, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                onClick={() => openMeeting()}
              >
                Book my free audit <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm"
                onClick={() => navigateToTop("/sectors")}
              >
                Explore Other Sectors
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SectorDetail;
