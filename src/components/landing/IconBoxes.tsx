import { ReactNode } from "react";
import styles from "./IconBoxes.module.css";
import { RevealOnScroll } from "./RevealOnScroll";

export interface IconBoxItem {
  icon: ReactNode;
  title: string;
  text: string;
}

interface IconBoxesProps {
  intro?: string;
  items: IconBoxItem[];
}

export function IconBoxes({ intro, items }: IconBoxesProps) {
  return (
    <>
      {intro && (
        <RevealOnScroll>
          <p className={styles.intro}>{intro}</p>
        </RevealOnScroll>
      )}
      <div className={styles.grid}>
        {items.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 100} className={styles.box}>
            <div className={styles.iconWrap} aria-hidden="true">
              {item.icon}
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
}
