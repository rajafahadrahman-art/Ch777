import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/constants";

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb container" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.href}>
            {index > 0 && <span className="sep">/</span>}{" "}
            {isLast ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
