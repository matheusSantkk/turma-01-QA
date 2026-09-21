import { expect, test } from 'vitest'
import { sum } from './sum'

// resultado, expectativa, para ser
// npx vitest run sum.test.ts -> (isolado)
// npx vitest sum.test.ts -> continuo

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
}) 