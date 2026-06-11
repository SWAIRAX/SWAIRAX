import { Button } from "@/components/ui/button";
import { MEETING_URL } from "@/utils/meeting";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import SectionDivider from "@/components/SectionDivider";
import { ArrowRight, Brain, Code, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Heading, Lead, PageHero } from "@/components/ui/section";

const AIStudio = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Computer Vision",
      description: "Advanced image recognition, object detection, and visual analytics solutions."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment recognition, and language understanding systems."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Generative AI",
      description: "Large language models, content generation, and creative AI applications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <PageHero
        className="bg-card"
        title={<>AI Studio & Ideas</>}
        description={<>Get customized AI powered solutions for research or business challenges.
              Our expert team combines data scientists, developers, and business strategists
              to deliver innovative solutions.</>}
        actions={
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">Start Your Project</a>
          </Button>
        }
      />

      {/* Services Section */}
      <Section>
          <div className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">Our AI Expertise</Heading>
            <Lead className="max-w-2xl mx-auto">
              We specialize in cutting-edge AI technologies to solve complex business challenges
            </Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <Card
                key={index}
                className="solution-card bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="card-icon rounded-xl bg-white/10 p-3 shadow-inner text-primary">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      {/* Tone-on-tone interlocking divider — bg-card surface with bg-background SVG so the maze shape is visible */}
      <SectionDivider variant="ring" flip className="-mb-1 w-full bg-card text-[hsl(var(--background))]" />

      {/* Benefits Section */}
      <Section bg="card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Heading as="h2" size="h2" className="mb-6">
                Why Choose Our AI Studio?
              </Heading>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Reduce development timeline by up to 40%</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Cost-effective solutions with faster delivery</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>End-to-end support from concept to deployment</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-secondary p-8 rounded-lg border">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Successful AI Projects Delivered</p>
              </div>
            </div>
          </div>
      </Section>

      {/* Divider attached as the end of the bg-card section above — bg-background SVG shapes punch down into the plexus CTA */}
      <SectionDivider className="relative w-full bg-card text-[hsl(var(--background))]" />

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center">
            <Heading as="h2" size="h2" className="mb-6 text-foreground">
              Ready to Transform Your Business with AI?
            </Heading>
            <Lead className="mb-8 max-w-2xl mx-auto text-foreground/85">
              Let's discuss your project and explore how our AI solutions can drive your success.
            </Lead>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">Get Started Today</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIStudio;