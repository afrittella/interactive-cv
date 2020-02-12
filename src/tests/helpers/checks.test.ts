import { isFunction, isString } from 'helpers/check';

test('isFunction true with function', () => {
    const testFunction = () => {};

    expect(isFunction(testFunction)).toBe(true);
});

test('isFunction false with no function', () => {
    const testFunction = 'test';

    expect(isFunction(testFunction)).toBe(false);
});

test('isString successful', () => {
    const values = ['correct string', `interpolated string ${'1'}`];

    values.forEach(value => expect(isString(value)).toBe(true));
});

test('isString failed', () => {
    const values = [123, {}, console, false, []];

    values.forEach(value => expect(isString(value)).toBe(false));
});
