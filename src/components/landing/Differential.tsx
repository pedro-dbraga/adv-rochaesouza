import styles from "./Differential.module.css";
import { RevealOnScroll } from "./RevealOnScroll";

interface DifferentialProps {
  quote?: string;
  note?: string;
}

export function Differential({
  quote = "Enquanto muitos escritórios direcionam automaticamente para a via judicial, hoje já é possível, em muitos casos, resolver diretamente em cartório — reduzindo tempo e desgaste."
}: DifferentialProps = {}) {
  return (
    <RevealOnScroll className={styles.box}>
      <p className={styles.quote}>{quote}</p>
    </RevealOnScroll>
  );
}
