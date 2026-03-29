export interface Student {
  name: string;
  phone: string;
  feedback: string;
}

export const students: Student[] = [
  {
    name: "Fernando Gil",
    phone: "77992092202",
    feedback:
      "Sua dança transmite tranquilidade e segurança, com agilidade e energia nas rotações. Você estabelece uma relação bonita com a música e explora seu espaço com entrega. Um verdadeiro rootzeiro, que entregou tudo no footwork!",
  },
  {
    name: "Marcelo Figueiredo",
    phone: "77988522305",
    feedback:
      "Sua dança é leve, com uma condução gentil e um repertório seguro e confortável. Você estabelece uma ótima relação com a música e transmite segurança. Suas pausas são muito bem feitas, trazendo ainda mais beleza pra dança.",
  },
  {
    name: "Renata Cardoso",
    phone: "77981574323",
    feedback:
      "Sua dança é divertida e confiante! Você explora as possibilidades de pisadas e variações com autonomia, tem bom equilíbrio e muita criatividade. Uma dança cheia de personalidade.",
  },
  {
    name: "Pipi Albuquerque",
    phone: "75991455367",
    feedback:
      "Você tem autonomia, criatividade e uma ótima percepção corporal e musical. Ousada, se jogando nas variações e se divertindo na dança. Suas bases são excelentes e você entrega muito nas variações das pisadas!",
  },
  {
    name: "Paloma Oliveira",
    phone: "73988682066",
    feedback:
      "Sua dança é calma e com ótima percepção corporal. Pisadas seguras, uma dança limpa — sem sobrar energia ou movimentos — e bom equilíbrio. Uma dança que mostra maturidade e consciência do corpo.",
  },
  {
    name: "Iago de Souza",
    phone: "77998424578",
    feedback:
      "Você explora variações quanto aos tempos com uma ótima noção de musicalidade e leveza, buscando dançar dentro e fora do abraço. Muita criatividade e preocupação com a conexão com o par. A musicalidade na sua dança é um destaque!",
  },
  {
    name: "Alan Dutra",
    phone: "77988049423",
    feedback:
      "Sua noção espacial é ótima! Criativo, dança com fluidez e tem identidade na dança. Seu abraço é confortável e você é atento à música. Não se preocupa em fazer o máximo de passos possíveis, mas sim em selecionar os que fazem sentido pra música — e isso faz toda a diferença.",
  },
  {
    name: "Gabrielle Mendes",
    phone: "71996067276",
    feedback:
      "Você corresponde à dança com autonomia e atitude! Pisadas pequenas e estáveis, coloca energia na dança e tem um abraço confortável. Sua calma e estabilidade na dança, junto com a preocupação com a conexão do par na volta pro abraço, são lindas de ver.",
  },
  {
    name: "Henrique Delgado",
    phone: "19993619171",
    feedback:
      "Sua dança tem confiança nas execuções! Criativo, com deslocamentos como ponto forte, atento à música e se diverte dançando. Uma dança cheia de energia e personalidade.",
  },
  {
    name: "Juliana Higon",
    phone: "77991653335",
    feedback:
      "Sua dança é divertida, com confiança e sensibilidade! Ousada nas variações, com uma ótima percepção da comunicação na dança. Super criativa, sabendo se posicionar e interferir na dança. E rebolativa — amamos!",
  },
  {
    name: "Clarissa Rocha",
    phone: "71991916866",
    feedback:
      "Sua postura é bonita, com eixo bem posicionado. Agilidade, sensibilidade e segurança nas execuções, tudo com muita leveza. Estabilidade na base de dança, entregando tudo no roots!",
  },
  {
    name: "Lorena Jardim",
    phone: "77998140655",
    feedback:
      "Você se diverte dançando e isso é contagiante! Uma ótima escuta às propostas das conduzidas, musicalidade e dança com energia. Boa junção de passos de giro com passos no abraço, transmitindo segurança. Sua condução é muito limpa e atenta ao par.",
  },
  {
    name: "Luiza Almeida",
    phone: "77981427436",
    feedback:
      "Sua postura é bonita, com eixo bem posicionado. Segurança nas execuções, sensibilidade, escuta ativa e uma dança limpa — sem sobrar energia ou movimentos. Sua atenção ao tempo da música resulta num lindo improviso.",
  },
  {
    name: "Thomas Rolemberg",
    phone: "77988530393",
    feedback:
      "Sua dança tem confiança nas execuções, com a música sempre como prioridade. Você se diverte dançando e isso se reflete numa dança dinâmica e enérgica, cheia de energia e presença.",
  },
  {
    name: "Luiza Reis",
    phone: "77981111841",
    feedback:
      "Sua escuta é ativa, com entrega e sensibilidade. Leveza nas execuções, postura linda e comprometida com o próprio eixo. Sua musicalidade e fluidez fazem da sua dança pura entrega e conexão.",
  },
];

export function getStudentByPhone(phone: string): Student | undefined {
  return students.find((s) => s.phone === phone);
}
