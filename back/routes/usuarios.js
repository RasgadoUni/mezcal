const express = require('express');
const router = express.Router();
const db = require('../db'); // Importar la conexión a la base de datos

// Ruta para crear un nuevo usuario
router.post('/', (req, res) => {
  const { nombre, apellido, correo, telefono, contrasena } = req.body;
  const query = 'INSERT INTO usuarios (nombre, apellido, correo, telefono, contrasena) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nombre, apellido, correo, telefono, contrasena], (err, results) => {
    if (err) {
      console.error('Error al crear el usuario:', err);
      return res.status(500).json({ message: 'Error al crear el usuario' });
    }
    res.status(201).json({ message: 'Usuario creado', usuario: { nombre, apellido, correo, telefono } });
  });
});

module.exports = router;
