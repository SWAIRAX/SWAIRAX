import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    number: "1.",
    title: "Introduction",
    body: [
      "Welcome to Quantum Intelligence’s Privacy and Data Protection Policy (“Privacy Policy”). At Quantum Intelligence (“we”, “us”, “our”), we are committed to protecting and respecting your privacy and personal data in compliance with the Personal Data Protection Act, 2022 (Tanzania) and other applicable Tanzanian laws.",
      "This Privacy Policy explains how we collect, process, and keep your data safe when you use our website at quantumintelligence.co.tz (“Site”). It applies to customers/users of the Site, suppliers, business contacts, employees/staff, and related third parties.",
    ],
  },
  {
    number: "1.1",
    title: "Important information and who we are",
    body: [
      "Quantum Intelligence is the Data Controller for your personal data. We have not appointed a Data Protection Officer. Contact us at communications@quantumintelligence.co.tz. You may lodge a complaint with the Tanzanian Personal Data Protection Commission, but we would appreciate the chance to address your concerns first.",
    ],
  },
  {
    number: "1.2",
    title: "Processing on our behalf",
    body: [
      "Where we use processors, we ensure they follow our instructions, maintain confidentiality, apply appropriate security, assist with data subject rights, keep processing records, and notify us without undue delay of any personal data breach.",
    ],
  },
  {
    number: "2.",
    title: "Types of data we collect",
    list: [
      "Profile/Identity Data: name, gender, date of birth",
      "Contact Data: email, phone, address",
      "Marketing and Communications Data: preferences for receiving updates",
      "Transactional/Usage Data: records of interactions with our services and content",
      "Aggregated/analytic data that does not identify you",
    ],
    body: [
      "We do not collect special category data or criminal conviction data. We do not collect billing or payment data via the Site.",
    ],
  },
  {
    number: "2.1",
    title: "Legal bases we rely on",
    list: [
      "Consent (e.g., opting into newsletters)",
      "Contractual necessity (to provide services you request)",
      "Legal obligations (e.g., compliance, fraud prevention)",
      "Legitimate interests (e.g., service operation, security, analytics) where these do not override your rights",
    ],
  },
  {
    number: "3.",
    title: "How we use your personal data",
    list: [
      "Operating, maintaining, and improving the Site and our services",
      "Managing accounts and user interactions",
      "Sending service-related communications",
      "Sending marketing communications when you opt in",
      "Ensuring security, fraud prevention, and legal compliance",
    ],
    body: [
      "We will use your data only for the purposes collected unless a compatible purpose applies or we obtain your consent.",
    ],
  },
  {
    number: "4.",
    title: "Your rights",
    body: [
      "Subject to Tanzanian law, you may: be informed about our processing; access your data; rectify inaccurate data; erase data (where applicable); object to processing (including direct marketing, and where we rely on legitimate interests); restrict processing in certain circumstances; and request data portability where applicable.",
      "To exercise these rights, contact communications@quantumintelligence.co.tz. We may need to verify your identity. Requests are free unless manifestly unfounded or excessive.",
    ],
  },
  {
    number: "5.",
    title: "How we protect your data",
    body: [
      "We use technical and organizational measures to protect personal data and limit access to authorized personnel and processors bound by confidentiality. No internet transmission is completely secure; transmit data at your own risk. If you believe your interaction with us is no longer secure, please contact us.",
    ],
  },
  {
    number: "6.",
    title: "Opting out of marketing",
    body: [
      "You can stop marketing emails anytime via unsubscribe links or by contacting us. We will still retain necessary personal data for other interactions (e.g., service use).",
    ],
  },
  {
    number: "7.",
    title: "Data requests",
    body: [
      "We may request information to verify your identity and clarify your request. If a request is clearly unfounded or excessive, we may refuse it.",
    ],
  },
  {
    number: "8.",
    title: "Sharing your data with third parties",
    list: [
      "With service providers/partners under contract",
      "In connection with a change of control, sale, or licensing of our business/technology",
      "To comply with legal obligations or enforce our terms",
    ],
    body: [
      "If transferred in a sale, the acquiring entity’s policy may govern further use of your data.",
    ],
  },
  {
    number: "9.",
    title: "Third-party links",
    body: [
      "The Site may include links to third-party websites/apps. We do not control their privacy practices. Please review their privacy policies.",
    ],
  },
  {
    number: "10.",
    title: "Data retention",
    body: [
      "We retain personal data only as long as necessary for the purposes collected, or longer if needed for legal claims or compliance.",
    ],
  },
  {
    number: "11.",
    title: "International transfers",
    body: [
      "Your information may be stored and processed outside Tanzania. Where required, we apply appropriate safeguards (e.g., contractual protections) to protect your data.",
    ],
  },
  {
    number: "12.",
    title: "Changes to this policy",
    body: [
      "We keep this policy under review and will post updates here. Current version date: 9 January 2026. Continued use of the Site signifies acceptance of any changes.",
    ],
  },
  {
    number: "13.",
    title: "Interpretation",
    body: [
      "“Including” means “including but not limited to.” Emails provided in this policy are for their stated purposes only. Staff are not authorized to waive rights or make binding representations unless expressly from our legal department.",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-6 max-w-5xl scroll-reveal-visible" data-scroll-reveal="false">
          <div className="mb-14">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Website Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Learn how Quantum Intelligence protects and processes your data.
            </p>
          </div>

          <article className="space-y-8 text-base md:text-lg leading-relaxed text-foreground">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {section.number} {section.title}
                </h2>
                {section.body?.map((paragraph, idx) => (
                  <p key={idx} className="text-foreground/90">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
