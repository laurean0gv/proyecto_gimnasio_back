const express = require ("express")
const router = express.Router()

const {traerUnProducto, traerProductos, crearProducto, editarProducto, borrarProdcuto} = require ("../contollers/storeControllers.js")

router.get ("/", traerProductos)
router.get("/:sku", traerUnProducto)
router.post("/", crearProducto)
router.put("/:sku", editarProducto)
router.delete("/:sku", borrarProdcuto)

module.exports = router
