// 38 - Importaciones
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

// 39 - Validación del Login - api/auth
router.post(
  "/",
  [
    check("email", "Agrega un email valido...").isEmail(),
    check(
      "password",
      "Tu password debe ser mínimo de 6 caracteres..."
    ).isLength({
      min: 6,
    }),
  ],
  authController.autenticarUsuario
);

// 103 - Obtener el usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);

// 104 - Vamos a controllers/authController.js

module.exports = router;

// 40 - Creamos un archivo authController.js en la carpeta controllers
