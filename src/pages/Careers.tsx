import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import { MapPin, Clock, Users, ArrowRight, Zap, Heart, Globe, Briefcase, Sparkles } from "lucide-react";
import { Section, Eyebrow, Heading, Lead, PageHero } from "@/components/ui/section";

const Careers = () => {
  const openPositions = [
    {
      title: "AI Research Scientist",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      description: "Lead cutting-edge research in generative AI, computer vision, and natural language processing. Publish papers and develop novel algorithms.",
      requirements: ["PhD in AI/ML/CS", "5+ years research experience", "Strong publication record", "Python/PyTorch expertise"]
    },
    {
      title: "Senior MLOps Engineer",
      department: "Engineering",
      location: "Dar es Salaam / Remote",
      type: "Full-time",
      description: "Design and implement production ML pipelines, model deployment, and monitoring systems for enterprise-scale AI solutions.",
      requirements: ["Kubernetes/Docker", "AWS/Azure/GCP", "Python/Go", "MLflow/Kubeflow experience"]
    },
    {
      title: "Computer Vision Engineer",
      department: "AI Development",
      location: "Remote",
      type: "Full-time",
      description: "Develop advanced computer vision models for medical imaging, autonomous systems, and industrial applications.",
      requirements: ["OpenCV/PyTorch", "CNN architectures", "Medical imaging experience", "3+ years CV experience"]
    },
    {
      title: "NLP Engineer",
      department: "AI Development",
      location: "Dar es Salaam / Remote",
      type: "Full-time",
      description: "Build and deploy large language models, chatbots, and text analysis systems for enterprise applications.",
      requirements: ["Transformers/Hugging Face", "BERT/GPT models", "Fine-tuning expertise", "Python/Flask/FastAPI"]
    },
    {
      title: "Data Engineering Lead",
      department: "Data Platform",
      location: "Remote",
      type: "Full-time",
      description: "Architect and build scalable data pipelines, lakes, and warehouses to support AI model training and inference.",
      requirements: ["Apache Spark", "Airflow/Presto", "SQL/NoSQL databases", "Data modeling expertise"]
    },
    {
      title: "AI Product Manager",
      department: "Product",
      location: "Dar es Salaam / Remote",
      type: "Full-time",
      description: "Define product strategy for AI solutions, work with engineering teams, and drive product-market fit for enterprise clients.",
      requirements: ["5+ years PM experience", "Technical background", "AI/ML knowledge", "Agile/Scrum expertise"]
    },
    {
      title: "Solutions Architect",
      department: "Technical Sales",
      location: "Remote",
      type: "Full-time",
      description: "Design comprehensive AI solutions for enterprise clients, provide technical leadership, and drive successful implementations.",
      requirements: ["Enterprise architecture", "AI/ML consulting", "Cloud platforms", "Client-facing experience"]
    },
    {
      title: "Frontend Developer (React)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful, responsive web interfaces for AI-powered applications and data visualization dashboards.",
      requirements: ["React/TypeScript", "Next.js", "D3.js/Chart.js", "UI/UX design sensibility"]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Remote Work",
      description: "Work from anywhere in the world with flexible schedules and async-first culture"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "AI Innovation Lab",
      description: "Access to cutting-edge GPUs, unlimited cloud credits, and research publication opportunities"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Premium Benefits",
      description: "Health insurance, mental wellness support, unlimited PTO, and professional development budget"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Network",
      description: "Collaborate with PhD researchers, industry leaders, and AI pioneers from top universities"
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
        title={<>Shape the Future of Enterprise AI</>}
        description="Join a world-class team of AI researchers and engineers building the next generation of intelligent systems that transform how businesses operate."
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
            <Heading as="h2" size="h2" className="mb-6">Why Choose Quantum Intelligence?</Heading>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a team where innovation meets impact. We provide world-class resources, mentorship, and opportunities to work on projects that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <Heading as="h2" size="h2" className="mb-6">Join Our Growing Team</Heading>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're looking for exceptional talent to help us build the future of AI. Each role offers the opportunity to work on groundbreaking projects with global impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
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
  className="bg-primary hover:bg-primary/90 text-primary-foreground"  onClick={() =>
    window.open(
      'mailto:communications@quantumintelligence.co.tz?subject=Work Application&body=Please provide your details and attach your CV (PDF or DOCX) to this email.',
      '_blank'
    )
  }
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="pt-20 pb-40 sm:pb-44 bg-background relative overflow-hidden">
        <HeroBackdrop />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" /> Always Hiring
            </div>
            <Heading as="h2" size="h2" className="mb-6 text-foreground">
              Ready to Make an Impact?
            </Heading>
            <p className="text-lg md:text-xl text-foreground/85 mb-8 max-w-2xl mx-auto leading-relaxed">
              Even if you don't see a perfect match above, we're always interested in connecting with talented individuals who share our vision for AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  window.open(
                    'mailto:communications@quantumintelligence.co.tz?subject=Career Opportunity&body=Please provide your details and attach your CV (PDF or DOCX) to this email.',
                    '_blank'
                  )
                }
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground/50 px-8 py-4 text-lg"
                onClick={() =>
                  window.open(
                    'mailto:communications@quantumintelligence.co.tz?subject=General Inquiry&body=I\'d like to learn more about career opportunities at Quantum Intelligence.',
                    '_blank'
                  )
                }
              >
                Learn More
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
