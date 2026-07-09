import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "next-themes";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, TrendingUp, Clock, Target, Shield } from "lucide-react";
import { getServiceBySlug, getTechLogo, logoToneClass, type ServiceTech } from "@/data/services";
import { setSEO } from "@/utils/seo";

const STAT_ICONS = [TrendingUp, Clock, Target, Shield];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();
  const [activeTech, setActiveTech] = useState<ServiceTech | null>(null);
  const { resolvedTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Theme-aware CTA visual (matches the Services page CTA).
  const ctaImageSrc =
    isVisible && resolvedTheme === "dark"
      ? "/services/hero-network-dark.gif"
      : "/services/hero-network-light.gif";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (service) {
      setSEO({
        title: `${service.title} - SWAIRAX`,
        description: service.description,
        canonicalUrl: `https://swairax.com/services/${service.slug}`,
      });
    }
  }, [service]);

  // Unknown slug → send the visitor back to the services overview.
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEOSchema
        breadcrumbs={[
          { name: "Home", url: "https://swairax.com" },
          { name: "Services", url: "https://swairax.com/services" },
          { name: service.badge, url: `https://swairax.com/services/${service.slug}` },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            description: service.description,
            url: `https://swairax.com/services/${service.slug}`,
            provider: {
              "@type": "Organization",
              name: "SWAIRAX",
              url: "https://swairax.com",
            },
            areaServed: { "@type": "Place", name: "Africa" },
          })}
        </script>
      </Helmet>
      <Header />

      {/* Hero — FullBleedHero pattern, matching the previous detail-page style. */}
      <FullBleedHero
        imageSrc={service.image}
        imageAlt={service.title}
        size="md"
        eyebrow={<><Icon className="h-4 w-4 mr-2" />{service.badge}</>}
        title={
          <Heading as="h1" size="display" className="font-black text-white">
            {service.heroTitle}
          </Heading>
        }
        subtitle={service.overview}
        cta={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 text-base font-semibold"
              onClick={() => scrollToSection("features")}
            >
              Explore Capabilities <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white"
              onClick={() => openMeeting()}
            >
              Get Started
            </Button>
          </>
        }
      />

      {/* Stats Section */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.stats.map((stat, index) => {
              const StatIcon = STAT_ICONS[index % STAT_ICONS.length];
              return (
                <div
                  key={stat.label}
                  className={`text-center p-4 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary mx-auto mb-3">
                    <StatIcon className="h-4 w-4" />
                  </div>
                  <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pb-8">
        <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--card))]" />
        <div className="container mx-auto px-6 pt-8">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
              <Heading as="h2" size="h2" className="mb-3 text-foreground">What We Deliver</Heading>
              <Lead className="max-w-3xl mx-auto">
                A focused set of capabilities, delivered end-to-end and built for African realities.
              </Lead>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card
                  key={feature.title}
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

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="card-icon rounded-xl bg-white/10 p-3 shadow-inner text-primary">
                        <FeatureIcon className="h-8 w-8" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed relative z-10">
                      {feature.description}
                    </p>

                    <ul className="space-y-2 relative z-10">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-xs text-foreground/80 group-hover:text-foreground transition-colors">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-card pb-8">
        <SectionDivider variant="matrix" flip className="w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-6 pt-8">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
              <Heading as="h2" size="h2" className="mb-3 text-foreground">How We Work</Heading>
              <Lead className="max-w-3xl mx-auto">
                A clear, co-built process with frequent checkpoints — from first conversation to ongoing support.
              </Lead>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <div
                key={step.step}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-[0_15px_40px_-20px_rgba(214,46,10,0.25)] hover:-translate-y-1 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
                <div className="relative z-10 space-y-3 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-inner">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
              <Heading as="h2" size="h2" className="mb-3">Tools & Technologies</Heading>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                We use proven, modern tools to deliver reliable, maintainable solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.tech.map((tech, index) => {
              const logo = getTechLogo(tech.name);
              return (
                <button
                  type="button"
                  key={tech.name}
                  onClick={() => setActiveTech(tech)}
                  className={`text-center p-4 rounded-lg border border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {logo ? (
                      <img src={logo} alt={`${tech.name} logo`} loading="lazy" className={`h-5 w-5 object-contain ${logoToneClass(tech.name)}`} />
                    ) : (
                      <span className="text-sm font-bold text-primary">{tech.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="font-bold mb-1 text-sm group-hover:text-primary transition-colors">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tool detail dialog — why we use it, what it does for the client */}
      <Dialog open={!!activeTech} onOpenChange={(open) => !open && setActiveTech(null)}>
        <DialogContent className="sm:max-w-md">
          {activeTech && (
            <>
              <DialogHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    {getTechLogo(activeTech.name) ? (
                      <img
                        src={getTechLogo(activeTech.name)}
                        alt={`${activeTech.name} logo`}
                        className={`h-6 w-6 object-contain ${logoToneClass(activeTech.name)}`}
                      />
                    ) : (
                      <span className="text-base font-bold text-primary">{activeTech.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <DialogTitle className="text-left">{activeTech.name}</DialogTitle>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {activeTech.description}
                    </p>
                  </div>
                </div>
                <DialogDescription className="text-left text-sm leading-relaxed text-foreground/85">
                  {activeTech.useCase}
                </DialogDescription>
              </DialogHeader>
              <Button
                className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  setActiveTech(null);
                  openMeeting();
                }}
              >
                Talk to us about this <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          {/* Text + visual combined into one panel (matches the Services CTA);
              the image fades into the card so the two halves read as one. */}
          <div
            className={`group mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_50px_-28px_rgba(15,23,42,0.4)] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 p-8 md:p-10">
                <Heading as="h2" size="h2" className="font-bold leading-tight text-foreground">
                  {service.ctaTitle}
                </Heading>
                <p className="max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  {service.ctaText}
                </p>
                <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row">
                  <Button
                    className="group h-10 w-auto bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 sm:h-12 sm:px-6 sm:py-3 sm:text-base"
                    onClick={() => openMeeting()}
                  >
                    Start Your Project <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 w-auto border-primary px-4 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground sm:h-12 sm:px-6 sm:py-3 sm:text-base"
                    onClick={() => navigateToTop("/services")}
                  >
                    View All Services
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
