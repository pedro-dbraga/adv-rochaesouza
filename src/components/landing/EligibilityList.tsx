import styles from "./EligibilityList.module.css";
import { RevealOnScroll } from "./RevealOnScroll";

const defaultItems = [
  "Possui o imóvel há anos, de forma contínua e sem oposição.",
  "Nunca teve escritura formal registrada em cartório.",
  "Não há disputa judicial em curso sobre o bem.",
  "Utiliza o imóvel como moradia ou investimento.",
];

interface EligibilityListProps {
  items?: string[];
}

export function EligibilityList({ items = defaultItems }: EligibilityListProps) {
  return (
    <RevealOnScroll className={styles.wrap}>
      <ul className={styles.list}>
        {items.map((text) => (
          <li key={text} className={styles.item}>
            <span className={styles.check} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12.5l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </RevealOnScroll>
  );
}
