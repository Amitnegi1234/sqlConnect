const {DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection')

const identityCard=sequelize.define('identityCard',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    cardNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports=identityCard;