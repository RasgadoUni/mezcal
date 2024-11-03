const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Conexión a la base de datos
const usuarioRoutes = require('./routes/usuarios');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usar rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/auth', authRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



