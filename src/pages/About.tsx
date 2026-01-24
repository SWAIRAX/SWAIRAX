import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Users, Target, Eye, Award, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, SectionLead } from "@/components/typography";

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
      <Header />

      {/* Hero Section - Split Layout */}
      <section className="relative pt-24 pb-8 md:pt-18 md:pb-8 bg-background overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[280px] md:h-[300px] bg-gradient-to-b from-background via-background/90 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Text Content */}
            <ScrollReveal className="flex flex-col justify-center relative z-10 text-left">
              <SectionHeading className="text-left">
                <span className="text-foreground">Quantum </span>
                <span className="text-primary">Intelligence</span>
              </SectionHeading>

              <p className="text-base text-muted-foreground mb-8 max-w-3xl">
                We're an AI research and deployment company building innovative, ethical, and accessible AI solutions that empower businesses and individuals to unlock the full potential of their data.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Button
                  size="sm"
                  onClick={() => navigateToTop('/contact')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-9 sm:h-10 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base"
                >
                  Get Started
                </Button>
                {/* <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateToTop('/careers')}
                >
                  Join Our Team
                </Button> */}
              </div>
            </ScrollReveal>

            {/* Right Side - Image with Overlay Cards */}
            <ScrollReveal delay={200} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] lg:h-[450px] hidden md:block mt-6 lg:mt-10">
                <img
                  src="/uploads/TEAM.jpeg"
                  alt="Quantum Intelligence Team"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Stat Cards */}
                <div className="absolute top-48 right-4 space-y-3">
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-border/50 min-w-[150px]">
                    <div className="text-2xl font-bold text-primary mb-1">20+</div>
                    <div className="text-xs text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-border/50 min-w-[150px]">
                    <div className="text-2xl font-bold text-primary mb-1">09+</div>
                    <div className="text-xs text-muted-foreground">Team Members</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 space-y-3">
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-border/50 min-w-[150px]">
                    <div className="text-2xl font-bold text-primary mb-1">6+</div>
                    <div className="text-xs text-muted-foreground">Countries Served</div>
                  </div>
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-border/50 min-w-[150px]">
                    <div className="text-2xl font-bold text-primary mb-1">99%</div>
                    <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Our Mission</h2>
              <p className="text-base text-muted-foreground mb-3">
                  To democratize artificial intelligence by building innovative, ethical, and accessible AI solutions that empower businesses and individuals to unlock the full potential of their data.
                </p>
              <p className="text-sm text-muted-foreground">
                  We believe that AI should be a force for good, driving positive change across industries while maintaining the highest standards of ethics and transparency.
                </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Our Vision</h2>
              <p className="text-base text-muted-foreground mb-3">
                  We live in an exciting time when AI research and technology are delivering extraordinary advances.
                  In the coming years, AI — and ultimately artificial general intelligence (AGI) — has the potential to drive one of the greatest transformations in history.
                </p>
              <p className="text-sm text-muted-foreground">

We're a team of scientists, engineers, ethicists and more, working to build the next generation of AI systems safely and responsibly.              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16 bg-gradient-to-br from-card via-card/50 to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Our Values</h2>
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
                        className="p-0 text-white hover:text-red-400 hover:bg-transparent bg-transparent focus-visible:ring-0"
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
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Our Story</h2>
            </div>
            <div className="space-y-3 text-base text-muted-foreground">
                <p>
                  Founded in 2020 by a group of dreamers, builders, and researchers, Quantum Intelligence was born from a simple but powerful belief:
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


      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Join Our Journey
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
