//import UserModel from "../models/UserModel.js";


//Comando para obter todos os usuarios do formato json
export const getAllUsers = async (req,res) => {
    try {
        const Users  = await UserModel.findAll()
        res.json(Users)
    } catch (error) {
        res.json({message: error.message})
    }
}

// Se crea um registro de usuario
export const createUser = async (req,res) => {
    try {
        await UserModel.create(req.body)
        res.json({
            'message': 'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Se atualiza um usuario especifico
export const updateUser = async (req,res) =>{
    try {
        await UserModel.update(req.body, {
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
export const getUser = async (req,res) => {
    try {
       const user = await UserModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(user[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}