import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME } from "@/lib/constants";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions | CH777Game.com.pk",
  description: "Read the terms and conditions of CH777Game.com.pk.",
  path: "/terms-and-conditions",
  noIndex: true,
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Terms and Conditions", href: "/terms-and-conditions" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        id="terms-schema"
        data={[
          webPageSchema({
            name: "Terms and Conditions | CH777Game.com.pk",
            description: "Read the terms and conditions of CH777Game.com.pk.",
            path: "/terms-and-conditions",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <h1>Terms and Conditions</h1>
            <p>Basic terms for using {SITE_NAME}.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose legal-content">
          <h2>Acceptance</h2>
          <p>
            By using this website, you agree to these terms. If you do not
            agree, please stop using the site.
          </p>
          <h2>Website Content</h2>
          <p>
            We provide informational guides and may update, edit, or remove
            content at any time. Information may become outdated as third-party
            platforms change.
          </p>
          <h2>Intellectual Property</h2>
          <p>
            Site design, original text, and arrangement are protected to the
            extent permitted by applicable law. Do not copy substantial portions
            without permission.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE_NAME} is not liable
            for losses arising from reliance on website content or from visits to
            external destinations.
          </p>
          <h2>Changes</h2>
          <p>
            These terms may be updated periodically. Continued use of the site
            after changes means you accept the revised terms.
          </p>
        </div>
      </section>
    </>
  );
}
