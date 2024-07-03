const { type } = require("os")
const db = require ("../data/db")
const { Transaction } = require('sequelize');
const {DataTypes} = require ("sequelize")

const imagenesModel = db.define("productos_imagenes",{
        idImagenes: {type:DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    skuProducto: {type:DataTypes.INTEGER},
    url: {type:DataTypes.STRING},
})

module.exports=imagenesModel