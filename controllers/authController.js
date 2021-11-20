// 41 - importaciones
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

// 42 - Creamos metodo para utenticar user
exports.autenticarUsuario = async (req, res) => {
  // 43 - Revisamos si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // 44 - Extraer Email y Password
  const { email, password } = req.body;

  try {
    // 45 - Revisar que se un usuario registrado
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe..." });
    }

    // 46 - Revisar que el password este correcto
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if (!passCorrecto) {
      return res.status(400).json({ msg: "Password incorrecto..." });
    }

    // 47 - Si todo es correcto - se recibe un token
    const payload = {
      usuario: { id: usuario.id },
    };
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600000,
      },
      (error, token) => {
        if (error) throw error;

        // Mensaje de confirmacion
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// 104 - Obtener que usuario está autenticado
exports.usuarioAutenticado = async (req, res) => {
  
  try {
    const usuario = await Usuario.findById(req.usuario.id).select('-password');
    res.json({usuario})
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error..." });
  }
};

// 48 - Creamos el archivo Proyecto.js en la carpeta models
