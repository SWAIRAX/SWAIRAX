import { Button } from "@/components/ui/button";
import { MEETING_URL } from "@/utils/meeting";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import SectionDivider from "@/components/SectionDivider";
import { ArrowRight, BarChart3, TrendingUp, Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Heading, Lead, PageHero } from "@/components/ui/section";

const BusinessAnalysis = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Visualization",
      description: "Interactive dashboards and charts that make complex data easy to understand."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to anticipate trends and business opportunities."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Pattern Recognition",
      description: "Identify hidden patterns and correlations in your business data."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Insights",
      description: "Actionable recommendations to drive business growth and efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <PageHero
        className="bg-card"
        title={<>Turning Data into Opportunity</>}
        description={<>A comprehensive SaaS platform for data analysis and visualization with AI.
              Simply drag and drop your dataset and discover opportunities in minutes.</>}
        actions={
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">Start Free Analysis</a>
          </Button>
        }
      />

      {/* Value Proposition */}
      <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Heading as="h2" size="h2" className="mb-6">
                Understand Your Business Better
              </Heading>
              <Lead className="mb-8">
                In the digital age of data, we can quickly understand human behavior,
                business needs, and market dynamics. Our AI-powered analysis helps you
                see opportunities hidden in your data.
              </Lead>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-3" />
                  <span>Drag and drop datasets in minutes</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-3" />
                  <span>AI-powered insights and recommendations</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-3" />
                  <span>Real-time visualization and reporting</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-secondary p-8 rounded-lg border">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-primary/20 rounded border border-primary/30 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary/60 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </Section>

      {/* Tone-on-tone interlocking divider — bg-card surface with bg-background SVG so the maze shape is visible */}
      <SectionDivider variant="ring" flip className="-mb-1 w-full bg-card text-[hsl(var(--background))]" />

      {/* Features Section */}
      <Section bg="card">
          <div className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">Powerful Analytics Features</Heading>
            <Lead className="max-w-2xl mx-auto">
              Comprehensive tools to analyze, visualize, and extract insights from your data
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
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h2" size="h2" className="mb-6">
              Why Choose Our Business Analysis Platform?
            </Heading>
            <Lead className="mb-12">
              Get started for free and scale as your business grows. No technical expertise required.
            </Lead>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Free</div>
                <p className="text-muted-foreground">Start with our free tier</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1 Min</div>
                <p className="text-muted-foreground">Upload and analyze instantly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">AI-Powered</div>
                <p className="text-muted-foreground">Smart insights automatically</p>
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
            Ready to Discover Hidden Opportunities?
          </Heading>
          <Lead className="mb-8 max-w-2xl mx-auto text-foreground/85">
            Start analyzing your data today and unlock insights that drive business growth.
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">Try Free Demo</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
            </Button>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAnalysis;