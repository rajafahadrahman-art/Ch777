export type TocItem = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="toc-box" aria-label="Table of Contents">
      <p className="toc-title">
        <strong>Table of Contents</strong>
      </p>
      <ol className="toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
