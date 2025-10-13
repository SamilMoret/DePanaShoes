const { Sequelize } = require('sequelize');
require('dotenv').config();

let dbHost = process.env.DB_HOST;
if (dbHost && dbHost.includes(':')) {
    dbHost = dbHost.split(':')[0];
}

const sequelize = new Sequelize(
    process.env.DB_DATABASE || 'depanashoes',
    process.env.DB_USERNAME || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: dbHost || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_DIALECT || 'mysql',
        logging: false,
        // ✅ CONFIGURAÇÃO CORRETA - SEM COLLATE AQUI
        dialectOptions: {
            charset: 'utf8mb4'
        },
        // ✅ COLLATE SÓ AQUI, ONDE É VÁLIDO
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci'
        },
        timezone: '-03:00'
    }
);

module.exports = sequelize;