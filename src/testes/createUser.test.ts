import { describe, expect, test } from 'vitest'

interface User {
    nome: string,
    idade: number,
}

function createUser(nome: string, idade: number): User {
    return {
        nome,
        idade
    }
}

test('Criar um usuario com o nome e idade', () => {
    const user = createUser('usuarioTeste', 21)
    expect(user).toEqual({nome:'usuarioTeste' , idade: 21})
    expect(user.nome).toBe('usuarioTeste')
})
