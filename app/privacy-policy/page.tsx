import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME } from "@/lib/constants";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | CH777Game.com.pk",
  description: "Read the privacy policy of CH777Game.com.pk.",
  path: "/privacy-policy",
  noIndex: true,
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        id="privacy-schema"
        data={[
          webPageSchema({
            name: "Privacy Policy | CH777Game.com.pk",
            description: "Read the privacy policy of CH777Game.com.pk.",
            path: "/privacy-policy",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <h1>Privacy Policy</h1>
            <p>How {SITE_NAME} handles basic website information.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose legal-content">
          <h2>Information We Collect</h2>
          <p>
            We may receive limited technical data such as browser type, device
            information, and approximate usage metrics through standard hosting
            and analytics tools.
          </p>
          <h2>How Information Is Used</h2>
          <p>
            Information is used to improve site performance, understand content
            demand, and respond to messages you send through contact channels.
          </p>
          <h2>Cookies and Similar Technologies</h2>
          <p>
            The website may use cookies or similar technologies for essential
            functionality and traffic measurement. You can control cookies through
            your browser settings.
          </p>
          <h2>Third-Party Links</h2>
          <p>
            Our pages may link to external destinations. Those destinations have
            their own privacy practices, and we encourage you to review them
            separately.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions, email{" "}
            <a href="mailto:support@ch777game.com.pk">
              support@ch777game.com.pk
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
