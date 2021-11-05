// 56 - importaciones
const bcryptjs = require("bcryptjs");
const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

// 57 - Creamos metodo para utenticar user
exports.crearProyecto = async (req, res) => {
  // 58 - Revisamos si hay errores
  try {
    // 59 - Crear Proyecto
    const proyecto = new Proyecto(req.body);
    proyecto.save();
    res.json(proyecto);
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};
