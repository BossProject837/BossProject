// 53 - Importaciones
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const proyectoController = require("../controllers/proyectoController");
const auth = require("../middleware/auth");

// 54 - Crear proyectos - api/proyectos
router.post("/", auth, proyectoController.crearProyecto);
router.get("/", auth, proyectoController.crearProyecto);

module.exports = router;

// 55 - Creamos el archivo proyectoController.js en la carpeta controllers
