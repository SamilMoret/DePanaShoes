const express = require('express');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Conexão com o banco e inicialização do servidor
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('✅ Banco de dados conectado e sincronizado');
    if (process.env.NODE_ENV !== 'test') {
      const server = app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
      });
      return server;
    }
  })
  .catch((error) => {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
  });

// ✅ EXPORTE o app para testes
module.exports = app;