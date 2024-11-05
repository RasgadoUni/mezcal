const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para manejar el inicio de sesión
router.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;

  const query = 'SELECT * FROM usuarios WHERE correo = ?';
  db.query(query, [correo], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ message: 'Error al conectar a la base de datos' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const usuario = results[0];

    // Comparar las contraseñas en texto plano
    if (usuario.contrasena !== contrasena) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Autenticación exitosa
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  });
});

module.exports = router;

