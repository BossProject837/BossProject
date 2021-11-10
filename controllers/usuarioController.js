// 26 - Importamos el modelo de usuario
const Usuario = require("../models/Usuario");

// 27 - npm i bcryptjs - en la terminal

// 28 - importamos bcryptjs para encriptar los passwords en la base de datos
const bcryptjs = require("bcryptjs");

// 33 - importamos validationResult del paquete express-validator
const { validationResult } = require("express-validator");

// 34 - npm i jsonwebtoken - en laterminal - importamos
const jwt = require("jsonwebtoken");

// ============================================================================

// 19 - Crear usuario
exports.crearUsuario = async (req, res) => {
  // 35 - Revisamos si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // 19 extraer Email y password
  const { email, password } = req.body;

  try {
    // 19 Revisar que el usuario sea unico
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      res.status(400).json({ msg: "El usuario ya existe..." });
    }

    // 19 Crea nuevo usuario
    usuario = Usuario(req.body);

    // 29 - encriptar el password - generamos un salto de 10 vueltas random antes de asignar un codigo a un password
    const salt = await bcryptjs.genSalt(10);
    usuario.password = await bcryptjs.hash(password, salt);

    // 30 - vamos a usuarios.js

    // 19  Guarda nuevo usuario
    await usuario.save();

    // 20 - Vamos a routes/usuarios.js

    // 36 - Crear y firmar el JWT
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
    res.status(400).send("Hubo un error...");
  }
};

// 37 - Creamos una archivo auth.js en la carperta routes