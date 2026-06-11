import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { SEOSchema } from "@/components/SEOSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlexusBackground from "@/components/PlexusBackground";
import Parallax from "@/components/Parallax";
import HubSpotMeetings from "@/components/HubSpotMeetings";
import { Mail, Phone, MapPin, Globe, Send, Calendar, X } from "lucide-react";

// Background pattern styles
const patternStyles = `
  .pattern-bg {
    --color: rgba(214, 46, 10, 0.5);
    background-color: rgb(0, 0, 0);
    background-size: 30px 30px;
    background-image: linear-gradient(45deg, var(--color), transparent 40%), linear-gradient(-90deg, var(--color), transparent 20%);
  }

  .card-container {
    width: 100%;
    max-width: 400px;
    min-height: 533px;
    display: flex;
    position: relative;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    background: linear-gradient(135deg, rgba(15, 17, 28, 0.95), rgba(12, 13, 24, 0.9), rgba(0, 0, 0, 0.85));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card {
    width: 100%;
    display: flex;
    border-radius: inherit;
    position: relative;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    padding: 24px;
  }

  .card .front-content .title {
    font-size: 22px;
    font-weight: 700;
    opacity: 1;
    background: linear-gradient(-45deg, #000000 0%, #d62e0a 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    text-align: center;
  }

  .card .front-content .subtitle {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 8px;
    text-align: center;
    opacity: 1;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .front-content .icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
    opacity: 1;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .content {
    position: relative;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 16px;
    background: linear-gradient(-45deg, #000000 0%, #d62e0a 100%);
    color: #e8e8e8;
    padding: 24px 20px;
    line-height: 1.5;
    border-radius: 16px;
    pointer-events: none;
    transform: translateX(0);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .content a {
    pointer-events: auto;
    cursor: pointer;
  }

  .card .content .heading {
    font-size: 30px;
    font-weight: 700;
    color: white;
    margin-bottom: 10px;
  }

  .card .content .description {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.92);
    margin-bottom: 14px;
  }

  /* Hover effects removed - content is now visible by default */

  @media (max-width: 640px) {
    .card .content a {
      font-size: 11px;
      word-break: break-all;
    }
  }

  .social-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(15, 17, 28, 0.95), rgba(12, 13, 24, 0.9), rgba(0, 0, 0, 0.85));
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    height: 60px;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .social-card::before, .social-card::after {
    position: absolute;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    transition: 0.25s linear;
    z-index: 1;
  }

  .social-card::before {
    content: "";
    left: 0;
    justify-content: flex-end;
    background: linear-gradient(-45deg, #000000 0%, #d62e0a 100%);
  }

  .social-card::after {
    content: "";
    right: 0;
    justify-content: flex-start;
    background: linear-gradient(45deg, #d62e0a 0%, #000000 100%);
  }

  .social-card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .social-card:hover .social-label {
    opacity: 0;
    z-index: -3;
  }

  /* Background effects now visible by default */
  .social-card::before {
    opacity: 0.5;
    transform: translateY(-100%);
  }

  .social-card::after {
    opacity: 0.5;
    transform: translateY(100%);
  }

  .social-label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-family: 'Fira Mono', monospace;
    font-size: 16px;
    font-weight: 700;
    opacity: 0;
    transition: opacity 0.25s;
    z-index: 2;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .social-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16.6667%;
    height: 100%;
    color: #ffffff;
    font-size: 20px;
    text-decoration: none;
    transition: 0.25s;
  }

  .social-link svg {
    height: 20px;
    width: 20px;
    text-shadow: 1px 1px rgba(31, 74, 121, 0.7);
    transform: scale(1);
  }

  .social-link:hover {
    background-color: rgba(214, 46, 10, 0.8);
    animation: bounce_613 0.4s linear;
  }

  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }

    60% {
      transform: scale(0.8);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`;

