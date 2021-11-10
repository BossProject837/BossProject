// 8 - importamos mongoose
const mongoose = require('mongoose');

// 9 - importamos el archivo .env
require('dotenv').config({ path: 'var3.env' })

// 10 - conectar base de datos
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: true
        });
        console.log('✅ Base de datos conectada!!');
        console.log("\n===========================================");
    } catch (error) {
        console.log(error);
        process.exit(1); // si hay error este comando detiene la app
        
    }
}


// 11 - exportar conexion
module.exports = conectarDB;

// 12 - vamos a index.js