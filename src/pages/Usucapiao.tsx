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

export default function Usucapiao() {
  useSeo({
    title:
      "Usucapião Extrajudicial em SP | Regularize seu imóvel no cartório — Rocha e Souza",
    description:
      "Usucapião extrajudicial: regularize seu imóvel direto em cartório no Alto Tietê, Grande SP e Vale do Paraíba. Advogado especialista em usucapião e regularização imobiliária.",
  });

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <Section
          eyebrow="Como funciona"
          title="Uma alternativa moderna ao processo judicial"
          subtitle="A usucapião extrajudicial é um procedimento realizado em cartório que permite a regularização da propriedade de um imóvel de forma mais rápida do que pela via judicial."
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
              Diferente do processo tradicional, que pode levar anos, o
              procedimento em cartório tende a ser mais célere, desde que
              atendidos os requisitos legais.
            </p>
          </RevealOnScroll>
        </Section>

        <Section
          alt
          eyebrow="Benefícios"
          title="Por que escolher a via extrajudicial"
        >
          <BenefitsGrid />
        </Section>

        <Section
          eyebrow="Quem pode solicitar"
          title="Você pode ter direito se…"
          subtitle="Cada caso exige análise técnica para verificar a viabilidade. A orientação jurídica adequada evita erros e atrasos no procedimento."
        >
          <EligibilityList />
        </Section>

        <Section alt eyebrow="Diferencial" title="Resolver no cartório quando possível">
          <Differential />
        </Section>

        <Section
          id="formulario"
          eyebrow="Próximo passo"
          title="Fale com um advogado"
          subtitle="Entenda como evoluir e resolver seu caso. Atendimento personalizado."
        >
          <LeadForm />
        </Section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </>
  );
}
