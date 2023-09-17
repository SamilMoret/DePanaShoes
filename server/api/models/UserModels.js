'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
class Users extends Model {
    static associate(models) {
        //
    }
}
Users.init(
    {
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    senha: {
        allowNull: false,
        type: DataTypes.STRING(128),
    },
    endereco: {
        allowNull: false,
        type: DataTypes.STRING(128),
    },
    telefone: {
        allowNull: false,
        type: DataTypes.STRING(128),
    },
    },
    {
    sequelize,
    modelName: 'Users',
    }
);
return Users;
};

