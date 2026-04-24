import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Hero } from "@/components/landing/Hero";
import { Section } from "@/components/landing/Section";
import { BenefitsGrid } from "@/components/landing/BenefitsGrid";
import { EligibilityList } from "@/components/landing/EligibilityList";
import { Differential } from "@/components/landing/Differential";
import { LeadForm } from "@/components/landing/LeadForm";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";
import { useSeo } from "@/hooks/useSeo";
import bloqueioHero from "@/assets/bloqueio-hero.jpg";

const benefits = [
  {
    icon: "01",
    title: "Proteção de salário",
    text: "Salários e vencimentos possuem proteção legal e podem ser objeto de pedido de desbloqueio judicial.",
  },
  {
    icon: "02",
    title: "Aposentadoria protegida",
    text: "Valores de aposentadoria e pensão têm natureza alimentar e podem ser resguardados.",
  },
  {
    icon: "03",
    title: "Análise de excesso",
    text: "O bloqueio pode atingir valores além do necessário, sendo possível solicitar a revisão judicial.",
  },
  {
    icon: "04",
    title: "Agilidade no pedido",
    text: "Com a documentação adequada, o pedido de desbloqueio pode ser analisado de forma célere pelo juízo.",
  },
];

const eligibility = [
  "Teve valores bloqueados via Sisbajud ou BacenJud.",
  "O bloqueio atingiu salário, aposentadoria ou pensão.",
  "Os valores bloqueados são essenciais para subsistência.",
  "O bloqueio excedeu o montante da dívida cobrada.",
];

export default function BloqueioValores() {
  useSeo({
    title:
      "Bloqueio Judicial de Valores | Desbloqueio de conta — Rocha e Souza Advogados",
    description:
      "Conta bloqueada judicialmente? Entenda como solicitar o desbloqueio de valores via Sisbajud. Advogado especialista em desbloqueio de conta bancária no Alto Tietê, Grande SP e Vale do Paraíba.",
  });

  const heroProps = {
    bgImage: bloqueioHero,
    eyebrow: "Bloqueio de Valores em Conta",
    headline: (
      <>
        Teve valores bloqueados na conta? Entenda como buscar o{" "}
        <em>desbloqueio judicial</em>.
      </>
    ),
    sub: "O bloqueio pode ser contestado em diversas situações, garantindo o acesso a valores essenciais.",
    ctaMsg:
      "Olá, tive valores bloqueados na minha conta e gostaria de entender as possibilidades de desbloqueio.",
    ctaLabel: "Falar com um advogado",
    ghostLabel: "Solicitar análise",
    ghostHref: "#formulario",
  };

  return (
    <>
      <SiteHeader />
      <main>
        <Hero {...heroProps} />

        <Section
          eyebrow="Entenda o bloqueio"
          title="Como funciona o bloqueio judicial de valores"
          subtitle="O bloqueio judicial de valores ocorre geralmente por meio do sistema Sisbajud, utilizado para cumprimento de decisões judiciais."
        >
          <RevealOnScroll>
            <p
              style={{
                maxWidth: 760,
                margin: "0 auto",
                textAlign: "center",
                color: "var(--muted)",
                fontSize: 16,
              }}
            >
              No entanto, existem situações em que o bloqueio pode ser excessivo
              ou atingir valores protegidos por lei. Salários, aposentadorias e
              verbas de natureza alimentar podem ser objeto de discussão
              judicial.
            </p>
          </RevealOnScroll>
        </Section>

        <Section
          alt
          eyebrow="Situações comuns"
          title="Tipos de valores que podem ser protegidos"
        >
          <BenefitsGrid items={benefits} />
        </Section>

        <Section
          eyebrow="Quem pode solicitar"
          title="Você pode buscar o desbloqueio se…"
          subtitle="Cada caso exige análise técnica para verificar a viabilidade do pedido. A orientação jurídica adequada é essencial."
        >
          <EligibilityList items={eligibility} />
        </Section>

        <Section
          alt
          eyebrow="Possibilidade de solução"
          title="Desbloqueio mediante comprovação"
        >
          <Differential
            quote="É possível solicitar judicialmente o desbloqueio, mediante comprovação da origem dos valores e da necessidade de liberação. Muitos desconhecem que determinados valores são legalmente protegidos, e acabam não buscando seus direitos."
            note="Atuação em Direito Civil"
          />
        </Section>

        <Section
          id="formulario"
          eyebrow="Próximo passo"
          title="Solicite uma análise do seu caso"
          subtitle="Entenda as possibilidades jurídicas para o desbloqueio dos seus valores. Atendimento personalizado em Direito Civil."
        >
          <LeadForm
            defaultMessage="Olá! Meu nome é {name}. Tive valores bloqueados na minha conta e gostaria de entender as possibilidades de desbloqueio. Telefone: {phone}."
          />
        </Section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </>
  );
}
