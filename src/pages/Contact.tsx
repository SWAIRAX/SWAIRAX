import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Globe, Send, Calendar, X } from "lucide-react";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  employeeCount: z.string().optional(),
  helpWith: z.string().min(1, "Please select what we can help you with"),
  hearAbout: z.string().min(1, "Please tell us how you heard about us"),
  projectDescription: z.string().min(10, "Please provide more details about your project"),
  needsNDA: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  agreeMarketing: z.boolean().default(false)
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      employeeCount: "",
      helpWith: "",
      hearAbout: "",
      projectDescription: "",
      needsNDA: undefined,
      agreeMarketing: false
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

  const hearAboutOptions = [
    "Internet",
    "Referral",
    "Social Media",
    "Advertisement",
    "Event / Conference",
    "Other"
  ];

  const employeeCountOptions = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "500+"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-3">
              Contact Our Development Team
            </h1>
            <p className="text-sm text-muted-foreground mb-3">
              We are happy to onboard you, including connecting you with helpful resources, exploring use cases for your team, and discussing your potential options.{" "}
              <a href="mailto:communications@quantumintelligence.co.tz" className="text-primary underline">
                communications@quantumintelligence.co.tz
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information (moved below) */}

      {/* Contact Form */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" role="form">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">First Name*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            autoComplete="given-name"
                            aria-label="First Name"
                            className="h-9 bg-background border-border focus:border-primary transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Last Name*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            autoComplete="family-name"
                            aria-label="Last Name"
                            className="h-9 bg-background border-border focus:border-primary transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Email Address*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            autoComplete="email"
                            aria-label="Email Address"
                            className="h-9 bg-background border-border focus:border-primary transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone, Company, Employee Count Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Phone Number*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            autoComplete="tel"
                            aria-label="Phone Number"
                            placeholder="+255 XXX XXX XXX"
                            className="h-9 bg-background border-border focus:border-primary transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Company Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            autoComplete="organization"
                            aria-label="Company Name"
                            className="h-9 bg-background border-border focus:border-primary transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employeeCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Number of Employees</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-9 bg-background border-border focus:border-primary transition-colors">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {employeeCountOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Help With and Hear About Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="helpWith"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">What Can We Help You With?*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-9 bg-background border-border focus:border-primary transition-colors">
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {helpOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hearAbout"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">How Did You Hear About Us?*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-9 bg-background border-border focus:border-primary transition-colors">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {hearAboutOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Project Description and NDA Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Project Description*</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Describe your project, goals, and requirements..."
                            className="min-h-20 bg-background border-border focus:border-primary transition-colors resize-none"
                            aria-label="Project Description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="needsNDA"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-sm">Do You Need an NDA First?*</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="nda-yes" />
                              <Label htmlFor="nda-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="nda-no" />
                              <Label htmlFor="nda-no">No</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Marketing Consent */}
                <FormField
                  control={form.control}
                  name="agreeMarketing"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-label="Marketing consent"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-xs font-normal">
                          I agree to receive marketing communication from Quantum Intelligence.
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  {form.formState.isSubmitting ? "Sending..." : "Request Free Estimate"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Contact Information (moved below) */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <Mail className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1 text-sm">Email</h3>
                <p className="text-muted-foreground text-xs">
                communications@quantumintelligence.co.tz
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <Phone className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1 text-sm">Phone</h3>
                <p className="text-muted-foreground text-xs">
                  +255 689 726 060
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1 text-sm">Location</h3>
                <p className="text-muted-foreground text-xs">
                  Dar es Salaam, Tanzania
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <Globe className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1 text-sm">Services</h3>
                <p className="text-muted-foreground text-xs">
                  Global AI Solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
