import { caesarCipher } from "../functions/caesarCipher";

test('one word shift (no z - a)', () => {
    expect(caesarCipher('hello', 2)).toBe('jgnnq');
})

test('chars going from z to a (1)', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('chars going form Z to A (2)', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
})

test('do not shift any punctuation chars', () => {
    expect(caesarCipher('Hello there!', 3)).toBe('Khoor wkhuh!')
})