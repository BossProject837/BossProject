// 76 - importaciones
const Tarea = require("../models/Tarea");
const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");

// 77 - Crear Tarea
exports.crearTarea = async (req, res) => {
  // 78 - Revisamos si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    // 79 - Extraer el proyecto
    const { proyecto } = req.body;

    // 80 - Comprobar si el proyecto existe
    const existeProyecto = await Proyecto.findById(proyecto);
    if (!existeProyecto) {
      res.status(404).json({ msg: "Proyecto no encontrado..." });
    }

    // 81 - Comprobar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado..." });
    }

    // 82 - Creamos la Tarea
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.json({ tarea });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

// 83 - Obtener tareas
exports.obtenerTareas = async (req, res) => {
  try {
    // 84 - Extraer el proyecto
    const { proyecto } = req.body;

    // 85 - Comprobar si el proyecto existe
    const existeProyecto = await Proyecto.findById(proyecto);
    if (!existeProyecto) {
      res.status(404).json({ msg: "Proyecto no encontrado..." });
    }

    // 86 - Comprobar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado..." });
    }

    // 87 - Obtener las Tareas de un proyecto
    const tareas = await Tarea.find({ proyecto });
    res.json(tareas)

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};
