import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users, ArrowRight, Zap, Heart, Globe } from "lucide-react";

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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 We're Hiring
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Shape the Future of <span className="text-primary">Enterprise AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join a world-class team of AI researchers and engineers building the next generation of intelligent systems that transform how businesses operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="values" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Quantum Intelligence?</h2>
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
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              💼 Open Roles
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Growing Team</h2>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 2px, transparent 2px)', backgroundSize: '60px 60px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              🌟 Always Hiring
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
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
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
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
