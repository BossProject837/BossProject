// 73 - Importaciones
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");

// 74 - Creamos las diferentes peticiones

// Crear Tareas - api/tareas
router.post(
  "/",
  auth,
  [check("nombre", "El Nombre es obligatorio").not().isEmpty()],
  [check("proyecto", "El Proyecto es obligatorio").not().isEmpty()],
  tareaController.crearTarea
);

// Obtener Tareas - api/tareas
router.get("/", auth, tareaController.obtenerTareas);

// Actualizar tarea - api/tareas
router.put("/:id", auth, tareaController.actualizarTarea);

// Eliminar tarea api/tareas
router.delete("/:id", auth, tareaController.eliminarTarea);

module.exports = router;

// 75 - Creamos el archivo tareaController.js en la carpeta controllers
