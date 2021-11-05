// 49 - importamos mongoose
const mongoose = require("mongoose");

// 50 - Creamos el Esquema de proyecto
const ProyectoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  // le asignamos el id del usuario que lo haya creado a cada proyecto
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
});

// 51 - Exportamos
module.exports = mongoose.model("Proyecto", ProyectoSchema);

// 52 - Creamos un archivo proyectos.js en la carpeta routes
