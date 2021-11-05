// 53 - Importaciones
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const proyectoController = require('../controllers/proyectoController');


// 54 - Crear proyectos - api/proyectos
router.post('/', proyectoController.crearProyecto)


module.exports = router;

// 55 - Creamos el archivo proyectoController.js en la carpeta controllers