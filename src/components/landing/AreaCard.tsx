import { Link } from "react-router-dom";
import styles from "./AreaCard.module.css";
import { RevealOnScroll } from "./RevealOnScroll";

interface AreaCardProps {
  to: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel?: string;
  reverse?: boolean;
}

export function AreaCard({
  to,
  image,
  imageAlt,
  eyebrow,
  title,
  text,
  ctaLabel = "Saiba mais",
  reverse,
}: AreaCardProps) {
  return (
    <div className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
      <RevealOnScroll className={styles.media}>
        <img src={image} alt={imageAlt} width={1024} height={768} loading="lazy" />
      </RevealOnScroll>
      <RevealOnScroll className={styles.body} delay={120}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <Link className={styles.cta} to={to} aria-label={`${ctaLabel} sobre ${title}`}>
          {ctaLabel}
        </Link>
      </RevealOnScroll>
    </div>
  );
}
