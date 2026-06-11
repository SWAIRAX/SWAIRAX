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
        <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--card))]" />
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {sector.challenges.map((challenge) => (
              <div
                key={challenge}
                className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-5"
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section id="how-we-help" className="bg-card pb-8">
        <SectionDivider variant="matrix" flip className="w-full text-[hsl(var(--background))]" />
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

      {/* CTA */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className={`max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              {sector.ctaTitle}
            </Heading>
            <p className="text-sm text-foreground/85 mb-4 max-w-2xl mx-auto">
              {sector.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                onClick={() => openMeeting()}
              >
                Start the Conversation <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
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
