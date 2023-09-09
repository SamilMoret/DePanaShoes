//import express from "express";//Se importa express para facilitar la comunicacion con el servidor
//import { getAllUsers, createUser, updateUser, getUser } from "../controllers/UserController.js";//obteniendo todos los controladores ya creados para ser usados
const router = express.Router();
//generacao de rutas para usar a api creada para interagir com a base de dados
//diferentes rutas a usar com as diferentes funcoes
router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)

export default router;