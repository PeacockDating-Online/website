import { Helmet } from "react-helmet-async";

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
    "dating, meetup, courtship, singles, relationships, matching, video dating, events",
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
      // Add your social media URLs here
      "https://instagram.com/peacockdating",
      "https://facebook.com/peacockdating",
      "https://twitter.com/peacockdating",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
  };

  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Peacock Dating Meetup",
    description:
      "A modern courtship meetup where men share stories on camera and women listen anonymously",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    organizer: {
      "@type": "Organization",
      name: "Peacock Dating",
      url: seoUrl,
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author || "Peacock Dating"} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${seoUrl}${seoImage}`} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Peacock Dating" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${seoUrl}${seoImage}`} />
      <meta name="twitter:site" content="@peacockdating" />
      <meta name="twitter:creator" content="@peacockdating" />

      {/* Article Meta Tags (if applicable) */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />

      {/* Additional SEO Meta Tags */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#004D7A" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Event Structured Data (for event pages) */}
      {type === "website" && (
        <script type="application/ld+json">
          {JSON.stringify(eventStructuredData)}
        </script>
      )}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" href="/images/peacock-logo-small.png" />
      <link rel="apple-touch-icon" href="/images/peacock-logo-small.png" />
      <meta
        name="msapplication-TileImage"
        content="/images/peacock-logo-small.png"
      />
    </Helmet>
  );
};
