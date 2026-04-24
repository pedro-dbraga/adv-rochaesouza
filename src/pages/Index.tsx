import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";
import { Section } from "@/components/landing/Section";
import { IndexHero } from "@/components/landing/IndexHero";
import { AreaCard } from "@/components/landing/AreaCard";
import { useSeo } from "@/hooks/useSeo";
import usucapiaoImg from "@/assets/usucapiao.jpg";
import advogado1Img from "@/assets/advogado-1.jpg";
import advogado2Img from "@/assets/advogado-2.jpg";
import advogado3Img from "@/assets/advogado-3.jpg";

const areas = [
  {
    to: "/usucapiao",
    image: usucapiaoImg,
    imageAlt: "Vista aérea de bairro residencial — regularização de imóveis",
    eyebrow: "Área de atuação",
    title: "Usucapião Extrajudicial",
    text:
      "Regularize seu imóvel diretamente em cartório, com mais agilidade e segurança jurídica. Procedimento moderno e menos burocrático que a via judicial.",
    ctaLabel: "Conhecer o serviço",
  },
  {
    to: "/bloqueio",
    image: advogado1Img,
    imageAlt: "Bloqueio judicial de valores — desbloqueio de conta",
    eyebrow: "Área de atuação",
    title: "Bloqueio de Valores em Conta",
    text:
      "Teve valores bloqueados judicialmente? É possível solicitar o desbloqueio em diversas situações, protegendo salários e verbas essenciais.",
    ctaLabel: "Conhecer o serviço",
  },
  {
    to: "/distrato",
    image: advogado2Img,
    imageAlt: "Prédio residencial — distrato imobiliário",
    eyebrow: "Área de atuação",
    title: "Distrato Imobiliário",
    text:
      "Precisa cancelar a compra de um imóvel na planta ou financiado? Entenda a lei do distrato, devolução de valores e seus direitos contratuais.",
    ctaLabel: "Conhecer o serviço",
  },
  {
    to: "/planodesaude",
    image: advogado3Img,
    imageAlt: "Estetoscópio sobre documento — direito à saúde",
    eyebrow: "Área de atuação",
    title: "Plano de Saúde",
    text:
      "Teve cirurgia, exame ou medicamento negado pelo plano de saúde? É possível questionar negativas abusivas e, em casos urgentes, buscar uma liminar judicial.",
    ctaLabel: "Conhecer o serviço",
  },
];

export default function Index() {
  useSeo({
    title: "Rocha e Souza Advogados | Direito Civil — Alto Tietê, SP e Vale do Paraíba",
    description:
      "Escritório Rocha e Souza Advogados. Atuação em Direito Civil no Alto Tietê, Grande SP e Vale do Paraíba. Conheça nossa equipe e áreas de atuação.",
  });

  return (
    <>
      <SiteHeader />
      <main>
        <IndexHero />
        <Section
          id="equipe"
          eyebrow="Nossa atuação"
          title="Áreas"
          subtitle="Conheça as áreas atendidas pelo escritório."
        >
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            {areas.map((a, i) => (
              <AreaCard
                key={a.to}
                to={a.to}
                image={a.image}
                imageAlt={a.imageAlt}
                eyebrow={a.eyebrow}
                title={a.title}
                text={a.text}
                ctaLabel={a.ctaLabel}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </>
  );
}
