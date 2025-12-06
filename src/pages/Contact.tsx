import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Globe, Send, Calendar, X } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        {/* Subtle glow accents inspired by references */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--card))/30,transparent_45%)]" />
        </div>

        <Header />

        {/* Hero */}
        <section className="relative pt-20 pb-10">
          <div className="container mx-auto px-5 max-w-5xl">
            <div className="text-center space-y-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Contact Us</p>
              <h1 className="text-[22px] md:text-[28px] font-bold leading-tight">
                Let&apos;s Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-[12px] md:text-sm text-muted-foreground">
                Tell us a bit about your project and we&apos;ll reach out soon.
                You can also email us at{" "}
                <a href="mailto:communications@quantumintelligence.co.tz" className="text-primary hover:underline">
                  communications@quantumintelligence.co.tz
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Main layout */}
        <section className="relative pb-10">
          <div className="container mx-auto px-5 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-7 items-start">
              {/* Left info panel */}
              <div className="relative bg-card/60 border border-border/60 rounded-2xl p-5 md:p-6 backdrop-blur shadow-card">
                <div className="absolute -left-6 top-6 h-12 w-1 bg-primary rounded-full" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/80 mb-2">Contact Details</p>
                <h2 className="text-lg md:text-xl font-bold mb-2">We&apos;re ready to build with you.</h2>
                <p className="text-[12px] md:text-[13px] text-muted-foreground mb-5 leading-relaxed">
                  Share your goals and we&apos;ll align the right team to your project. Expect a quick reply from our development team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground">Email</p>
                      <p className="text-[12px] md:text-sm font-semibold">communications@quantumintelligence.co.tz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground">Phone</p>
                      <p className="text-[12px] md:text-sm font-semibold">+255 689 726 060</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground">Location</p>
                      <p className="text-[12px] md:text-sm font-semibold">Dar es Salaam, TZ — Global AI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/5 blur-3xl" />
                <div className="relative bg-card/80 border border-border/60 rounded-2xl shadow-2xl p-5 md:p-6 backdrop-blur">
                  <div className="pointer-events-none absolute inset-2 rounded-xl border border-primary/50" />
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5" role="form" aria-label="Project inquiry form">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-medium">Full Name<span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Enter your full name" className="h-10 rounded-lg bg-background/60 border-border text-xs focus-visible:ring-2 focus-visible:ring-primary/70" aria-required="true" />
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
                            <FormLabel className="text-[10px] font-medium">Email<span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input {...field} type="email" placeholder="sway@example.com" className="h-10 rounded-lg bg-background/60 border-border text-xs focus-visible:ring-2 focus-visible:ring-primary/70" aria-required="true" />
                            </FormControl>
                            <FormMessage className="text-[11px]" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-medium">Phone<span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input {...field} type="tel" placeholder="+255 XXX XXX XXX" className="h-10 rounded-lg bg-background/60 border-border text-xs focus-visible:ring-2 focus-visible:ring-primary/70" aria-required="true" />
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
                            <FormLabel className="text-[10px] font-medium">Service Needed<span className="text-destructive">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger
                                  aria-required="true"
                                  className="h-10 rounded-lg bg-background/60 border-border text-xs focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary/70"
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
                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-medium">Project Description<span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell us about the project, goals, and timelines..."
                              className="min-h-[72px] rounded-lg bg-background/60 border-border text-xs resize-y focus-visible:ring-2 focus-visible:ring-primary/70"
                              aria-required="true"
                            />
                            </FormControl>
                            <FormMessage className="text-[11px]" />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" disabled={form.formState.isSubmitting} className="w-full h-10 rounded-lg bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition text-xs">
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

                      <p className="text-center text-[10px] text-muted-foreground">
                        By submitting, you agree to our <a href="/terms" className="text-primary hover:underline">Terms</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  </Form>
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
