const express = require ("express")
const router = express.Router()

const {traerUnProducto, traerProductos, crearProducto, editarProducto, borrarProdcuto, cargarImagen, borrarImagen} = require ("../controllers/productosControllers.js")

router.get ("/", traerProductos)
router.get("/:sku", traerUnProducto)
router.post("/", crearProducto)
router.put("/:sku", editarProducto)
router.delete("/:sku", borrarProdcuto)
router.post("/imagen/:sku", cargarImagen)
router.delete("/imagen/:sku", borrarImagen)


module.exports = router
