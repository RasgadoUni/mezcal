const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Conexión a la base de datos
const usuarioRoutes = require('./routes/usuarios');
const authRoutes = require('./routes/auth');
const productoRoutes = require('./routes/producto'); // Importar rutas de producto
const detallepedidoRoutes = require('./routes/detallepedido');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usar rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/detallepedido', detallepedidoRoutes);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



