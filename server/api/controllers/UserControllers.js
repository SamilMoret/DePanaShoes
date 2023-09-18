const database = require('../models');
const sequelize = require('sequelize')
const {v4:uuid} = require("uuid")



const getAllUsers = async (req,res) => {
    try {
        const User  = await database.Users.findAll()
{        res.json({data:User, message:"usuarios encontrados"})
}    } catch (error) {
        res.json({
            data:[],
            message: error.message})
    }
}


const createUser = async (req,res) => {
    try {
        await database.Users.create({...req.body, id:uuid()})
        res.json({
            'message': 'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}


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