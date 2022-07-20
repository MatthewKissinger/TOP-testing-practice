import { reverseString } from "../functions/reverseString";

test('reverse a string (1)', () => {
    expect(reverseString('dog')).toBe('god');
}); 

test('reverse a string (2)', () => {
    expect(reverseString('racecar')).toBe('racecar');
}); 