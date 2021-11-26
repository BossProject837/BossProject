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
    const { proyecto } = req.query;

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
    res.json(tareas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

// 88 - Actualizar Tarea
exports.actualizarTarea = async (req, res) => {
  try {
    // 89 - Extraer el proyecto
    const { proyecto, nombre, estado } = req.body;

    // 90 - Comprobar si la tarea existe
    let tareaExiste = await Tarea.findById(req.params.id);
    if (!tareaExiste) {
      return res.status(404).json({ msg: "Esta tarea no existe..." });
    }

    // 91 - Com probar si existe el proyecto
    const existeProyecto = await Proyecto.findById(proyecto);

    // 92 - Comprobar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado..." });
    }

    // 93 - Crear objeto con la informacion anterior
    const nuevaTarea = {};
    if (nombre) {
      nuevaTarea.nombre = nombre;
    }

    if (estado == true) {
      nuevaTarea.estado = true;
    } else {
      nuevaTarea.estado = false;
    }

    // 94 - Guardar Tarea
    existeTarea = await Tarea.findByIdAndUpdate(
      { _id: req.params.id },
      nuevaTarea,
      { new: true }
    );

    // 95 - Respuesta
    res.json({ existeTarea });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

// 96 - Eliminar Tarea
exports.eliminarTarea = async (req, res) => {
  try {
    // 97 - Extraer el proyecto
    const { proyecto } = req.body;

    // 98 - Comprobar si la tarea existe
    let tareaExiste = await Tarea.findById(req.params.id);
    if (!tareaExiste) {
      return res.status(404).json({ msg: "Esta tarea no existe..." });
    }

    // 99 - Com probar si existe el proyecto
    const existeProyecto = await Proyecto.findById(proyecto);

    // Comprobar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado..." });
    }

    // 100 - Eliminar Tarea
    await Tarea.findOneAndRemove({ _id: req.params.id });
    res.json({msg: 'Tarea Eliminada...'})

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};
