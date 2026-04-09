import Link from "next/link";
import { BookOpen, Search, BarChart3, User, Mail } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Getting Started with CitabilityOS",
    items: [
      "Create your free account at citabilityos.io/signup",
      "Verify your email address to activate your account",
      "Log in to your dashboard to see all available tools",
      "Choose a tool to get started: CiteAudit for auditing or CiteWatch for monitoring",
      "Explore the Getting Started cards on your dashboard for guided setup",
    ],
  },
  {
    icon: Search,
    title: "CiteAudit Setup Guide",
    items: [
      "Launch CiteAudit from your CitabilityOS dashboard",
      "Choose your input method: enter a URL, paste text, or upload a .docx file",
      "Click 'Audit' to start the analysis (takes 30-60 seconds)",
      "Review your Content Quality Score (0-100) and AI Citability Score (0-10)",
      "Read through the dimension-by-dimension breakdown for specific recommendations",
      "Pro users can use the AI rewrite feature to automatically improve content",
    ],
  },
  {
    icon: BarChart3,
    title: "CiteWatch + Google Search Console Setup",
    items: [
      "Launch CiteWatch from your CitabilityOS dashboard",
      "Click 'Connect Google Search Console' and authorize access",
      "Select the property (website) you want to monitor",
      "CiteWatch will import your historical data (this may take a few minutes)",
      "Once imported, you will see your pages sorted by decay risk score",
      "Set up email alerts to get notified when content decay is detected",
      "Use the AI recovery feature to get specific recommendations for declining pages",
    ],
  },
  {
    icon: User,
    title: "Account Management",
    items: [
      "Access your account settings from the top navigation bar",
      "Update your profile information (name and email)",
      "View and manage your connected tools",
      "Upgrade or downgrade your subscription plan at any time",
      "Delete your account permanently from the Account page (this cannot be undone)",
    ],
  },
];

export default function HelpPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Help Center</h1>
      <p className="text-lg text-slate-400 mb-10">
        Everything you need to know about using CitabilityOS and its tools.
      </p>

      <div className="space-y-8">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
              <ol className="space-y-2 ml-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-red-400 font-medium shrink-0">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          );
        })}

        {/* Contact Support */}
        <div className="bg-slate-900 border border-red-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-red-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Contact Support</h2>
          </div>
          <p className="text-slate-400 mb-4">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors"
          >
            Submit a Support Ticket
          </Link>
        </div>
      </div>
    </div>
  );
}
