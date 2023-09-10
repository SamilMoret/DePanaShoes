const database = require('../models');
const sequelize = require('sequelize')


//Comando para obter todos os usuarios do formato json
const getAllUsers = async (req,res) => {
    try {
        const User  = await database.Users.findAll()
        res.json(User)
    } catch (error) {
        res.json({message: error.message})
    }
}

// Se crea um registro de usuario
const createUser = async (req,res) => {
    try {
        await database.Users.create(req.body)
        res.json({
            'message': 'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Se atualiza um usuario especifico
const updateUser = async (req,res) =>{
    try {
        await database.Users.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro actualizado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Se obtem um usuario especifico
const getUser = async (req,res) => {
    try {
    const user = await database.Users.findAll({
            where:{ id:req.params.id }
        })
        res.json(user[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    getUser
};