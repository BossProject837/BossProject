// 53 - Importaciones
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const proyectoController = require("../controllers/proyectoController");
const auth = require("../middleware/auth");

// 54 - Crear proyectos - api/proyectos
router.post(
  "/",
  auth,
  [check("nombre", "Debes escribir un nombre...").not().isEmpty()],
  proyectoController.crearProyecto
);

// - Obtener proyectos - api/proyectos
router.get("/", auth, proyectoController.obtenerProyectos);

// - Actualizar proyecto via id - api/proyectos
router.put(
  "/:id",
  auth,
  [check("nombre", "Debes escribir un nombre...").not().isEmpty()],
  proyectoController.actualizarProyecto
);

module.exports = router;

// 55 - Creamos el archivo proyectoController.js en la carpeta controllers
