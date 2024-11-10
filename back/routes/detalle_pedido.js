// routes/detalle_pedido.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta POST para agregar detalle de pedido
router.post('/', (req, res) => {
    const {
      subtotal,
      direccion,
      direccion_2,
      ciudad,
      estado,
      codigo_postal,
      nombre_tarjeta,
      numero_tarjeta,
      fecha_tarjeta,
      cvv_tarjeta
    } = req.body;
  
    // Validación de datos requeridos
    if (!subtotal || !direccion || !ciudad || !estado || !codigo_postal || !nombre_tarjeta || !numero_tarjeta || !fecha_tarjeta || !cvv_tarjeta) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }
  
    // Envío fijo (en este caso, 150)
    const envio = 150;
  
    // Calcular el total
    const total = subtotal + envio;
  
    // Consulta SQL para insertar el detalle de pedido
    const query = `INSERT INTO detalle_pedido (subtotal, envio, total, direccion, direccion_2, ciudad, estado, codigo_postal, nombre_tarjeta, numero_tarjeta, fecha_tarjeta, cvv_tarjeta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    db.query(query, [
      subtotal,
      envio,
      total,
      direccion,
      direccion_2,
      ciudad,
      estado,
      codigo_postal,
      nombre_tarjeta,
      numero_tarjeta,
      fecha_tarjeta,
      cvv_tarjeta
    ], (err, result) => {
      if (err) {
        console.error('Error SQL:', err.message);
        return res.status(500).json({ error: 'Error al guardar el detalle de la compra', details: err.message });
      }
      res.status(200).json({ message: 'Compra guardada exitosamente', id: result.insertId });
    });
});
// Ruta GET para obtener un detalle de pedido por su id
router.get('/:id', (req, res) => {
    const { id } = req.params;  // Obtener el id de la URL
  
    // Consulta SQL para obtener el detalle del pedido
    const query = 'SELECT * FROM detalle_pedido WHERE id = ?';
  
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error SQL:', err.message);
        return res.status(500).json({ error: 'Error al obtener el detalle del pedido' });
      }
  
      if (result.length === 0) {
        return res.status(404).json({ error: 'Pedido no encontrado' });
      }
  
      res.status(200).json(result[0]);  // Enviar el primer resultado como respuesta
    });
  });

module.exports = router;

