export const site = {
  name: "Rocha e Souza",
  fullName: "Rocha e Souza Advogados",
  tagline: "Atuação em Direito Civil",
  // Número no formato internacional, sem símbolos (ex: 5511999999999)
  whatsapp: "11948034310",
  whatsappDisplay: "(11) 99999-9999",
  email: "contato@rochaesouza.adv.br",
  oab: "OAB/SP",
  regions: "Alto Tietê · Grande SP · Vale do Paraíba",
  ethicsNotice:
    "Atendimento jurídico personalizado. Cada caso deve ser analisado individualmente.",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
