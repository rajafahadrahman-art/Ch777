import type { ReactNode } from "react";

type BoxVariant = "info" | "tip" | "notice" | "warning" | "highlight";

const ICONS: Record<BoxVariant, string> = {
  info: "ℹ",
  tip: "✦",
  notice: "!",
  warning: "⚠",
  highlight: "★",
};

type ContentBoxProps = {
  variant?: BoxVariant;
  title: string;
  children: ReactNode;
  className?: string;
};

export function ContentBox({
  variant = "info",
  title,
  children,
  className = "",
}: ContentBoxProps) {
  return (
    <aside className={`content-box content-box-${variant} pop-card ${className}`}>
      <div className="content-box-head">
        <span className="content-box-icon" aria-hidden="true">
          {ICONS[variant]}
        </span>
        <strong>{title}</strong>
      </div>
      <div className="content-box-body">{children}</div>
    </aside>
  );
}

export function InfoBox(props: Omit<ContentBoxProps, "variant">) {
  return <ContentBox variant="info" {...props} />;
}

export function TipBox(props: Omit<ContentBoxProps, "variant">) {
  return <ContentBox variant="tip" {...props} />;
}

export function NoticeBox(props: Omit<ContentBoxProps, "variant">) {
  return <ContentBox variant="notice" {...props} />;
}

export function WarningBox(props: Omit<ContentBoxProps, "variant">) {
  return <ContentBox variant="warning" {...props} />;
}

export function HighlightCard({
  title,
  children,
  icon = "●",
}: {
  title: string;
  children: ReactNode;
  icon?: string;
}) {
  return (
    <article className="highlight-card pop-card">
      <div className="highlight-card-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

export function CTABox({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="cta-box pop-card">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="home-cta-grid">{children}</div>
    </div>
  );
}
