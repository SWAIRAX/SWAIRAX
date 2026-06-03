import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { SEOSchema } from "@/components/SEOSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import Parallax from "@/components/Parallax";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Users, Target, Eye, Award, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/section";

const About = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const [expandedValues, setExpandedValues] = useState<{[key: string]: boolean}>({});

  const toggleValue = (valueId: string) => {
    setExpandedValues(prev => ({
      ...prev,
      [valueId]: !prev[valueId]
    }));
  };

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible with AI and data science."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusive Culture",
      description: "We believe diverse perspectives drive better solutions and innovation."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Transparency",
      description: "We maintain open communication and ethical practices in all our work."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project and interaction."
    }
  ];

  // const team = [
  //   {
  //     name: "Dr. Sarah Chen",
  //     role: "Chief Technology Officer",
  //     bio: "Leading AI researcher with 15+ years experience in machine learning and computer vision.",
  //     image: "SC"
  //   },
  //   {
  //     name: "Marcus Johnson",
  //     role: "Head of Data Engineering",
  //     bio: "Expert in building scalable data infrastructure and MLOps pipelines.",
  //     image: "MJ"
  //   },
  //   {
  //     name: "Dr. Amira Hassan",
  //     role: "AI Research Director",
  //     bio: "PhD in Natural Language Processing, specializing in large language models.",
  //     image: "AH"
  //   },
  //   {
  //     name: "David Park",
  //     role: "Business Strategy Lead",
  //     bio: "Former consultant helping enterprises adopt AI solutions strategically.",
  //     image: "DP"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-background">
      <SEOSchema
        breadcrumbs={[
          { name: "Home", url: "https://quantumintelligence.co.tz" },
          { name: "About", url: "https://quantumintelligence.co.tz/about" }
        ]}
      />
      <Header />

      {/* Hero — research-page style: the team photo as a full-bleed background */}
      <section className="relative overflow-hidden text-white pt-20 pb-4 sm:pt-24 sm:pb-5 lg:pt-28 lg:pb-6">
        {/* Team photo background — focal point just below the top — drifts on scroll for depth */}
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div
            className="absolute inset-0 bg-cover bg-[center_22%]"
            style={{ backgroundImage: "url('/uploads/TEAM.jpeg')" }}
          />
        </Parallax>
        {/* Light brand-red tint + soft dark gradient so the white type stays legible */}
        <div className="pointer-events-none absolute inset-0 bg-[#b3210a]/25 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/5" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:ml-[28%]">
            <h1 className="pl-6 text-5xl font-light leading-[1.03] tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              Solving intelligence to benefit <span className="italic">humanity.</span>
            </h1>
            <p className="mt-6 pl-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              We&apos;re an AI research and deployment company building innovative, ethical, and
              accessible AI — so businesses and people can unlock the full potential of their data.
            </p>

            <div className="relative mt-9 inline-flex">
              {/* passionlabs "button_outlines" — white lines emanate from the button edges */}
              <span className="pointer-events-none absolute top-1/2 right-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute top-1/2 left-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute bottom-full left-0 h-screen w-px bg-white/80" />
              <span className="pointer-events-none absolute top-full left-0 h-[200vh] w-px bg-white/80" />
              <button
                onClick={() => navigateToTop("/contact")}
                className="group relative z-10 inline-flex items-center gap-3 py-3 pr-4 text-sm font-semibold uppercase tracking-[0.2em] text-white drop-shadow-sm"
              >
                <span className="h-3 w-3 rounded-full bg-[#eb0000] transition-transform duration-300 group-hover:scale-150" />
                Get in touch
              </button>
            </div>

            {/* Stats — tucked into the hero with thin accent rules */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 pl-6">
              {[
                { v: "20+", l: "Projects Delivered" },
                { v: "09+", l: "Team Members" },
                { v: "99%", l: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-[#eb0000] pl-4">
                  <div className="text-3xl font-light leading-none text-white sm:text-4xl">{s.v}</div>
                  <div className="mt-1.5 text-xs uppercase tracking-wide text-white/65">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — red block */}
      <section className="relative py-10 sm:py-12 lg:py-14 overflow-hidden bg-[#b3210a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 max-w-6xl mx-auto">
            <ScrollReveal>
              <Heading as="h2" size="h2" className="mb-4 text-white">Our Mission</Heading>
              <p className="text-base text-white/90 mb-3">
                  To democratize artificial intelligence by building innovative, ethical, and accessible AI solutions that empower businesses and individuals to unlock the full potential of their data.
                </p>
              <p className="text-sm text-white/75">
                  We believe that AI should be a force for good, driving positive change across industries while maintaining the highest standards of ethics and transparency.
                </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Heading as="h2" size="h2" className="mb-4 text-white">Our Vision</Heading>
              <p className="text-base text-white/90 mb-3">
                  We live in an exciting time when AI research and technology are delivering extraordinary advances.
                  In the coming years, AI — and ultimately artificial general intelligence (AGI) — has the potential to drive one of the greatest transformations in history.
                </p>
              <p className="text-sm text-white/75">

We're a team of scientists, engineers, ethicists and more, working to build the next generation of AI systems safely and responsibly.              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interlocking divider — white surface with red data-matrix teeth */}
      <SectionDivider variant="ring" flip className="-mt-1 -mb-1 w-full bg-card text-[#b3210a]" />

      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card via-card/50 to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4 text-foreground">Our Values</Heading>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              By solving some of the hardest scientific and engineering challenges of our time, we're working to create breakthrough technologies that could advance science, transform work, serve diverse communities — and improve billions of people's lives.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group relative bg-gradient-to-br from-background to-card/50 border border-border/50 hover:border-primary/50 text-center overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors">{value.description}</p>

                  {/* <Collapsible open={expandedValues[value.title]} onOpenChange={() => toggleValue(value.title)}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 text-white hover:text-primary hover:bg-transparent bg-transparent focus-visible:ring-0"
                        aria-expanded={expandedValues[value.title]}
                      >
                        Learn More
                        {expandedValues[value.title] ? (
                          <ChevronUp className="ml-1 h-3 w-3" />
                        ) : (
                          <ChevronDown className="ml-1 h-3 w-3" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="animate-accordion-down overflow-hidden">
                      <div className="bg-gradient-to-br from-card/80 to-primary/5 p-4 rounded-xl border border-primary/20 mt-3 backdrop-blur-sm shadow-lg">
                        {value.title === "Innovation First" && (
                          <div className="text-left text-base space-y-2">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Research-driven AI development</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Cutting-edge technology adoption</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Continuous learning culture</span>
                            </div>
                          </div>
                        )}
                        {value.title === "Inclusive Culture" && (
                          <div className="text-left text-base space-y-2">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Diverse team of experts</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Equal opportunity workplace</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Global perspective on AI ethics</span>
                            </div>
                          </div>
                        )}
                        {value.title === "Transparency" && (
                          <div className="text-left text-base space-y-2">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Open source contributions</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Ethical AI practices</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Clear communication standards</span>
                            </div>
                          </div>
                        )}
                        {value.title === "Excellence" && (
                          <div className="text-left text-base space-y-2">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Quality-first approach</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Continuous improvement</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Client success focus</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Heading as="h2" size="h2" className="mb-4 text-foreground">Our Story</Heading>
            </div>
            <div className="space-y-3 text-base text-muted-foreground">
                <p>
                  Founded in 2024 by a group of dreamers, builders, and researchers, Quantum Intelligence was born from a simple but powerful belief:
                  Artificial intelligence should serve humanity—not just optimize it.

                </p>
                <p>
                  We started small—with curiosity, conviction, and a deep respect for what AI could become. Not just a tool for efficiency, but a way to solve meaningful problems, spark new ideas, and build a better future.
                  As we grew, so did our purpose. We listened more. Learned faster. Built with intention. And always stayed close to the people behind the data—the teams, the communities, the individuals who inspire everything we do.
                </p>
                <p>
                  Today, Quantum Intelligence is shaped by that same spirit.
We’re here to create, to collaborate, and to make every interaction—every insight—count.

                </p>
                <p>
                Because for us, it’s not just about what AI can do.
It’s about what it can do for you.
                </p>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* CTA — glass card wraps the content so it stays readable on top of
          the HeroBackdrop's red plexus canvas. */}
      <section className="relative overflow-hidden pb-40 sm:pb-44 lg:pb-48 bg-background">
        <HeroBackdrop />
        {/* Data-matrix divider — teeth match the section above (bg-background); transparent backing so the plexus shows through the gaps */}
        <SectionDivider variant="matrix" className="relative z-10 w-full text-[hsl(var(--background))]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center">
            <Heading as="h2" size="h2" className="mb-4 text-foreground">
              Join Our Journey
            </Heading>
            <p className="text-base md:text-lg text-foreground/85 mb-8 max-w-2xl mx-auto">
              Ready to be part of the AI revolution? Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:justify-center gap-4">
              {/* <Button
                size="lg"
                onClick={() => navigateToTop('/careers')}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 h-12 sm:h-14"
              >
                Explore Careers
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button> */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigateToTop('/contact')}
                className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 h-12 sm:h-14"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
