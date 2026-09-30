export interface ExecucaoTeste {
  id: number;
  nome: string;
  duracaoMs: number;
  passou: boolean;
}

export const execucoesDeTeste: ExecucaoTeste[] = [
  { id: 1, nome: "Teste de Autenticação", duracaoMs: 120, passou: true },
  {
    id: 2,
    nome: "Teste de Integração de Pagamento",
    duracaoMs: 350,
    passou: false,
  },
  {
    id: 3,
    nome: "Teste de Atualização de Perfil",
    duracaoMs: 200,
    passou: true,
  },
  { id: 4, nome: "Teste de Upload de Arquivos", duracaoMs: 500, passou: true },
  { id: 5, nome: "Teste de Notificações", duracaoMs: 80, passou: false },
];

export const nomesDosTestes = execucoesDeTeste.map((teste) => teste.nome);
export const testesAprovados = execucoesDeTeste.filter((teste) => teste.passou);
export const duracaoTotalMs = execucoesDeTeste.reduce(
  (acumulador, teste) => acumulador + teste.duracaoMs,
  0,
);

export async function buscarExecucaoPorId(id: number): Promise<ExecucaoTeste> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const execucaoEncontrada = execucoesDeTeste.find(
        (item) => item.id === id,
      );

      if (execucaoEncontrada) {
        resolve(execucaoEncontrada);
      } else {
        reject(new Error(`Execução com ID ${id} não foi encontrada.`));
      }
    }, 500);
  });
}
