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
      title: "Innovation",
      description: "We push boundaries and embrace new technologies."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Integrity",
      description: "We build trust through transparency and honesty."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Impact",
      description: "Every solution we build must create real-world value."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We never compromise on quality."
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
          { name: "Home", url: "https://swairax.com" },
          { name: "About", url: "https://swairax.com/about" }
        ]}
      />
      <Header />

      {/* Hero — Sectors-page style: dotted red pattern, light editorial headline */}
      <section className="relative overflow-hidden text-white pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
        {/* dotted red pattern background — drifts on scroll for depth */}
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgb(0,0,0)",
              backgroundSize: "40px 40px",
              backgroundImage:
                "linear-gradient(45deg, rgba(214,46,10,0.35), transparent 40%), linear-gradient(-90deg, rgba(214,46,10,0.35), transparent 20%)",
            }}
          />
        </Parallax>
        {/* brand-red glow + dark gradient so the white type stays legible */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(179,33,10,0.5),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:ml-[32%]">
            <p className="mb-6 pl-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              About SWAIRAX
            </p>
            <h1 className="pl-6 text-5xl font-light leading-[1.03] tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              A technology company <span className="italic">born in Tanzania.</span>
            </h1>
            <div className="relative mt-10 inline-flex">
              {/* crosshair lines emanating from the button edges */}
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
          </div>
        </div>

        {/* Transparent brand graphic — small, anchored to the left, blends into the dark hero */}
        <img
          src="/SWAY.png"
          alt="SWAIRAX"
          className="pointer-events-none absolute left-4 top-1/2 z-10 hidden w-44 -translate-y-1/2 object-contain sm:left-10 lg:left-16 lg:block lg:w-60 xl:w-64"
        />
      </section>

      {/* Mission & Vision — red block */}
      <section className="relative py-10 sm:py-12 lg:py-14 overflow-hidden bg-[#b3210a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Target className="h-5 w-5" />
                </div>
                <Heading as="h2" size="h2" className="text-white">Our Mission</Heading>
              </div>
              <p className="text-base text-white/90 mb-3">
                  To bridge the technology gap in Africa by building innovative, locally relevant digital solutions that empower businesses and communities.
                </p>
              <p className="text-sm text-white/75">
                  We design for the realities of our market — mobile money, local languages, and infrastructure on the ground — so technology works for the people who use it.
                </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Eye className="h-5 w-5" />
                </div>
                <Heading as="h2" size="h2" className="text-white">Our Vision</Heading>
              </div>
              <p className="text-base text-white/90 mb-3">
                  To become Africa's most trusted technology company — a place where world-class innovation meets local impact.
                </p>
              <p className="text-sm text-white/75">
                  We're a team of engineers, designers, and builders working to deliver full-stack expertise, from AI to mobile apps, for businesses across the continent.              </p>
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
            <Heading as="h2" size="h2" className="mb-4 text-foreground">Core Values</Heading>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              By solving real problems with an Africa-first approach, we build technology that creates lasting value — for the businesses we serve and the communities they belong to.
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
                  SWAIRAX was founded with a simple but powerful belief: that Africa shouldn't just
                  consume technology built elsewhere — it should build its own. Based in Dar es Salaam,
                  Tanzania 🇹🇿, we exist to bridge the technology gap in Africa by building innovative,
                  locally relevant digital solutions for businesses and communities across Tanzania and beyond.
                </p>
                <p>
                  Everything we build starts with an Africa-first approach. That means designing for the
                  realities of our market — mobile money, local languages, and the infrastructure people
                  actually use — instead of forcing global templates onto local problems. We bring
                  full-stack expertise to every project, from AI and data science to web and mobile apps.
                </p>
                <p>
                  We're still early in our journey, but our purpose is clear: to make every solution we
                  ship create real-world value. Because for us, technology isn't the goal — what it does
                  for the people who use it is.
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
              Want to Work With Us?
            </Heading>
            <p className="text-base md:text-lg text-foreground/85 mb-8 max-w-2xl mx-auto">
              Let's build Africa's digital future together. Reach out and tell us what you're building.
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
                Get in Touch
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
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
