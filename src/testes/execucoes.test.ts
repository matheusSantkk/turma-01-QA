import { describe, it, expect } from "vitest";
import {
  buscarExecucaoPorId,
  execucoesDeTeste,
  nomesDosTestes,
  testesAprovados,
  duracaoTotalMs,
} from "../ativdades/execucoes";

describe("Manipulação de Arrays e Objetos Tipados", () => {
  it("deve conter no mínimo 5 execuções de teste no array", () => {
    expect(execucoesDeTeste.length).toBeGreaterThanOrEqual(5);
  });

  it("deve mapear os nomes de todas as execuções de teste com map", () => {
    expect(nomesDosTestes).toHaveLength(5);
    expect(nomesDosTestes).toContain("Teste de Autenticação");
  });

  it("deve filtrar apenas os testes que passaram com filter", () => {
    expect(testesAprovados.length).toBe(3);
    expect(testesAprovados.every((t) => t.passou)).toBe(true);
  });

  it("deve somar a duração total de todos os testes com reduce", () => {
    expect(duracaoTotalMs).toBe(1250);
  });
});

describe("Busca Assíncrona de Execução de Teste (buscarExecucaoPorId)", () => {
  it("deve retornar o objeto de execução correspondente quando o ID existir", async () => {
    const resultado = await buscarExecucaoPorId(1);

    expect(resultado).toEqual({
      id: 1,
      nome: "Teste de Autenticação",
      duracaoMs: 120,
      passou: true,
    });
  });

  it("deve lançar um erro quando o ID informado não existir", async () => {
    await expect(buscarExecucaoPorId(999)).rejects.toThrow(
      "Execução com ID 999 não foi encontrada.",
    );
  });
});
