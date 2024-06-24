const express = require ("express")
const router = express.Router()

const {traerUnProducto, traerProductos, crearProducto, editarProducto, borrarProdcuto} = require ("../controllers/storeControllers.js")

router.get ("/", traerProductos)
router.get("/:sku", traerUnProducto)
router.post("/", crearProducto)
router.put("/:sku", editarProducto)
router.delete("/:sku", borrarProdcuto)

console.log("Pasamos por el router");

module.exports = router
