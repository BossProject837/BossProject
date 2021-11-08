// 56 - importaciones
const bcryptjs = require("bcryptjs");
const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

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

// 65 - Obtener todos los proyectos del usuario actual
exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await (await Proyecto.find({ creador: req.usuario.id }));
    res.json({proyectos})
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};


