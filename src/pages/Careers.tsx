import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import { MapPin, Clock, Users, ArrowRight, Zap, Heart, Globe, Briefcase } from "lucide-react";
import { Section, Eyebrow, Heading, Lead, PageHero } from "@/components/ui/section";
import { Link } from "react-router-dom";

const Careers = () => {
  // No open roles right now — render the empty state below.
  const openPositions: {
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
  }[] = [];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "🚀 Build Real Products",
      description: "Work on products used by real people across Tanzania"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "🌍 Mission-Driven",
      description: "Our work creates real economic impact in Africa"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "🧠 Grow Fast",
      description: "Work directly with founders and learn across disciplines"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and data science"
    },
    {
      title: "Inclusive Excellence",
      description: "We believe diverse perspectives drive better solutions"
    },
    {
      title: "Client Impact",
      description: "We measure success by the value we create for our clients"
    },
    {
      title: "Continuous Learning",
      description: "We invest in growth and learning for every team member"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <PageHero
        align="center"
        background={
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
          </>
        }
        title={<>Join SWAIRAX</>}
        description="Help us build Africa's digital future."
        actions={
          <>
            <Button
              size="lg"
              onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 text-primary hover:bg-primary/5 px-8 py-4 text-lg"
              onClick={() => document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Culture
            </Button>
          </>
        }
      />

      {/* Company Values */}
      <Section id="values" bg="card">
          <div className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-6">Our Core Values</Heading>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles drive our innovation and shape how we collaborate, learn, and create impact together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      {/* Benefits Section */}
      <Section>
          <div className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-6">Why Join Us</Heading>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a team where innovation meets impact. We build products that matter and grow together fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
      </Section>

      {/* Open Positions */}
      <Section id="positions" bg="card">
          <div className="text-center mb-16">
            <Eyebrow variant="pill" icon={<Briefcase className="h-4 w-4" />} className="mb-6">Open Roles</Eyebrow>
            <Heading as="h2" size="h2" className="mb-6">Open Positions</Heading>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.length > 0 ? (
              openPositions.map((position, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold">{position.title}</h3>
                          <Badge variant="secondary">{position.department}</Badge>
                        </div>

                        <p className="text-muted-foreground mb-4">{position.description}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, reqIndex) => (
                            <Badge key={reqIndex} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() =>
                          window.open(
                            'mailto:communications@swairax.co.tz?subject=Work Application&body=Please provide your details and attach your CV (PDF or DOCX) to this email.',
                            '_blank'
                          )
                        }
                      >
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="bg-card border-border">
                <CardContent className="p-8 md:p-10 text-center">
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                    We don't have open positions right now — but we're always looking for talented people. Send us your CV and we'll be in touch.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link to="/contact?subject=Open%20Application">
                      Send Open Application →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
      </Section>

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="pt-20 pb-40 sm:pb-44 bg-background relative overflow-hidden">
        <HeroBackdrop />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" /> Always Hiring
            </div>
            <Heading as="h2" size="h2" className="mb-6 text-foreground">
              Ready to Make an Impact?
            </Heading>
            <p className="text-lg md:text-xl text-foreground/85 mb-8 max-w-2xl mx-auto leading-relaxed">
              Even if you don't see a perfect match above, we're always interested in connecting with talented individuals who share our vision for Africa's digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/contact?subject=Open%20Application">
                  Send Open Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground/50 px-8 py-4 text-lg"
              >
                <Link to="/contact">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
