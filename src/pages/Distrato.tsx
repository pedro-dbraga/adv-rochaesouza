import { Wallet, Clock, Repeat } from "lucide-react";
import { NavHeader } from "@/components/landing/NavHeader";
import { Hero } from "@/components/landing/Hero";
import { Section } from "@/components/landing/Section";
import { IconBoxes, IconBoxItem } from "@/components/landing/IconBoxes";
import { Differential } from "@/components/landing/Differential";
import { SplitCTA } from "@/components/landing/SplitCTA";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";
import { useSeo } from "@/hooks/useSeo";
import { whatsappLink } from "@/config/site";
import distratoHero from "@/assets/distrato-hero.jpg";
import distratoCta from "@/assets/distrato-cta.jpg";
import { SiteFooter } from "@/components/landing/SiteFooter";

const situacoes: IconBoxItem[] = [
  {
    icon: <Wallet />,
    title: "Dificuldade financeira",
    text: "Mudanças na renda, perda de emprego ou imprevistos podem inviabilizar a continuidade do contrato.",
  },
  {
    icon: <Clock />,
    title: "Atraso na obra",
    text: "Quando a entrega ultrapassa o prazo previsto em contrato, é possível discutir a rescisão com base na legislação.",
  },
  {
    icon: <Repeat />,
    title: "Mudança de planos",
    text: "Mudança de cidade, novo projeto de vida ou alteração nas necessidades da família podem motivar o distrato.",
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Problemas", href: "#problemas" },
  { label: "Fale Conosco", href: "#contato" },
];

export default function Distrato() {
  useSeo({
    title:
      "Distrato Imobiliário | Cancelar compra de imóvel — Rocha e Souza Advogados",
    description:
      "Precisa cancelar a compra de um imóvel na planta ou financiado? Entenda a lei do distrato, devolução de valores e seus direitos. Atuação em Direito Civil.",
  });

  const ctaWhats = whatsappLink(
    "Olá, gostaria de tirar dúvidas sobre o distrato (cancelamento) da compra do meu imóvel."
  );

  const heroProps = {
    bgImage: distratoHero,
    eyebrow: "Distrato Imobiliário",
    headline: (
      <>
        Precisa cancelar a compra de um imóvel? Entenda como funciona o{" "}
        <em>distrato</em>.
      </>
    ),
    sub: "A legislação prevê regras para rescisão do contrato e devolução de valores — entenda seus direitos antes de qualquer decisão.",
    ctaMsg:
      "Olá, gostaria de tirar dúvidas sobre o distrato (cancelamento) da compra do meu imóvel.",
    ctaLabel: "Falar com um advogado",
    ghostLabel: "Ver situações comuns",
    ghostHref: "#problemas",
  };

  return (
    <>
      <NavHeader items={navItems} ctaLabel="Fale Conosco" ctaHref={ctaWhats} />
      <main>
        <Hero {...heroProps} />

        <Section
          id="problemas"
          eyebrow="Entenda o distrato"
          title="Quando o distrato imobiliário acontece"
        >
          <IconBoxes
            intro="O distrato imobiliário ocorre quando o comprador decide rescindir o contrato de aquisição do imóvel. Essa situação é comum em casos de:"
            items={situacoes}
          />
        </Section>

        <Section
          alt
          eyebrow="O que diz a lei"
          title="Critérios legais para a rescisão"
          subtitle="A legislação estabelece critérios para retenção de valores e prazos de devolução, variando conforme o tipo de contrato e de empreendimento."
        >
          <RevealOnScroll>
            <p
              style={{
                maxWidth: 760,
                margin: "0 auto",
                textAlign: "center",
                color: "var(--muted)",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              A chamada Lei do Distrato (Lei nº 13.786/2018) trouxe regras
              específicas para contratos de incorporação imobiliária e
              loteamento, definindo limites para retenção, hipóteses de
              devolução e responsabilidades das partes envolvidas.
            </p>
          </RevealOnScroll>
        </Section>

        <Section
          eyebrow="Direitos do consumidor"
          title="O que pode ser discutido em cada caso"
          subtitle="Dependendo da situação contratual, é possível discutir percentual de retenção, forma de devolução e prazo de pagamento."
        >
          <Differential
            quote="Nem sempre as condições apresentadas pelas construtoras estão de acordo com a legislação. A análise técnica do contrato é essencial para identificar cláusulas abusivas e preservar os direitos do comprador."
            note="Atuação em Direito Civil"
          />
        </Section>

        <Section id="contato" alt eyebrow="Próximo passo" title="Antes de assinar qualquer acordo">
          <SplitCTA
            image={distratoCta}
            imageAlt="Análise jurídica de contrato imobiliário sobre uma mesa"
            eyebrow="Consulte um advogado"
            headline="Entenda seus direitos antes de tomar qualquer decisão."
            ctaLabel="Falar pelo WhatsApp"
            ctaHref={ctaWhats}
          />
        </Section>
      </main>
            <SiteFooter />        
      <WhatsAppFAB />
    </>
  );
}
