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
  title: "CH777 Withdrawal Guide | Cash Out",
  description:
    "Follow the CH777 withdrawal guide with account checks, steps, and common withdrawal tips.",
  path: "/withdrawal-guide",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Withdrawal Guide", href: "/withdrawal-guide" },
];

const faqs = [
  {
    question: "Why was my withdrawal delayed?",
    answer:
      "Delays can happen when account details are incomplete, verification is pending, or the selected payout channel needs extra processing time.",
  },
  {
    question: "Do I need to verify anything before cashing out?",
    answer:
      "Many platforms ask users to confirm identity or payout details first. Complete those checks carefully to avoid repeated requests.",
  },
  {
    question: "Can I cancel a withdrawal after submitting?",
    answer:
      "That depends on the app status. If a cancel option is available, use it before the request moves to processing.",
  },
  {
    question: "What should I prepare before requesting a payout?",
    answer:
      "Confirm your login works, verify payout account details, and keep enough balance for any stated minimum amount.",
  },
];

export default function WithdrawalGuidePage() {
  return (
    <>
      <JsonLd
        id="withdrawal-schema"
        data={[
          webPageSchema({
            name: "CH777 Withdrawal Guide | Cash Out",
            description:
              "Follow the CH777 withdrawal guide with account checks, steps, and common withdrawal tips.",
            path: "/withdrawal-guide",
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
              Cash Out Help
            </p>
            <h1>CH777 Withdrawal Guide and Process Tips</h1>
            <p>
              Review the checks, steps, and common issues that matter when you
              request a payout from your account wallet.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Understanding the CH777 Withdrawal Flow</h2>
          <p>
            A <strong>Ch777 withdrawal</strong> request usually starts in the
            wallet area after you are signed in. You choose a payout method,
            enter the amount, confirm destination details, and submit the
            request for processing.
          </p>
          <p>
            This <strong>Ch777 withdrawal guide</strong> focuses on preparation
            and accuracy so fewer requests fail because of avoidable detail
            mistakes.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Step-by-Step Withdrawal Guide</h2>
            <p>
              Use this checklist as a practical overview of a typical{" "}
              <strong>Ch777 withdrawal process</strong>.
            </p>
          </div>
          <ol className="steps">
            <li>Sign in and open the wallet or withdrawal section.</li>
            <li>
              Confirm your available balance and any shown minimum cash-out
              amount.
            </li>
            <li>
              Enter accurate payout details for your{" "}
              <strong>Ch777 app withdrawal</strong> request.
            </li>
            <li>
              Submit the request and save the reference or status message.
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="prose">
            <h2>Account Verification and Accuracy Tips</h2>
            <ul>
              <li>Match names and numbers exactly as they appear on your wallet</li>
              <li>Complete any identity checks before peak cash-out times</li>
              <li>Use one trusted payout destination to reduce mismatches</li>
              <li>Review limits shown in the app before submitting</li>
            </ul>
          </div>
          <div className="prose">
            <h2>Common Withdrawal Issues</h2>
            <ul>
              <li>Incorrect account numbers or wallet IDs</li>
              <li>Pending profile verification</li>
              <li>Requests below the minimum amount</li>
              <li>Unstable connection during submission</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container prose">
          <h2>Processing Tips</h2>
          <p>
            After you submit, give the request time to update before sending
            another one. Repeated submissions can create confusion when support
            teams review records later. If status stays unchanged longer than
            expected, gather your reference details and contact support through
            official channels.
          </p>
          <p>
            Still setting things up? Visit{" "}
            <Link href="/ch777-download">Ch777 game download</Link> or{" "}
            <Link href="/ch777-login">Ch777 game login</Link> first, then return
            here when your account is ready.
          </p>
        </div>
      </section>

      <CtaBand
        title="Need Funding Help Before Cash Out?"
        text="Review the deposit page if you are still learning how wallet actions work, then come back to this guide for payout checks."
        secondaryHref="/deposit-guide"
        secondaryLabel="Open Deposit Guide"
      />

      <Faq title="Withdrawal FAQ" items={faqs} />

      <InternalLinks
        links={[
          {
            href: "/ch777-download",
            label: "Ch777 Download",
            description: "Install and prepare your device",
          },
          {
            href: "/ch777-login",
            label: "Ch777 Login",
            description: "Access your account before cash out",
          },
          {
            href: "/deposit-guide",
            label: "Deposit Guide",
            description: "Understand funding steps first",
          },
        ]}
      />
    </>
  );
}
