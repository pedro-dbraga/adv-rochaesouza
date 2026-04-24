import { ReactNode, CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "footer";
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealOnScrollProps) {
  const ref = useReveal<HTMLDivElement>();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
