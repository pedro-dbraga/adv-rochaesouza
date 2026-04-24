import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";
import { Section } from "@/components/landing/Section";
import { useSeo } from "@/hooks/useSeo";

interface Props {
  nome: string;
  slug: string;
}

export default function AdvogadoPlaceholder({ nome, slug }: Props) {
  useSeo({
    title: `${nome} | Rocha e Souza Advogados`,
    description: `Conheça ${nome}, do escritório Rocha e Souza Advogados. Atuação em Direito Civil no Alto Tietê, Grande SP e Vale do Paraíba.`,
  });

  return (
    <>
      <SiteHeader />
      <main>
        <Section
          eyebrow={`Página em construção · ${slug}`}
          title={nome}
          subtitle="Esta página será preenchida com a apresentação do(a) advogado(a), áreas de atuação e formas de contato. A estrutura e o design já estão prontos para receber o conteúdo."
        >
          <></>
        </Section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </>
  );
}
