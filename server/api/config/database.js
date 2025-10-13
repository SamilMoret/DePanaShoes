
const { Sequelize } = require('sequelize');
require('dotenv').config();

// CORREÇÃO: Limpar o valor do DB_HOST se tiver porta
let dbHost = process.env.DB_HOST;
if (dbHost && dbHost.includes(':')) {
    dbHost = dbHost.split(':')[0];
    console.log('✅ DB_HOST corrigido para:', dbHost);
}

console.log('=== DEBUG DB CONFIG ===');
console.log('DB_HOST:', dbHost);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('=======================');

const sequelize = new Sequelize(
    process.env.DB_DATABASE || 'depanashoes',
    process.env.DB_USERNAME || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: dbHost || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_DIALECT || 'mysql',
        logging: false,
    }
);

module.exports = sequelize;