/**
 * SEO Utility for managing page titles and meta tags
 */

export interface SEOConfig {
	title: string;
	description: string;
	keywords?: string;
	ogImage?: string;
	ogType?: string;
	canonicalUrl?: string;
}

export const defaultSEO: SEOConfig = {
	title: "Quantum Intelligence - AI & Data Science Solutions | quantumintelligence.co.tz",
	description: "Quantum Intelligence offers advanced AI and data science solutions for business analytics, machine learning operations, and enterprise AI deployment.",
	keywords: "AI, Machine Learning, Data Science, MLOps, Quantum Computing, Business Analytics",
	ogImage: "https://quantumintelligence.co.tz/uploads/GENAI.avif",
	ogType: "website",
};

const baseUrl = "https://quantumintelligence.co.tz";

export const setSEO = (config: SEOConfig) => {
	const finalConfig = { ...defaultSEO, ...config };

	// Set title
	document.title = finalConfig.title;

	// Update or create meta tags
	updateMetaTag("description", finalConfig.description);

	if (finalConfig.keywords) {
		updateMetaTag("keywords", finalConfig.keywords);
	}

	updateMetaTag("og:title", finalConfig.title, "property");
	updateMetaTag("og:description", finalConfig.description, "property");
	updateMetaTag("og:image", finalConfig.ogImage || defaultSEO.ogImage, "property");
	updateMetaTag("og:type", finalConfig.ogType || "website", "property");
	updateMetaTag("og:url", finalConfig.canonicalUrl || baseUrl, "property");

	updateMetaTag("twitter:title", finalConfig.title);
	updateMetaTag("twitter:description", finalConfig.description);
	updateMetaTag("twitter:image", finalConfig.ogImage || defaultSEO.ogImage);

	if (finalConfig.canonicalUrl) {
		updateCanonical(finalConfig.canonicalUrl);
	}
};

const updateMetaTag = (name: string, content: string, attribute: "name" | "property" = "name") => {
	let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

	if (!tag) {
		tag = document.createElement("meta");
		tag.setAttribute(attribute, name);
		document.head.appendChild(tag);
	}

	tag.content = content;
};

const updateCanonical = (url: string) => {
	let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;

	if (!link) {
		link = document.createElement("link");
		link.rel = "canonical";
		document.head.appendChild(link);
	}

	link.href = url;
};

