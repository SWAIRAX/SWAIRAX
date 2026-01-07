import React from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Shield, Users, FileText, ExternalLink } from "lucide-react";

const Research = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();

  const archivedSolutions = [
    {
      title: "SURASOFT",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "AI-powered security SaaS with biometric verification using camera networks. Surasoft analyzed video footage in existing camera infrastructure, offering affordable biometric verification and instant alerts to prevent crimes for businesses and homes.",
      keyFeatures: [
        "Real-time video analysis",
        "Biometric verification",
        "Instant crime prevention alerts",
        "Affordable security solution",
        "Integration with existing cameras"
      ],
      tags: ["SaaS", "Computer Vision"],
      icon: <Shield className="w-6 h-6" />,
      demoLink: "#",
      caseStudyLink: "#"
    },
    {
      title: "AI Proctoring",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "Remote integrity solution with intelligent student and interviewee monitoring. A comprehensive proctoring system powered by artificial intelligence, designed to monitor students and interviewees for safe and credible online assessments.",
      keyFeatures: [
        "Real-time behavior monitoring",
        "Automated suspicious activity detection",
        "Secure online assessments",
        "Integration with learning platforms",
        "Detailed reporting and analytics"
      ],
      tags: ["Education", "AI Monitoring", "SaaS"],
      icon: <Users className="w-6 h-6" />,
      demoLink: "#",
      caseStudyLink: "#"
    },
    {
      title: "Askari LLM",
      category: "Self-hosted",
      status: "Retired",
      launchDate: "2023",
      description: "Python-based policy guardrails package for customizing LLM behavior and compliance. A comprehensive package designed to enforce policy guardrails on user input, particularly in the context of language models and other AI systems, ensuring interactions remain within defined ethical and operational boundaries.",
      keyFeatures: [
        "Policy enforcement for LLMs",
        "Customizable compliance rules",
        "Easy Python integration",
        "Ethical AI boundaries",
        "Real-time content filtering"
      ],
      tags: ["LLM Guardrails"],
      icon: <FileText className="w-6 h-6" />,
      demoLink: "#",
      caseStudyLink: "#"
    }
  ];

  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const allTags = Array.from(new Set(archivedSolutions.flatMap(solution => solution.tags)));

  const filteredSolutions = selectedTags.length === 0
    ? archivedSolutions
    : archivedSolutions.filter(solution =>
        selectedTags.some(tag => solution.tags.includes(tag))
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[url('/uploads/Hero%20Illustration%20F1.svg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 text-xs font-medium">
              Research & Innovation
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Research
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Explore a selection of our recent research on some of the most complex and interesting challenges in AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                size="lg"
                onClick={() => navigateToTop('/services')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View Current Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigateToTop('/contact')}
              >
                Discuss Legacy Migration
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <span className="text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase">Filter</span>
            <Button
              size="sm"
              variant={selectedTags.length === 0 ? "default" : "outline"}
              onClick={() => setSelectedTags([])}
              className="text-xs px-4 py-2"
            >
              All Products
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                size="sm"
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                onClick={() => {
                  if (selectedTags.includes(tag)) {
                    setSelectedTags(selectedTags.filter(t => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
                className="text-xs px-4 py-2"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Archived Solutions Grid */}
      <section className="relative py-12 overflow-hidden -mt-4">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-primary/30 bg-primary/5">
                Research
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Impossible? Let's see.</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether we're shaping the future of sustainability, or optimizing algorithms,
              or even exploring epidemiological studies, Our Research strives to continuously progress science,
              advance society.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredSolutions.map((solution, index) => (
              <Card key={index} className="group relative research-card bg-gradient-to-br from-card to-card/50 border border-primary/20 hover:border-primary/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/10 to-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-background/20 via-background/20 to-background/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                        {solution.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">{solution.title}</CardTitle>
                        <div className="flex items-center space-x-1 mt-1">
                          <Badge variant="secondary" className="text-xs">{solution.category}</Badge>
                          <Badge variant="outline" className="text-muted-foreground text-xs">
                            <Calendar className="w-2 h-2 mr-1" />
                            {solution.launchDate}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge variant="destructive" className="bg-red-500/20 text-red-600 border-red-200 text-xs">
                      {solution.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors">
                    {solution.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-1 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {solution.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-1 pt-3 border-t border-border/50">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigateToTop(`/research/${solution.title.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="flex-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Evolution Timeline */}
{/* <section className="py-20 bg-card">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4">Our Innovation Journey</h2>
<p className="text-xl text-muted-foreground">
From security solutions to advanced AI platforms - our evolution continues
</p>
</div>

<div className="max-w-4xl mx-auto">
<div className="relative">
<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

<div className="space-y-12">
<div className="relative flex items-center">
<div className="w-1/2 pr-8 text-right">
<h3 className="text-xl font-bold">2022</h3>
<p className="text-muted-foreground">SURASOFT & AI Proctoring Launch</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8"></div>
</div>

<div className="relative flex items-center">
<div className="w-1/2 pr-8"></div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8">
<h3 className="text-xl font-bold">2023</h3>
<p className="text-muted-foreground">Askari LLM Development</p>
</div>
</div>

<div className="relative flex items-center">
<div className="w-1/2 pr-8 text-right">
<h3 className="text-xl font-bold">2024</h3>
<p className="text-muted-foreground">New Solution Framework Launch</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8"></div>
</div>
</div>
</div>
</div>
</div>
</section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready for the Next Generation?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our current cutting-edge AI solutions built on years of innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateToTop('/services')}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Current Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigateToTop('/contact')}
                className="px-8 py-6 text-base font-semibold border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                Discuss Migration Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
