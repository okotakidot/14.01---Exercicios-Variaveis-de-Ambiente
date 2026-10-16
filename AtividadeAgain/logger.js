require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV;
const DB_URL = process.env.DB_URL;

function conectarBanco() {
  if (NODE_ENV === 'development') {
    console.log(`[MODO DESENVOLVIMENTO] Conectando ao banco local em: ${DB_URL} com LOGS DETALHADOS.`);
  } else if (NODE_ENV === 'production') {
    console.log('[MODO PRODUÇÃO] Conexão segura estabelecida. Logs detalhados desativados.');
  } else {
    console.log(`[AMBIENTE DESCONHECIDO] NODE_ENV="${NODE_ENV}" não é suportado.`);
  }
}

conectarBanco();

module.exports = { conectarBanco };