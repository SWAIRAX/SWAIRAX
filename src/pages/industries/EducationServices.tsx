import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import CTASection from "@/components/CTASection";
import Parallax from "@/components/Parallax";
import { SectionHeading, SectionLead, Section, Heading } from "@/components/typography";
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

  const outcomes = [
    {
      title: "Adaptive Learning",
      result: "Personalized pace",
      description: "Content will adjust per learner and stay aligned to progress."
    },
    {
      title: "Tutor Assist",
      result: "Always-on help",
      description: "AI tutors will guide, quiz, and give instant feedback."
    },
    {
      title: "Auto Grading",
      result: "Faster grading",
      description: "Assessments will score consistently with clear rubrics."
    },
    {
      title: "Student Analytics",
      result: "Early signals",
      description: "Risk flags will surface so interventions happen sooner."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[280px] md:h-[300px] bg-gradient-to-b from-secondary-accent/10 via-secondary-accent/5 to-transparent pointer-events-none" />
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-transparent" />
        </Parallax>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-left">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>

            <SectionHeading className="text-foreground text-left">
              Everything that involves
              Learning and Students
            </SectionHeading>

            <SectionLead className="max-w-3xl text-muted-foreground text-left mx-0">
              Transform education with AI-powered adaptive learning platforms, intelligent tutoring systems,
              and automated assessment tools that enhance learning outcomes for every student.
            </SectionLead>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                onClick={() => navigateToTop('/contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
                className="border-border text-foreground hover:bg-muted"
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
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-card rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-left mb-10 max-w-4xl mx-auto space-y-4">
            <Heading as="h2" size="h2" className="mb-2">
              AI for Education, designed to adapt
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              We build learner-first AI—adaptive content, always-on tutoring, and fair grading that frees educators to teach.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              We will tailor adaptive learning, tutoring, grading, and analytics to your stack. Some capabilities may be phased or co-developed—let's focus on what lifts outcomes and frees educators’ time.
            </p>
          </div>
        </div>
      </section>

      {/* Future Outcomes */}
      <section className="relative py-20 bg-card overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">
              What AI will do for Education
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              Future-state outcomes you can expect as we deploy AI across learning
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left text-muted-foreground">
            {outcomes.map((item, index) => (
              <p key={item.title} className="text-sm md:text-base leading-relaxed animate-fade-in" style={{ animationDelay: `${index * 120}ms` }}>
                <span className="text-foreground font-semibold">{item.title}:</span> {item.result}. {item.description}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Partner with SWAIRAX in transforming your industry"
        description="Ready to revolutionize education with AI? Let's discuss how we can help you improve learning outcomes, reduce administrative burden, and enhance student engagement."
        primary={{ label: "Estimate Project", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <Footer />
    </div>
  );
};

export default EducationServices;
