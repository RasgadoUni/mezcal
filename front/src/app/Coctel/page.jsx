"use client";

import React, { useState } from 'react';

// Definimos los datos de los productos
const mezcales = [
  { id: 1, nombre: "Mezcal Espadín", recetas: ["Receta 1 para Mezcal Espadín", "Receta 2 para Mezcal Espadín"] },
  { id: 2, nombre: "Mezcal Tobalá", recetas: ["Receta para Mezcal Tobalá"] },
  { id: 3, nombre: "Mezcal Arroqueño", recetas: ["Receta para Mezcal Arroqueño"] },
  { id: 4, nombre: "Mezcal Cuishe", recetas: ["Receta para Mezcal Cuishe"] },
  { id: 5, nombre: "Mezcal Tepeztate", recetas: ["Receta 1 para Mezcal Tepeztate", "Receta 2 para Mezcal Tepeztate"] },
  { id: 6, nombre: "Mezcal Jabalí", recetas: ["Receta para Mezcal Jabalí"] },
];

const ListaProductos = ({ productos, onSeleccionar }) => {
  return (
    <div>
      <h2>Elige un Mezcal</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id} onClick={() => onSeleccionar(producto)}>
            {producto.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

const DetalleReceta = ({ producto }) => {
  if (!producto) return <p>Selecciona un mezcal para ver la receta.</p>;

  return (
    <div>
      <h3>{producto.nombre}</h3>
      <ul>
        {producto.recetas.map((receta, index) => (
          <li key={index}>{receta}</li>
        ))}
      </ul>
    </div>
  );
};

const Page = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleSeleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  return (
    <div>
      <ListaProductos productos={mezcales} onSeleccionar={handleSeleccionarProducto} />
      <DetalleReceta producto={productoSeleccionado} />
    </div>
  );
};

export default Page;