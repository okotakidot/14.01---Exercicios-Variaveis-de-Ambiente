const config = require('./config');

function mascarar(valor) {
  if (!valor) return '(vazio)';
  if (valor.length <= 8) return '*'.repeat(valor.length);
  return valor.slice(0, 4) + '*'.repeat(valor.length - 8) + valor.slice(-4);
}

console.log('Configurações carregadas com sucesso!\n');

console.log('[app]');
console.log(`  porta:    ${config.app.port}`);
console.log(`  ambiente: ${config.app.env}`);

console.log('[db]');
console.log(`  host:     ${config.db.host}`);
console.log(`  porta:    ${config.db.port}`);

console.log('[auth]');
console.log(`  JWT_SECRET:      ${mascarar(config.auth.jwtSecret)}`);

console.log('[payment]');
console.log(`  PAYMENT_API_KEY: ${mascarar(config.payment.apiKey)}`);