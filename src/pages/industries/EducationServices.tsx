import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Brain,
  BookOpen,
  Users,
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const EducationServices = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  const solutions = [
    {
      title: "Adaptive Learning Platforms",
      description: "Personalized learning experiences that adapt to individual student needs and pace",
      icon: Target,
      features: ["Personalized Content", "Learning Analytics", "Progress Tracking"]
    },
    {
      title: "AI Tutoring Systems",
      description: "Intelligent virtual tutors providing 24/7 support and personalized instruction",
      icon: Brain,
      features: ["Virtual Tutors", "Instant Feedback", "Concept Reinforcement"]
    },
    {
      title: "Automated Grading",
      description: "Advanced AI systems for efficient and consistent assessment of student work",
      icon: BookOpen,
      features: ["Essay Grading", "Plagiarism Detection", "Rubric-based Assessment"]
    },
    {
      title: "Student Analytics",
      description: "Comprehensive analytics to track student performance and predict outcomes",
      icon: Users,
      features: ["Performance Insights", "Risk Identification", "Intervention Recommendations"]
    }
  ];

  const caseStudies = [
    {
      title: "University Learning Platform",
      result: "35% improvement in student outcomes",
      description: "Implemented adaptive learning system for a major university with 10,000+ students"
    },
    {
      title: "K-12 Assessment System",
      result: "80% reduction in grading time",
      description: "Deployed AI-powered grading system across 50+ schools in the district"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-primary/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>

            <Badge variant="outline" className="mb-3 text-xs">
              Education Services
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Everything that involves
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Learning and Students</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
              Transform education with AI-powered adaptive learning platforms, intelligent tutoring systems,
              and automated assessment tools that enhance learning outcomes for every student.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                onClick={() => navigateToTop('/contact')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Get Started
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative py-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-green-500/30 bg-green-500/5">
                Solutions
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-green-500 to-foreground bg-clip-text text-transparent">
              AI Solutions for Education
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative AI technologies designed to enhance learning experiences and educational outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.title}
                  className="group relative overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 via-emerald-600/20 to-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                  <CardContent className="p-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm group-hover:text-foreground transition-colors">
                      {solution.description}
                    </p>

                    <div className="space-y-2">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-background overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-green-500/30 bg-green-500/5">
                Case Studies
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-green-500 to-foreground bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Real results from our education clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card
                key={study.title}
                className="group relative overflow-hidden border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/10 to-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-background/20 via-background/20 to-background/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                <CardContent className="p-8 text-center relative z-10">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">{study.result}</div>
                  <p className="text-muted-foreground text-base group-hover:text-foreground transition-colors">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Partner with Quantum Intelligence in transforming your industry
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to revolutionize education with AI? Let's discuss how we can help you
              improve learning outcomes, reduce administrative burden, and enhance student engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateToTop('/contact')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Estimate Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigateToTop('/services')}
                className="px-8 py-6 text-base font-semibold border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationServices;
