import { generateGuid } from 'helpers/generators';

test('it generates guid correctly', () => {
    const prefix = 'myprefix';
    const pattern = /myprefix.*/;
    expect(generateGuid(prefix)).toMatch(pattern);
});
