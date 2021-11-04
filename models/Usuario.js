// 23 - importamos mongoose
const mongoose = require("mongoose");

// 24 - Esquema del usuario
const UsuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  registro: {
    type: Date,
    default: Date.now()
  },
});

// 25 - exportamos
module.exports = mongoose.model("Usuario", UsuarioSchema);
