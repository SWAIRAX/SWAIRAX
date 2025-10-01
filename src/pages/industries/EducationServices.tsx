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
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-primary/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>

            <Badge variant="outline" className="mb-3 text-xs">
              Education Services
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Everything that involves
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Learning and Students</span>
            </h1>

            <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
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
      <section id="solutions" className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">
              AI Solutions for Education
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Innovative AI technologies designed to enhance learning experiences and educational outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.title}
                  className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                      <Icon className="h-4 w-4 text-white" />
                    </div>

                    <h3 className="text-sm font-bold mb-2">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-xs">
                      {solution.description}
                    </p>

                    <div className="space-y-1">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs">{feature}</span>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from our education clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">{study.result}</div>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Quantum Intelligence in transforming your industry
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to revolutionize education with AI? Let's discuss how we can help you
            improve learning outcomes, reduce administrative burden, and enhance student engagement.
          </p>
          <Button
            size="lg"
            onClick={() => navigateToTop('/contact')}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            Estimate Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationServices;
