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
      { name: "PyTorch", description: "Deep Learning" },
      { name: "TensorFlow", description: "ML Platform" },
      { name: "Hugging Face", description: "Transformers" },
      { name: "scikit-learn", description: "Classical ML" },
      { name: "LangChain", description: "LLM Apps" },
      { name: "Keras", description: "Deep Learning" },
      { name: "Docker", description: "Containerization" },
      { name: "MLflow", description: "Experiment Tracking" },
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
      { name: "Python", description: "Analysis" },
      { name: "pandas", description: "Data Wrangling" },
      { name: "scikit-learn", description: "Modeling" },
      { name: "MySQL", description: "Database" },
      { name: "Plotly", description: "Visualization" },
      { name: "Looker Studio", description: "Reporting" },
      { name: "Airflow", description: "Pipelines" },
      { name: "Jupyter", description: "Notebooks" },
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
      { name: "Kali Linux", description: "Pentest OS" },
      { name: "Burp Suite", description: "Web Testing" },
      { name: "Splunk", description: "SIEM & Logs" },
      { name: "Metasploit", description: "Exploitation" },
      { name: "Wireshark", description: "Traffic Analysis" },
      { name: "Cloudflare", description: "Edge Security" },
      { name: "Elastic", description: "Search & SIEM" },
      { name: "Okta", description: "Identity & Access" },
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
      { name: "Apache Spark", description: "Processing" },
      { name: "Kafka", description: "Streaming" },
      { name: "Airflow", description: "Orchestration" },
      { name: "PostgreSQL", description: "Database" },
      { name: "BigQuery", description: "Warehouse" },
      { name: "Snowflake", description: "Warehouse" },
      { name: "Hadoop", description: "Big Data" },
      { name: "Docker", description: "Containers" },
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
      { name: "React", description: "Web UI" },
      { name: "React Native", description: "Mobile" },
      { name: "Node.js", description: "Backend" },
      { name: "Django", description: "Backend" },
      { name: "PostgreSQL", description: "Database" },
      { name: "Supabase", description: "BaaS" },
      { name: "Firebase", description: "Realtime" },
      { name: "TypeScript", description: "Type Safety" },
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
      { name: "Docker", description: "Containers" },
      { name: "Kubernetes", description: "Orchestration" },
      { name: "GitHub Actions", description: "CI/CD" },
      { name: "Terraform", description: "IaC" },
      { name: "Vercel", description: "Deployment" },
      { name: "Railway", description: "Deployment" },
      { name: "Grafana", description: "Dashboards" },
      { name: "Prometheus", description: "Metrics" },
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
};

export const getTechLogo = (name: string): string | undefined => TECH_LOGOS[name];
