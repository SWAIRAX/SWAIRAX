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
	title: "SWAIRAX - AI, Data Science & Software Engineering | swairax.com",
	description: "SWAIRAX is an Africa-first technology company based in Tanzania, offering AI, Data Science, Cybersecurity, Big Data Analytics, and Software Engineering solutions.",
	keywords: "AI, Data Science, Cybersecurity, Big Data Analytics, Software Engineering, Tanzania, Africa Tech",
	ogImage: "https://swairax.com/uploads/logo.png",
	ogType: "website",
};

const baseUrl = "https://swairax.com";

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
		title: "SWAIRAX - Building Africa's Digital Future",
		description: "SWAIRAX delivers cutting-edge AI, Data Science, Cybersecurity, Big Data, and Software Engineering solutions — built for Africa, ready for the world.",
		keywords: "AI, Data Science, Cybersecurity, Big Data, Software Engineering, Tanzania, Africa Tech",
		canonicalUrl: `${baseUrl}/`,
	},
	services: {
		title: "Our Services - SWAIRAX | swairax.com",
		description: "End-to-end technology solutions: Artificial Intelligence, Data Science, Cybersecurity, Big Data Analytics, and Software Engineering.",
		keywords: "AI Services, Data Science, Cybersecurity, Big Data Analytics, Software Engineering",
		canonicalUrl: `${baseUrl}/services`,
	},
	about: {
		title: "About SWAIRAX | Africa-First Technology Company",
		description: "A technology company born in Tanzania, building for the world. Learn about SWAIRAX's mission, vision, values, and team.",
		keywords: "About SWAIRAX, Tanzania Tech Company, Africa Technology, AI Company",
		canonicalUrl: `${baseUrl}/about`,
	},
	products: {
		title: "Our Products - SWAIRAX | TanzaBuild & Florré",
		description: "Built in Tanzania, designed for Africa. Explore TanzaBuild, Tanzania's construction services platform, and Florré, our luxury salon booking app.",
		keywords: "TanzaBuild, Florré, Construction Tech, Beauty Tech, Tanzania Apps",
		canonicalUrl: `${baseUrl}/products`,
	},
	sectors: {
		title: "Sectors We Empower - SWAIRAX",
		description: "The industries SWAIRAX helps work smarter and produce more — agriculture, manufacturing, construction, retail, finance, healthcare, education, energy, telecom, and more.",
		keywords: "Sectors, Industries, Agriculture, Manufacturing, Construction, Retail, Finance, Healthcare, Tanzania",
		canonicalUrl: `${baseUrl}/sectors`,
	},
	contact: {
		title: "Contact Us - SWAIRAX | swairax.com",
		description: "Have a project in mind? Get in touch with SWAIRAX for AI, Data Science, Cybersecurity, Big Data, and Software Engineering solutions.",
		keywords: "Contact, Project Inquiry, Tanzania Tech, Consultation",
		canonicalUrl: `${baseUrl}/contact`,
	},
	blog: {
		title: "SWAIRAX Blog - AI, Data Science & Africa Tech",
		description: "Insights on AI, Data Science, Cybersecurity, and Technology in Africa from the SWAIRAX team.",
		keywords: "AI Blog, Data Science Insights, Africa Tech, Technology News",
		canonicalUrl: `${baseUrl}/blog`,
	},
	careers: {
		title: "Careers at SWAIRAX - Join Our Team",
		description: "Help us build Africa's digital future. Explore career opportunities at SWAIRAX.",
		keywords: "Careers, Jobs, Tech Jobs Tanzania, Software Engineering Jobs, Africa Tech Careers",
		canonicalUrl: `${baseUrl}/careers`,
	},
	industries: {
		title: "Industries - SWAIRAX Technology Solutions",
		description: "SWAIRAX serves various industries including Finance, Telecommunications, Education, Healthcare, and more.",
		keywords: "Industries, Financial Services, Telecommunications, Education, Healthcare, Utilities",
		canonicalUrl: `${baseUrl}/industries`,
	},
	aiStudio: {
		title: "AI Studio - Build AI Applications | SWAIRAX",
		description: "AI Studio: A comprehensive platform for building, training, and deploying AI models without coding.",
		keywords: "AI Studio, No-Code AI, AI Platform, Machine Learning Tools",
		canonicalUrl: `${baseUrl}/ai-studio`,
	},
	mlops: {
		title: "MLOps Solutions - Production ML Pipelines | SWAIRAX",
		description: "Streamline your machine learning operations with our comprehensive MLOps platform and tools.",
		keywords: "MLOps, Machine Learning Operations, ML Pipeline, Model Deployment",
		canonicalUrl: `${baseUrl}/mlops`,
	},
	quantumGenAI: {
		title: "Generative AI Solutions | SWAIRAX",
		description: "Harness the power of generative AI. Advanced LLM integration and custom AI models.",
		keywords: "Generative AI, GenAI, LLM, Large Language Models, AI Generation",
		canonicalUrl: `${baseUrl}/quantum-genai`,
	},
	quantumAnalytics: {
		title: "Data Analytics - Advanced Insights | SWAIRAX",
		description: "Unlock insights with advanced data analysis and visualization for enterprise intelligence.",
		keywords: "Analytics, Data Analytics, Business Intelligence, Data Visualization",
		canonicalUrl: `${baseUrl}/deep-operator`,
	},
	quantumAnnotate: {
		title: "Data Labeling & Annotation Platform | SWAIRAX",
		description: "High-quality data labeling and annotation services for machine learning.",
		keywords: "Data Annotation, Data Labeling, ML Training Data, Dataset Preparation",
		canonicalUrl: `${baseUrl}/quantum-annotate`,
	},
	resources: {
		title: "Resources - AI & ML Learning Materials | SWAIRAX",
		description: "Access guides, tutorials, and resources for AI, machine learning, and data science.",
		keywords: "Resources, Guides, Tutorials, Learning Materials, AI Documentation",
		canonicalUrl: `${baseUrl}/resources`,
	},
	privacy: {
		title: "Privacy Policy - SWAIRAX",
		description: "Read our privacy policy to understand how SWAIRAX handles your data.",
		keywords: "Privacy Policy, Data Protection, GDPR",
		canonicalUrl: `${baseUrl}/privacy`,
	},
	terms: {
		title: "Terms of Service - SWAIRAX",
		description: "Review our terms of service and conditions of use for SWAIRAX services.",
		keywords: "Terms of Service, Terms and Conditions, Legal",
		canonicalUrl: `${baseUrl}/terms`,
	},
	faq: {
		title: "FAQ - Frequently Asked Questions | SWAIRAX",
		description: "Find answers to frequently asked questions about SWAIRAX services and solutions.",
		keywords: "FAQ, Help, Questions, Support, Information",
		canonicalUrl: `${baseUrl}/faq`,
	},
};
