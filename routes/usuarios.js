// 16 - importamos express
const express = require("express");
const router = express.Router();

// 20 - importamos usuarioController
const usuarioController = require("../controllers/usuarioController");

// 30 - npm i express-validator - en la terminal
// 31 - importamos
const { check } = require("express-validator");

// 17 - crear usuario - api/usuarios
router.post(
  // 17 - crear usuario - api/usuarios
  "/",
  // 32 - Creamos las validaciones
  [
    check("nombre", "Debes introducir tu nombre...").not().notEmpty(),
    check("email", "Agrega un email valido...").isEmail(),
    check(
      "password",
      "Tu password debe ser mínimo de 6 caracteres..."
    ).isLength({ min: 6 }),
  ],
  // 17 - crear usuario - api/usuarios
  usuarioController.crearUsuario
);

// 18 - Creamos una carpeta llamada controllers y dentro un archivo llamado usuarioController.js

// 22 - Creamos una carpeta llamada models y dentro un archivo llamado Usuario.js

// 21 - exportamos router
module.exports = router;
