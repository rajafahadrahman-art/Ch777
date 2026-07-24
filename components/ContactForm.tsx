"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:support@ch777game.com.pk?subject=${encodeURIComponent(
      subject || "Contact from CH777Game.com.pk"
    )}&body=${encodeURIComponent(body)}`;

    setStatus("ready");
    window.location.href = mailto;
  }

  return (
    <form className="form-card form-grid" onSubmit={handleSubmit}>
      <label>
        Full Name
        <input name="name" type="text" required placeholder="Your name" />
      </label>
      <label>
        Email Address
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </label>
      <label>
        Subject
        <input
          name="subject"
          type="text"
          required
          placeholder="How can we help?"
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          placeholder="Share your question or feedback"
        />
      </label>
      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
      {status === "ready" ? (
        <p>
          Your email app should open shortly. If it does not, write to{" "}
          <a href="mailto:support@ch777game.com.pk">
            support@ch777game.com.pk
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
