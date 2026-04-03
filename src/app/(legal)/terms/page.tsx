export default function TermsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Service</h1>
      <p className="text-slate-400 mb-8">Last updated: March 2026</p>

      <div className="space-y-8 text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using PulseHQ and any of its associated tools (PagePulse,
            ContentPulse), you agree to be bound by these Terms of Service. If you do not agree
            to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
          <p>
            PulseHQ is a content command center that provides content
            auditing, monitoring, and optimization tools. Our services include but are not
            limited to content quality analysis, content decay detection, and AI citability
            scoring.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials.
            You agree to provide accurate information during registration and to update it as
            needed. You are responsible for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Upload malicious content or code</li>
            <li>Resell or redistribute our services without permission</li>
            <li>Abuse API rate limits or scrape our platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Subscriptions and Payments</h2>
          <p>
            Paid plans are billed monthly unless otherwise specified. You may cancel at any time,
            and your access will continue until the end of the current billing period. Refunds
            are handled on a case-by-case basis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
          <p>
            You retain ownership of any content you submit for analysis. PulseHQ
            retains all rights to the platform, tools, algorithms, and generated reports. You may
            not reverse-engineer or copy our scoring methodologies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
          <p>
            PulseHQ is provided &quot;as is&quot; without warranties of any kind. We are not liable for
            any indirect, incidental, or consequential damages arising from your use of the
            service. Our recommendations are suggestions and do not guarantee specific search
            rankings or traffic results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate these terms. You
            may delete your account at any time from your account settings page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the service after
            changes constitutes acceptance of the new terms. We will notify users of significant
            changes via email.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
          <p>
            For questions about these terms, please contact us through our support page or email
            us at support@pulsehq.io.
          </p>
        </section>
      </div>
    </article>
  );
}
