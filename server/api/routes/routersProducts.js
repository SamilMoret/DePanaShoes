//import express from "express";//Se importa express para facilitar la comunicacion con el servidor
//import { bookProduct, buyProducts,getAllProducts,getProduct,createProduct,updateProducts,deleteProduct } from "../controllers/ProductControllers.js";//obteniendo todos los controladores ya creados para ser usados
const router = express.Router();

//geracao de rutas para usar a api creada para interagir com a base de dados
//diferentes rutas a usar com as diferentes funcoes
router.get('/', getAllProducts)
router.put('/buy', buyProducts)
router.get('/book/:id', bookProduct)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProducts)
router.delete('/:id', deleteProduct)

export default router;