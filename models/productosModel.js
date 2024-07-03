const { type } = require("os")
const db = require ("../data/db")
const imagenes = require ("./imagenesModesl")
const { Transaction } = require('sequelize');
const {DataTypes} = require ("sequelize")
const imagenesModel = require("./imagenesModesl")


const productosModel = db.define("productos",{
    id: {type:DataTypes.INTEGER,
        primaryKey: true,
    },
    sku: {type:DataTypes.INTEGER},
    titulo: {type:DataTypes.STRING},
    descripcion: {type:DataTypes.STRING},
    precio: {type:DataTypes.DECIMAL},
    stock: {type:DataTypes.INTEGER,defaultValue: 0}
})

productosModel.hasMany(imagenesModel, {
    foreignKey: 'skuProducto', sourceKey: 'sku'
})

imagenesModel.belongsTo(productosModel, {
    foreignKey: 'skuProducto', targetKey: 'sku'
})

module.exports=productosModel