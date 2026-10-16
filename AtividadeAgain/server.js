require('dotenv').config();

const PORT = process.env.PORT || 8080;

console.log(
  process.env.PORT
    ? `Servidor rodando na porta ${PORT}`
    : `Servidor rodando na porta padrão ${PORT}`
);