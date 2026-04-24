import { ReactNode } from "react";
import styles from "./Section.module.css";
import { RevealOnScroll } from "./RevealOnScroll";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  alt?: boolean;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, alt, children }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ""}`}>
      <div className="rs-container">
        {(eyebrow || title || subtitle) && (
          <RevealOnScroll className={styles.head}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </RevealOnScroll>
        )}
        {children}
      </div>
    </section>
  );
}
