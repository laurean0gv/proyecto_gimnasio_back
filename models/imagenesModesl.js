const { type } = require("os")
const db = require ("../data/db")

const {DataTypes} = require ("sequelize")

const imagenesModel = db.define("imagenes",{
    idImagenes: {type:DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    idProducto: {type:DataTypes.INTEGER},
    url: {type:DataTypes.STRING},
})

module.exports=imagenesModel