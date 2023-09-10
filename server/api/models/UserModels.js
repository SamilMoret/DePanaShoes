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
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING(128),
    },
    adress: {
        allowNull: false,
        type: DataTypes.STRING(128),
    },
    telephone: {
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

