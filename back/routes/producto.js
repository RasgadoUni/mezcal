// back/routes/producto.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los productos
router.get('/', (req, res) => {
  db.query('SELECT * FROM producto', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
    res.status(200).json(results);
  });
});

// Agregar un nuevo producto
router.post('/', (req, res) => {
  const { nombre, precio, tamaño } = req.body;

  db.query(
    'INSERT INTO producto (nombre, precio, tamaño) VALUES (?, ?, ?)',
    [nombre, precio, tamaño],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al agregar producto' });
      }
      res.status(200).json({ message: 'Producto agregado' });
    }
  );
});

// Actualizar un producto
router.put('/', (req, res) => {
  const { idProducto, nombre, precio, tamaño } = req.body;

  db.query(
    'UPDATE producto SET nombre = ?, precio = ?, tamaño = ? WHERE idProducto = ?',
    [nombre, precio, tamaño, idProducto],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al actualizar producto' });
      }
      res.status(200).json({ message: 'Producto actualizado' });
    }
  );
});

// Eliminar un producto
router.delete('/', (req, res) => {
  const { idProducto } = req.query;

  db.query(
    'DELETE FROM producto WHERE idProducto = ?',
    [idProducto],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al eliminar producto' });
      }
      res.status(200).json({ message: 'Producto eliminado' });
    }
  );
});

module.exports = router;

