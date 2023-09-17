const express = require('express');
const { sequelize } = require('./models');
const database = require('./models');
const port = process.env.port || 3001;
const app = express();
const cors = require("cors")
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
routes(app);

app.listen(port, async () => {
  
  sequelize.authenticate()
  .then(() => {
    console.log('Conectado al servidor');
    return sequelize.sync({ force: false })
  })

  .then(()=> {
    console.log(`Server conectado na porta ${port}`)
  })
}); 


return database.Productos.findAll({
  attributes: ['id', 'stock', 'stockMin', 'nome']
})

.then( products => {
  let productsStock = {}
  let productMinStock = {}
  
   
  products.forEach(product => {
    productsStock[product.dataValues.id] = product.dataValues.stock;
  });
  products.forEach(product => {
    productMinStock[product.dataValues.id] = {stockMin: product.dataValues.stockMin, nome: product.dataValues.nome};
  });
  console.log(productMinStock);
})


