import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CitabilityOS - Your Content Command Center",
  description:
    "CitabilityOS is the unified platform for content teams. Audit content quality, monitor search performance, detect content decay, and optimize for AI search engines - all from one dashboard.",
  keywords: [
    "content audit",
    "content decay",
    "AI citability",
    "answer engine optimization",
    "AEO",
    "content monitoring",
    "search console",
    "content quality",
    "AI search optimization",
    "CitabilityOS",
    "CitabilityOS",
    "CiteAudit",
    "CiteWatch",
  ],
  openGraph: {
    title: "CitabilityOS - Your Content Command Center",
    description:
      "One platform, every tool you need to dominate search. Audit quality, detect decay, and optimize for AI search engines.",
    type: "website",
    url: "https://citabilityos.io",
    siteName: "CitabilityOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "CitabilityOS - Your Content Command Center",
    description:
      "One platform, every tool you need to dominate search. Audit quality, detect decay, and optimize for AI search engines.",
  },
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CitabilityOS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "CitabilityOS is a unified content command center for auditing content quality, monitoring search performance, and optimizing for AI search engines.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "CitabilityOS",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CitabilityOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CitabilityOS is a unified content command center. It brings together tools like CiteAudit for content auditing and CiteWatch for performance monitoring into a single platform.",
      },
    },
    {
      "@type": "Question",
      name: "How does CitabilityOS help with AI search optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CitabilityOS includes tools that analyze your content across multiple dimensions including AI citability, helping you optimize for answer engines like ChatGPT and Perplexity.",
      },
    },
    {
      "@type": "Question",
      name: "What tools are included in CitabilityOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CitabilityOS currently includes CiteAudit (AI-powered content audit tool) and CiteWatch (content health monitoring). More tools are planned for the future.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
