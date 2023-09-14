const express = require('express');
const { sequelize } = require('./models');
const database = require('./models');
const port = process.env.port || 3001;
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

//usando el modelo de productos, encuentra a todos los productos y devuelve sus correspondientes atributos y se guarda en el objeto en products
return database.Productos.findAll({
  attributes: ['id', 'stock', 'stockMin', 'nombre']
})

.then( products => {
  let productsStock = {}//objeto para guardar el stock minmo de los productos
  let productMinStock = {}//objeto para guardar el stock minimo de los productos
  
  //para cada producto obtenido, 
  products.forEach(product => {
    productsStock[product.dataValues.id] = product.dataValues.stock;//se le asigna el id correspondiente al producto y a su vez el valor del stock en forma de objeto
  });
  products.forEach(product => {
    productMinStock[product.dataValues.id] = {stockMin: product.dataValues.stockMin, nombre: product.dataValues.nombre};//se le asigna el id correspondiente al producto y a su vez el valor minimo del stock en forma de objeto, junto con el nomrbe
  });
  console.log(productMinStock);
})


