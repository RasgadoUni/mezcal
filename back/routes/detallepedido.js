// back/routes/detallepedido.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los detalles del pedido
router.get('/', (req, res) => {
  db.query(
    'SELECT pd.idDetalle, p.nombre, pd.cantidad, p.precio FROM pedidodetalle pd JOIN producto p ON pd.idProducto = p.idProducto',
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener detalle de pedido' });
      }
      res.status(200).json(results);
    }
  );
});

// Agregar un detalle de pedido
router.post('/', (req, res) => {
  const { idProducto, cantidad } = req.body;

  db.query(
    'INSERT INTO pedidodetalle (idProducto, cantidad) VALUES (?, ?)',
    [idProducto, cantidad],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al agregar detalle de pedido' });
      }
      res.status(200).json({ message: 'Detalle de pedido agregado' });
    }
  );
});

// Modificar la cantidad de un detalle del pedido
router.put('/', (req, res) => {
  const { idDetalle, cantidad } = req.body;

  if (!idDetalle || cantidad < 1) {
    return res.status(400).json({ message: 'Datos inválidos' });
  }

  db.query(
    'UPDATE pedidodetalle SET cantidad = ? WHERE idDetalle = ?',
    [cantidad, idDetalle],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al actualizar la cantidad del detalle de pedido' });
      }
      res.status(200).json({ message: 'Cantidad actualizada exitosamente' });
    }
  );
});

// Eliminar un detalle del pedido
router.delete('/', (req, res) => {
  const { idDetalle } = req.query;

  db.query(
    'DELETE FROM pedidodetalle WHERE idDetalle = ?',
    [idDetalle],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al eliminar detalle de pedido' });
      }
      res.status(200).json({ message: 'Detalle de pedido eliminado' });
    }
  );
});

module.exports = router;

