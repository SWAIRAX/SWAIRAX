import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { openMeeting } from "@/utils/meeting";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { SEOSchema } from "@/components/SEOSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import Parallax from "@/components/Parallax";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionLead, Heading, Eyebrow } from "@/components/typography";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ArrowRight, Calendar, Shield, Users, FileText, ExternalLink, Play } from "lucide-react";

const Research = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const showreelRef = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ctaBackgroundImage = mounted
    ? `url('${resolvedTheme === "dark" ? "/services/hero-network-dark.gif" : "/services/hero-network-light.gif"}')`
    : "url('/services/hero-network-light.gif')";

  const archivedSolutions = [
    {
      title: "SURASOFT",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "AI-powered security SaaS using existing camera networks for biometric verification and instant crime prevention alerts.",
      keyFeatures: [
        "Real-time video analysis",
        "Biometric verification",
        "Instant crime prevention alerts"
      ],
      tags: ["SaaS", "Computer Vision"],
      icon: <Shield className="w-6 h-6" />,
      demoLink: "#",
      caseStudyLink: "#"
    },
    {
      title: "AI Proctoring",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "AI-powered proctoring system for secure online assessments with real-time behavior monitoring and automated suspicious activity detection.",
      keyFeatures: [
        "Real-time behavior monitoring",
        "Automated suspicious activity detection",
        "Secure online assessments"
      ],
      tags: ["Education", "AI Monitoring", "SaaS"],
      icon: <Users className="w-6 h-6" />,
      demoLink: "#",
      caseStudyLink: "#"
    },
    {
      title: "Askari LLM",
      category: "Self-hosted",
      status: "Retired",
      launchDate: "2023",
      description: "Python package for LLM policy enforcement and compliance. Customizable guardrails ensure ethical AI interactions within defined operational boundaries.",
      keyFeatures: [
        "Policy enforcement for LLMs",
        "Customizable compliance rules",
        "Easy Python integration"
      ],
      tags: ["LLM Guardrails"],
      icon: <FileText className="w-6 h-6" />,
      demoLink: "#",
      caseStudyLink: "#"
    }
  ];

  const filteredSolutions = archivedSolutions;

  const showreel = "https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOSchema
        breadcrumbs={[
          { name: "Home", url: "https://swairax.com" },
          { name: "Research", url: "https://swairax.com/research" }
        ]}
      />
      <Header />

      {/* Hero — passionlabs-style: our research image, red tint, crosshair lines through the CTA */}
      <section className="relative overflow-hidden text-white pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
        {/* Our research image — drifts on scroll for depth */}
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/uploads/RESEARCH.jpg')" }}
          />
        </Parallax>
        {/* Brand-red tint + dark gradient so the white type stays legible */}
        <div className="absolute inset-0 bg-[#b3210a]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:ml-[32%]">
            <p className="mb-6 pl-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Research &amp; Strategy</p>
            <h1 className="pl-6 text-5xl font-light leading-[1.03] tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              AI research &amp; strategy to give you <span className="italic">the edge.</span>
            </h1>
            <div className="relative mt-10 inline-flex">
              {/* passionlabs "button_outlines" — white lines emanate from the button edges to the page edges */}
              <span className="pointer-events-none absolute top-1/2 right-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute top-1/2 left-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute bottom-full left-0 h-screen w-px bg-white/80" />
              <span className="pointer-events-none absolute top-full left-0 h-[200vh] w-px bg-white/80" />
              <button
                onClick={() => openMeeting()}
                className="group relative z-10 inline-flex items-center gap-3 py-3 pr-4 text-sm font-semibold uppercase tracking-[0.2em] text-white drop-shadow-sm"
              >
                <span className="h-3 w-3 rounded-full bg-[#eb0000] transition-transform duration-300 group-hover:scale-150" />
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — top-bordered editorial statement (passionlabs "custom-top-border") */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-border py-14 sm:py-20 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-[1fr_2.4fr] lg:gap-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Impossible? Let's see.</p>
              <p className="max-w-3xl text-2xl font-light leading-snug text-foreground sm:text-3xl lg:text-[2.4rem] lg:leading-[1.25]">
                Deep research paired with practical strategy—helping teams adopt, adapt, and ship
                production-grade AI. Every experiment is built with ethics, evals, and observability
                from day one, feeding directly into Deep Operator, Annotate, GenAI, and MLOps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research archive — numbered editorial rows on a red background */}
      <section className="bg-[#b3210a] text-white pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-2 border-t border-white/25 pt-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Research Archive
          </p>
          <div>
            {filteredSolutions.map((solution, index) => (
              <button
                key={solution.title}
                onClick={() => navigateToTop(`/research/${solution.title.toLowerCase().replace(/\s+/g, '-')}`)}
                className="group block w-full border-t border-white/20 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex flex-col gap-5 py-10 sm:flex-row sm:items-start sm:gap-12 lg:gap-24 lg:py-14">
                  <span className="text-2xl font-light tabular-nums text-white sm:pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 max-w-2xl">
                    <h3 className="mb-3 text-2xl font-normal text-white transition-colors group-hover:text-white/80 sm:text-3xl">
                      {solution.title}.
                    </h3>
                    <p className="text-base leading-relaxed text-white/75 sm:text-lg">
                      {solution.description}
                    </p>
                  </div>
                  <ArrowRight className="hidden h-6 w-6 shrink-0 self-center text-white/70 transition-all group-hover:translate-x-1 group-hover:text-white sm:block" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

{/* Evolution Timeline */}
{/* <section className="py-20 bg-card">
<div className="container mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4">Our Innovation Journey</h2>
<p className="text-xl text-muted-foreground">
From security solutions to advanced AI platforms - our evolution continues
</p>
</div>

<div className="max-w-4xl mx-auto">
<div className="relative">
<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

<div className="space-y-12">
<div className="relative flex items-center">
<div className="w-1/2 pr-8 text-right">
<h3 className="text-xl font-bold">2022</h3>
<p className="text-muted-foreground">SURASOFT & AI Proctoring Launch</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8"></div>
</div>

<div className="relative flex items-center">
<div className="w-1/2 pr-8"></div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8">
<h3 className="text-xl font-bold">2023</h3>
<p className="text-muted-foreground">Askari LLM Development</p>
</div>
</div>

<div className="relative flex items-center">
<div className="w-1/2 pr-8 text-right">
<h3 className="text-xl font-bold">2024</h3>
<p className="text-muted-foreground">New Solution Framework Launch</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8"></div>
</div>
</div>
</div>
</div>
</div>
</section> */}

      {/* CTA Section */}
      {/* CTA with live reel */}
      <section ref={showreelRef} className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          <ScrollReveal className="space-y-4 rounded-2xl border border-border/60 bg-background/85 p-6 md:p-8 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md">
            <Heading as="h2" size="h2" className="text-foreground font-bold leading-tight">
              Research in motion: security, education, guardrails.
            </Heading>
            <p className="text-foreground/85 text-sm md:text-base max-w-lg lg:max-w-xl leading-relaxed">
              See how SURASOFT, AI Proctoring, and Askari LLM experiments flow into today's production-grade analytics, annotation, GenAI, and MLOps. Real footage, AI overlays, and production guardrails together.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-auto h-10 sm:h-12 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                onClick={() => navigateToTop("/services")}
              >
                Explore current solutions
              </Button>
            </div>
          </ScrollReveal>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary text-card-foreground shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
            <div className="absolute -inset-12 bg-gradient-to-r from-card via-transparent to-card blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative">
              <video
                className="h-full w-full object-cover animate-pan-slow"
                autoPlay
                loop
                muted
                playsInline
                poster="/uploads/Quantum.png"
              >
                <source src={showreel} type="video/mp4" />
              </video>
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: ctaBackgroundImage }}
                aria-hidden="true"
              />

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
