import { ReactNode } from "react";
import styles from "./Hero.module.css";
import { RevealOnScroll } from "./RevealOnScroll";
import { whatsappLink, site } from "@/config/site";

interface HeroProps {
  eyebrow?: string;
  headline?: ReactNode;
  sub?: string;
  ctaMsg?: string;
  ctaLabel?: string;
  ghostLabel?: string;
  ghostHref?: string;
  bgImage?: string;
}

export function Hero({
  eyebrow = "Usucapião Extrajudicial",
  headline = <>Regularize seu imóvel direto no <em>cartório</em>, com mais rapidez e menos burocracia.</>,
  sub = "A usucapião extrajudicial permite regularizar seu imóvel sem processo judicial, com mais agilidade e segurança jurídica.",
  ctaMsg = "Olá, gostaria de entender se meu caso se enquadra em usucapião extrajudicial.",
  ctaLabel = "Falar com um advogado",
  ghostLabel = "Tirar minhas dúvidas",
  ghostHref = "#formulario",
  bgImage,
}: HeroProps = {}) {
  const hasBg = !!bgImage;

  return (
    <section className={`${styles.hero} ${hasBg ? styles.heroBg : ""}`}>
      {hasBg && (
        <>
          <div className={styles.bgWrap}>
            <img src={bgImage} alt="" width={1600} height={1024} />
          </div>
          <div className={styles.bgOverlay} />
        </>
      )}
      <div className={`rs-container ${styles.grid}`}>
        <RevealOnScroll>
          <span className={`${styles.eyebrow} ${hasBg ? styles.eyebrowLight : ""}`}>{eyebrow}</span>
          <h1 className={`${styles.headline} ${hasBg ? styles.headlineLight : ""}`}>{headline}</h1>
          <p className={`${styles.sub} ${hasBg ? styles.subLight : ""}`}>{sub}</p>
          <div className={styles.actions}>
            <a
              className={styles.cta}
              href={whatsappLink(ctaMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Falar com advogado pelo WhatsApp ${site.whatsappDisplay}`}
            >
              {ctaLabel}
            </a>
            <a className={`${styles.ghost} ${hasBg ? styles.ghostLight : ""}`} href={ghostHref}>
              {ghostLabel}
            </a>
          </div>
        </RevealOnScroll>

        {!hasBg && (
          <RevealOnScroll delay={120} className={styles.art}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Símbolo de justiça — balança"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0e223f" />
                  <stop offset="100%" stopColor="#1a3358" />
                </linearGradient>
              </defs>
              <rect x="90" y="160" width="20" height="14" rx="2" fill="url(#g1)" />
              <rect x="70" y="174" width="60" height="6" rx="2" fill="url(#g1)" />
              <rect x="98" y="50" width="4" height="112" fill="url(#g1)" />
              <rect x="40" y="56" width="120" height="4" rx="2" fill="url(#g1)" />
              <line x1="55" y1="60" x2="40" y2="92" stroke="#c9a227" strokeWidth="1.5" />
              <line x1="55" y1="60" x2="70" y2="92" stroke="#c9a227" strokeWidth="1.5" />
              <line x1="145" y1="60" x2="130" y2="92" stroke="#c9a227" strokeWidth="1.5" />
              <line x1="145" y1="60" x2="160" y2="92" stroke="#c9a227" strokeWidth="1.5" />
              <path d="M35 92 H75 L70 104 Q55 112 40 104 Z" fill="#c9a227" opacity="0.92" />
              <path d="M125 92 H165 L160 104 Q145 112 130 104 Z" fill="#c9a227" opacity="0.92" />
              <circle cx="100" cy="48" r="6" fill="#c9a227" />
            </svg>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
