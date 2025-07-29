import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center mb-6">
          <Link to="/" className="flex items-center space-x-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
            <picture>
              <img
              src="/uploads/logo.png"
              alt="Quantum Intelligence Logo"
              className="h-10 w-auto object-contain"
              style={{ maxWidth: "160px" }}
              />
            </picture>
            <div className="text-2xl font-bold text-foreground">
              Quantum Intelligence
            </div>
            </Link>
            <div className="text-xl font-bold text-foreground">Quantum Intelligence</div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link to="/glossary" className="hover:text-primary transition-colors">
              Glossary
            </Link>
          </div>

          {/* Location */}
          <div className="text-sm text-muted-foreground">
            Dar es salaam, Tanzania
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
