import { Github, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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
                  onClick={() => navigateToTop("/industries")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Industries
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

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Social</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/qintelligencelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/1ntelligencelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/quantum-intelligence-africa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/quantum-intelligence-africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
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
