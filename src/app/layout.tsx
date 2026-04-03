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
  title: "PulseHQ - Your Content Command Center",
  description:
    "PulseHQ is the unified platform for content teams. Audit content quality, monitor search performance, detect content decay, and optimize for AI search engines - all from one dashboard.",
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
    "PulseHQ",
    "PulseHQ",
    "PagePulse",
    "ContentPulse",
  ],
  openGraph: {
    title: "PulseHQ - Your Content Command Center",
    description:
      "One platform, every tool you need to dominate search. Audit quality, detect decay, and optimize for AI search engines.",
    type: "website",
    url: "https://pulsehq.io",
    siteName: "PulseHQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseHQ - Your Content Command Center",
    description:
      "One platform, every tool you need to dominate search. Audit quality, detect decay, and optimize for AI search engines.",
  },
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PulseHQ",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "PulseHQ is a unified content command center for auditing content quality, monitoring search performance, and optimizing for AI search engines.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "PulseHQ",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is PulseHQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PulseHQ is a unified content command center. It brings together tools like PagePulse for content auditing and ContentPulse for performance monitoring into a single platform.",
      },
    },
    {
      "@type": "Question",
      name: "How does PulseHQ help with AI search optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PulseHQ includes tools that analyze your content across multiple dimensions including AI citability, helping you optimize for answer engines like ChatGPT and Perplexity.",
      },
    },
    {
      "@type": "Question",
      name: "What tools are included in PulseHQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PulseHQ currently includes PagePulse (AI-powered content audit tool) and ContentPulse (content health monitoring). More tools are planned for the future.",
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
