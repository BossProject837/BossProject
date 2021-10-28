// 1 - importar express
const express = require("express");

// 12 - importamos la conexion a la base de datos desde el archivo db.js
const conectarDB = require('./config/db');

// 2 - crear el servidor
const app = express();

// 13 - conectarse a la base de datos
conectarDB();

// 3 - puerto del backend
const PORT = process.env.PORT || 4000;

// 4 - arrancar el backend - ejecutar npm run dev - verificar terminal y localhost:4000
app.listen(PORT, () => {
  console.log("===========================================\n");
  console.log(`✅ Servidor funcionando en el puerto ${PORT}!!`);
  
});

// 5 - definir la pagina principal
app.get("/", (req, res) => {
  res.send("👷🏻‍♂️ Backend de BoosProject...");
});

// 6 - creamos archivo variables.env alli escribimos DB_MONGO= y enseguida pegamos la url de mongo atlas con el usuario password y nombre de la base de datos correspondiente.

// 7 - creamos carpeta config y dentro el archivo db.js
