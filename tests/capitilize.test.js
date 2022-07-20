import { capitilize } from "../functions/capitilize";

test('capitilize first letter (1)', () => {
    expect(capitilize('matt')).toBe('Matt');
});

test('capitilize first letter (2)', () => {
    expect(capitilize('jenna')).toBe('Jenna');
})