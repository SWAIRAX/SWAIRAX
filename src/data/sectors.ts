import {
  Sprout,
  Factory,
  Building2,
  Truck,
  Landmark,
  HeartPulse,
  GraduationCap,
  Zap,
  RadioTower,
  Scissors,
  Brain,
  BarChart3,
  Workflow,
  ShieldCheck,
  LineChart,
  Boxes,
  Cog,
  Database,
  Smartphone,
  Target,
  Bot,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export interface SectorHelp {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SectorImpact {
  value: string;
  label: string;
}

export interface Sector {
  slug: string;
  icon: LucideIcon;
  name: string;
  /** Short supporting line for cards + hero. */
  description: string;
  /** Short solution tags shown on the sector card. */
  solutions: string[];
  /** Hero background image (file inside /uploads). */
  image: string;
  /** Headline shown inside the detail hero. */
  heroTitle: string;
  /** A personal, founder-voice note that inspires them to work with us. */
  founderNote: string;
  /** The day-to-day challenges this sector faces. */
  challenges: string[];
  /** Concrete ways SWAIRAX lifts their productivity. */
  howWeHelp: SectorHelp[];
  /** What "better" looks like — target outcomes. */
  impact: SectorImpact[];
  ctaTitle: string;
  ctaText: string;
}

export const sectors: Sector[] = [
  {
    slug: "agriculture",
    icon: Sprout,
    name: "Agriculture & Agribusiness",
    description:
      "Grow yields and cut waste with forecasting, IoT monitoring, and supply-chain visibility.",
    solutions: ["Yield forecasting", "IoT monitoring", "Supply-chain analytics"],
    image: "INDUSTRY.webp",
    heroTitle: "Produce more, waste less — from farm to market.",
    founderNote:
      "I started SWAIRAX because I watched hardworking producers lose margin to problems that data can quietly solve. In agriculture, small improvements compound: a better planting forecast, a spoilage alert that arrives in time, a clearer view of who's buying what. We don't sell you buzzwords — we sit with your team, learn your season, and build tools that earn their keep. Let's grow your output together.",
    challenges: [
      "Yields swing with weather and guesswork instead of data",
      "Post-harvest spoilage and losses across the supply chain",
      "No clear, real-time view of stock, demand, and pricing",
      "Manual record-keeping that hides where money leaks",
    ],
    howWeHelp: [
      {
        icon: LineChart,
        title: "Forecast Demand & Yield",
        description:
          "Predictive models for planting, harvest, and demand so you produce the right amount at the right time.",
      },
      {
        icon: Cog,
        title: "IoT & Field Monitoring",
        description:
          "Sensors and dashboards that track soil, storage, and conditions — with alerts before losses happen.",
      },
      {
        icon: Workflow,
        title: "Supply-Chain Visibility",
        description:
          "Connect farm, transport, and market into one view so spoilage drops and buyers are matched faster.",
      },
    ],
    impact: [
      { value: "↑ Yield", label: "Data-driven planning" },
      { value: "Less", label: "Post-harvest waste" },
      { value: "Real-time", label: "Stock & demand view" },
      { value: "Faster", label: "Buyer matching" },
    ],
    ctaTitle: "Let's grow your output",
    ctaText:
      "Tell us about your crops, herds, or produce and we'll map the quickest wins for your operation.",
  },
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description:
      "Increase output and quality with predictive maintenance, process analytics, and automation.",
    solutions: ["Predictive maintenance", "Process analytics", "Automation"],
    image: "INDUSTRY.jpg",
    heroTitle: "More uptime. Fewer defects. Higher output.",
    founderNote:
      "Every hour a line is down, and every defect that slips through, is money you'll never get back. At SWAIRAX we believe the factory floor is one of the most rewarding places to apply AI — because the gains are immediate and measurable. We start small on your highest-pain process, prove the value, then scale. Partner with us and turn your data into throughput.",
    challenges: [
      "Unplanned downtime from equipment failures",
      "Quality defects caught too late, after cost is sunk",
      "Manual processes that slow output and hide bottlenecks",
      "Production data trapped in machines and spreadsheets",
    ],
    howWeHelp: [
      {
        icon: Cog,
        title: "Predictive Maintenance",
        description:
          "Models that flag failing equipment before it stops the line — turning downtime into planned servicing.",
      },
      {
        icon: BarChart3,
        title: "Process & Quality Analytics",
        description:
          "Spot bottlenecks and defect drivers in real time so you raise yield and cut rework.",
      },
      {
        icon: Workflow,
        title: "Automation",
        description:
          "Automate repetitive steps and reporting so your team focuses on output, not paperwork.",
      },
    ],
    impact: [
      { value: "↓ Downtime", label: "Predictive maintenance" },
      { value: "↑ Quality", label: "Fewer defects" },
      { value: "Real-time", label: "Line visibility" },
      { value: "Higher", label: "Throughput" },
    ],
    ctaTitle: "Let's raise your throughput",
    ctaText:
      "Show us your most painful process and we'll design a pilot that proves the gains fast.",
  },
  {
    slug: "construction",
    icon: Building2,
    name: "Construction & Real Estate",
    description:
      "Streamline material sourcing, costing, and project delivery — the engine behind TanzaBuild.",
    solutions: ["Material sourcing", "Cost analytics", "Project platforms"],
    image: "INDUSTRY.jpg",
    heroTitle: "Build faster, source smarter, deliver on budget.",
    founderNote:
      "We know this sector deeply — we built TanzaBuild to fix the exact pain we kept seeing: scattered suppliers, prices in people's heads, and orders lost in chat threads. That product is proof of how we work. Whether you're a contractor, supplier, or developer, we can bring that same clarity to your business. Let's take the guesswork out of your next build.",
    challenges: [
      "Fragmented suppliers and unpredictable material pricing",
      "Cost overruns from poor visibility and manual estimates",
      "Orders and quotes lost across calls and WhatsApp",
      "No central record of projects, materials, and timelines",
    ],
    howWeHelp: [
      {
        icon: Boxes,
        title: "Material Sourcing Platforms",
        description:
          "Searchable catalogs with live local pricing and one-tap ordering — exactly what powers TanzaBuild.",
      },
      {
        icon: BarChart3,
        title: "Cost & Project Analytics",
        description:
          "Dashboards that track budgets, materials, and timelines so overruns are caught early.",
      },
      {
        icon: Smartphone,
        title: "Mobile & Web Tools",
        description:
          "Apps your contractors and suppliers actually use — built for WhatsApp, mobile money, and local reality.",
      },
    ],
    impact: [
      { value: "Clear", label: "Material pricing" },
      { value: "↓ Overruns", label: "Budget visibility" },
      { value: "1-tap", label: "Ordering" },
      { value: "Faster", label: "Project delivery" },
    ],
    ctaTitle: "Let's streamline your build",
    ctaText:
      "From sourcing to delivery, we'll bring TanzaBuild-grade clarity to your construction business.",
  },
  {
    slug: "retail-logistics",
    icon: Truck,
    name: "Retail & Logistics",
    description:
      "Optimize inventory, demand forecasting, and last-mile delivery.",
    solutions: ["Demand forecasting", "Inventory optimization", "Route intelligence"],
    image: "RETAIL.webp",
    heroTitle: "Right stock, right place, right time.",
    founderNote:
      "Retail runs on thin margins, and the difference between profit and loss is often just better timing — knowing what to stock, when, and where. We help you replace gut-feel with evidence, so you stop tying up cash in dead stock and stop losing sales to empty shelves. Work with us and let your data run the warehouse.",
    challenges: [
      "Overstock that ties up cash and understock that loses sales",
      "Demand that's hard to predict across locations",
      "Costly, inefficient last-mile delivery",
      "Disconnected sales, inventory, and supplier data",
    ],
    howWeHelp: [
      {
        icon: LineChart,
        title: "Demand Forecasting",
        description:
          "Predict what sells where, so you stock smart and free up working capital.",
      },
      {
        icon: Boxes,
        title: "Inventory Optimization",
        description:
          "Right-size stock across locations and automate reorder points to end stockouts.",
      },
      {
        icon: MapPin,
        title: "Route & Delivery Intelligence",
        description:
          "Smarter routing and tracking to cut last-mile cost and speed up delivery.",
      },
    ],
    impact: [
      { value: "↓ Stockouts", label: "Smarter inventory" },
      { value: "Less", label: "Dead stock" },
      { value: "↓ Cost", label: "Last-mile delivery" },
      { value: "Unified", label: "Sales & stock data" },
    ],
    ctaTitle: "Let's optimize your shelves and routes",
    ctaText:
      "Share your sales and inventory data and we'll find the cash and sales you're leaving on the table.",
  },
  {
    slug: "financial-services",
    icon: Landmark,
    name: "Financial Services",
    description:
      "Smarter credit scoring, fraud detection, and risk analytics built on your data.",
    solutions: ["Credit scoring", "Fraud detection", "Risk analytics"],
    image: "FINANCIAL SERVICE.jpg",
    heroTitle: "Lend with confidence. Operate with insight.",
    founderNote:
      "Finance is where good data science pays for itself fastest. Better credit decisions mean more good loans and fewer bad ones; better fraud detection protects every shilling you move. We build models you can explain and trust — not black boxes — so your team and your regulators stay comfortable. Let's turn your data into a durable advantage.",
    challenges: [
      "Credit decisions that rely on thin or manual scoring",
      "Fraud and anomalies caught too late",
      "Risk exposure that's hard to see across the portfolio",
      "Slow, manual reporting and compliance work",
    ],
    howWeHelp: [
      {
        icon: Target,
        title: "Credit Scoring Models",
        description:
          "Score borrowers on richer signals to approve more good customers and reduce defaults.",
      },
      {
        icon: ShieldCheck,
        title: "Fraud & Anomaly Detection",
        description:
          "Real-time detection that flags suspicious transactions before they cost you.",
      },
      {
        icon: BarChart3,
        title: "Risk & Portfolio Analytics",
        description:
          "See exposure and run stress scenarios across your portfolio in minutes, not weeks.",
      },
    ],
    impact: [
      { value: "Better", label: "Credit decisions" },
      { value: "Real-time", label: "Fraud detection" },
      { value: "Explainable", label: "Trusted models" },
      { value: "Faster", label: "Risk reporting" },
    ],
    ctaTitle: "Let's de-risk and grow your book",
    ctaText:
      "We'll help you lend smarter and protect every transaction — with models you can stand behind.",
  },
  {
    slug: "healthcare-pharmacy",
    icon: HeartPulse,
    name: "Healthcare & Pharmacy",
    description:
      "Better patient insights, inventory intelligence, and efficient digital workflows.",
    solutions: ["Patient insights", "Inventory intelligence", "Digital workflows"],
    image: "HEALTHCARE.webp",
    heroTitle: "More time for patients, less lost to paperwork.",
    founderNote:
      "In healthcare, efficiency isn't just about money — it's about care. Every hour saved on admin is an hour back with a patient, and every drug that doesn't expire on a shelf is one that reaches someone who needs it. We build careful, privacy-respecting tools that make your clinic or pharmacy run smoother. Let's help your team do more of what matters.",
    challenges: [
      "Paperwork and manual workflows that steal clinical time",
      "Medicine stock-outs and expiries from poor inventory data",
      "Patient information scattered across systems",
      "No clear view of operational bottlenecks",
    ],
    howWeHelp: [
      {
        icon: Workflow,
        title: "Digital Workflows",
        description:
          "Streamline records, scheduling, and admin so staff spend more time on care.",
      },
      {
        icon: Boxes,
        title: "Inventory Intelligence",
        description:
          "Forecast demand and track expiry so essential medicines stay in stock, not on the floor.",
      },
      {
        icon: BarChart3,
        title: "Operational Insights",
        description:
          "Dashboards that surface bottlenecks and demand patterns to improve service.",
      },
    ],
    impact: [
      { value: "↑ Time", label: "Back with patients" },
      { value: "↓ Stock-outs", label: "Smarter inventory" },
      { value: "Fewer", label: "Expired medicines" },
      { value: "Secure", label: "Patient data" },
    ],
    ctaTitle: "Let's make your practice run smoother",
    ctaText:
      "We'll help your clinic or pharmacy cut admin, protect stock, and focus on patients.",
  },
  {
    slug: "education",
    icon: GraduationCap,
    name: "Education",
    description:
      "Raise learning outcomes with personalized platforms, analytics, and accessible tools.",
    solutions: ["Learning platforms", "Performance analytics", "Personalization"],
    image: "EDUCATION.avif",
    heroTitle: "Help every learner reach their potential.",
    founderNote:
      "Education changed my life, so this sector is personal. Technology done right can meet learners where they are — in their language, on the devices they have, at the pace they need. We build platforms and analytics that help educators teach better and help institutions run efficiently. Let's expand access and lift outcomes together.",
    challenges: [
      "One-size-fits-all teaching that loses struggling learners",
      "No clear data on who's falling behind and why",
      "Limited access on low-end devices and slow connections",
      "Heavy administrative load on educators",
    ],
    howWeHelp: [
      {
        icon: Smartphone,
        title: "Learning Platforms",
        description:
          "Accessible web, mobile, and SMS/WhatsApp tools built for local languages and real connectivity.",
      },
      {
        icon: BarChart3,
        title: "Performance Analytics",
        description:
          "See who's at risk early so educators can intervene before a learner falls behind.",
      },
      {
        icon: Bot,
        title: "Personalization & AI",
        description:
          "Adaptive content and AI assistants that tailor learning to each student's pace.",
      },
    ],
    impact: [
      { value: "↑ Outcomes", label: "Data-led teaching" },
      { value: "Early", label: "At-risk alerts" },
      { value: "Wider", label: "Access" },
      { value: "Less", label: "Admin load" },
    ],
    ctaTitle: "Let's lift learning outcomes",
    ctaText:
      "From a learning platform to performance analytics, we'll help your institution teach smarter.",
  },
  {
    slug: "energy-utilities",
    icon: Zap,
    name: "Energy & Utilities",
    description:
      "Boost reliability and efficiency with demand forecasting and smart-metering analytics.",
    solutions: ["Demand forecasting", "Smart-metering analytics", "Predictive ops"],
    image: "UTILITIES.jpg",
    heroTitle: "Keep the lights on — efficiently.",
    founderNote:
      "Reliable power and water are the backbone of every other sector we serve. When utilities run on data, outages drop, losses shrink, and customers trust the service more. We help you forecast demand, spot losses, and act before failures happen. Let's build infrastructure intelligence that your whole region benefits from.",
    challenges: [
      "Demand spikes that strain the network unpredictably",
      "Losses from leaks, theft, and inefficiency",
      "Reactive maintenance that leads to outages",
      "Meter and sensor data that isn't turned into action",
    ],
    howWeHelp: [
      {
        icon: LineChart,
        title: "Demand Forecasting",
        description:
          "Predict load and consumption so you plan capacity and avoid strain.",
      },
      {
        icon: Database,
        title: "Smart-Metering Analytics",
        description:
          "Turn meter and sensor data into loss detection and efficiency gains.",
      },
      {
        icon: Cog,
        title: "Predictive Operations",
        description:
          "Flag failing assets before they cause outages, shifting you from reactive to proactive.",
      },
    ],
    impact: [
      { value: "↑ Uptime", label: "Predictive ops" },
      { value: "↓ Losses", label: "Leak & theft detection" },
      { value: "Real-time", label: "Network insight" },
      { value: "Smarter", label: "Capacity planning" },
    ],
    ctaTitle: "Let's make your network smarter",
    ctaText:
      "We'll help you forecast demand, cut losses, and prevent outages with your own data.",
  },
  {
    slug: "telecommunications",
    icon: RadioTower,
    name: "Telecommunications",
    description:
      "Grow and retain customers with churn prediction, network analytics, and customer intelligence.",
    solutions: ["Churn prediction", "Network analytics", "Customer intelligence"],
    image: "Telecommunication-towers.jpg",
    heroTitle: "Win customers, keep them, serve them better.",
    founderNote:
      "Telcos sit on some of the richest data in the world — and most of it goes unused. The opportunity is enormous: predict who's about to leave, understand what customers truly value, and run the network smarter. We help you turn that data into growth and loyalty. Let's unlock the value already inside your business.",
    challenges: [
      "Customer churn that's noticed only after they've left",
      "Network issues that hit experience before they're seen",
      "Huge data volumes that aren't turned into decisions",
      "Generic offers that don't match real customer needs",
    ],
    howWeHelp: [
      {
        icon: Target,
        title: "Churn Prediction",
        description:
          "Spot at-risk customers early and act with the right offer before they leave.",
      },
      {
        icon: BarChart3,
        title: "Network Analytics",
        description:
          "Turn network and usage data into proactive quality and capacity decisions.",
      },
      {
        icon: Brain,
        title: "Customer Intelligence",
        description:
          "Understand segments and behavior to personalize offers and grow ARPU.",
      },
    ],
    impact: [
      { value: "↓ Churn", label: "Early prediction" },
      { value: "↑ ARPU", label: "Personalized offers" },
      { value: "Proactive", label: "Network quality" },
      { value: "Real-time", label: "Customer insight" },
    ],
    ctaTitle: "Let's turn your data into growth",
    ctaText:
      "We'll help you predict churn, personalize offers, and run the network smarter.",
  },
  {
    slug: "beauty-wellness",
    icon: Scissors,
    name: "Beauty & Wellness",
    description:
      "Reach more customers with discovery and booking platforms — the idea behind Florré.",
    solutions: ["Booking platforms", "Discovery apps", "Customer analytics"],
    image: "blog5.jpg",
    heroTitle: "Fill your calendar. Delight your clients.",
    founderNote:
      "We love this space so much we're building Florré for it. Beauty and wellness businesses thrive on reputation and repeat clients — and the right technology makes both easier: get discovered, let clients book in seconds, and take payment with mobile money. We bring that experience to salons, spas, and independent professionals. Let's help your bookings grow.",
    challenges: [
      "Hard for new clients to discover and trust you",
      "Bookings lost to back-and-forth calls and messages",
      "Payment friction without mobile money built in",
      "No data on clients, repeat visits, or popular services",
    ],
    howWeHelp: [
      {
        icon: MapPin,
        title: "Discovery & Booking",
        description:
          "GPS discovery and real-time booking so clients find you and book in seconds — like Florré.",
      },
      {
        icon: Smartphone,
        title: "Mobile Money Payments",
        description:
          "Take M-Pesa, Tigo Pesa, Airtel Money, and Halopesa in-app to remove payment friction.",
      },
      {
        icon: BarChart3,
        title: "Customer Analytics",
        description:
          "Understand repeat visits and popular services to grow loyalty and revenue.",
      },
    ],
    impact: [
      { value: "↑ Bookings", label: "Easy discovery" },
      { value: "Seconds", label: "To book" },
      { value: "Mobile money", label: "Built in" },
      { value: "↑ Repeat", label: "Loyal clients" },
    ],
    ctaTitle: "Let's grow your bookings",
    ctaText:
      "From discovery to booking to payment, we'll help your beauty business shine — ask us about Florré.",
  },
];

export const getSectorBySlug = (slug?: string): Sector | undefined =>
  sectors.find((s) => s.slug === slug);
