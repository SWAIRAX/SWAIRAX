import { Github, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";

const Footer = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Top header strip */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <picture>
                <img
                  src="/uploads/logo.png"
                  alt="Quantum Intelligence Logo"
                  className="h-10 w-auto object-contain"
                  style={{ maxWidth: "168px" }}
                />
              </picture>
              <div className="leading-tight text-lg md:text-xl font-semibold text-foreground">
                <div>Quantum</div>
                <div>Intelligence</div>
              </div>
            </Link>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              Making AI work for humanity. We're an AI research and deployment company building innovative,
              ethical, and accessible AI solutions.
            </p>
          </div>
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <button
              onClick={() => navigateToTop("/contact")}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200"
            >
              Talk to our team <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="h-px bg-border/60 mb-10" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Company Info - Left Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-3">Contact</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:communications@quantumintelligence.co.tz" className="hover:text-primary transition-colors">
                  communications@quantumintelligence.co.tz
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+255689726060" className="hover:text-primary transition-colors">
                  +255 689 726 060
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/quantum-intelligence-africa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/quantum-intelligence-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/1ntelligencelab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/qintelligencelab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Products & Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToTop("/services")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  All Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/deep-operator")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Deep Operator
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/quantum-annotate")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Quantum Annotate
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/quantum-genai")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Quantum GenAI
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/mlops-devops")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  MLOps & DevOps
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToTop("/about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/partnerships")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Partnerships
                </button>
              </li>
            <li>
              <button
                onClick={() => navigateToTop("/blog")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Blog
              </button>
            </li>
              <li>
                <button
                  onClick={() => navigateToTop("/privacy")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToTop("/industries/financial-services")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Financial Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/industries/telecommunications")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Telecommunications
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/industries/education-services")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Education Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/industries/utilities")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Utilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/industries/retail-logistics")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Retail & Logistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/industries/healthcare-pharmacy")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Healthcare & Pharmacy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Quantum Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
