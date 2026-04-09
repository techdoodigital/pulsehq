import Link from "next/link";
import {
  Search,
  Zap,
  FileText,
  Globe,
  Upload,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
} from "lucide-react";

const dimensions = [
  "Accuracy & Factuality",
  "Depth & Comprehensiveness",
  "Clarity & Structure",
  "Source Attribution",
  "Freshness & Relevance",
  "Expertise Signals",
  "Answer-Ready Formatting",
  "Unique Value Proposition",
  "Technical SEO Alignment",
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["2 audits per month", "Content Quality Score", "AI Citability Score", "Basic recommendations"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    features: ["15 audits per month", "Everything in Free", "Detailed dimension breakdown", "Export reports as PDF", "Priority support"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    features: ["50 audits per month", "Everything in Starter", "AI-powered content rewrites", "Bulk URL auditing", "API access", "Dedicated support"],
    cta: "Start Free Trial",
    highlight: false,
  },
];

export default function CiteAuditPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Nav */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="w-7 h-7 text-red-500" />
              <span className="text-xl font-bold text-white">
                Pulse<span className="text-red-500">HQ</span>
              </span>
            </Link>
            <Link href="/" className="text-sm text-slate-400 hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            Content Audit Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Page<span className="text-teal-400">Pulse</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            AI-powered content auditing across 9 dimensions. Get your Content Quality Score and AI Citability Score to make every page rank - and get cited.
          </p>
          <a
            href="https://citeaudit-pied.vercel.app"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Launch CiteAudit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* What it does */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is CiteAudit?</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                CiteAudit is an AI-powered content audit tool that analyzes your content across 9 critical dimensions. It helps content teams understand how their pages perform for both traditional search engines and AI answer engines.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Whether you are a content marketer, SEO professional, or editorial team lead, CiteAudit gives you the data-driven insights you need to create content that ranks and gets cited by AI.
              </p>
              <h3 className="text-xl font-semibold text-white mb-4">Input Methods</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Globe className="w-5 h-5 text-teal-400" />
                  <span>Enter any URL to audit a live page</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <FileText className="w-5 h-5 text-teal-400" />
                  <span>Paste text directly for pre-publish audits</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Upload className="w-5 h-5 text-teal-400" />
                  <span>Upload .docx files from your content workflow</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Scoring System</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 font-medium">Content Quality Score</span>
                    <span className="text-teal-400 font-bold text-2xl">0-100</span>
                  </div>
                  <p className="text-slate-500 text-sm">
                    A comprehensive score evaluating your content across all 9 dimensions. Higher scores indicate better overall quality and optimization.
                  </p>
                </div>
                <div className="border-t border-slate-800 pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 font-medium">AI Citability Score</span>
                    <span className="text-teal-400 font-bold text-2xl">0-10</span>
                  </div>
                  <p className="text-slate-500 text-sm">
                    Measures how likely AI search engines are to cite your content. Based on format, authority signals, and answer-readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Dimensions */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            The 9 Dimensions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dimensions.map((dim, i) => (
              <div
                key={dim}
                className="bg-slate-900 border border-slate-800 rounded-lg p-5 hover:border-teal-500/30 transition-colors flex items-center gap-4"
              >
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-400 font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <span className="text-slate-200 font-medium">{dim}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-slate-900 border rounded-xl p-8 ${
                  plan.highlight
                    ? "border-teal-500 ring-1 ring-teal-500/20"
                    : "border-slate-800"
                }`}
              >
                {plan.highlight && (
                  <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-teal-600 hover:bg-teal-500 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-100"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Upsell */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Save with CitabilityOS Bundle
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get More From Your Content Strategy
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              CiteAudit audits your content before and after publishing. Pair it with CiteWatch to monitor performance over time and catch decay early.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cross-sell: CiteWatch */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Add CiteWatch</h3>
                  <p className="text-sm text-orange-400">Content Health Monitoring</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                You audit your content with CiteAudit. But what happens after you publish? CiteWatch connects to Google Search Console and alerts you the moment a page starts losing traffic or rankings.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  Automated decay detection
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  AI-powered recovery plans
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  Email alerts when pages decline
                </li>
              </ul>
              <Link
                href="/products/citewatch"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Explore CiteWatch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bundle Deal */}
            <div className="bg-gradient-to-br from-red-600/10 to-slate-900 border border-red-500/30 rounded-xl p-8 ring-1 ring-red-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">CitabilityOS Bundle</h3>
                  <p className="text-sm text-red-400">Best Value</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Get both CiteAudit and CiteWatch together at a discounted rate. The complete content lifecycle solution: audit before publishing, monitor after.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">CiteAudit Starter</span>
                  <span className="text-slate-500 text-sm line-through">$29/mo</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">CiteWatch Pro</span>
                  <span className="text-slate-500 text-sm line-through">$19/mo</span>
                </div>
                <div className="border-t border-slate-700 pt-2 mt-2 flex items-center justify-between">
                  <span className="text-white font-semibold">Bundle Price</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-red-400">$39</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                    <div className="text-xs text-green-400 font-medium">Save $9/mo (19% off)</div>
                  </div>
                </div>
              </div>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Get the Bundle
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Also from CitabilityOS */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-wider mb-3">Part of the CitabilityOS suite</p>
          <p className="text-slate-400 mb-6">
            CiteAudit is one of the tools in the CitabilityOS content command center. Explore all our tools to build a complete content strategy.
          </p>
          <Link
            href="/#tools"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors"
          >
            View All CitabilityOS Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
