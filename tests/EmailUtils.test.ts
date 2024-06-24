import { obfuscateEmail } from '../src/utils/EmailUtils';

describe('EmailUtils', () => {
    test('obfuscateEmail correctly obfuscates non-niuco emails', () => {
        expect(obfuscateEmail('maria.oliveira@gmail.com')).toBe('ma********ra@gmail.com');
    });

    test('obfuscateEmail does not obfuscate niuco emails', () => {
        expect(obfuscateEmail('joao.silva@niuco.com.br')).toBe('joao.silva@niuco.com.br');
    });

    test('obfuscateEmail correctly handles short aliases', () => {
        expect(obfuscateEmail('jo@niuco.com.br')).toBe('jo@niuco.com.br');
        expect(obfuscateEmail('luiz@empresa.com')).toBe('luiz@empresa.com');
    });
});
