const sequelize = require('../api/config/database');

// Aguarda mais tempo antes de fechar a conexão
afterAll(async () => {
    // Espera um pouco para garantir que todas as operações terminaram
    await new Promise(resolve => setTimeout(resolve, 1000));
    await sequelize.close();
});