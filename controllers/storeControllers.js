const { where } = require("sequelize");
const posteosModel = require("../models/storeModel.js");
const storeModel = require("../models/storeModel.js");

//buscar productos
const traerProductos = async (req, res) => {
    try {
        const productos = await storeModel.findAll();
        res.json(productos);

    } catch (error) {
        res.json({ message: error.message })
    }
}

//buscar un producto
const traerUnProducto = async (req, res) => {
    try {
        const producto = await storeModel.findByPk(req.params.sku);
        res.json(producto);
    } catch (error) {
        res.json({ message: error.message })
    }
}

//crear un producto
const crearProducto = async (req, res) => {
    try {
        await storeModel.create(req.body)
        res.json({ "message": "Producto creado OK" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//editar un producto
const editarProducto = async (req, res) => {
    try {
        await storeModel.update(req.body, {
            where: { id: req.params.sku }
        })
        res.json({ "message": "Producto actualizado OK" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//borrar un producto
const borrarProdcuto = async (req, res) => {
    try {
        await storeModel.destroy({
            where: { id: req.params.sku }
        })
        res.json({ "message": "Producto borrado OK" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = {traerUnProducto, traerProductos, crearProducto, editarProducto, borrarProdcuto}
