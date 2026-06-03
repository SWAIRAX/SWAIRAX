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
    width: 240px;
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
    width: 25%;
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
  phone: z.string().min(1, "Phone number is required"),
  helpWith: z.string().min(1, "Please select what we can help you with"),
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
      phone: "",
      helpWith: "",
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
    "General AI Development",
    "MVP Development",
    "Research Project",
    "Staff Augmentation",
    "Data Analytics",
    "Rapid Prototyping"
  ];

  return (
    <div className="min-h-screen bg-[#0c0c19]">
      <SEOSchema
        breadcrumbs={[
          { name: "Home", url: "https://quantumintelligence.co.tz" },
          { name: "Contact", url: "https://quantumintelligence.co.tz/contact" }
        ]}
      />
      <div className="relative overflow-hidden bg-[#0c0c19]">
        {/* lecdt-style red plexus network + radial "sombra" vignette — plexus drifts on scroll */}
        <Parallax speed={-0.2} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <PlexusBackground backgroundColor={0x0c0c19} className="absolute inset-0 h-full w-full" />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,rgba(12,12,25,0.2),rgba(12,12,25,0.82)_78%)]" />

        <Header />

        {/* Hero — lecdt "VAMOS CONVERSAR" style: big centered title on the dark plexus */}
        <div className="relative z-10 px-5 pt-24 pb-10 text-center sm:pt-28">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s talk
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 md:text-lg">
            Tell us a bit about your project and we&apos;ll reach out soon. We respond within one business day.
          </p>
        </div>

        {/* Main layout */}
        <section className="relative z-10 pb-28 sm:pb-36 lg:pb-44">
          <div className="container mx-auto px-5 max-w-5xl relative">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left info panel */}
              <div className="card-container">
                <div className="card">
                  {/* Sliding Content */}
                  <div className="content">
                    <div className="heading">Get In Touch</div>
                    <div className="description">
                      We're ready to build with you. Share your goals and we'll align the right team to your project.
                    </div>

                    <div className="space-y-3 w-full">
                      <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                        <div className="h-11 w-11 shrink-0 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-white" />
                      </div>
                        <div className="text-left">
                          <p className="text-xs uppercase tracking-wide text-white/70">Email</p>
                        <a
                          href="mailto:communications@quantumintelligence.co.tz"
                            className="text-[13px] sm:text-sm font-semibold text-white hover:text-white/80 transition-colors break-all leading-snug"
                        >
                          communications@quantumintelligence.co.tz
                        </a>
                      </div>
                    </div>

                      <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                        <div className="h-11 w-11 shrink-0 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-white" />
                      </div>
                        <div className="text-left">
                          <p className="text-xs uppercase tracking-wide text-white/70">Phone</p>
                        <a
                          href="tel:+255689726060"
                            className="text-base font-semibold text-white hover:text-white/80 transition-colors"
                        >
                          +255 689 726 060
                        </a>
                      </div>
                    </div>

                      <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                        <div className="h-11 w-11 shrink-0 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs uppercase tracking-wide text-white/70">Location</p>
                          <p className="text-base font-semibold text-white">Dar es Salaam, Tanzania</p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-4 pt-3 border-t border-white/20">
                      <div className="social-card">
                        <span className="social-label">Follow Us</span>

                        <a
                          href="https://www.instagram.com/qintelligencelab"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>

                        <a
                          href="https://x.com/1ntelligencelab"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>

                        <a
                          href="https://www.linkedin.com/company/quantum-intelligence-africa/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>

                        <a
                          href="https://github.com/quantum-intelligence-africa"
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
                </div>
              </div>

              {/* Form panel */}
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/5 blur-3xl" />
                <div className="relative overflow-hidden rounded-2xl bg-transparent p-5 md:p-6">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/8 blur-3xl" />
                  <div className="pointer-events-none absolute inset-2 rounded-xl border border-primary/50" />
                  <div className="relative space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-white text-sm font-semibold uppercase tracking-[0.2em]">
                      Project inquiry
                    </div>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5" role="form" aria-label="Project inquiry form">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-white">Full Name<span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Enter your full name" className="h-10 rounded-lg bg-white/5 border-white/25 text-sm text-white placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-primary/70" aria-required="true" />
                              </FormControl>
                              <FormMessage className="text-[11px]" />
                            </FormItem>
                          )}
                        />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-white">Email<span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input {...field} type="email" placeholder="sway@example.com" className="h-10 rounded-lg bg-white/5 border-white/25 text-sm text-white placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-primary/70" aria-required="true" />
                            </FormControl>
                            <FormMessage className="text-[11px]" />
                          </FormItem>
                        )}
                      />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-white">Phone<span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input {...field} type="tel" placeholder="+255 XXX XXX XXX" className="h-10 rounded-lg bg-white/5 border-white/25 text-sm text-white placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-primary/70" aria-required="true" />
                            </FormControl>
                            <FormMessage className="text-[11px]" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="helpWith"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-white">Service Needed<span className="text-destructive">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger
                                  aria-required="true"
                                  className="h-10 rounded-lg bg-white/5 border-white/25 text-sm text-white placeholder:text-white/50 focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary/70"
                                >
                                  <SelectValue placeholder="Select service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-card border-border">
                                {helpOptions.map((option) => (
                                  <SelectItem key={option} value={option} className="text-xs">{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-[11px]" />
                          </FormItem>
                        )}
                      />
                    </div>
                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-white">Project Description<span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell us about the project, goals, and timelines..."
                              className="min-h-[72px] rounded-lg bg-white/5 border-white/25 text-sm text-white placeholder:text-white/50 resize-y focus-visible:ring-2 focus-visible:ring-primary/70"
                              aria-required="true"
                            />
                            </FormControl>
                            <FormMessage className="text-[11px]" />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-center">
                        <Button type="submit" disabled={form.formState.isSubmitting} className="w-auto h-10 rounded-lg bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition text-xs">
                          {form.formState.isSubmitting ? (
                            <>
                              <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>

                      <p className="text-center text-sm text-white/60">
                        By submitting, you agree to our <a href="/terms" className="text-primary hover:underline">Terms</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
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
              Would you like to book a meeting with Quantum Intelligence now?
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
