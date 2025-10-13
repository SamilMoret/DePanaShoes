const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API DePanaShoes funcionando!');
});

// Sincroniza o banco de dados e inicia o servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}).catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});