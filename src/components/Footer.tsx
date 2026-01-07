import { Github, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";

const Footer = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info - Left Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
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
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Making AI work for humanity. We're an AI research and deployment company building innovative, ethical, and accessible AI solutions.
            </p>

            {/* Contact Info */}
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
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/quantum-intelligence-africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/quantum-intelligence-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/1ntelligencelab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/qintelligencelab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
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
                  onClick={() => navigateToTop("/quantum-analytics")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Quantum Analytics
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
                  onClick={() => navigateToTop("/industries")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Industries
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
                  onClick={() => navigateToTop("/careers")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTop("/contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Quantum Intelligence. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Making AI work for humanity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
