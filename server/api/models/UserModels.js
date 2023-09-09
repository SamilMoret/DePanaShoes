//import db from "../database/db.js";

//import { DataTypes } from "sequelize";

//O modelo de todos os usuarios extraindo todos seus campos
const UserModel = db.define ('users',{
    user_name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING},
    telephone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
});

export default UserModel;