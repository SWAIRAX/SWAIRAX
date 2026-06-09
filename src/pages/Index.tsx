import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";
import { Eyebrow, Heading } from "@/components/ui/section";
import PlexusBackground from "@/components/PlexusBackground";
import Parallax from "@/components/Parallax";
import HeroDivider from "@/components/HeroDivider";
import SectionDivider from "@/components/SectionDivider";
import TechMarquee from "@/components/TechMarquee";
import { services } from "@/data/services";

const Index = () => {
  const { navigateToTop } = useNavigationWithScroll();

  const stats = [
    { value: "2+", label: "Products Launched" },
    { value: "5", label: "Service Lines" },
    { value: "20+", label: "Technologies" },
    { value: "🇹🇿", label: "Proudly Tanzanian" },
  ];

  const products = [
    {
      icon: Building2,
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

      {/* Stats Bar */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8 sm:mb-12">
            <Eyebrow className="mb-3 sm:mb-4">By the numbers</Eyebrow>
            <Heading as="h2" size="h2">
              An Africa-first technology company
            </Heading>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="metric-card text-center p-4 sm:p-6 rounded-lg border border-primary/10 animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="metric-value text-4xl sm:text-5xl font-bold mb-1 sm:mb-2 text-foreground">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Eyebrow className="mb-3 sm:mb-4">What We Do</Eyebrow>
            <Heading as="h2" size="h2" className="mb-4">
              End-to-end technology solutions for modern businesses
            </Heading>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.slug}
                onClick={() => navigateToTop(`/services/${service.slug}`)}
                className="feature-card bg-card border-border group hover:border-primary/40 transition-colors animate-slide-in-bottom cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="card-icon rounded-xl bg-primary/10 p-3 w-fit text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.cardTitle}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            ))}
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
      <section className="bg-card pb-12 sm:pb-16 lg:pb-20">
        {/* Tone-on-tone interlocking top divider */}
        <SectionDivider variant="matrix" flip className="w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
          <ScrollReveal className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Eyebrow className="mb-3 sm:mb-4">Our Products</Eyebrow>
            <Heading as="h2" size="h2">
              Innovative platforms solving real problems
            </Heading>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              In Tanzania and beyond.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="solution-card bg-secondary border-border group relative overflow-hidden animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      <product.icon className="h-3.5 w-3.5" />
                      {product.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                      <span className={`h-2 w-2 rounded-full ${product.live ? "bg-green-500" : "bg-amber-500"}`} />
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md border border-primary/20 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      variant="ghost"
                      className="text-foreground hover:text-primary bg-transparent hover:bg-transparent p-0 group-hover:translate-x-1 transition-transform focus-visible:ring-0"
                      onClick={() => navigateToTop(product.learnMore)}
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
                </CardContent>
              </Card>
            ))}
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
              onClick={() => navigateToTop("/contact")}
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
