import Link from "next/link";

export default function WhatIsContentDecayPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        What is Content Decay?
      </h1>
      <p className="text-lg text-slate-400 mb-8">
        Understanding why your content loses traffic over time and how to prevent it.
      </p>

      <div className="space-y-8 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">What is Content Decay?</h2>
          <p className="text-slate-400 mb-4">
            Content decay is the gradual decline in a page&apos;s organic traffic and search
            rankings over time. Even well-written, high-performing content eventually loses
            relevance and visibility if not maintained. This natural lifecycle affects every
            website and content team.
          </p>
          <p className="text-slate-400">
            Content decay typically begins subtly, with small drops in impressions or slight
            ranking shifts, before accelerating into significant traffic losses. The key to
            managing it is early detection and proactive recovery.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Common Causes of Content Decay</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Outdated Information",
                desc: "Statistics, trends, and facts become stale as industries evolve. Readers and search engines favor fresh, accurate content.",
              },
              {
                title: "Increased Competition",
                desc: "Competitors publish newer, more comprehensive content on the same topics, pushing your pages down in rankings.",
              },
              {
                title: "Search Algorithm Updates",
                desc: "Google and other search engines regularly update their algorithms, which can shift ranking factors and affect your visibility.",
              },
              {
                title: "Changing User Intent",
                desc: "What users search for and expect from results evolves over time. Your content may no longer match current search intent.",
              },
              {
                title: "Technical Degradation",
                desc: "Broken links, slow load times, and mobile usability issues accumulate over time and hurt search performance.",
              },
              {
                title: "Declining Backlink Profile",
                desc: "External sites that once linked to your content may remove or update those links, reducing your authority signals.",
              },
            ].map((cause) => (
              <div
                key={cause.title}
                className="bg-slate-900 border border-slate-800 rounded-lg p-5"
              >
                <h3 className="text-sm font-semibold text-white mb-2">{cause.title}</h3>
                <p className="text-slate-500 text-sm">{cause.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Warning Signs</h2>
          <p className="text-slate-400 mb-4">
            Watch for these indicators that your content may be decaying:
          </p>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
              Steady decline in organic traffic to a previously high-performing page
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
              Keyword rankings dropping from page 1 to page 2 or beyond
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
              Decreasing click-through rates despite stable impressions
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
              Falling impressions for target keywords
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
              Higher bounce rates or lower time on page
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
              Competitor content appearing above yours for previously owned keywords
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">How to Recover Decaying Content</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 font-bold text-sm shrink-0">
                1
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Update and Refresh</h3>
                <p className="text-slate-400 text-sm">
                  Replace outdated statistics, add new sections, and ensure all information is
                  current and accurate.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 font-bold text-sm shrink-0">
                2
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Improve Comprehensiveness</h3>
                <p className="text-slate-400 text-sm">
                  Analyze what competitors are covering that you are not. Fill content gaps to
                  provide the most complete resource available.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 font-bold text-sm shrink-0">
                3
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Optimize for Current Intent</h3>
                <p className="text-slate-400 text-sm">
                  Research what users are actually searching for now and align your content with
                  their current needs and expectations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 font-bold text-sm shrink-0">
                4
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Fix Technical Issues</h3>
                <p className="text-slate-400 text-sm">
                  Repair broken links, improve page speed, ensure mobile-friendliness, and address
                  any technical SEO problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            How ContentPulse Automates Detection
          </h2>
          <p className="text-slate-400 mb-4">
            ContentPulse connects directly to your Google Search Console and continuously monitors
            four key performance signals: traffic trends, ranking positions, click-through rates,
            and impression patterns. When it detects early signs of decay, it alerts you
            immediately and provides AI-powered recovery recommendations specific to each page.
          </p>
          <p className="text-slate-400">
            Instead of manually checking Search Console data and building spreadsheets,
            ContentPulse automates the entire process so you can focus on creating and
            improving content rather than monitoring dashboards.
          </p>
        </section>

        <div className="pt-4">
          <Link
            href="/products/contentpulse"
            className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors"
          >
            Try ContentPulse - Detect Decay Early
          </Link>
        </div>
      </div>
    </article>
  );
}
