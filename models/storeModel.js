const { type } = require("os")
const db = require ("../data/db")

const {DataTypes} = require ("sequelize")

const storeModel = db.define("store",{
    sku: {type:DataTypes.INTEGER},
    titulo: {type:DataTypes.STRING},
    descripcion: {type:DataTypes.STRING},
    precio: {type:DataTypes.DECIMAL},
    foto: {type:DataTypes.STRING},
    stock: {type:DataTypes.INTEGER,defaultValue: 0}
})

module.exports=storeModel