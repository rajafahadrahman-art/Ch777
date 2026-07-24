import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME } from "@/lib/constants";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Responsible Gaming | CH777Game.com.pk",
  description: "Read the responsible gaming information of CH777Game.com.pk.",
  path: "/responsible-gaming",
  noIndex: true,
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Responsible Gaming", href: "/responsible-gaming" },
];

export default function ResponsibleGamingPage() {
  return (
    <>
      <JsonLd
        id="responsible-schema"
        data={[
          webPageSchema({
            name: "Responsible Gaming | CH777Game.com.pk",
            description:
              "Read the responsible gaming information of CH777Game.com.pk.",
            path: "/responsible-gaming",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <h1>Responsible Gaming</h1>
            <p>
              Guidance from {SITE_NAME} on keeping entertainment balanced and
              intentional.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose legal-content">
          <h2>Play with Clear Limits</h2>
          <p>
            Set time and spending boundaries before you begin. Treat gaming as
            entertainment, not as a way to solve financial pressure.
          </p>
          <h2>Practical Habits</h2>
          <ul>
            <li>Take regular breaks during longer sessions</li>
            <li>Never chase losses</li>
            <li>Keep login and payment details private</li>
            <li>Use only money you can afford to spend on leisure</li>
          </ul>
          <h2>Underage Use</h2>
          <p>
            Gaming platforms with real-money features are intended for adults.
            Minors should not create accounts or participate.
          </p>
          <h2>Need More Help?</h2>
          <p>
            If gaming stops feeling enjoyable or starts affecting daily life,
            pause and seek support from trusted people or professional resources
            in your area. You can also review our{" "}
            <Link href="/disclaimer">disclaimer</Link> and{" "}
            <Link href="/contact-us">contact</Link> page for website-related
            questions.
          </p>
        </div>
      </section>
    </>
  );
}
