// 16 - importamos express
const express = require("express");
const router = express.Router();

// 20 - importamos usuarioController
const usuarioController = require('../controllers/usuarioController');

// 17 - crear usuario - api/usuarios
router.post("/", usuarioController.crearUsuario);

// 18 - Creamos una carpeta llamada controllers y dentro un archivo llamado usuarioController.js

module.exports = router;
