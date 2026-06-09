import { useEffect, useState } from "react";
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
import { ArrowRight, TrendingUp, Clock, Target, Shield } from "lucide-react";
import { getServiceBySlug, getTechLogo } from "@/data/services";
import { setSEO } from "@/utils/seo";

const STAT_ICONS = [TrendingUp, Clock, Target, Shield];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();
  const [isVisible, setIsVisible] = useState(false);

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
              onClick={() => navigateToTop("/contact")}
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
                <div
                  key={tech.name}
                  className={`text-center p-4 rounded-lg border border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {logo ? (
                      <img src={logo} alt={`${tech.name} logo`} loading="lazy" className="h-5 w-5 object-contain" />
                    ) : (
                      <span className="text-sm font-bold text-primary">{tech.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="font-bold mb-1 text-sm group-hover:text-primary transition-colors">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className={`max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              {service.ctaTitle}
            </Heading>
            <p className="text-sm text-foreground/85 mb-4 max-w-2xl mx-auto">
              {service.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                onClick={() => navigateToTop("/contact")}
              >
                Start Your Project <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm"
                onClick={() => navigateToTop("/services")}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
