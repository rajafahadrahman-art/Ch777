import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import InternalLinks from "@/components/InternalLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "CH777 Deposit Guide | Payment Steps",
  description:
    "Read the CH777 deposit guide with payment methods, funding steps, and useful account tips.",
  path: "/deposit-guide",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Deposit Guide", href: "/deposit-guide" },
];

const faqs = [
  {
    question: "Which payment methods are commonly used in Pakistan?",
    answer:
      "Many users look for JazzCash, Easypaisa, or bank transfer style options when those methods appear in the wallet section.",
  },
  {
    question: "How long do deposits usually take?",
    answer:
      "Successful transfers often appear quickly, but timing can vary based on network conditions and the selected method.",
  },
  {
    question: "What if my balance does not update?",
    answer:
      "Keep your payment reference, refresh the wallet page, and confirm the transaction status with your payment provider before retrying.",
  },
  {
    question: "Should I deposit before installing the app?",
    answer:
      "No. Complete install and login first, then use the in-app wallet flow for funding.",
  },
];

export default function DepositGuidePage() {
  return (
    <>
      <JsonLd
        id="deposit-schema"
        data={[
          webPageSchema({
            name: "CH777 Deposit Guide | Payment Steps",
            description:
              "Read the CH777 deposit guide with payment methods, funding steps, and useful account tips.",
            path: "/deposit-guide",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner animate-in">
            <p className="eyebrow" style={{ color: "#f3d27a" }}>
              Wallet Funding
            </p>
            <h1>CH777 Deposit Guide for Smooth Payments</h1>
            <p>
              Learn how a typical funding flow works, which local methods users
              often look for, and how to avoid common transfer mistakes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Understanding the CH777 Deposit Process</h2>
          <p>
            For a general overview of the platform, visit our{" "}
            <Link href="/">Ch777</Link> homepage guide.
          </p>
          <p>
            A <strong>Ch777 deposit</strong> starts inside your logged-in
            account. Open the wallet or cashier area, choose an available method,
            enter the amount, and confirm the payment details carefully before
            submitting.
          </p>
          <p>
            This <strong>Ch777 deposit guide</strong> is written for readers who
            want a clear overview of the flow rather than rushed instructions.
            Always follow the latest prompts shown in the app, because available
            channels can change.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Popular Payment Method Examples in Pakistan</h2>
            <p>
              Exact options depend on what the app currently supports. These are
              common examples users often look for when reviewing{" "}
              <strong>Ch777 payment methods</strong>.
            </p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>JazzCash</h3>
              <p>
                Mobile wallet transfers that many Pakistani users already use for
                everyday payments.
              </p>
            </article>
            <article className="card">
              <h3>Easypaisa</h3>
              <p>
                Another widely used wallet option when listed in the cashier
                menu.
              </p>
            </article>
            <article className="card">
              <h3>Bank Transfer</h3>
              <p>
                Useful when a direct bank channel is available and you prefer
                account-to-account funding.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Step-by-Step Deposit Guide</h2>
          </div>
          <ol className="steps">
            <li>
              Sign in and open the wallet section for your{" "}
              <strong>Ch777 app deposit</strong> flow.
            </li>
            <li>Select a payment method that is currently available.</li>
            <li>Enter the amount and confirm every account detail.</li>
            <li>
              Complete the transfer, wait for confirmation, then refresh your
              balance.
            </li>
          </ol>
          <p className="prose" style={{ marginTop: "1.25rem" }}>
            You can return to the complete{" "}
            <Link href="/">Ch777 Game</Link> overview for features, games,
            safety information, and general guidance.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div className="prose">
            <h2>Tips for Smooth Deposits</h2>
            <ul>
              <li>Use a stable internet connection during payment</li>
              <li>Double-check wallet numbers before confirming</li>
              <li>Keep screenshots of successful payment references</li>
              <li>Start with a smaller amount if you are testing a new method</li>
            </ul>
          </div>
          <div className="prose">
            <h2>Common Deposit Issues</h2>
            <ul>
              <li>Entering the wrong account identifier</li>
              <li>Closing the app before confirmation completes</li>
              <li>Retrying too quickly and creating duplicate transfers</li>
              <li>Using an unsupported method that is not listed in-app</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need Account Access Before Depositing?"
        text="Make sure you can sign in first. If the app is not installed yet, use the download guide, then return here for funding steps."
        secondaryHref="/ch777-login"
        secondaryLabel="Open Login Guide"
      />

      <Faq title="Deposit FAQ" items={faqs} />

      <InternalLinks
        links={[
          {
            href: "/ch777-download",
            label: "Ch777 Download",
            description: "Install before using wallet features",
          },
          {
            href: "/ch777-login",
            label: "Ch777 Login",
            description: "Access your account securely",
          },
          {
            href: "/withdrawal-guide",
            label: "Withdrawal Guide",
            description: "Learn cash-out preparation next",
          },
        ]}
      />
    </>
  );
}
