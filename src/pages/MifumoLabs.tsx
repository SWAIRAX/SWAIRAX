import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { openMeeting } from "@/utils/meeting";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Lightbulb,
  Code2,
  Users,
  LayoutDashboard,
  Workflow,
} from "lucide-react";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import Parallax from "@/components/Parallax";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Eyebrow, Heading } from "@/components/ui/section";

const labsFeatures = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Product discovery",
    description: "Turn fuzzy ideas into validated product concepts with real user input.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Rapid prototyping",
    description: "Ship clickable prototypes and MVPs in weeks, not months.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "End-to-end delivery",
    description: "From design sprints to production-grade platforms under one roof.",
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Operational dashboards",
    description: "Give teams visibility into performance, adoption, and impact.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Co-creation",
    description: "We work alongside your teams, not in a black box.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "AI-native",
    description: "Bring GenAI and analytics into your products from day one.",
  },
];

const MifumoLabs = () => {
  const { navigateToTop } = useNavigationWithScroll();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ctaBackgroundImage = mounted
    ? `url('${resolvedTheme === "dark" ? "/services/hero-network-dark.gif" : "/services/hero-network-light.gif"}')`
    : "url('/services/hero-network-light.gif')"

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero – same style as Mifumo SMS */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div
            className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
            style={{ backgroundImage: "url('/OUR WORK/MIFUMOLABS.png')" }}
            aria-hidden
          />
        </Parallax>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <Heading as="h1" size="display">
                Mifumo Labs
              </Heading>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                We build digital products people actually want.
              </p>
              <p className="text-muted-foreground text-lg max-w-xl">
                A human-centered software studio partnering with organizations to design and ship
                impactful digital systems for Africa—fast iterations, deep research, and measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => openMeeting()}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
                >
                  Talk to our team
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://mifumolabs.com/", "_blank")}
                  className="border-primary/30 text-primary hover:bg-primary/10 px-6 py-3"
                >
                  Visit mifumolabs.com
                </Button>
              </div>
            </ScrollReveal>

            {/* Device mockup – Labs hero visual */}
            <ScrollReveal>
              <div className="relative max-w-xl mx-auto">
                <img
                  src="/OUR WORK/MIFUMOLABS.png"
                  alt="Mifumo Labs hero"
                  className="w-full h-auto drop-shadow-2xl rounded-3xl"
                  draggable={false}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Desktop dashboard – ContainerScroll (desktop only) */}
      <section className="relative hidden md:block py-8">
        <ContainerScroll
          titleComponent={
            <div className="text-center space-y-2">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Studio dashboard
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                From brief to launch in a single workspace
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                Track experiments, prototypes, and roll-outs across all your digital products.
              </p>
            </div>
          }
        >
          <img
            src="/OUR WORK/mifumocover.png"
            alt="Mifumo Labs studio dashboard"
            className="mx-auto h-full w-auto max-w-full object-contain rounded-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Features grid – reuse SaaS layout */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4">A studio built for shipping</Heading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategy, design, engineering, and AI capabilities brought together for ambitious teams.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {labsFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div
                  className="solution-card bg-secondary border border-border rounded-lg animate-slide-in-bottom group relative overflow-hidden h-full"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="p-8 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="card-icon rounded-xl bg-white/10 p-3 shadow-inner text-primary">
                        {f.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{f.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling 1 – discovery */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-[9%] left-[22%] right-[22%] bottom-[9%] rounded-2xl overflow-hidden z-0">
                  <img
                    src="/OUR WORK/mobile cover2.png"
                    alt="Mifumo Labs mobile UI"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
                <img
                  src="/OUR WORK/mobile1.webp"
                  alt="Discovery sessions"
                  className="relative z-10 w-full h-auto"
                  draggable={false}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="space-y-4">
              <Eyebrow>Discovery</Eyebrow>
              <Heading as="h2" size="h2">Workshops that start with real users</Heading>
              <p className="text-muted-foreground">
                We run design sprints, field interviews, and rapid experiments with your teams and your
                customers to make sure we are solving the right problem before writing a single line of code.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Storytelling 2 – delivery */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-4 order-2 lg:order-1">
              <Eyebrow>Delivery</Eyebrow>
              <Heading as="h2" size="h2">From prototype to production</Heading>
              <p className="text-muted-foreground">
                Mifumo Labs teams handle architecture, DevOps, quality, and handover so your systems can
                scale—whether it is SMS, web, mobile, or on-prem integrations.
              </p>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <div className="relative max-w-sm mx-auto">

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA – same style as Mifumo SMS */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-4 rounded-2xl border border-border/60 bg-background/85 p-6 md:p-8 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md">
            <Heading as="h2" size="h2" className="text-foreground font-bold leading-tight">
              Ready to build your next product with SWAIRAX?
            </Heading>
            <p className="text-foreground/85 leading-relaxed text-sm md:text-base max-w-lg">
              Whether you are a startup, NGO, or enterprise, Mifumo Labs helps you design, build, and
              launch digital systems that users actually love.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => openMeeting()}
              >
                Book discovery call
              </Button>
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground/50"
                onClick={() => navigateToTop("/our-work")}
              >
                View more work
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-neutral-900 via-neutral-900/70 to-black shadow-lg">
              <div className="absolute -inset-12 bg-gradient-to-r from-secondary-accent/10 via-transparent to-secondary-accent/10 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative">
                <video
                  className="h-full w-full object-cover animate-pan-slow"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/uploads/Quantum.png"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4" type="video/mp4" />
                </video>
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: ctaBackgroundImage }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MifumoLabs;
