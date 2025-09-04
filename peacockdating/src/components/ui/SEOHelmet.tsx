import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultSEO = {
  title: "Peacock Dating — Men share, women choose",
  description:
    "Peacock Dating: a modern courtship meetup where men share on camera and women listen anonymously. Host-led interviews, private matching on mutual yes.",
  keywords:
    "dating, meetup, courtship, singles, relationships, matching, video dating, events, peacock dating, modern dating",
  image: "/images/peacock-logo-small.png",
  url: "https://peacockdating.online",
  type: "website" as const,
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  author,
  publishedTime,
  modifiedTime,
}) => {
  const seoTitle = title ? `${title} | Peacock Dating` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Peacock Dating",
    description: seoDescription,
    url: seoUrl,
    logo: {
      "@type": "ImageObject",
      url: `${seoUrl}${seoImage}`,
    },
    sameAs: [
      "https://www.meetup.com/peacock-dating/",
      "https://www.facebook.com/groups/1313564493759522",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
  };

  useEffect(() => {
    // Update document title
    document.title = seoTitle;

    // Function to set or update meta tag
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Function to set link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement;

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Basic Meta Tags
    setMetaTag("description", seoDescription);
    setMetaTag("keywords", seoKeywords);
    setMetaTag("author", author || "Peacock Dating");
    setMetaTag(
      "robots",
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );

    // Open Graph Meta Tags
    setMetaTag("og:title", seoTitle, true);
    setMetaTag("og:description", seoDescription, true);
    setMetaTag("og:image", `${seoUrl}${seoImage}`, true);
    setMetaTag("og:url", seoUrl, true);
    setMetaTag("og:type", type, true);
    setMetaTag("og:site_name", "Peacock Dating", true);
    setMetaTag("og:locale", "en_US", true);

    // Twitter Card Meta Tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", seoTitle);
    setMetaTag("twitter:description", seoDescription);
    setMetaTag("twitter:image", `${seoUrl}${seoImage}`);
    setMetaTag("twitter:site", "@peacockdating");

    // Article Meta Tags (if applicable)
    if (type === "article" && publishedTime) {
      setMetaTag("article:published_time", publishedTime, true);
    }
    if (type === "article" && modifiedTime) {
      setMetaTag("article:modified_time", modifiedTime, true);
    }
    if (type === "article" && author) {
      setMetaTag("article:author", author, true);
    }

    // Mobile and App Meta Tags
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");
    setMetaTag("format-detection", "telephone=no");
    setMetaTag("theme-color", "#004D7A");

    // Canonical URL
    setLinkTag("canonical", seoUrl);

    // Structured Data
    let structuredDataScript = document.querySelector(
      "#structured-data"
    ) as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.id = "structured-data";
      structuredDataScript.type = "application/ld+json";
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Preconnect links
    const preconnectUrls = [
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ];

    preconnectUrls.forEach((url) => {
      let linkElement = document.querySelector(
        `link[href="${url}"]`
      ) as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "preconnect");
        linkElement.setAttribute("href", url);
        if (url.includes("gstatic")) {
          linkElement.setAttribute("crossorigin", "anonymous");
        }
        document.head.appendChild(linkElement);
      }
    });
  }, [
    seoTitle,
    seoDescription,
    seoKeywords,
    seoImage,
    seoUrl,
    type,
    author,
    publishedTime,
    modifiedTime,
    structuredData,
  ]);

  // This component doesn't render anything
  return null;
};