// Form validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  helpWith: z.string().min(1, "Please select the service you're interested in"),
  budget: z.string().optional(),
  projectDescription: z.string().min(10, "Please provide more details about your project")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  // Inject pattern styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = patternStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const { toast } = useToast();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      helpWith: "",
      budget: "",
      projectDescription: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xdkonpry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Information successfully submitted!",
          description: "Your submission has been received successfully.",
        });
        form.reset();
        setShowBookingModal(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Unable to submit your information. Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const handleBookNow = () => {
    window.open("https://calendar.app.google/Mi86dTYt6XqGnjHv5", "_blank");
    setShowBookingModal(false);
  };

  const handleMaybeLater = () => {
    setShowBookingModal(false);
    toast({
      title: "Thank you!",
      description: "We'll be in touch soon. You can always book a meeting later.",
    });
  };

  const helpOptions = [
    "AI",
    "Data Science",
    "Cybersecurity",
    "Big Data",
    "Software Engineering",
    "Product / Other"
  ];

  const budgetOptions = [
    "Under $1K",
    "$1K–$5K",
    "$5K–$20K",
    "$20K+",
    "Let's Discuss"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOSchema
        breadcrumbs={[
          { name: "Home", url: "https://swairax.com" },
          { name: "Contact", url: "https://swairax.com/contact" }
        ]}
      />
      <div className="relative overflow-hidden bg-background">
        {/* red plexus network on a soft gray canvas + gradient overlay so it isn't bright — drifts on scroll */}
        <Parallax speed={-0.2} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <PlexusBackground className="absolute inset-0 h-full w-full" />
        </Parallax>
        {/* gradient tint dims the canvas (deeper toward the edges/bottom) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/35 to-secondary/75" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--secondary)/0.6)_100%)]" />

        <Header />

        {/* Hero — big centered title on the light plexus */}
        <div className="relative z-10 px-5 pt-24 pb-10 text-center sm:pt-28">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s Work Together
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Have a project, a problem, or just an idea? Tell us where you want to go, and we&apos;ll
            help you get there.
          </p>
        </div>

        {/* Main layout */}
        <section className="relative z-10 pb-28 sm:pb-36 lg:pb-44">
          <div className="w-full relative">
            <div className="w-full space-y-10">
              {/* Info cards — sit on top, up to 4 per row on desktop */}
              <div className="space-y-3">

                {/* Social Links */}
                <div className="pt-1">
                      <div className="social-card">
                        <span className="social-label">Get in touch</span>

                        <a
                          href="mailto:info@swairax.com"
                          aria-label="Email SWAIRAX"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
                          </svg>
                        </a>

                        <a
                          href="tel:+255684475390"
                          aria-label="Call SWAIRAX"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
                          </svg>
                        </a>

                        <a
                          href="https://www.instagram.com/swairax"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>

                        <a
                          href="https://x.com/swairax"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>

                        <a
                          href="https://www.linkedin.com/company/swairax"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>

                        <a
                          href="https://github.com/swairax"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>


            {/* Book a discovery call — Calendly inline scheduler */}
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-xl p-2 sm:p-5 md:p-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Book a call
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Schedule a discovery call</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Pick a time that works for you and we&apos;ll meet you there.
              </p>
              <HubSpotMeetings
                url="https://meetings-eu1.hubspot.com/swairax?embed=true"
                className="overflow-hidden rounded-xl min-h-[680px]"
              />
            </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Booking Confirmation Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="sm:max-w-md animate-scale-in" role="dialog" aria-labelledby="booking-modal-title" aria-describedby="booking-modal-description">
          <DialogHeader className="text-center">
            <DialogTitle id="booking-modal-title" className="text-2xl font-bold text-primary mb-2">
              Information Successfully Submitted!
            </DialogTitle>
            <DialogDescription id="booking-modal-description" className="text-lg text-muted-foreground">
              Would you like to book a meeting with SWAIRAX now?
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              onClick={handleBookNow}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              aria-label="Book a meeting now"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Yes, book now
            </Button>

            <Button
              onClick={handleMaybeLater}
              variant="outline"
              className="flex-1 py-3 text-base font-semibold rounded-lg border-2 border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              aria-label="Maybe book later"
            >
              <X className="w-5 h-5 mr-2" />
              No, maybe later
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
