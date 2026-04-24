import styles from "./SplitCTA.module.css";
import { RevealOnScroll } from "./RevealOnScroll";

interface SplitCTAProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  headline: string;
  ctaLabel: string;
  ctaHref: string;
  ctaTarget?: "_blank" | "_self";
}

export function SplitCTA({
  image,
  imageAlt,
  eyebrow,
  headline,
  ctaLabel,
  ctaHref,
  ctaTarget = "_blank",
}: SplitCTAProps) {
  return (
    <RevealOnScroll className={styles.wrap}>
      <div className={styles.media}>
        <img src={image} alt={imageAlt} loading="lazy" width={1200} height={1024} />
      </div>
      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2 className={styles.headline}>{headline}</h2>
        <a
          className={styles.cta}
          href={ctaHref}
          target={ctaTarget}
          rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
        >
          {ctaLabel}
        </a>
      </div>
    </RevealOnScroll>
  );
}
