import { SITE_NAME, SITE_URL } from "./constants";
import type { BreadcrumbItem, FaqItem } from "./constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/ch777-logo.webp`,
    description:
      "Informational guides for CH777 Game users in Pakistan covering download, login, deposits, and withdrawals.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: string;
}) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    inLanguage: "en",
    ...(path === "/"
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/ch777-home-banner.webp`,
          },
        }
      : {}),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href === "/" ? "/" : item.href}`,
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CH777 Game",
    applicationCategory: "GameApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    url: `${SITE_URL}/ch777-download`,
    description:
      "Informational guide for downloading and installing the CH777 Game APK on Android devices.",
  };
}
