const express = require('express')//Se importa express para facilitar la comunicacion con el servidor
const usersControllers = require('../controllers/UserControllers');//obteniendo todos los controladores ya creados para ser usados

const router = express.Router();
//generacao de rutas para usar a api creada para interagir com a base de dados
//diferentes rutas a usar com as diferentes funcoes

router.get('/users', usersControllers.getAllUsers)
router.get('/users/:id', usersControllers.getUser)
router.post('/users', usersControllers.createUser)
router.put('/users/:id', usersControllers.updateUser)

module.exports = router;