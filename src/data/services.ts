import {
  Brain,
  BarChart3,
  ShieldCheck,
  Database,
  Code2,
  Cloud,
  Bot,
  MessageSquare,
  Eye,
  LineChart,
  PieChart,
  Gauge,
  Lock,
  Bug,
  ShieldAlert,
  Server,
  Workflow,
  Layers,
  Smartphone,
  Globe,
  Boxes,
  GitBranch,
  Activity,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceTech {
  name: string;
  description: string;
  /** Longer, honest explanation of why SWAIRAX uses this tool and what it
   *  does for the client — shown when the visitor clicks the tool card. */
  useCase: string;
}

export interface Service {
  /** URL slug used at /services/:slug — also the card anchor id. */
  slug: string;
  /** Short pill/badge label. */
  badge: string;
  /** Main service icon (Lucide component). */
  icon: LucideIcon;
  /** Short title used on cards (Home + Services grid). */
  cardTitle: string;
  /** Full title used on the detail hero. */
  title: string;
  /** Headline shown inside the detail hero image. */
  heroTitle: string;
  /** One-line supporting copy for the hero + cards. */
  description: string;
  /** Hero background image (file inside /uploads). */
  image: string;
  /** Longer overview paragraph for the detail page intro. */
  overview: string;
  /** Bulleted "what we offer" list shown on the cards. */
  outcomes: string[];
  /** Card CTA label. */
  cta: string;
  stats: ServiceStat[];
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  tech: ServiceTech[];
  ctaTitle: string;
  ctaText: string;
}

export const services: Service[] = [
  {
    slug: "ai",
    badge: "AI",
    icon: Brain,
    cardTitle: "Artificial Intelligence",
    title: "Artificial Intelligence & Machine Learning",
    heroTitle: "AI that ships — and works for your business.",
    description:
      "Custom AI models, automation, and intelligent systems tailored to your business.",
    image: "/service/AI.png",
    overview:
      "We design, build, and deploy custom AI and ML solutions tailored to your business needs. From intelligent automation to predictive systems, we bring AI to work for you — with evals, safety, and monitoring baked in so models stay reliable long after launch.",
    outcomes: [
      "Custom ML model development & training",
      "Natural Language Processing (NLP)",
      "Computer vision systems",
      "AI-powered automation workflows",
      "MLOps — deployment, monitoring, maintenance",
    ],
    cta: "Discuss Your AI Project →",
    stats: [
      { value: "40%", label: "Avg. performance lift" },
      { value: "60%", label: "Faster deployment" },
      { value: "95%", label: "Model accuracy" },
      { value: "24/7", label: "Monitoring & support" },
    ],
    features: [
      {
        icon: Bot,
        title: "Custom Models & Automation",
        description:
          "From classical ML to deep learning, we build and fine-tune models for your data and embed them into automated workflows that remove manual effort.",
        benefits: ["Model development", "Fine-tuning", "Workflow automation", "Predictive systems"],
      },
      {
        icon: MessageSquare,
        title: "Natural Language Processing",
        description:
          "Chatbots, document understanding, sentiment analysis, and generative AI assistants — including Swahili and English language support.",
        benefits: ["Chatbots & assistants", "Document AI", "Sentiment analysis", "LLM integration"],
      },
      {
        icon: Eye,
        title: "Computer Vision",
        description:
          "Image and video intelligence for detection, classification, and quality control across mobile and edge environments.",
        benefits: ["Object detection", "Image classification", "OCR", "Edge deployment"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Data",
        description:
          "We frame the decision the AI should improve, then assess and prepare the data that powers it.",
      },
      {
        step: "02",
        title: "Model & Evaluate",
        description:
          "We develop, fine-tune, and rigorously evaluate models against clear performance and safety benchmarks.",
      },
      {
        step: "03",
        title: "Deploy & Monitor",
        description:
          "We ship to production with MLOps — monitoring, drift defense, and ongoing optimization.",
      },
    ],
    tech: [
      {
        name: "PyTorch",
        description: "Deep Learning",
        useCase:
          "We use PyTorch to build and train custom deep learning models — from computer vision to NLP — because its flexibility lets us iterate quickly during research and still ship production-ready models.",
      },
      {
        name: "TensorFlow",
        description: "ML Platform",
        useCase:
          "TensorFlow powers the models we deploy at scale, especially where we need mobile or edge inference alongside a mature, well-supported production ecosystem.",
      },
      {
        name: "Hugging Face",
        description: "Transformers",
        useCase:
          "We use Hugging Face's model hub and Transformers library to fine-tune state-of-the-art language and vision models on your data instead of training from scratch — cutting both cost and time to launch.",
      },
      {
        name: "scikit-learn",
        description: "Classical ML",
        useCase:
          "For problems that don't need deep learning — fraud scoring, churn prediction, segmentation — we use scikit-learn's proven classical algorithms, which are faster to train, easier to explain, and cheaper to run in production.",
      },
      {
        name: "LangChain",
        description: "LLM Apps",
        useCase:
          "LangChain is how we wire large language models into real applications — chaining prompts, retrieval, and tools together to build assistants and automation that reason over your business data.",
      },
      {
        name: "Keras",
        description: "Deep Learning",
        useCase:
          "Keras gives us a fast, high-level way to prototype neural network architectures before committing to a full build-out, so we can validate an idea with your team before investing in production engineering.",
      },
      {
        name: "Docker",
        description: "Containerization",
        useCase:
          "We package every model in Docker so it runs identically on our machines, your servers, and the cloud — no environment surprises when a model goes live.",
      },
      {
        name: "MLflow",
        description: "Experiment Tracking",
        useCase:
          "MLflow tracks every model version, its parameters, and its performance, so we can prove which model is live, reproduce results, and roll back safely if a new version underperforms.",
      },
    ],
    ctaTitle: "Ready to put AI to work?",
    ctaText:
      "Tell us the decision you want to improve and we'll recommend the right AI approach — from prototype to production.",
  },
  {
    slug: "data-science",
    badge: "Data Science",
    icon: BarChart3,
    cardTitle: "Data Science",
    title: "Data Science & Analytics",
    heroTitle: "Turn raw data into smarter decisions.",
    description:
      "Advanced analytics, insights, and data-driven decisions for your organization.",
    image: "/service/data-science.png",
    overview:
      "Transform raw data into powerful business insights. Our data science team helps you understand your data, find patterns, and make smarter decisions — translating findings into clear, actionable recommendations, not just charts.",
    outcomes: [
      "Exploratory data analysis (EDA)",
      "Predictive modeling & forecasting",
      "Data visualization & dashboards",
      "Business intelligence (BI)",
      "Data pipeline design and management",
    ],
    cta: "Unlock Your Data →",
    stats: [
      { value: "3×", label: "Faster reporting" },
      { value: "20+", label: "KPIs unified" },
      { value: "90%", label: "Forecast confidence" },
      { value: "1", label: "Single source of truth" },
    ],
    features: [
      {
        icon: LineChart,
        title: "Predictive Modeling & Forecasting",
        description:
          "Forecast demand, revenue, churn, and risk with models tuned to your business and validated for real-world use.",
        benefits: ["Demand forecasting", "Churn prediction", "Revenue modeling", "Risk scoring"],
      },
      {
        icon: PieChart,
        title: "Dashboards & Business Intelligence",
        description:
          "Decision-ready dashboards for leadership, operations, and growth — focused on the metrics that actually matter.",
        benefits: ["Executive dashboards", "Self-serve BI", "KPI design", "Cohort analysis"],
      },
      {
        icon: Gauge,
        title: "Data Pipelines & Quality",
        description:
          "Reliable pipelines that keep your data clean, connected, and trustworthy across every system.",
        benefits: ["ETL/ELT pipelines", "Data cleaning", "Entity matching", "Monitoring"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Listen & Define",
        description:
          "We learn the questions you need answered to make better decisions next week — not next year.",
      },
      {
        step: "02",
        title: "Analyze & Model",
        description:
          "We explore, visualize, and model your data, testing hypotheses and surfacing the real drivers.",
      },
      {
        step: "03",
        title: "Translate & Empower",
        description:
          "We deliver clear recommendations and train your team to read and explore the data themselves.",
      },
    ],
    tech: [
      {
        name: "Python",
        description: "Analysis",
        useCase:
          "Python is the backbone of our analysis work — its data ecosystem lets us go from raw data to a tested finding in one language, with no handoff friction between tools.",
      },
      {
        name: "pandas",
        description: "Data Wrangling",
        useCase:
          "Before any insight is possible, data has to be cleaned, joined, and reshaped — pandas is the tool we use to do that reliably, at the scale of a typical business's operational data.",
      },
      {
        name: "scikit-learn",
        description: "Modeling",
        useCase:
          "We use scikit-learn to build the predictive models behind forecasts and scoring — it's battle-tested and lets us explain to your team exactly why a model made a prediction.",
      },
      {
        name: "MySQL",
        description: "Database",
        useCase:
          "Most of the business systems we integrate with already run on MySQL — we work directly with it so your existing data doesn't need a costly migration before we can start delivering insight.",
      },
      {
        name: "Plotly",
        description: "Visualization",
        useCase:
          "Plotly lets us build interactive charts your team can actually explore — filter, zoom, drill down — instead of static images that only answer the question we thought to ask.",
      },
      {
        name: "Looker Studio",
        description: "Reporting",
        useCase:
          "For recurring reporting, we build dashboards in Looker Studio so your team can check the numbers themselves, daily, without waiting on us to run a new report.",
      },
      {
        name: "Airflow",
        description: "Pipelines",
        useCase:
          "Airflow schedules and monitors the data pipelines that keep your dashboards and models fed with fresh data automatically, so yesterday's numbers are always ready when you need them.",
      },
      {
        name: "Jupyter",
        description: "Notebooks",
        useCase:
          "We use Jupyter notebooks to explore your data and document our reasoning step by step, so any finding we hand over comes with a transparent, reviewable trail — not a black box.",
      },
    ],
    ctaTitle: "Unlock the insights in your data",
    ctaText:
      "From a messy spreadsheet to a connected view of your business — let's turn your data into decisions.",
  },
  {
    slug: "cybersecurity",
    badge: "Cybersecurity",
    icon: ShieldCheck,
    cardTitle: "Cybersecurity",
    title: "Cybersecurity",
    heroTitle: "Protect your business from modern threats.",
    description:
      "Enterprise-grade security from vulnerability assessment to full security architecture.",
    image: "/service/cybersercurity.png",
    overview:
      "Protect your business from modern cyber threats. We provide comprehensive security solutions from vulnerability assessment to full enterprise security architecture — and we help your team build the habits that keep you safe.",
    outcomes: [
      "Security audits & vulnerability assessments",
      "Penetration testing",
      "Security architecture design",
      "Incident response planning",
      "Employee security training",
    ],
    cta: "Secure Your Business →",
    stats: [
      { value: "360°", label: "Coverage" },
      { value: "<24h", label: "Incident response" },
      { value: "OWASP", label: "Aligned testing" },
      { value: "100%", label: "Confidential" },
    ],
    features: [
      {
        icon: Bug,
        title: "Assessments & Penetration Testing",
        description:
          "We find the weaknesses before attackers do — across web, mobile, APIs, and infrastructure — with clear, prioritized remediation.",
        benefits: ["Vulnerability scans", "Pen testing", "API security", "Remediation plans"],
      },
      {
        icon: Lock,
        title: "Security Architecture",
        description:
          "Design secure-by-default systems with hardened authentication, encryption, and least-privilege access.",
        benefits: ["Secure design", "Encryption", "Access control", "Cloud hardening"],
      },
      {
        icon: ShieldAlert,
        title: "Response & Awareness",
        description:
          "Be ready when it counts with incident response planning and practical staff security training.",
        benefits: ["Incident playbooks", "Monitoring", "Staff training", "Phishing drills"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We map your attack surface and test your systems to understand where real risk lives.",
      },
      {
        step: "02",
        title: "Harden",
        description:
          "We fix vulnerabilities and design defenses, prioritizing the highest-impact protections first.",
      },
      {
        step: "03",
        title: "Defend & Train",
        description:
          "We set up monitoring and response plans, and train your team to keep the business secure.",
      },
    ],
    tech: [
      {
        name: "Kali Linux",
        description: "Pentest OS",
        useCase:
          "Kali Linux is our penetration-testing toolkit — a full suite of security tools we use to safely simulate a real attacker and find the gaps before they do.",
      },
      {
        name: "Burp Suite",
        description: "Web Testing",
        useCase:
          "We use Burp Suite to probe your web applications for the vulnerabilities attackers actually exploit — injection flaws, broken authentication, exposed data — before they reach production.",
      },
      {
        name: "Splunk",
        description: "SIEM & Logs",
        useCase:
          "Splunk centralizes your security logs so we can detect suspicious activity across your systems in one place, instead of chasing scattered logs after an incident has already happened.",
      },
      {
        name: "Metasploit",
        description: "Exploitation",
        useCase:
          "Metasploit lets us verify that a vulnerability we find is actually exploitable — not just theoretical — so your fixes are prioritized by real risk, not guesswork.",
      },
      {
        name: "Wireshark",
        description: "Traffic Analysis",
        useCase:
          "When something looks wrong on the network, Wireshark lets us inspect the actual traffic packet by packet to find the root cause instead of speculating.",
      },
      {
        name: "Cloudflare",
        description: "Edge Security",
        useCase:
          "We put Cloudflare in front of your public-facing systems to absorb DDoS attacks and filter malicious traffic before it ever reaches your servers.",
      },
      {
        name: "Elastic",
        description: "Search & SIEM",
        useCase:
          "Elastic gives us fast, searchable storage for security and application logs, so investigating an incident takes minutes of searching instead of hours of grepping through files.",
      },
      {
        name: "Okta",
        description: "Identity & Access",
        useCase:
          "We use Okta to enforce single sign-on and multi-factor authentication across your systems, so a single compromised password can't become a company-wide breach.",
      },
    ],
    ctaTitle: "Secure your business today",
    ctaText:
      "Whether you need a one-off assessment or a full security program, we'll help you stay protected.",
  },
  {
    slug: "big-data",
    badge: "Big Data",
    icon: Database,
    cardTitle: "Big Data Analytics",
    title: "Big Data Analytics",
    heroTitle: "Handle massive datasets at scale.",
    description:
      "Infrastructure that processes, stores, and analyzes large-scale data in real time.",
    image: "/service/bigdata.png",
    overview:
      "Handle massive datasets at scale. We design and build data infrastructure that processes, stores, and analyzes large volumes of data in real time — so insight keeps up with the speed of your business.",
    outcomes: [
      "Big data architecture design",
      "Real-time data streaming pipelines",
      "Data lake & data warehouse setup",
      "ETL/ELT pipeline development",
      "Scalable cloud data infrastructure",
    ],
    cta: "Scale Your Data →",
    stats: [
      { value: "TB+", label: "Scale handled" },
      { value: "Real-time", label: "Streaming" },
      { value: "99.9%", label: "Pipeline uptime" },
      { value: "Cloud", label: "Native infra" },
    ],
    features: [
      {
        icon: Server,
        title: "Data Lakes & Warehouses",
        description:
          "Centralize everything into a scalable lake or warehouse that's fast to query and easy to govern.",
        benefits: ["Data lakes", "Warehouses", "Governance", "Cost optimization"],
      },
      {
        icon: Workflow,
        title: "Real-Time Streaming Pipelines",
        description:
          "Ingest and process events as they happen for live dashboards, alerts, and instant decisions.",
        benefits: ["Event streaming", "Stream processing", "Live alerts", "Low latency"],
      },
      {
        icon: Layers,
        title: "ETL/ELT Engineering",
        description:
          "Robust pipelines that move and transform data reliably across all your systems.",
        benefits: ["ETL/ELT", "Orchestration", "Data quality", "Scheduling"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Architect",
        description:
          "We design a data architecture sized to your volume, velocity, and budget.",
      },
      {
        step: "02",
        title: "Build Pipelines",
        description:
          "We engineer batch and streaming pipelines that move data reliably end-to-end.",
      },
      {
        step: "03",
        title: "Scale & Operate",
        description:
          "We deploy on the cloud with monitoring and cost controls so it scales smoothly.",
      },
    ],
    tech: [
      {
        name: "Apache Spark",
        description: "Processing",
        useCase:
          "Apache Spark lets us process datasets too large for a single machine — transforming millions of records in minutes instead of hours by spreading the work across a cluster.",
      },
      {
        name: "Kafka",
        description: "Streaming",
        useCase:
          "We use Kafka to move data in real time between your systems — so an order, a payment, or a sensor reading is available to every system that needs it within seconds, not overnight batches.",
      },
      {
        name: "Airflow",
        description: "Orchestration",
        useCase:
          "Airflow orchestrates the full chain of jobs behind your data platform — extracting, transforming, and loading data on schedule, with alerts if any step fails.",
      },
      {
        name: "PostgreSQL",
        description: "Database",
        useCase:
          "PostgreSQL is our default operational database — reliable, SQL-standard, and powerful enough to handle both transactional workloads and analytical queries without a second system.",
      },
      {
        name: "BigQuery",
        description: "Warehouse",
        useCase:
          "For businesses already on Google Cloud, we use BigQuery as the analytical warehouse — it can query billions of rows in seconds without you managing any infrastructure.",
      },
      {
        name: "Snowflake",
        description: "Warehouse",
        useCase:
          "Snowflake gives us a cloud data warehouse that scales storage and compute independently, so you pay for what you use as your data grows, without a costly re-platform later.",
      },
      {
        name: "Hadoop",
        description: "Big Data",
        useCase:
          "For organizations with large on-premises datasets, Hadoop lets us store and process that data across commodity servers instead of requiring expensive specialized hardware.",
      },
      {
        name: "Docker",
        description: "Containers",
        useCase:
          "We containerize every stage of the data pipeline with Docker, so the exact same processing job runs identically in development, testing, and production.",
      },
    ],
    ctaTitle: "Scale your data with confidence",
    ctaText:
      "From a single warehouse to real-time streaming, we'll build infrastructure that grows with you.",
  },
  {
    slug: "software",
    badge: "Software Engineering",
    icon: Code2,
    cardTitle: "Software Engineering",
    title: "Software Engineering",
    heroTitle: "Reliable, scalable, beautiful software.",
    description:
      "Full-stack web, mobile, and backend development, built for performance.",
    image: "/service/softwareengineer.png",
    overview:
      "From mobile apps to enterprise backends, we build reliable, scalable, and beautiful software. Every line of code is written with performance and maintainability in mind — and an Africa-first eye for mobile money, local languages, and real infrastructure.",
    outcomes: [
      "Mobile app development (iOS & Android — React Native)",
      "Web app development (React.js, Django, Node.js)",
      "API design & backend development",
      "Database design & optimization",
      "Cloud deployment & DevOps",
    ],
    cta: "Build With Us →",
    stats: [
      { value: "iOS+Android", label: "One codebase" },
      { value: "99.9%", label: "Uptime target" },
      { value: "Mobile-first", label: "By default" },
      { value: "2", label: "Products shipped" },
    ],
    features: [
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
          "Cross-platform iOS and Android apps with React Native — fast to build, native in feel, and built for real-world connectivity.",
        benefits: ["React Native", "iOS & Android", "Offline-friendly", "Mobile money"],
      },
      {
        icon: Globe,
        title: "Web Platforms",
        description:
          "Modern, responsive web applications with React, Django, and Node.js that are fast and easy to maintain.",
        benefits: ["React.js", "Django", "Node.js", "Responsive UI"],
      },
      {
        icon: Boxes,
        title: "APIs & Backends",
        description:
          "Well-designed APIs, optimized databases, and scalable backends that power everything else.",
        benefits: ["API design", "Database design", "Auth & security", "Scalability"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Design",
        description:
          "We define scope, architecture, and a clear roadmap built around your users.",
      },
      {
        step: "02",
        title: "Build & Iterate",
        description:
          "We develop, test, and ship in fast iterations with frequent checkpoints.",
      },
      {
        step: "03",
        title: "Launch & Support",
        description:
          "We deploy to the cloud and provide ongoing support and improvements.",
      },
    ],
    tech: [
      {
        name: "React",
        description: "Web UI",
        useCase:
          "We build web interfaces in React because its component model lets us ship fast without sacrificing maintainability — your product can grow feature by feature without a rewrite.",
      },
      {
        name: "React Native",
        description: "Mobile",
        useCase:
          "React Native lets us build one mobile codebase that ships to both iOS and Android, cutting development time and cost versus building two separate native apps — this is what powers TanzaBuild and Florré.",
      },
      {
        name: "Node.js",
        description: "Backend",
        useCase:
          "Node.js powers many of our backend APIs — using JavaScript across the whole stack means faster development and a smaller, more focused engineering team for your project.",
      },
      {
        name: "Django",
        description: "Backend",
        useCase:
          "For applications that need strong data modeling and admin tooling out of the box, we use Django — it's what powers TanzaBuild's backend, handling contractors, materials, and orders reliably.",
      },
      {
        name: "PostgreSQL",
        description: "Database",
        useCase:
          "PostgreSQL is our default choice for application data — it's rock-solid, open-source, and scales from a first prototype to millions of users without switching databases.",
      },
      {
        name: "Supabase",
        description: "BaaS",
        useCase:
          "For projects that need to move fast, Supabase gives us a production-grade Postgres database, authentication, and file storage out of the box — so we spend engineering time on your product, not infrastructure.",
      },
      {
        name: "Firebase",
        description: "Realtime",
        useCase:
          "We use Firebase when an app needs real-time updates — live chat, live tracking, live notifications — syncing instantly across every connected device.",
      },
      {
        name: "TypeScript",
        description: "Type Safety",
        useCase:
          "We write in TypeScript, not plain JavaScript, because catching errors while coding — instead of after a client reports them — means fewer bugs reach your users.",
      },
    ],
    ctaTitle: "Let's build your product",
    ctaText:
      "From an MVP to a production platform, we'll build software your users love and your team can maintain.",
  },
  {
    slug: "cloud-devops",
    badge: "Cloud & DevOps",
    icon: Cloud,
    cardTitle: "Cloud & DevOps",
    title: "Cloud & DevOps",
    heroTitle: "Ship faster. Run reliably. Sleep at night.",
    description:
      "Cloud infrastructure, CI/CD, and automation so your software ships fast and stays up.",
    image: "/service/devops.png",
    overview:
      "We set up the cloud infrastructure and automation that lets your team ship confidently and operate reliably. From CI/CD pipelines to containerized deployments and observability, we make releases boring — in the best way.",
    outcomes: [
      "Cloud architecture & migration",
      "CI/CD pipeline automation",
      "Containerization & orchestration",
      "Infrastructure as Code (IaC)",
      "Monitoring, logging & observability",
    ],
    cta: "Modernize Your Stack →",
    stats: [
      { value: "10×", label: "Faster releases" },
      { value: "99.9%", label: "Uptime" },
      { value: "Zero", label: "Manual deploys" },
      { value: "IaC", label: "Reproducible" },
    ],
    features: [
      {
        icon: GitBranch,
        title: "CI/CD Automation",
        description:
          "Automated build, test, and deploy pipelines so every change ships safely with one click — or none.",
        benefits: ["Automated pipelines", "Safe rollbacks", "Testing gates", "Faster releases"],
      },
      {
        icon: Cloud,
        title: "Cloud Architecture & IaC",
        description:
          "Right-sized, secure cloud infrastructure defined as code so it's reproducible, auditable, and cost-aware.",
        benefits: ["Cloud setup", "Infrastructure as Code", "Cost optimization", "Migration"],
      },
      {
        icon: Activity,
        title: "Observability & Reliability",
        description:
          "Monitoring, logging, and alerting that catch problems before your users do.",
        benefits: ["Monitoring", "Centralized logs", "Alerting", "Uptime SLOs"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We review your current setup, deployment flow, and reliability pain points.",
      },
      {
        step: "02",
        title: "Automate",
        description:
          "We containerize, define infrastructure as code, and build CI/CD pipelines.",
      },
      {
        step: "03",
        title: "Observe & Optimize",
        description:
          "We add monitoring and tune for reliability, performance, and cost.",
      },
    ],
    tech: [
      {
        name: "Docker",
        description: "Containers",
        useCase:
          "Docker packages your application and everything it needs to run into one portable unit, eliminating environment mismatches between development, staging, and production.",
      },
      {
        name: "Kubernetes",
        description: "Orchestration",
        useCase:
          "For applications that need to handle real traffic growth, Kubernetes automatically scales, restarts, and load-balances your services — so a spike in demand doesn't mean downtime.",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD",
        useCase:
          "Every code change we ship runs through automated tests and deployment via GitHub Actions, so releases happen safely and consistently, without manual, error-prone deployment steps.",
      },
      {
        name: "Terraform",
        description: "IaC",
        useCase:
          "We define your cloud infrastructure as code with Terraform, so your environment is documented, version-controlled, and reproducible — not a fragile setup only one engineer understands.",
      },
      {
        name: "Vercel",
        description: "Deployment",
        useCase:
          "For fast-moving frontend projects, we deploy on Vercel, giving you instant global delivery and automatic preview deployments for every change before it goes live.",
      },
      {
        name: "Railway",
        description: "Deployment",
        useCase:
          "Railway lets us deploy and manage backend services quickly for projects that need simple, reliable hosting without the overhead of managing raw cloud infrastructure.",
      },
      {
        name: "Grafana",
        description: "Dashboards",
        useCase:
          "Grafana turns your system's metrics into live dashboards, so your team can see performance and health at a glance instead of waiting for something to break.",
      },
      {
        name: "Prometheus",
        description: "Metrics",
        useCase:
          "Prometheus continuously collects metrics from your systems and can alert us the moment something looks wrong — often before your users notice.",
      },
    ],
    ctaTitle: "Modernize your delivery pipeline",
    ctaText:
      "Let's make your deployments fast, automated, and reliable — so your team can focus on building.",
  },
];

export const getServiceBySlug = (slug?: string): Service | undefined =>
  services.find((s) => s.slug === slug);

// Maps a tool name to its logo (in /public/uploads/tech). Tools without a
// recognizable brand mark (AWS, SQL, OWASP, SIEM, Zero Trust, etc.) are
// intentionally omitted so the UI falls back to the tool's initial letter.
const TECH_LOGOS: Record<string, string> = {
  PyTorch: "/uploads/tech/pytorch.svg",
  TensorFlow: "/uploads/tech/tensorflow.svg",
  "Hugging Face": "/uploads/tech/huggingface.svg",
  "scikit-learn": "/uploads/tech/scikitlearn.svg",
  LangChain: "/uploads/tech/langchain.svg",
  Docker: "/uploads/tech/docker.svg",
  MLflow: "/uploads/tech/mlflow.svg",
  Python: "/uploads/tech/python.svg",
  pandas: "/uploads/tech/pandas.svg",
  "Looker Studio": "/uploads/tech/looker.svg",
  Airflow: "/uploads/tech/apacheairflow.svg",
  Jupyter: "/uploads/tech/jupyter.svg",
  "Burp Suite": "/uploads/tech/burpsuite.svg",
  Metasploit: "/uploads/tech/metasploit.svg",
  Wireshark: "/uploads/tech/wireshark.svg",
  Cloudflare: "/uploads/tech/cloudflare.svg",
  "Apache Spark": "/uploads/tech/apachespark.svg",
  Kafka: "/uploads/tech/apachekafka.svg",
  BigQuery: "/uploads/tech/googlebigquery.svg",
  React: "/uploads/tech/react.svg",
  "React Native": "/uploads/tech/react.svg",
  "Node.js": "/uploads/tech/nodedotjs.svg",
  Django: "/uploads/tech/django.svg",
  PostgreSQL: "/uploads/tech/postgresql.svg",
  Supabase: "/uploads/tech/supabase.svg",
  Firebase: "/uploads/tech/firebase.svg",
  TypeScript: "/uploads/tech/typescript.svg",
  Kubernetes: "/uploads/tech/kubernetes.svg",
  "GitHub Actions": "/uploads/tech/github.svg",
  Terraform: "/uploads/tech/terraform.svg",
  Railway: "/uploads/tech/railway.svg",
  Grafana: "/uploads/tech/grafana.svg",
  Prometheus: "/uploads/tech/prometheus.svg",
  Keras: "/uploads/tech/keras.svg",
  MySQL: "/uploads/tech/mysql.svg",
  Plotly: "/uploads/tech/plotly.svg",
  "Kali Linux": "/uploads/tech/kalilinux.svg",
  Splunk: "/uploads/tech/splunk.svg",
  Elastic: "/uploads/tech/elastic.svg",
  Okta: "/uploads/tech/okta.svg",
  Snowflake: "/uploads/tech/snowflake.svg",
  Hadoop: "/uploads/tech/apachehadoop.svg",
  Vercel: "/uploads/tech/vercel.svg",
  Resend: "/uploads/tech/resend.svg",
  cPanel: "/uploads/tech/cpanel.svg",
  Selcom: "/uploads/tech/selcom.png",
};

export const getTechLogo = (name: string): string | undefined => TECH_LOGOS[name];

// Flat single-colour logos need theme help so they stay visible:
//  • DARK_LOGOS  = near-black marks → invert in dark theme (black → white).
//  • LIGHT_LOGOS = white marks      → invert in light theme (white → black).
const DARK_LOGOS = new Set(["Resend", "Railway", "Vercel", "GitHub Actions"]);
const LIGHT_LOGOS = new Set(["Selcom"]);
export const logoToneClass = (name: string): string =>
  DARK_LOGOS.has(name)
    ? "dark:invert"
    : LIGHT_LOGOS.has(name)
      ? "invert dark:invert-0"
      : "";
