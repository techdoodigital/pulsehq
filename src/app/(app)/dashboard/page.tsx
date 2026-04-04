"use client";

import { useSession } from "next-auth/react";
import {
  Search,
  BarChart3,
  ArrowRight,
  Rocket,
  BookOpen,
  Settings,
} from "lucide-react";
import Link from "next/link";

const tools = [
  {
    name: "PagePulse",
    tagline: "AI-Powered Content Audit",
    description: "Audit your content across 9 dimensions for quality and AI citability.",
    color: "teal",
    icon: Search,
    href: "https://pagepulse-pied.vercel.app",
    external: true,
  },
  {
    name: "ContentPulse",
    tagline: "Content Health Monitoring",
    description: "Monitor content performance and detect decay with GSC integration.",
    color: "orange",
    icon: BarChart3,
    href: "https://contentpulse-nu.vercel.app",
    external: true,
  },
];

const gettingStarted = [
  {
    icon: Rocket,
    title: "Run your first audit",
    description: "Launch PagePulse and audit a URL to see your Content Quality Score.",
    href: "https://pagepulse-pied.vercel.app",
    external: true,
  },
  {
    icon: BookOpen,
    title: "Learn about AEO",
    description: "Understand Answer Engine Optimization and why it matters.",
    href: "/what-is-aeo",
    external: false,
  },
  {
    icon: Settings,
    title: "Connect Google Search Console",
    description: "Set up ContentPulse to monitor your content health automatically.",
    href: "https://contentpulse-nu.vercel.app",
    external: true,
  },
];

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">
          Welcome back{session?.user?.name ? `, ${session.user.name}` : ""}
        </h1>
        <p className="text-slate-400 mt-1">
          Your content command center. Launch tools, track progress, and manage your content strategy.
        </p>
      </div>

      {/* Product cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.name}
              className={`bg-slate-900 border rounded-xl p-6 transition-all hover:scale-[1.01] ${
                tool.color === "teal"
                  ? "border-slate-800 hover:border-teal-500/50"
                  : "border-slate-800 hover:border-orange-500/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    tool.color === "teal" ? "bg-teal-500/10" : "bg-orange-500/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      tool.color === "teal" ? "text-teal-400" : "text-orange-400"
                    }`}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{tool.name}</h2>
                  <p
                    className={`text-xs ${
                      tool.color === "teal" ? "text-teal-400" : "text-orange-400"
                    }`}
                  >
                    {tool.tagline}
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4">{tool.description}</p>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  tool.color === "teal"
                    ? "bg-teal-600 hover:bg-teal-500 text-white"
                    : "bg-orange-600 hover:bg-orange-500 text-white"
                }`}
              >
                Launch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Getting Started */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Getting Started</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {gettingStarted.map((item) => {
            const Icon = item.icon;
            const className = "bg-slate-900 border border-slate-800 rounded-lg p-5 hover:border-red-500/30 transition-colors group block";
            const content = (
              <>
                <Icon className="w-6 h-6 text-red-400 mb-3" />
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs">{item.description}</p>
              </>
            );

            return item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
