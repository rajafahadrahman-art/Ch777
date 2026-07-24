import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME } from "@/lib/constants";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact CH777Game.com.pk",
  description:
    "Contact CH777Game.com.pk for questions, corrections, support, or partnership inquiries.",
  path: "/contact-us",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function ContactUsPage() {
  return (
    <>
      <JsonLd
        id="contact-schema"
        data={[
          webPageSchema({
            name: "Contact CH777Game.com.pk",
            description:
              "Contact CH777Game.com.pk for questions, corrections, support, or partnership inquiries.",
            path: "/contact-us",
            type: "ContactPage",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner animate-in">
            <p className="eyebrow" style={{ color: "#f3d27a" }}>
              Get in Touch
            </p>
            <h1>Contact CH777Game.com.pk</h1>
            <p>
              Send questions, corrections, or partnership notes. We review
              messages related to content clarity and website support.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <ContactForm />
          <aside className="card">
            <h2>Contact Details</h2>
            <p>
              For a general overview of the platform, visit our{" "}
              <Link href="/">Ch777</Link> homepage guide.
            </p>
            <p>
              For <strong>CH777Game.com.pk contact</strong> requests, use the
              form or email us directly.
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:support@ch777game.com.pk">
                  support@ch777game.com.pk
                </a>
              </li>
              <li>Website: {SITE_NAME}</li>
              <li>Audience focus: Pakistan</li>
              <li>Response topic: informational website support</li>
            </ul>
            <p>
              You can return to the complete{" "}
              <Link href="/">Ch777 Game</Link> overview for features, games,
              safety information, and general guidance.
            </p>
            <p>
              Please include page URLs when reporting content issues so we can
              locate the section quickly.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
