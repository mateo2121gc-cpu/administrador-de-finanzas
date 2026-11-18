const express = require("express")

const router = express.Router()

 const controlador = require("../controller/gastos.controller")

  const controlador1 = require("../controller/categorias.controller")


 router.get("/gastos",controlador.obtenerGastos)
router.get("/categorias",controlador1.obtenerCategorias)
 module.exports = router

