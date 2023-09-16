const express = require('express')
const productsControllers = require('../controllers/ProductControllers');

const router = express.Router();

router.get('/products', productsControllers.getAllProducts);
router.put('/products/buy', productsControllers.buyProducts);
router.get('/products/shoes/:id', productsControllers.shoesProduct);
router.get('/products/:id', productsControllers.getProduct);
router.post('/products', productsControllers.createProduct);
router.put('/products/:id', productsControllers.updateProducts);
router.delete('/products/:id', productsControllers.deleteProduct);

module.exports = router;
