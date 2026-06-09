import { Github, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import SectionDivider from "@/components/SectionDivider";
import BrandLogo from "@/components/BrandLogo";

type FooterLink = { name: string; path: string; external?: boolean };

const Footer = () => {
  const { navigateToTop } = useNavigationWithScroll();
  const currentYear = new Date().getFullYear();

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Sectors", path: "/sectors" },
        { name: "Blog", path: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  const socials: { name: string; href: string; icon: React.ReactNode }[] = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/swairax",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "X",
      href: "https://x.com/swairax",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/swairax",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/swairax",
      icon: <Github className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="relative">
      {/* The data-matrix ring divider overlaps the CTA section above via a
          negative top-margin, so its SVG gaps inherit the CTA's plexus
          backdrop instead of needing a separate plexus instance here. We stay
          inside the CTA's bottom padding (py-16/py-20) so the divider's red
          shapes don't paint over the CTA buttons. */}
      <div className="pointer-events-none relative z-20 -mt-[40px] sm:-mt-[55px] lg:-mt-[70px]">
        <SectionDivider
          variant="ring"
          className="w-full text-[#ff0000] -mb-px"
        />
      </div>

      {/* Red frame — shows on the left/right edges and rounded bottom corners */}
      <div className="bg-[#ff0000] px-5 sm:px-10 lg:px-16 pt-4 sm:pt-5 pb-4 sm:pb-5">
        <div className="rounded-[28px] bg-secondary text-foreground overflow-hidden">
          <div className="container mx-auto px-6 lg:px-10 pt-10 pb-10">
        {/* Main row — brand statement + link columns (lecdt ".conteudo") */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-8">
          {/* Brand column — wider, like lecdt's first ".parte" */}
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <BrandLogo iconClassName="h-14 sm:h-16 w-auto" wordmarkClassName="h-6 sm:h-8 w-auto text-foreground" />
            </Link>
            <p className="mt-1 text-base leading-relaxed text-muted-foreground">
              Building Africa's Digital Future — cutting-edge AI, Data Science, Cybersecurity, and
              Software Engineering solutions, built for Africa and ready for the world.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@swairax.com"
                className="flex items-center gap-2.5 text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 shrink-0" />
                info@swairax.com
              </a>
              <a
                href="tel:+255684475390"
                className="flex items-center gap-2.5 text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0" />
                +255 684 475 390
              </a>
              <div className="flex items-center gap-2.5 text-base text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0" />
                Dar es Salaam, Tanzania
              </div>
            </div>
          </div>

          {/* Link columns (lecdt ".parte") */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
            {/* Products & Services + Company */}
            {columns.slice(0, 2).map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-lg font-semibold text-foreground">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => navigateToTop(link.path)}
                        className="text-left text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Follow us — social links (replaces the old Useful Links column) */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Follow us</h3>
              <ul className="space-y-2.5">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {s.icon}
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            {columns.slice(2).map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-lg font-semibold text-foreground">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => navigateToTop(link.path)}
                        className="text-left text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

            {/* Copyright (lecdt ".copy") */}
            <div className="mt-10 border-t border-border/60 pt-6">
              <p className="text-base text-muted-foreground">
                © {currentYear} SWAIRAX Limited. All Rights Reserved. | Dar es Salaam, Tanzania 🇹🇿
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
