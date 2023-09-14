
//import ProductModel from "../models/ProductModel.js";
//import { productsStock, productMinStock } from "../server.js";
//import { sendMail } from "../mail/mail.js";
const database = require('../models');
const sequelize = require('sequelize')

//mostrar todos os registros
const getAllProducts = async (req,res) => {
    try {
        const products  = await database.Productos.findAll()
        res.json(products)
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar um registro
const getProduct = async (req,res) => {
    try {
    const product = await database.Productos.findAll({
            where:{ id:req.params.id }
        })
        res.json(product[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// crear um registro
const createProduct = async (req,res) => {
    try {
        await database.Productos.create(req.body)
        res.json({
            'message': 'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//atualizar registro
const updateProducts = async (req,res) =>{
    try {
        await database.Productos.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro actualizado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}
//eliminar registro

const deleteProduct = async (req,res) =>{
    try {
        await database.Productos.destroy({
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro borrado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//reservar ou nao reservar produtos por meio de um click ao carrinho

const shoesProduct = async (req, res) => {
    try {
        console.log(productsStock);
        if (req.query.f === 'unbook'){
            productsStock[req.params.id]++;
            return res.json('Unbooked');
        } else if (req.query.f === 'book') {
            if (productsStock[req.params.id] == 0) return res.json('Stockout')//en caso de que el producto sea igual a 0 se notifica que se acabo
            productsStock[req.params.id]--;
            return res.json('Booked');
        } 
        res.status(400).json('Bad request');
    } catch (error) {
        res.json({message: error.message});
    }
}

//Se atualiza o contenduo da base de dados
const updateContent = async (product, quantity) => {
    const stock = await database.Productos.findAll({
        attributes: ['id', 'stock'],
        where:{ id: product }
    })
    console.log(quantity);
    await database.Productos.update({stock: stock[0].dataValues.stock - quantity[product]}, {
        where: {id: product}
    })
    if (productMinStock[product].stockMin >= (stock[0].dataValues.stock - quantity[product])){
        sendMail({id: product});
    }
}
//Se compram os produtos e usamos updatecontent para atualizar o conteudo de cada um
const buyProducts = async (req, res) => {
    try {
        console.log(typeof(req.body));
        Object.keys(req.body).forEach(product => updateContent(product, req.body));
        res.json("Successful purchase");
    } catch (error) {
        res.json(error.message);   
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProducts,
    deleteProduct,
    shoesProduct,
    updateProducts,
    updateContent,
    buyProducts

}