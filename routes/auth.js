// 38 - Importaciones
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require('../controllers/authController');

// 39 - Validación del Login - api/auth 
router.post("/", [
  check("email", "Agrega un email valido...").isEmail(),
  check("password", "Tu password debe ser mínimo de 6 caracteres...").isLength({
    min: 6,
  }),
  authController.autenticarUsuario
]);

module.exports = router;

// 40 - Creamos un archivo authController.js en la carpeta controllers