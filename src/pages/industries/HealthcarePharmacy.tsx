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
  Heart,
  Scan,
  Database,
  Pill,
  Activity,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HealthcarePharmacy = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  const solutions = [
    {
      title: "Medical Imaging AI",
      description: "Computer vision for advanced diagnostics and medical image analysis",
      icon: Scan,
      features: ["Image Analysis", "Diagnostic Support", "Pattern Recognition"]
    },
    {
      title: "Patient Data Systems",
      description: "Intelligent patient data management and clinical decision support systems",
      icon: Database,
      features: ["Data Integration", "Clinical Insights", "Care Coordination"]
    },
    {
      title: "Drug Discovery & Development",
      description: "AI-accelerated pharmaceutical research and prescription automation",
      icon: Pill,
      features: ["Drug Discovery", "Clinical Trials", "Prescription Management"]
    },
    {
      title: "Health Monitoring",
      description: "Real-time patient monitoring and predictive health analytics",
      icon: Activity,
      features: ["Vital Monitoring", "Risk Prediction", "Early Intervention"]
    }
  ];

  const outcomes = [
    {
      title: "Imaging AI",
      result: "Faster reads",
      description: "Models will pre-triage scans so clinicians see risk sooner."
    },
    {
      title: "Patient Data",
      result: "Unified view",
      description: "Records will surface insights at bedside and in workflows."
    },
    {
      title: "Drug Discovery",
      result: "Quicker pipelines",
      description: "Models will rank candidates earlier and focus lab cycles."
    },
    {
      title: "Monitoring",
      result: "Proactive care",
      description: "Vitals will trigger alerts before conditions escalate."
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
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>

            <SectionHeading className="text-foreground text-left">
              Health Sector Covered
            </SectionHeading>

            <SectionLead className="max-w-3xl text-muted-foreground text-left mx-0">
              Revolutionize healthcare with AI-powered diagnostic imaging, intelligent patient data systems,
              and advanced pharmaceutical research tools that improve patient outcomes and save lives.
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
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
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
              AI for Healthcare & Pharmacy, responsibly deployed
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              We build safety-first AI for care and pharma—faster reads, unified patient context, and discovery tools that stay clinician-centered.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              We will prioritize imaging, patient data, discovery, and monitoring where safety and outcomes improve most. Some capabilities may be phased or co-developed—let's align on what protects patients and accelerates insight.
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
              What AI will do for Healthcare & Pharmacy
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              Future-state outcomes you can expect as we deploy AI in care and research
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
        title="Partner with Quantum Intelligence in transforming your industry"
        description="Ready to advance healthcare with AI? Let's discuss how we can help you improve patient outcomes, accelerate research, and enhance clinical decision-making."
        primary={{ label: "Estimate Project", href: "/contact" }}
        secondary={{ label: "View Solutions", href: "#solutions" }}
      />

      <Footer />
    </div>
  );
};

export default HealthcarePharmacy;
