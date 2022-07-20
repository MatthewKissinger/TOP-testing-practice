import { calculator } from "../functions/calculator";

test('add 2 whole numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('subtract 2 whole numbers', () => {
    expect(calculator.subtract(2, 4)).toBe(-2);
})

test('divide 2 whole numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
})

test('multiply 2 whole numbers', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
})