"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Search,
  BarChart3,
  Brain,
  FileCheck,
  AlertTriangle,
  Globe,
  LineChart,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";
import NewsletterForm from "@/components/newsletter-form";

const benefits = [
  {
    icon: TrendingUp,
    title: "Publish Content That Ranks From Day One",
    description:
      "Stop guessing whether your content is good enough. CiteAudit scores every page across 9 dimensions before you hit publish, so you launch with confidence.",
    span: "md:col-span-2",
  },
  {
    icon: AlertTriangle,
    title: "Catch Declining Pages Before Traffic Drops",
    description:
      "CiteWatch monitors your published pages 24/7 and alerts you the moment a page starts losing rankings or traffic.",
    span: "",
  },
  {
    icon: Globe,
    title: "Get Cited by AI Search Engines",
    description:
      "ChatGPT, Perplexity, and Google AI Overviews are changing how people find information. Our tools help you optimize for these new answer engines.",
    span: "",
  },
  {
    icon: Brain,
    title: "Let AI Do the Heavy Lifting",
    description:
      "GPT-4o analyzes your content and generates specific, actionable recommendations. No more staring at dashboards wondering what to fix first.",
    span: "md:col-span-2",
  },
  {
    icon: Clock,
    title: "Save Hours Every Week",
    description:
      "Automate content auditing, decay detection, and performance monitoring. Focus your time on creating great content, not manually checking metrics.",
    span: "",
  },
  {
    icon: Shield,
    title: "Protect Your Organic Revenue",
    description:
      "Content decay costs businesses thousands in lost traffic every month. Early detection and fast recovery keeps your organic pipeline healthy.",
    span: "",
  },
  {
    icon: LineChart,
    title: "Make Every Decision Data-Backed",
    description:
      "Replace gut feelings with real scores and signals. Know exactly which pages need attention and what specific changes will have the biggest impact.",
    span: "md:col-span-2",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Your Free Account",
    description:
      "Sign up in seconds with Google or email. No credit card required. You get free access to both CiteAudit and CiteWatch instantly.",
  },
  {
    number: "02",
    title: "Audit or Connect",
    description:
      "Paste a URL into CiteAudit for an instant content audit, or connect Google Search Console to CiteWatch to start monitoring your pages.",
  },
  {
    number: "03",
    title: "Get Actionable Insights",
    description:
      "Receive detailed scores, AI-powered recommendations, and early warning alerts. Know exactly what to fix and when to fix it.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Try both tools with generous free limits",
    features: [
      "2 CiteAudit audits per month",
      "1 CiteWatch site",
      "Content Quality Score",
      "AI Citability Score",
      "Basic decay detection",
      "30-day data history",
    ],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro Bundle",
    price: "$39",
    period: "/mo",
    description: "Both tools at a discounted rate",
    features: [
      "15 CiteAudit audits per month",
      "3 CiteWatch sites",
      "Everything in Free",
      "Detailed dimension breakdown",
      "AI recovery recommendations",
      "PDF report export",
      "CSV data export",
      "Email alerts",
      "90-day data history",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
    savings: "Save $9/mo vs buying separately",
  },
  {
    name: "Advanced Bundle",
    price: "$99",
    period: "/mo",
    description: "Full power for agencies and large teams",
    features: [
      "50 CiteAudit audits per month",
      "10 CiteWatch sites",
      "Everything in Pro",
      "AI-powered content rewrites",
      "Priority decay scanning",
      "1-year data history",
      "API access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: false,
    savings: "Save $19/mo vs buying separately",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Content Lead, TechScale",
    quote:
      "CiteAudit changed how we publish content. Our AI citability scores went from 3 to 8 in two months. We are now getting cited in ChatGPT responses.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "SEO Manager, GrowthLoop",
    quote:
      "CiteWatch caught a traffic decline on our top 3 blog posts before we even noticed. The AI recovery suggestions helped us regain rankings within weeks.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, CloudBase",
    quote:
      "The bundle is incredible value. We audit drafts with CiteAudit before publishing, then CiteWatch monitors them after. Our organic traffic is up 40%.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is CitabilityOS?",
    a: "CitabilityOS is a content command center that brings together content auditing, performance monitoring, and AI optimization tools into a single unified platform for content teams.",
  },
  {
    q: "What tools are included?",
    a: "CitabilityOS currently includes CiteAudit (AI-powered content audit tool) and CiteWatch (content health monitoring via Google Search Console). We are actively developing additional tools for the suite.",
  },
  {
    q: "Can I try it for free before paying?",
    a: "Yes! Both CiteAudit and CiteWatch offer generous free tiers so you can try the tools with no commitment. CiteAudit includes 2 free audits per month and CiteWatch supports 1 free site. No credit card required.",
  },
  {
    q: "How does the bundle pricing work?",
    a: "The Pro Bundle ($39/mo) and Advanced Bundle ($99/mo) give you access to both CiteAudit and CiteWatch at a discounted rate compared to purchasing each tool separately. You can also use each tool individually on its own free or paid plan.",
  },
  {
    q: "Can I cancel or change my plan anytime?",
    a: "Absolutely. All paid plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel at any time from your account settings. Downgrades take effect at the next billing cycle.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use industry-standard encryption and never share your data with third parties. Your content, analytics data, and Google Search Console data remain private and secure within your account. You can delete your account and all data at any time.",
  },
  {
    q: "Do I need technical skills to use CitabilityOS?",
    a: "Not at all. CiteAudit is as simple as pasting a URL or uploading a document. CiteWatch connects to Google Search Console with one click. Everything is designed for content teams, not developers.",
  },
];

const partners = [
  "TechScale",
  "GrowthLoop",
  "CloudBase",
  "DataForge",
  "NexaFlow",
  "BrightPath",
  "CoreStack",
  "PeakSEO",
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-medium text-slate-100">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-4 text-slate-400 leading-relaxed">{a}</div>
      )}
    </div>
  );
}

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* ━━━ Navbar ━━━ */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="w-7 h-7 text-red-500" />
              <span className="text-xl font-bold text-white">
                Pulse<span className="text-red-500">HQ</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#tools" className="text-sm text-slate-400 hover:text-white transition-colors">
                Tools
              </Link>
              <Link href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-sm text-slate-400 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" className="text-sm text-slate-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ━━━ Hero ━━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Trusted by 500+ content teams
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Content{" "}
                <span className="text-red-500">Command Center</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                Audit content quality before publishing. Monitor performance after.
                Detect decay early. Optimize for AI search engines. All from one platform.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/signup"
                  className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 text-lg"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold rounded-lg transition-colors text-lg"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Right: Product Visual */}
            <div className="relative hidden lg:block">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
                {/* Mock dashboard */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-slate-500">CitabilityOS Dashboard</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Search className="w-4 h-4 text-teal-400" />
                      <span className="text-xs text-teal-400 font-medium">CiteAudit</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">87<span className="text-sm text-slate-400">/100</span></div>
                    <div className="text-xs text-slate-500">Content Quality Score</div>
                    <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: "87%" }} />
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-orange-400" />
                      <span className="text-xs text-orange-400 font-medium">CiteWatch</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">3<span className="text-sm text-slate-400"> alerts</span></div>
                    <div className="text-xs text-slate-500">Pages need attention</div>
                    <div className="mt-2 flex gap-1">
                      <div className="h-2 w-4 bg-red-500 rounded-full" />
                      <div className="h-2 w-4 bg-yellow-500 rounded-full" />
                      <div className="h-2 w-4 bg-yellow-500 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-400 font-medium">AI Citability Score</span>
                    <span className="text-xs text-green-400">+2.1 this month</span>
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    {[4, 5, 4, 6, 5, 7, 6, 7, 8, 7, 8, 8].map((v, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-red-500/60 rounded-t"
                        style={{ height: `${(v / 10) * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Organic traffic</div>
                    <div className="text-sm font-bold text-green-400">+34% this quarter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Partners / Trust Bar ━━━ */}
      <section className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 uppercase tracking-wider mb-8">
            Trusted by content teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-500">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Tools / Products ━━━ */}
      <section id="tools" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Two Powerful Tools, One Platform
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Purpose-built tools for every stage of your content lifecycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* CiteAudit */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 transition-all hover:border-teal-500/50 hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CiteAudit</h3>
                  <p className="text-sm text-teal-400">AI-Powered Content Audit Tool</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Audit your content across 9 dimensions for quality and AI citability.
                Get actionable scores and recommendations to make your content rank and get cited.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Content Quality Score (0-100)",
                  "AI Citability Score (0-10)",
                  "9-dimension analysis",
                  "URL, paste text, or .docx upload",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Starting at <span className="text-white font-semibold">Free</span>
                </span>
                <Link
                  href="/products/citeaudit"
                  className="px-5 py-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* CiteWatch */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 transition-all hover:border-orange-500/50 hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CiteWatch</h3>
                  <p className="text-sm text-orange-400">Content Health Monitoring</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Connect to Google Search Console and detect content decay before it
                hurts your traffic. Get AI-powered recovery recommendations.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Google Search Console integration",
                  "Content decay detection",
                  "AI recovery recommendations",
                  "Automated alerts and CSV export",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Starting at <span className="text-white font-semibold">Free</span>
                </span>
                <Link
                  href="/products/citewatch"
                  className="px-5 py-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Benefits (Bento Grid) ━━━ */}
      <section id="benefits" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How CitabilityOS Helps You Win
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              It is not about what our tools have. It is about what they help you achieve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-red-500/30 transition-colors ${b.span}`}
                >
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ How It Works ━━━ */}
      <section id="how-it-works" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg">
              Get started in three simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center hover:border-red-500/30 transition-colors h-full">
                  <div className="text-5xl font-bold text-red-500/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Pricing ━━━ */}
      <section id="pricing" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Start free, upgrade when you are ready. Bundle both tools and save.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-slate-900 border rounded-xl p-8 relative ${
                  plan.highlight
                    ? "border-red-500 ring-1 ring-red-500/20 scale-[1.02]"
                    : "border-slate-800"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                {plan.savings && (
                  <div className="mb-4 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs font-medium text-center">
                    {plan.savings}
                  </div>
                )}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block w-full py-3 rounded-lg font-semibold transition-colors text-center ${
                    plan.highlight
                      ? "bg-red-600 hover:bg-red-500 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-100"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Testimonials ━━━ */}
      <section id="testimonials" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Loved by Content Teams Worldwide
            </h2>
            <p className="text-slate-400 text-lg">
              See what teams are saying about CitabilityOS.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-red-500/20 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-red-400">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section id="faq" className="py-20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Final CTA ━━━ */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-600/20 via-slate-900 to-slate-900 border border-red-500/30 rounded-2xl p-12 text-center ring-1 ring-red-500/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Take Control of Your Content?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Join 500+ content teams already using CitabilityOS to audit, monitor, and
              optimize their content. Start free, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 text-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold rounded-lg transition-colors text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-red-500" />
                <span className="text-lg font-bold text-white">
                  Pulse<span className="text-red-500">HQ</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Your Content Command Center.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/citeaudit" className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                    CiteAudit
                  </Link>
                </li>
                <li>
                  <Link href="/products/citewatch" className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                    CiteWatch
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/what-is-aeo" className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                    What is AEO?
                  </Link>
                </li>
                <li>
                  <Link href="/what-is-content-decay" className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                    Content Decay Guide
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-sm text-slate-400 mb-3">
                Get updates on new tools and content tips.
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} CitabilityOS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
