// arquivo: atividades/automatizaveis.ts

type CenarioTeste = {
  nome: string;
  repetitivo: boolean;
  regrasDefinidas: boolean;
  classificacao?: string;
};

const cenarios: CenarioTeste[] = [
  { nome: "Login válido", repetitivo: true, regrasDefinidas: true },
  {
    nome: "Teste exploratório de UX",
    repetitivo: false,
    regrasDefinidas: false,
  },
  { nome: "Cadastro de cliente", repetitivo: true, regrasDefinidas: true },
  {
    nome: "Teste de acessibilidade visual",
    repetitivo: false,
    regrasDefinidas: false,
  },
];

let quantidadeAutomatizaveis = 0;

for (let i = 0; i < cenarios.length; i++) {
  // 1ª etapa: classificar os cenários
  if (cenarios[i].repetitivo && cenarios[i].regrasDefinidas) {
    cenarios[i].classificacao = "automatizar";
  } else {
    cenarios[i].classificacao = "não automatizar";
  }

  // 2ª etapa: contabilizar automatizáveis
  if (cenarios[i].classificacao === "automatizar") {
    quantidadeAutomatizaveis++;
  }
}

console.log("--- Lista de Cenários ---");
console.table(cenarios);
console.log(
  `\nQuantidade de cenários para automatizar: ${quantidadeAutomatizaveis}`,
);
