import Link from "next/link";
import {
  BarChart3,
  Zap,
  TrendingDown,
  Bell,
  Download,
  Brain,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Activity,
  Search,
} from "lucide-react";

const signals = [
  {
    title: "Traffic Decline",
    description: "Detects pages experiencing significant drops in organic traffic over time.",
  },
  {
    title: "Ranking Loss",
    description: "Monitors keyword positions and alerts you when rankings start slipping.",
  },
  {
    title: "CTR Drop",
    description: "Identifies pages where click-through rates are declining despite stable impressions.",
  },
  {
    title: "Impression Fade",
    description: "Catches early signs of content decay by tracking impression trends.",
  },
];

const features = [
  {
    icon: Bell,
    title: "Automated Alerts",
    description: "Get notified instantly when content starts decaying. Never miss a performance drop.",
  },
  {
    icon: Download,
    title: "CSV Export",
    description: "Export your decay reports and performance data for offline analysis and reporting.",
  },
  {
    icon: Brain,
    title: "AI Recovery Plans",
    description: "Get AI-powered recommendations to recover declining pages with specific action items.",
  },
  {
    icon: Activity,
    title: "Decay Scoring",
    description: "Each page receives a decay score showing severity and urgency of the decline.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["1 connected site", "Basic decay detection", "Weekly email reports", "30-day data history"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    features: ["3 connected sites", "Everything in Free", "Real-time alerts", "AI recovery recommendations", "90-day data history", "CSV export"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Advanced",
    price: "$39",
    period: "/mo",
    features: ["10 connected sites", "Everything in Pro", "Priority decay scanning", "Custom alert rules", "1-year data history", "API access", "Team collaboration"],
    cta: "Start Free Trial",
    highlight: false,
  },
];

export default function ContentPulsePage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            Content Monitoring
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Content<span className="text-orange-400">Pulse</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Connect to Google Search Console and detect content decay before it impacts your traffic. Get AI-powered recovery recommendations.
          </p>
          {/* TODO: Update this link to the actual ContentPulse production URL */}
          <a
            href="http://localhost:3001"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Launch ContentPulse
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* What it does */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is ContentPulse?</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                ContentPulse is a content health monitoring tool that connects directly to your Google Search Console. It continuously analyzes your pages to detect content decay - the gradual decline in traffic and rankings that affects even the best content.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Built for SEO professionals, content teams, and digital marketers who need early warning when their content starts underperforming. Stop finding out about traffic drops weeks after they happen.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Decay Scoring System</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 font-bold">0-2</span>
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium">Healthy</span>
                    <p className="text-slate-500 text-sm">No significant decline detected</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-400 font-bold">3-5</span>
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium">Warning</span>
                    <p className="text-slate-500 text-sm">Early signs of decay detected</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">6-8</span>
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium">Decaying</span>
                    <p className="text-slate-500 text-sm">Active decline, action recommended</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-bold">9-10</span>
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium">Critical</span>
                    <p className="text-slate-500 text-sm">Severe decay, urgent action needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Performance Signals */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            4 Performance Signals Monitored
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {signals.map((signal, i) => (
              <div
                key={signal.title}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{signal.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feat.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              );
            })}
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
                    ? "border-orange-500 ring-1 ring-orange-500/20"
                    : "border-slate-800"
                }`}
              >
                {plan.highlight && (
                  <div className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
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
                      <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-orange-600 hover:bg-orange-500 text-white"
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
              Save with PulseHQ Bundle
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Complete Your Content Lifecycle
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              ContentPulse monitors your published content. Pair it with PagePulse to audit and optimize content before you hit publish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cross-sell: PagePulse */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Add PagePulse</h3>
                  <p className="text-sm text-teal-400">AI Content Audit Tool</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                You monitor content performance with ContentPulse. But are you publishing content that is optimized from the start? PagePulse audits your content across 9 dimensions and scores it for AI citability before you publish.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  9-dimension content scoring
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  AI Citability Score for answer engines
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  Pre-publish audits via paste or .docx upload
                </li>
              </ul>
              <Link
                href="/products/pagepulse"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Explore PagePulse
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
                  <h3 className="text-lg font-bold text-white">PulseHQ Bundle</h3>
                  <p className="text-sm text-red-400">Best Value</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Get both ContentPulse and PagePulse together at a discounted rate. Audit content before publishing and monitor it after - the complete content health solution.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">ContentPulse Pro</span>
                  <span className="text-slate-500 text-sm line-through">$19/mo</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">PagePulse Starter</span>
                  <span className="text-slate-500 text-sm line-through">$29/mo</span>
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

      {/* Also from PulseHQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-wider mb-3">Part of the PulseHQ suite</p>
          <p className="text-slate-400 mb-6">
            ContentPulse is one of the tools in the PulseHQ content command center. Explore all our tools to build a complete content strategy.
          </p>
          <Link
            href="/#tools"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors"
          >
            View All PulseHQ Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
