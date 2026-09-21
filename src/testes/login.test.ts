import { expect, test, describe } from 'vitest'

function login(username: string, password: string): boolean {
    return username === 'patati' && password === '123456';
}


describe('Analisar credenciais validas', () => {
    test('Credenciais validas', () => {
        expect(login('patati', '123456')).toBeTruthy()
    })
})



describe('Analisar credenciais invalidas', () => {
    test('negar usuario e senha incorreta', () => {
        expect(login('patata', '654321')).toBeFalsy()
    })

    test('negar usuario correto mas senha incorreta', () => {
        expect(login('patati', '123456789')).toBeFalsy()
    })

    test('negar usuario incorreto mas senha correto', () => {
        expect(login('patata', '123456')).toBeFalsy()
    })

    test('Negar login com campos vazios', () => {
        expect(login('', '')).toBeFalsy()
    })

})