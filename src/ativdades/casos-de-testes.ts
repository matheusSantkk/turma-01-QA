export type CasoDeTeste = {
  id: number;
  titulo: string;
  descricao: string;
  automatizado: boolean;
};

export function criarCasoDeTeste(
  id: number,
  titulo: string,
  descricao: string,
  automatizado: boolean = false,
): CasoDeTeste {
  return {
    id,
    titulo,
    descricao,
    automatizado,
  };
}

export function descrever(caso: CasoDeTeste): string {
  return `Id: ${caso.id} - Título: ${caso.titulo} - Descrição: ${caso.descricao} - Automatizado: ${caso.automatizado}`;
}

export function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
  return {
    ...caso,
    automatizado: true,
  };
}

const primeiroCasoDeTeste = criarCasoDeTeste(
  1,
  "Login com sucesso",
  "Valida a autenticação de usuário com credenciais válidas",
  false,
);

console.log(descrever(primeiroCasoDeTeste));

const casoAutomatizado = marcarAutomatizado(primeiroCasoDeTeste);
console.log(descrever(casoAutomatizado));


// Erro de tipo provocado de propósito:
// Passando uma string onde se espera number no parâmetro 'id'

//const casoComErro = criarCasoDeTeste("1", "Caso Inválido", "Teste", false);
// Erro no VS Code/Compiler: Argument of type 'string' is not assignable to parameter of type 'number'.

