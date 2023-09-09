//import db from "../database/db.js";

//import { DataTypes } from "sequelize";//Tipo de dados para cada atributo da base de dados

//O modelo de todos os produtos extraindo todos seus campos
const ProductModel = db.define ('productos',{
    nombre: {type: DataTypes.STRING},
    precio: {type: DataTypes.NUMBER},
    descripcion: {type: DataTypes.TEXT},
    img1: {type: DataTypes.TEXT},
    img2: {type: DataTypes.TEXT},
    img3: {type: DataTypes.TEXT},
    stockMax: {type: DataTypes.INTEGER},
    stockMin: {type: DataTypes.INTEGER},
    stock: {type: DataTypes.INTEGER}
});

export default ProductModel;