import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME } from "@/lib/constants";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer | CH777Game.com.pk",
  description: "Read the disclaimer of CH777Game.com.pk.",
  path: "/disclaimer",
  noIndex: true,
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        id="disclaimer-schema"
        data={[
          webPageSchema({
            name: "Disclaimer | CH777Game.com.pk",
            description: "Read the disclaimer of CH777Game.com.pk.",
            path: "/disclaimer",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <h1>Disclaimer</h1>
            <p>Important limits of the information published on {SITE_NAME}.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose legal-content">
          <h2>Informational Use Only</h2>
          <p>
            Content on this website is provided for general informational
            purposes. It does not replace official app instructions, support
            channels, or legal advice.
          </p>
          <h2>No Guarantees</h2>
          <p>
            Features, payment options, and account flows can change without
            notice. We do not guarantee outcomes, availability, or uninterrupted
            access to any third-party service.
          </p>
          <h2>External Destinations</h2>
          <p>
            Links to third-party websites or apps are provided for convenience.
            We are not responsible for the content, policies, or practices of
            those destinations.
          </p>
          <h2>User Responsibility</h2>
          <p>
            Readers are responsible for complying with local laws and for using
            platforms in a careful, informed manner.
          </p>
        </div>
      </section>
    </>
  );
}
