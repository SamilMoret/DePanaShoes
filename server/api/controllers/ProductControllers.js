
//import ProductModel from "../models/ProductModel.js";
//import { productsStock, productMinStock } from "../server.js";
//import { sendMail } from "../mail/mail.js";
const database = require('../models');
const sequelize = require('sequelize')


const getAllProducts = async (req,res) => {
    try {
        const products  = await database.Productos.findAll()
        res.status(200).json({data:products, message: "produtos encontrados"})
    } catch (error) {
        res.json({data:[],message: error.message})
    }
}


const getProduct = async (req,res) => {
    try {
    const product = await database.Productos.findAll({
            where:{ id:req.params.id }
        })
        res.json({data:product[0], message: "productos encontrados"})
    } catch (error) {
        res.json( {
            data:[],
            message: error.message} )
    }
}


const createProduct = async (req,res) => {
    try {
        await database.Productos.create(req.body)
        res.json({
            'message': 'registro criado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}


const updateProducts = async (req,res) =>{
    try {
        await database.Productos.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro atualizado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}


const deleteProduct = async (req,res) =>{
    try {
        await database.Productos.destroy({
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro excluido'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}



const shoesProduct = async (req, res) => {
    try {
        console.log(productsStock);
        if (req.query.f === 'unbook'){
            productsStock[req.params.id]++;
            return res.json('Unbooked');
        } else if (req.query.f === 'book') {
            if (productsStock[req.params.id] == 0) return res.json('Stockout')
            productsStock[req.params.id]--;
            return res.json('Booked');
        } 
        res.status(400).json('Bad request');
    } catch (error) {
        res.json({message: error.message});
    }
}


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