export function obfuscateEmail(email: string): string {
  const [alias, domain] = email.split('@');
  if (domain === 'niuco.com.br') return email;
  if (alias.length <= 4) return `${alias}@${domain}`;
  const maskedAlias = `${alias.substring(0, 2)}${'*'.repeat(alias.length - 4)}${alias.substring(alias.length - 2)}`;
  return `${maskedAlias}@${domain}`;
}
