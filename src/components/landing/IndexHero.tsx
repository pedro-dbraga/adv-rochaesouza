import styles from "./IndexHero.module.css";
import { RevealOnScroll } from "./RevealOnScroll";
import heroBuilding from "@/assets/hero-building.jpg";

export function IndexHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <img
          src={heroBuilding}
          alt="Edifício corporativo de vidro em dia ensolarado"
          width={1600}
          height={1024}
        />
      </div>
      <div className={styles.overlay} />
      <RevealOnScroll className={styles.content}>
        <span className={styles.eyebrow}>Rocha e Souza Advogados</span>
        <h1 className={styles.headline}>
          Frase do Slogan
        </h1>
        <p className={styles.sub}>
          Atuação no Alto Tietê, Grande São Paulo e Vale do Paraíba. Conheça
          nossa equipe e as áreas em que podemos ajudar você.
        </p>
        <a className={styles.scroll} href="#equipe">
          Conheça nossos serviços <span aria-hidden="true" />
        </a>
      </RevealOnScroll>
    </section>
  );
}
