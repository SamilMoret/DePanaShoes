'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
class Productos extends Model {
    static associate(models) {
        //
    }
}
Productos.init(
    {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.INTEGER(128),
        allowNull: false
    },
    descricao: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    img1: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    img2: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    img3: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    stockMax: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    stockMin: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    },
    {
    sequelize,
    modelName: 'Productos',
    }
);
return Productos;
};
