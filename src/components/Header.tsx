import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Logo from "@/components/Logo";

const Header = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when the mobile menu is open so the overlay covers the full page.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Research", path: "/research" },
    { name: "About Us", path: "/about" },
    { name: "Partnerships", path: "/partnerships" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    navigateToTop(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background border-b border-border z-[70] shadow-sm">
      <div className="container mx-auto px-5 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigateToTop('/')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <picture>
              <img
                src="/uploads/logo.png"
                alt="Quantum Intelligence Logo"
                className="h-9 w-auto object-contain"
                style={{ maxWidth: "168px" }}
              />
            </picture>
            <div className="hidden md:block leading-tight text-[18px] sm:text-[20px] font-semibold text-foreground">
              <div>Quantum</div>
              <div>Intelligence</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToTop(item.path)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button
              variant="outline"
              onClick={() => navigateToTop('/contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Estimate Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[80] bg-background text-foreground border-t border-border/60 shadow-2xl">
            <div className="container mx-auto px-6 pt-10 pb-12 flex flex-col h-full">
              <div className="flex items-center justify-between border-b border-border/70 pb-4 mb-6">
                <button
                  onClick={() => handleNavClick('/')}
                  className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                  aria-label="Go to home"
                >
                  <Logo size="default" className="w-10 h-10" />

                </button>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-muted/70 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto space-y-4">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-border/60 pb-3">
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`w-full text-left text-base font-semibold tracking-wide transition-colors ${
                        isActive(item.path) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </nav>

              <div className="pt-6 border-t border-border/60">
                <Button
                  variant="outline"
                  onClick={() => handleNavClick('/contact')}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground py-4 text-base font-semibold rounded-xl"
                >
                  Estimate Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
