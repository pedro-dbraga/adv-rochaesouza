import styles from "./BenefitsGrid.module.css";
import { RevealOnScroll } from "./RevealOnScroll";

const defaultBenefits = [
  {
    icon: "01",
    title: "Procedimento mais rápido",
    text: "Tende a ser mais célere que a via judicial, quando atendidos os requisitos legais.",
  },
  {
    icon: "02",
    title: "Menor burocracia",
    text: "Tramitação concentrada no cartório, com etapas mais objetivas.",
  },
  {
    icon: "03",
    title: "Segurança jurídica",
    text: "Reconhecimento formal da propriedade e averbação na matrícula do imóvel.",
  },
  {
    icon: "04",
    title: "Imóveis sem escritura",
    text: "Caminho legal para regularizar imóveis que nunca tiveram escritura formal.",
  },
];

interface BenefitsGridProps {
  items?: { icon: string; title: string; text: string }[];
}

export function BenefitsGrid({ items = defaultBenefits }: BenefitsGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((b, i) => (
        <RevealOnScroll key={b.title} delay={i * 80} className={styles.card}>
          <div className={styles.icon} aria-hidden="true">
            {b.icon}
          </div>
          <h3 className={styles.cardTitle}>{b.title}</h3>
          <p className={styles.cardText}>{b.text}</p>
        </RevealOnScroll>
      ))}
    </div>
  );
}
