import Link from "next/link";

export default function WhatIsAEOPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        What is Answer Engine Optimization (AEO)?
      </h1>
      <p className="text-lg text-slate-400 mb-8">
        A comprehensive guide to optimizing your content for AI-powered search engines.
      </p>

      <div className="space-y-8 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">What is AEO?</h2>
          <p className="text-slate-400 mb-4">
            Answer Engine Optimization (AEO) is the practice of optimizing content so that
            AI-powered search engines and assistants can easily find, understand, and cite it.
            Unlike traditional SEO, which focuses on ranking in a list of blue links, AEO
            focuses on getting your content selected as a direct answer.
          </p>
          <p className="text-slate-400">
            AI search engines like ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot
            synthesize answers from multiple sources. AEO helps ensure your content is one of
            those sources.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Why AEO Matters</h2>
          <p className="text-slate-400 mb-4">
            The way people search is changing fundamentally. More users are turning to AI
            assistants for answers instead of scrolling through search results. If your content
            is not optimized for these AI systems, you risk becoming invisible to a growing
            segment of your audience.
          </p>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              AI search usage is growing rapidly, especially among younger demographics
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              Being cited by AI generates high-quality, trust-building traffic
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              Early movers in AEO gain a significant competitive advantage
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              AEO principles also improve traditional SEO performance
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            How AI Search Engines Select Sources
          </h2>
          <p className="text-slate-400 mb-4">
            AI search engines evaluate content based on several factors when deciding what to
            cite:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Authority", desc: "Content from established, trustworthy domains" },
              { title: "Accuracy", desc: "Factually correct, well-sourced information" },
              { title: "Freshness", desc: "Recently updated, timely content" },
              { title: "Structure", desc: "Clear headings, lists, and answer-ready formatting" },
              { title: "Depth", desc: "Comprehensive coverage that answers the full question" },
              { title: "Uniqueness", desc: "Original insights not found elsewhere" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-lg p-4"
              >
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">AEO vs Traditional SEO</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left px-6 py-3 text-slate-400 font-medium">Aspect</th>
                  <th className="text-left px-6 py-3 text-slate-400 font-medium">Traditional SEO</th>
                  <th className="text-left px-6 py-3 text-slate-400 font-medium">AEO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-6 py-3 text-slate-300">Goal</td>
                  <td className="px-6 py-3 text-slate-400">Rank in search results</td>
                  <td className="px-6 py-3 text-slate-400">Get cited by AI engines</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-300">Focus</td>
                  <td className="px-6 py-3 text-slate-400">Keywords and backlinks</td>
                  <td className="px-6 py-3 text-slate-400">Answer quality and structure</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-300">Content Format</td>
                  <td className="px-6 py-3 text-slate-400">Long-form, keyword-rich</td>
                  <td className="px-6 py-3 text-slate-400">Clear, structured, answer-ready</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-300">Success Metric</td>
                  <td className="px-6 py-3 text-slate-400">Position on SERP</td>
                  <td className="px-6 py-3 text-slate-400">Citation frequency</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            How CitabilityOS Tools Help with AEO
          </h2>
          <p className="text-slate-400 mb-4">
            CitabilityOS provides purpose-built tools to help you optimize for answer engines:
          </p>
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">CiteAudit</h3>
              <p className="text-slate-400 text-sm">
                Audits your content across 9 dimensions including AI citability, answer-ready
                formatting, source attribution, and more. Get a specific AI Citability Score
                that tells you how likely AI engines are to cite your content.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">CiteWatch</h3>
              <p className="text-slate-400 text-sm">
                Monitors your content performance over time and detects when pages start losing
                visibility. Content that decays in traditional search often loses AI citations
                too, so early detection is critical.
              </p>
            </div>
          </div>
        </section>

        <div className="pt-4">
          <Link
            href="/products/citeaudit"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors"
          >
            Try CiteAudit - Check Your AI Citability
          </Link>
        </div>
      </div>
    </article>
  );
}
