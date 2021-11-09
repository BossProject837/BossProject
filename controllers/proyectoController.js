// 56 - importaciones
const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");


// 57 - Creamos metodo para utenticar user
exports.crearProyecto = async (req, res) => {
  // 58 - Revisamos si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    // 59 - Crear Proyecto
    const proyecto = new Proyecto(req.body);

    // 59 - Guardar el creador via jwt
    proyecto.creador = req.usuario.id;

    // 59 -  Guardamos el proyecto
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

// 60 - Creamos una carpeta middleware y dentro un archivo llamado auth.js
// --------------------------------------------------------------------------

// 65 - Obtener todos los proyectos del usuario actual
exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find({ creador: req.usuario.id });
    res.json({ proyectos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

// 66 - Actualizar Proyectos
exports.actualizarProyecto = async (req, res) => {
  // Revisamos si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer info del proyecto
  const { nombre } = req.body;
  const nuevoProyecto = {};

  if (nombre) {
    nuevoProyecto.nombre = nombre;
  }

  try {
    // Revisar el Id del proyecto
    let proyecto = await Proyecto.findById(req.params.id);

    // Verificar si el proyecto existe
    if (!proyecto) {
      return res.status(404).json({ msg: " El proyecto no existe..." });
    }

    // Verificar creador del proyecto
    if (proyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado..." });
    }

    // Actualizar proyecto
    proyecto = await Proyecto.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoProyecto },
      { new: true }
    );

    res.json({ proyecto });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

// 67 - Eliminar Proyecto
exports.eliminarProyecto = async (req, res) => {
  try {
    // Revisar el id
    let proyecto = await Proyecto.findById(req.params.id);

    // Verificar si el proyecto existe
    if (!proyecto) {
      return res.status(404).json({ msg: "Proyecto no encontrado..." });
    }

    // Verificar el creador del proyecto
    if (proyecto.creador.toString() !== req.usuario.id) {
      req.status(401).json({ msg: "No autorizado..." });
    }

    // Eliminar proyecto
    await Proyecto.findOneAndRemove({ _id: req.params.id });
    res.json({msg: 'Proyecto eliminado...'})

  } catch (error) {
    console.log(error);
    res.status(500).send("HUbo un error...");
  }
};

// 68 - Creamos el modelo de Tarea.js en la carperta models
