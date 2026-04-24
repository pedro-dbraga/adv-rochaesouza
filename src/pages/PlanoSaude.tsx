import { Ban, Pill, ShieldOff, XCircle, Clock4 } from "lucide-react";
import { NavHeader } from "@/components/landing/NavHeader";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";
import { useSeo } from "@/hooks/useSeo";
import { whatsappLink } from "@/config/site";
import styles from "./PlanoSaude.module.css";
import heroImg from "@/assets/saude-hero.jpg";
import { SiteFooter } from "@/components/landing/SiteFooter";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Casos", href: "#situacoes" },
  { label: "Urgência", href: "#urgencia" }
];

const situacoes = [
  { icon: <Ban />, label: "Negativa de cirurgia" },
  { icon: <Pill />, label: "Recusa de medicamento" },
  { icon: <ShieldOff />, label: "Limitação de cobertura" },
  { icon: <XCircle />, label: "Cancelamento indevido" },
];

export default function PlanoSaude() {
  useSeo({
    title:
      "Plano de Saúde negou tratamento? | Liminar e ação judicial — Rocha e Souza Advogados",
    description:
      "Teve cirurgia, exame ou medicamento negado pelo plano de saúde? Entenda como questionar a negativa de cobertura e buscar liminar judicial. Atuação em Direito Civil.",
  });

  const ctaWhats = whatsappLink(
    "Olá, gostaria de orientação sobre uma negativa do meu plano de saúde."
  );

  return (
    <div className={styles.page}>
      <NavHeader items={navItems} ctaLabel="Fale Conosco" ctaHref={ctaWhats} />

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={`rs-container ${styles.heroGrid}`}>
            <RevealOnScroll className={styles.heroText}>
              <span className={styles.eyebrow}>Plano de Saúde</span>
              <h1>
                Teve tratamento <em>negado</em> pelo plano de saúde? Saiba como
                buscar seus direitos.
              </h1>
              <p>
                A legislação permite questionar negativas de cobertura e buscar
                acesso ao tratamento por via judicial — inclusive em caráter de
                urgência.
              </p>
              <div className={styles.actions}>
                <a
                  className={styles.cta}
                  href={ctaWhats}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com um advogado
                </a>
                <a className={styles.ghost} href="#situacoes">
                  Ver situações comuns
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={120} className={styles.heroImage}>
              <img
                src={heroImg}
                alt="Advogado conversando com cliente em escritório, segurando documento"
                width={1600}
                height={1200}
              />
            </RevealOnScroll>
          </div>
        </section>

        {/* EXPLICAÇÃO */}
        <section className={styles.explain}>
          <div className="rs-container">
            <RevealOnScroll className={styles.explainInner}>
              <span className={styles.eyebrowCenter}>Entenda</span>
              <h2 className={styles.h2}>
                Quando uma negativa pode ser considerada abusiva
              </h2>
              <p className={styles.lead}>
                Planos de saúde podem negar procedimentos, exames ou
                tratamentos. Em determinadas situações, essa negativa pode ser
                considerada abusiva e questionada judicialmente, especialmente
                quando há prescrição médica e respaldo técnico.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* SITUAÇÕES COMUNS */}
        <section id="situacoes" className={styles.situations}>
          <div className="rs-container">
            <RevealOnScroll className={styles.pillsHead}>
              <h2>Situações frequentes</h2>
              <p>
                Algumas das hipóteses que podem ser analisadas individualmente
                por um advogado:
              </p>
            </RevealOnScroll>

            <div className={styles.pills}>
              {situacoes.map((s, i) => (
                <RevealOnScroll
                  key={s.label}
                  delay={i * 80}
                  className={styles.pill}
                >
                  <span className={styles.pillIcon} aria-hidden="true">
                    {s.icon}
                  </span>
                  <span className={styles.pillText}>{s.label}</span>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* TUTELA DE URGÊNCIA */}
        <section id="urgencia" className={styles.urgency}>
          <div className="rs-container">
            <RevealOnScroll className={styles.urgencyBox}>
              <div className={styles.urgencyIcon} aria-hidden="true">
                <Clock4 />
              </div>
              <div className={styles.urgencyContent}>
                <span className={styles.tag}>Tutela de urgência</span>
                <h2>
                  Em casos urgentes, é possível solicitar uma decisão rápida
                </h2>
                <p>
                  A chamada liminar pode garantir o acesso ao tratamento
                  enquanto o processo é analisado pelo Judiciário. A
                  documentação médica é essencial para fundamentar o pedido e
                  demonstrar a urgência.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.diff}>
          <div className="rs-container">
            <RevealOnScroll className={styles.diffInner}>
              <p className={styles.diffQuote}>
                A atuação jurídica pode ser essencial para assegurar o acesso à
                saúde em tempo adequado, especialmente quando há prescrição
                médica e risco ao paciente.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className={styles.finalCta}>
          <div className="rs-container">
            <RevealOnScroll>
              <h2>Fale com um advogado e entenda as medidas cabíveis</h2>
              <p>
                Cada situação envolve documentos, prazos e particularidades.
                Uma análise individualizada ajuda a identificar o caminho mais
                adequado ao seu caso.
              </p>
              <div className={styles.finalActions}>
                <a
                  className={styles.cta}
                  href={ctaWhats}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
}
