import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Award, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, SectionLead } from "@/components/typography";

const About = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();

  const values = [
    {
      icon: <Target className="h-7 w-7" />,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible with AI and data science."
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Inclusive Culture",
      description: "We believe diverse perspectives drive better solutions and innovation."
    },
    {
      icon: <Eye className="h-7 w-7" />,
      title: "Transparency",
      description: "We maintain open communication and ethical practices in all our work."
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: "Excellence",
      description: "We strive for excellence in every project and interaction."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-28 pb-12 lg:pb-16 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-muted/5" />
        <div className="absolute -left-20 top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-muted/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Side - Text Content */}
            <ScrollReveal className="flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4 text-xs font-medium border-primary/30 bg-primary/5">
                About Us
              </Badge>
              <SectionHeading className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                <span className="text-foreground">Quantum </span>
                <span className="text-primary">Intelligence</span>
              </SectionHeading>

              <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                We're an AI research and deployment company building innovative, ethical, and accessible AI solutions that empower businesses and individuals to unlock the full potential of their data.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  onClick={() => navigateToTop('/contact')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>

            {/* Right Side - Image with Overlay Cards */}
            <ScrollReveal delay={200} className="relative hidden md:block">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 h-[400px] lg:h-[480px]">
                <img
                  src="/uploads/TEAM.jpeg"
                  alt="Quantum Intelligence Team"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Stat Cards */}
                <div className="absolute top-6 right-6 space-y-3">
                  <Card className="bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl">
                    <CardContent className="p-4">
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">20+</div>
                      <div className="text-xs text-muted-foreground">Projects Delivered</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl">
                    <CardContent className="p-4">
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">09+</div>
                      <div className="text-xs text-muted-foreground">Team Members</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute bottom-6 left-6 space-y-3">
                  <Card className="bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl">
                    <CardContent className="p-4">
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">6+</div>
                      <div className="text-xs text-muted-foreground">Countries Served</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl">
                    <CardContent className="p-4">
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">99%</div>
                      <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-muted/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            <ScrollReveal>
              <Card className="h-full border border-border/50 hover:border-primary/30 bg-gradient-to-br from-card via-card/80 to-background shadow-lg hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                  <p className="text-base lg:text-lg text-muted-foreground mb-4 leading-relaxed">
                    To democratize artificial intelligence by building innovative, ethical, and accessible AI solutions that empower businesses and individuals to unlock the full potential of their data.
                  </p>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    We believe that AI should be a force for good, driving positive change across industries while maintaining the highest standards of ethics and transparency.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <Card className="h-full border border-border/50 hover:border-primary/30 bg-gradient-to-br from-card via-card/80 to-background shadow-lg hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                  <p className="text-base lg:text-lg text-muted-foreground mb-4 leading-relaxed">
                    We live in an exciting time when AI research and technology are delivering extraordinary advances. In the coming years, AI — and ultimately artificial general intelligence (AGI) — has the potential to drive one of the greatest transformations in history.
                  </p>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    We're a team of scientists, engineers, ethicists and more, working to build the next generation of AI systems safely and responsibly.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-card via-card/50 to-background overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-muted/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              By solving some of the hardest scientific and engineering challenges of our time, we're working to create breakthrough technologies that could advance science, transform work, serve diverse communities — and improve billions of people's lives.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <Card
                  className="group relative bg-gradient-to-br from-background to-card/50 border border-border/50 hover:border-primary/50 text-center overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-6 lg:p-8 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-primary/10">
                      {value.icon}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Our Story
              </h2>
            </div>
            
            <Card className="border border-border/50 bg-gradient-to-br from-card via-card/80 to-background shadow-lg">
              <CardContent className="p-8 lg:p-10 space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2024 by a group of dreamers, builders, and researchers, Quantum Intelligence was born from a simple but powerful belief: Artificial intelligence should serve humanity—not just optimize it.
                </p>
                <p>
                  We started small—with curiosity, conviction, and a deep respect for what AI could become. Not just a tool for efficiency, but a way to solve meaningful problems, spark new ideas, and build a better future. As we grew, so did our purpose. We listened more. Learned faster. Built with intention. And always stayed close to the people behind the data—the teams, the communities, the individuals who inspire everything we do.
                </p>
                <p>
                  Today, Quantum Intelligence works across sectors—from health to finance, education to public systems—with the same spirit we started with: honest collaboration, ethical responsibility, and a relentless drive to turn possibility into reality.
                </p>
                <p className="text-primary font-medium">
                  We're not just building AI. We're building what we believe the future of intelligence should look like—trustworthy, inclusive, and endlessly curious.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-card via-card/80 to-background border border-primary/20 shadow-2xl shadow-primary/5 p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with us to unlock the power of AI and data science for your organization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => navigateToTop('/contact')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigateToTop('/services')}
                  className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-6 text-base font-semibold transition-all duration-300"
                >
                  Explore Services
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;