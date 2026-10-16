require('dotenv').config();

const OBRIGATORIAS = ['PAYMENT_API_KEY', 'JWT_SECRET'];

function validarVariaveis() {
  const ausentes = OBRIGATORIAS.filter((nome) => {
    const valor = process.env[nome];
    return valor === undefined || valor.trim() === '';
  });

  if (ausentes.length > 0) {
    console.error('\nERRO DE CONFIGURAÇÃO: a aplicação não pode iniciar.');
    console.error('As seguintes variáveis obrigatórias estão ausentes ou vazias:\n');
    ausentes.forEach((nome) => console.error(`   - ${nome}`));
    console.error('\nDefina-as no arquivo .env (use o .env.example como modelo).\n');
    process.exit(1);
  }
}

validarVariaveis();

const config = {
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
    env: process.env.NODE_ENV || 'development',
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET,
  },
  payment: {
    apiKey: process.env.PAYMENT_API_KEY,
  },
};

module.exports = config;