export const pageSEO: { [key: string]: SEOConfig } = {
	home: {
		title: "Quantum Intelligence - AI & Data Science Solutions",
		description: "Advanced AI and data science solutions for enterprise. Quantum Analytics, MLOps, AI Studio, and more.",
		keywords: "AI, Machine Learning, Data Science, MLOps, Quantum Analytics, Business Intelligence",
		canonicalUrl: `${baseUrl}/`,
	},
	services: {
		title: "AI Services - Quantum Intelligence | quantumintelligence.co.tz",
		description: "Explore our comprehensive AI and data science services including MLOps, Quantum Analytics, and AI Studio solutions for your business.",
		keywords: "AI Services, Machine Learning Services, Data Science, MLOps Services, Quantum Analytics",
		canonicalUrl: `${baseUrl}/services`,
	},
	about: {
		title: "About Quantum Intelligence | Leading AI Solutions Provider",
		description: "Learn about Quantum Intelligence's mission, vision, and expertise in delivering advanced AI and data science solutions.",
		keywords: "About Quantum Intelligence, AI Company, Data Science Experts, Machine Learning Specialists",
		canonicalUrl: `${baseUrl}/about`,
	},
	contact: {
		title: "Contact Us - Quantum Intelligence | quantumintelligence.co.tz",
		description: "Get in touch with Quantum Intelligence for AI and data science solutions. Contact us for consultation and partnership opportunities.",
		keywords: "Contact, AI Consultation, Data Science Support, Partnership",
		canonicalUrl: `${baseUrl}/contact`,
	},
	blog: {
		title: "AI & Data Science Blog - Quantum Intelligence",
		description: "Latest articles and insights about artificial intelligence, machine learning, data science, and quantum technologies.",
		keywords: "AI Blog, Machine Learning Articles, Data Science Insights, Technology News",
		canonicalUrl: `${baseUrl}/blog`,
	},
	careers: {
		title: "Careers at Quantum Intelligence - Join Our Team",
		description: "Explore career opportunities at Quantum Intelligence. Join our team of AI and data science experts.",
		keywords: "Careers, Jobs, AI Careers, Data Science Jobs, Machine Learning Positions",
		canonicalUrl: `${baseUrl}/careers`,
	},
	industries: {
		title: "Industries - Quantum Intelligence AI Solutions",
		description: "Quantum Intelligence serves various industries including Finance, Telecommunications, Education, Healthcare, and more.",
		keywords: "Industries, Financial Services, Telecommunications, Education, Healthcare, Utilities",
		canonicalUrl: `${baseUrl}/industries`,
	},
	aiStudio: {
		title: "AI Studio - Build AI Applications | Quantum Intelligence",
		description: "AI Studio: A comprehensive platform for building, training, and deploying AI models without coding.",
		keywords: "AI Studio, No-Code AI, AI Platform, Machine Learning Tools",
		canonicalUrl: `${baseUrl}/ai-studio`,
	},
	mlops: {
		title: "MLOps Solutions - Production ML Pipelines | Quantum Intelligence",
		description: "Streamline your machine learning operations with our comprehensive MLOps platform and tools.",
		keywords: "MLOps, Machine Learning Operations, ML Pipeline, Model Deployment",
		canonicalUrl: `${baseUrl}/mlops`,
	},
	quantumGenAI: {
		title: "Quantum GenAI - Generative AI Solutions",
		description: "Harness the power of generative AI with our Quantum GenAI platform. Advanced LLM integration and custom AI models.",
		keywords: "Generative AI, GenAI, LLM, Large Language Models, AI Generation",
		canonicalUrl: `${baseUrl}/quantum-genai`,
	},
	quantumAnalytics: {
		title: "Deep Operator / Quantum Analytics - Advanced Data Analytics",
		description: "Unlock insights with Quantum Analytics. Advanced data analysis and visualization for enterprise intelligence.",
		keywords: "Analytics, Data Analytics, Quantum Analytics, Business Intelligence, Data Visualization",
		canonicalUrl: `${baseUrl}/deep-operator`,
	},
	quantumAnnotate: {
		title: "Quantum Annotate - Data Labeling & Annotation Platform",
		description: "High-quality data labeling and annotation services for machine learning with Quantum Annotate.",
		keywords: "Data Annotation, Data Labeling, ML Training Data, Dataset Preparation",
		canonicalUrl: `${baseUrl}/quantum-annotate`,
	},
	resources: {
		title: "Resources - AI & ML Learning Materials | Quantum Intelligence",
		description: "Access guides, tutorials, and resources for AI, machine learning, and data science.",
		keywords: "Resources, Guides, Tutorials, Learning Materials, AI Documentation",
		canonicalUrl: `${baseUrl}/resources`,
	},
	privacy: {
		title: "Privacy Policy - Quantum Intelligence",
		description: "Read our privacy policy to understand how Quantum Intelligence handles your data.",
		keywords: "Privacy Policy, Data Protection, GDPR",
		canonicalUrl: `${baseUrl}/privacy`,
	},
	terms: {
		title: "Terms of Service - Quantum Intelligence",
		description: "Review our terms of service and conditions of use for Quantum Intelligence services.",
		keywords: "Terms of Service, Terms and Conditions, Legal",
		canonicalUrl: `${baseUrl}/terms`,
	},
	faq: {
		title: "FAQ - Frequently Asked Questions | Quantum Intelligence",
		description: "Find answers to frequently asked questions about Quantum Intelligence services and solutions.",
		keywords: "FAQ, Help, Questions, Support, Information",
		canonicalUrl: `${baseUrl}/faq`,
	},
};
