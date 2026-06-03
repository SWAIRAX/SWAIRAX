import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import { Section, Heading, Lead, PageHero } from "@/components/ui/section";
import { ArrowRight, Zap, Globe, Shield, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const TryNow = () => {
  const navigate = useNavigate();
  const platforms = [
    {
      name: "Deep Operator",
      type: "Data Platform",
      description: "Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impact, learn from their data, measure progress, and make smarter decisions.",
      features: ["Machine Learning & RLHF", "Impact Measurement", "Progress Tracking", "Smart Decision Making"],
      cta: "Get Started"
    },
    {
      name: "Quantum Annotate",
      type: "Annotation Service",
      description: "Robust annotation solution supported by a full workforce, offering industry-grade labeling for text, image, audio, and video datasets.",
      features: ["Multi-modal Annotation", "Professional Workforce", "Industry-Grade Quality", "Scalable Solutions"],
      cta: "Request Demo"
    },
    {
      name: "Quantum GenAI",
      type: "AI Enhancement",
      description: "Enhance generative AI model accuracy, reliability, and speed through in-house data expertise and fine-tuning techniques.",
      features: ["Model Fine-tuning", "Data Expertise", "Performance Enhancement", "Speed Optimization"],
      cta: "Learn More"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Get up and running in minutes with our easy-to-use platforms and comprehensive documentation."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Cloud-native solutions that scale globally with enterprise-grade infrastructure and support."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance with industry standards to protect your data and operations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <PageHero
        className="bg-card"
        title={<>Try Our AI Solutions Today</>}
        description={<>Experience the power of our data-centric AI solutions. Get started with free trials, demos, and developer packages to transform your business operations.</>}
        actions={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigate("/contact")}
            >
              Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/contact")}
            >
              Schedule Demo
            </Button>
          </>
        }
      />

      {/* Platforms Section */}
      <Section>
          <div className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">Choose Your Platform</Heading>
            <Lead className="max-w-2xl mx-auto">
              Select from our suite of AI-powered solutions designed for different business needs
            </Lead>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card to-card/50 p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
              >
                {/* top edge sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                {/* corner glow on hover */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <span className="mb-6 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary ring-1 ring-primary/20">
                  {platform.type}
                </span>

                <h3 className="text-2xl font-bold text-foreground mb-3">{platform.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">{platform.description}</p>

                <ul className="space-y-3 mb-8">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground/90">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-auto w-full"
                  variant="outline"
                  onClick={() => navigate("/contact")}
                >
                  {platform.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
      </Section>

      {/* Benefits Section */}
      <Section bg="card">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background/40 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background/60"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5 ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
      </Section>

      {/* Stats Section */}
      <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" size="h2" className="mb-4">
                Join the Data-Centric AI Movement
              </Heading>
              <Lead>
                Connect, profile, understand & orchestrate your data preparation flows to train models more efficiently
              </Lead>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card to-card/40 shadow-[var(--shadow-card)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/70">
                {[
                  { value: "40x", label: "More productivity" },
                  { value: "20%", label: "Faster delivery" },
                  { value: "20+", label: "Happy customers" },
                  { value: "2k+", label: "Downloads" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 sm:p-8">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </Section>

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center">
            <Heading as="h2" size="h2" className="mb-6 text-foreground">
              Ready to Get Started?
            </Heading>
            <Lead className="mb-8 max-w-2xl mx-auto text-foreground/85">
              Choose your platform and start your AI transformation journey today. No credit card required for trials.
            </Lead>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigate("/contact")}
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TryNow;
