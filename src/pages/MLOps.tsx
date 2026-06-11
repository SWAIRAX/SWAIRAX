import { Button } from "@/components/ui/button";
import { MEETING_URL } from "@/utils/meeting";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import SectionDivider from "@/components/SectionDivider";
import { ArrowRight, Server, GitBranch, Monitor, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Heading, Lead, PageHero } from "@/components/ui/section";

const MLOps = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Model Deployment",
      description: "Seamless deployment of ML models to production environments with automated scaling."
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Version Control",
      description: "Track model versions, experiments, and data lineage for complete transparency."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring of model performance and data drift detection."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance for regulated industries."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <PageHero
        className="bg-card"
        title={<>Machine Learning + DevOps</>}
        description={<>Bridge the gap between data science and IT operations. Convert your data to business
              value by deploying your models into production with our MLOps expertise.</>}
        actions={
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">Deploy Your Models</a>
          </Button>
        }
      />

      {/* Problem Statement */}
      <Section>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Heading as="h2" size="h2" className="mb-6">The Last-Mile Problem</Heading>
            <Lead className="mb-8">
              Research shows that <span className="text-primary font-semibold">50-90% of AI models</span>
              are never commercialized because of deployment challenges. You have the data and the model,
              but still can't see the return on investment for your AI projects.
            </Lead>
          </div>
      </Section>

      {/* Tone-on-tone interlocking divider — bg-card surface with bg-background SVG so the maze shape is visible */}
      <SectionDivider variant="ring" flip className="-mb-1 w-full bg-card text-[hsl(var(--background))]" />

      {/* Features Section */}
      <Section bg="card">
          <div className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">Our MLOps Solutions</Heading>
            <Lead className="max-w-2xl mx-auto">
              Complete machine learning operations platform for enterprise-grade AI deployment
            </Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
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
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      {/* Benefits Section */}
      <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Heading as="h2" size="h2" className="mb-6">
                Transform Your AI Investment
              </Heading>
              <Lead className="mb-8">
                We practice Machine Learning Operations (MLOps) by bridging the gap between
                data and IT Ops teams. Our approach ensures your models deliver real business value.
              </Lead>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Faster time-to-market for AI solutions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Reduced operational complexity</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Improved model reliability and performance</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Scalable infrastructure for growing needs</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-secondary p-8 rounded-lg border">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <p className="text-sm text-muted-foreground">Faster Deployment</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
      </Section>

      {/* Divider attached as the end of the section above — bg-card SVG shapes draw a tinted maze on bg-background, marking the boundary into the plexus CTA */}
      <SectionDivider className="relative w-full bg-background text-[hsl(var(--card))]" />

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center">
            <Heading as="h2" size="h2" className="mb-6 text-foreground">
              Ready to Deploy Your AI Models?
            </Heading>
            <Lead className="mb-8 max-w-2xl mx-auto text-foreground/85">
              Let our MLOps experts help you bridge the gap between development and production.
            </Lead>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">Start MLOps Journey</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLOps;