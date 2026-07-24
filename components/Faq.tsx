import type { FaqItem } from "@/lib/constants";

type FaqProps = {
  title?: string;
  intro?: string;
  items: FaqItem[];
};

export default function Faq({
  title = "Frequently Asked Questions",
  intro,
  items,
}: FaqProps) {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
