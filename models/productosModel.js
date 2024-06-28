const { type } = require("os")
const db = require ("../data/db")
const imagenes = require ("./imagenesModesl")

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
    foreignKey: 'idProducto', sourceKey: 'id'
})

imagenesModel.belongsTo(productosModel, {
    foreignKey: 'idProducto', targetKey: 'id'
})

module.exports=productosModel