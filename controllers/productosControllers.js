const { where, QueryTypes, Sequelize } = require("sequelize");

const posteosModel = require("../models/productosModel.js");
const productosModel = require("../models/productosModel.js");
const imagenesModel = require("../models/imagenesModesl.js")

//buscar productos
const traerProductos = async (req, res) => {
    try {
        const productos = await productosModel.findAll({
            include: {
                model: imagenesModel,
            }
        });
        res.json(productos);

    } catch (error) {
        res.json({ message: error.message })
    }
}

//buscar un producto
const traerUnProducto = async (req, res) => {
    try {
        const producto = await productosModel.findOne({
            where: {
                sku: req.params.sku
            },
            include: {
                model: imagenesModel,
            }
        });
        res.json(producto);
    } catch (error) {
        res.json({ message: error.message })
    }
}

//crear un producto
const crearProducto = async (req, res) => {
    try {
        if (!await productosModel.findByPk(req.params.sku)) {
            const producto = await productosModel.create(req.body)
            //guardo y recorro el array de imagenes
            const imagenes = req.body.url
            imagenes.forEach(async (element) => await imagenesModel.create({
                skuProducto: producto.sku,
                url: element.url
            }));

            res.json({ "message": "Producto creado OK" })
        }
        else{
            res.json({ "message": "Ya existe un producto con este SKU roducto creado OK" })
        }

    } catch (error) {
        res.json({ message: error })
    }
}

//cargar una imagen
const cargarImagen = async (req, res) => {
    console.log(req.body);
    if(JSON.stringify(req.body)){
        try {
            if (await productosModel.findByPk(req.params.sku)) {
                //guardo y recorro el array de imagenes
                const imagenes = req.body.url
                imagenes.forEach(async (element) => await console.log(element))
                imagenes.forEach(async (element) => await imagenesModel.create({
                    skuProducto: req.params.sku,
                    url: element.url
                }));
                res.json({ "message": "Imagen cargada correctamente OK" })
            }
            else {
                res.json({ "message": "No existe un producto para este SKU" })
            }
        } catch (error) {
            res.json({ message: error })
        }
    }
    else{
        res.json({ message: error })
    }
}

//editar un producto
const editarProducto = async (req, res) => {
    try {
        await productosModel.update(req.body, {
            where: { sku: req.params.sku }
        })
        //guardo y recorro el array de imagenes
        const imagenes = req.body.url

        imagenes.forEach(async (element) => await imagenesModel.update({ url: element.url }, {
            where: { skuProducto: req.params.sku }
        }))
        res.json({ "message": "Producto actualizado OK" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//borrar un producto
const borrarProdcuto = async (req, res) => {
    try {
        //primero borro las imagenes 
        await imagenesModel.destroy({
            where: { skuProducto: req.params.sku }
        })

        //despues borro el producto
        await productosModel.destroy({
            where: { sku: req.params.sku }
        })

        res.json({ "message": "Producto borrado OK" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//borrar una imagen
const borrarImagen = async (req, res) => {
    try {
        await imagenesModel.destroy({
            where: { skuProducto: req.params.sku }
        })

        res.json({ "message": "Imagen borrada OK" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { traerUnProducto, traerProductos, crearProducto, editarProducto, borrarProdcuto, borrarImagen, cargarImagen }
