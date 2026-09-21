import { expect, test, describe } from 'vitest'

describe('calcular raiz quadrada de um numero', () => {

    test('retornar a raiz quadrada de um numero', () => {
        expect(Math.sqrt(4)).toBe(2)
        expect(Math.sqrt(9)).toBe(3)
    })

    test('Retornar um NaN se o numero for negativo', () => {
        expect(Math.sqrt(-1)).toBeNaN()
    })

    test('Retornar 0 se for passado um 0', () => {
        expect(Math.sqrt(0)).toBe(0)
    })
})