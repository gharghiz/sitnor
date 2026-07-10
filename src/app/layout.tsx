import type { Metadata } from "next";
import "./globals.css";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: {
    default: "SITNOR Web Design — Agence web premium à Casablanca",
    template: "%s | SITNOR Web Design",
  },
  description: content.site.description,
  keywords: content.site.keywords,
  authors: [{ name: "SITNOR Web Design", url: "https://sitnor.com" }],
  creator: "SITNOR Web Design",
  metadataBase: new URL("https://sitnor.com"),
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://sitnor.com",
    title: "SITNOR Web Design — Agence web premium à Casablanca",
    description: content.site.description,
    siteName: "SITNOR Web Design",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "SITNOR Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SITNOR Web Design — Agence web premium",
    description: content.site.description,
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SITNOR Web Design",
    url: "https://sitnor.com",
    logo: "https://sitnor.com/logo.png",
    description: content.site.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: content.site.contact.phone,
      contactType: "customer service",
      email: content.site.contact.email,
      areaServed: "MA",
      availableLanguage: ["French", "English", "Arabic"],
    },
    sameAs: [content.site.contact.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
