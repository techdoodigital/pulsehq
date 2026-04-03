export default function PrivacyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="text-slate-400 mb-8">Last updated: March 2026</p>

      <div className="space-y-8 text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
          <p className="mb-3">We collect the following types of information:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Account information: name, email address, and password (encrypted)</li>
            <li>Usage data: how you interact with our tools and platform</li>
            <li>Content submitted for analysis (URLs, pasted text, uploaded files)</li>
            <li>Google Search Console data (when you connect your account)</li>
            <li>Support ticket information and communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Data</h2>
          <p className="mb-3">We use your information to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provide and improve our content auditing and monitoring services</li>
            <li>Generate content quality and citability scores</li>
            <li>Send you alerts about content performance changes</li>
            <li>Process support requests and account management</li>
            <li>Send important service updates and newsletter (if subscribed)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage and Security</h2>
          <p>
            Your data is stored securely using industry-standard encryption. Passwords are hashed
            and never stored in plain text. We use secure connections (HTTPS) for all data
            transmission. Our infrastructure is hosted on reputable cloud providers with robust
            security certifications.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may
            share data only in the following circumstances:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations or law enforcement requests</li>
            <li>With service providers who help us operate the platform (under strict agreements)</li>
            <li>In aggregate, anonymized form for analytics and improvement purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Google Search Console Data</h2>
          <p>
            When you connect Google Search Console to ContentPulse, we access your search
            performance data to provide decay detection and monitoring. This data is used solely
            for delivering our service to you and is not shared with third parties. You can
            disconnect your GSC access at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
          <p>
            We use essential cookies for authentication and session management. We do not use
            third-party advertising cookies. Analytics cookies may be used to understand how
            users interact with our platform in order to improve the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Access your personal data stored on our platform</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and all associated data</li>
            <li>Export your data in a machine-readable format</li>
            <li>Opt out of non-essential communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Data Retention</h2>
          <p>
            We retain your data for as long as your account is active. When you delete your
            account, all personal data and associated content is permanently removed within 30
            days. Anonymized, aggregate data may be retained for analytics purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of
            significant changes via email and update the &quot;Last updated&quot; date above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
          <p>
            For privacy-related questions or to exercise your data rights, please contact us at
            privacy@pulsehq.io or through our support page.
          </p>
        </section>
      </div>
    </article>
  );
}
