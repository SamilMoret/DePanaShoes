const express = require('express')//Se importa express para facilitar la comunicacion con el servidor
const productsControllers = require('../controllers/ProductControllers');//obteniendo todos los controladores ya creados para ser usados

const router = express.Router();
//generacao de rutas para usar a api creada para interagir com a base de dados
//diferentes rutas a usar com as diferentes funcoes

//geracao de rutas para usar a api creada para interagir com a base de dados
//diferentes rutas a usar com as diferentes funcoes
router.get('/products', productsControllers.getAllProducts);
router.put('/products/buy', productsControllers.buyProducts);
router.get('/products/shoes/:id', productsControllers.shoesProduct);
router.get('/products/:id', productsControllers.getProduct);
router.post('/products', productsControllers.createProduct);
router.put('/products/:id', productsControllers.updateProducts);
router.delete('/products/:id', productsControllers.deleteProduct);

module.exports = router;
