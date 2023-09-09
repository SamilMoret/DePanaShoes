//import ProductModel from "../models/ProductModel.js";
//import { productsStock, productMinStock } from "../server.js";
//import { sendMail } from "../mail/mail.js";

//mostrar todos os registros
export const getAllProducts = async (req,res) => {
    try {
        const products  = await ProductModel.findAll()
        res.json(products)
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar um registro
export const getProduct = async (req,res) => {
    try {
       const product = await ProductModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(product[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// crear um registro
export const createProduct = async (req,res) => {
    try {
        await ProductModel.create(req.body)
        res.json({
            'message': 'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//atualizar registro
export const updateProducts = async (req,res) =>{
    try {
        await ProductModel.update(req.body, {
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

export const deleteProduct = async (req,res) =>{
    try {
        await ProductModel.destroy(req.body, {
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

export const bookProduct = async (req, res) => {
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
    const stock = await ProductModel.findAll({
        attributes: ['id', 'stock'],
        where:{ id: product }
    })
    console.log(quantity);
    await ProductModel.update({stock: stock[0].dataValues.stock - quantity[product]}, {
        where: {id: product}
    })
    if (productMinStock[product].stockMin >= (stock[0].dataValues.stock - quantity[product])){
        sendMail({id: product});
    }
}
//Se compram os produtos e usamos updatecontent para atualizar o conteudo de cada um
export const buyProducts = async (req, res) => {
    try {
        console.log(typeof(req.body));
        Object.keys(req.body).forEach(product => updateContent(product, req.body));
        res.json("Successful purchase");
    } catch (error) {
        res.json(error.message);   
    }
}