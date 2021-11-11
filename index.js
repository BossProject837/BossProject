// 1 - importar express
const { application } = require("express");
const express = require("express");

// 12 - importamos la conexion a la base de datos desde el archivo db.js
const conectarDB = require('./config/db');

// 2.1 - crear el servidor
const app = express();

// 13 - conectarse a la base de datos
conectarDB();

// 2.2 - habilitamos express.json
app.use(express.json({extended: true}))

// 3 - puerto del backend
const PORT = process.env.PORT || 4000;

// 14 - importar rutas - Se van agregando cada ves que vamos creando la ruta respectiva en ./routes
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'))

// 15 - Rutas - creamos una carpeta llamada routes y dentro un archivo llamado usuarios.js

// 4 - arrancar el backend - ejecutar npm run dev - verificar terminal y localhost:4000
app.listen(PORT, () => {
  console.log("===========================================\n");
  console.log(`✅ Servidor funcionando en el puerto ${PORT}!!`);
  
});

// 5 - definir la pagina principal
app.get("/", (req, res) => {
  res.send("👷🏻‍♂️ Backend de BoosProject...");
});

// 6 - creamos archivo llamado var3.env alli escribimos:
// DB_MONGO= y enseguida pegamos la url de mongo atlas con el usuario password y nombre de la base de datos.
// SECRETA= y una palabra secreta para autenticar el JWT

// 7 - creamos carpeta config y dentro el archivo db.js

