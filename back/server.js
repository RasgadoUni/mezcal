const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Conexión a la base de datos

const usuarioRoutes = require('./routes/usuarios');
const authRoutes = require('./routes/auth');
const productoRoutes = require('./routes/producto');
const pedidoDetalleRoutes = require('./routes/detallepedido');
const detallePedidoRoutes = require('./routes/detalle_pedido'); // Cambia aquí el nombre de la constante

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usar rutas
app.use('/api/detalle_pedido', detallePedidoRoutes); // Asegúrate de que detalle_pedido.js existe y exporta las rutas adecuadamente
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/detallepedido', pedidoDetalleRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



