"use client";
import { useEffect, useState } from 'react';

export default function DetallePedido() {
  const [productos, setProductos] = useState([]);
  const [detalles, setDetalles] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/producto')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener productos');
        }
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));

    fetch('http://localhost:5000/api/detallepedido')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener detalles del pedido');
        }
        return res.json();
      })
      .then((data) => setDetalles(data))
      .catch((error) => console.error(error));
  }, []);

  const agregarDetalle = () => {
    if (!productoSeleccionado) return alert('Por favor, selecciona un producto.');

    fetch('http://localhost:5000/api/detallepedido', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idProducto: productoSeleccionado,
        cantidad: cantidad,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setDetalles([...detalles, { idProducto: productoSeleccionado, cantidad }]);
      });
  };

  const eliminarDetalle = (idDetalle) => {
    fetch(`http://localhost:5000/api/detallepedido?idDetalle=${idDetalle}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setDetalles(detalles.filter((item) => item.idDetalle !== idDetalle));
      });
  };

  return (
    <div className="container" style={{ backgroundColor: '#f0fff4', padding: '20px', borderRadius: '8px' }}>
      <h1 style={{ color: '#2f855a' }}>Gestión de Detalles del Pedido</h1>

      <h2 style={{ color: '#2f855a' }}>Productos Disponibles</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
  <thead>
    <tr style={{ backgroundColor: '#48bb78', color: 'white' }}>
      <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>ID</th>
      <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>Nombre</th>
      <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>Precio</th>
      <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>Tamaño</th>
    </tr>
  </thead>
  <tbody>
    {productos.map((producto) => (
      <tr key={producto.idProducto} style={{ backgroundColor: '#e6fffa' }}>
        <td style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>{producto.idProducto}</td>
        <td style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>{producto.nombre}</td>
        <td style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>${producto.precio}</td>
        <td style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>{producto.tamaño}</td>
      </tr>
    ))}
  </tbody>
</table>


      <h2 style={{ color: '#2f855a' }}>Agregar Producto al Pedido</h2>
      <select
        onChange={(e) => setProductoSeleccionado(e.target.value)}
        value={productoSeleccionado}
        style={{ padding: '8px', marginBottom: '10px', border: '1px solid #48bb78', borderRadius: '4px' }}
      >
        <option value="">Selecciona un producto</option>
        {productos.map((producto) => (
          <option key={producto.idProducto} value={producto.idProducto}>
            {producto.nombre} - ${producto.precio}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        min="1"
        placeholder="Cantidad"
        style={{ padding: '8px', marginLeft: '10px', border: '1px solid #48bb78', borderRadius: '4px' }}
      />
      <button
        onClick={agregarDetalle}
        style={{
          backgroundColor: '#48bb78',
          color: 'white',
          padding: '8px 16px',
          marginLeft: '10px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Agregar al Pedido
      </button>

      <h2 style={{ color: '#2f855a', marginTop: '20px' }}>Detalles del Pedido</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#48bb78', color: 'white' }}>
            <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>ID Detalle</th>
            <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>Producto</th>
            <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>Cantidad</th>
            <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>Precio Unitario</th>
            <th style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {detalles.map((detalle) => (
            <tr key={detalle.idDetalle} style={{ backgroundColor: '#e6fffa' }}>
              <td style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>{detalle.idDetalle}</td>
              <td style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>{detalle.nombre}</td>
              <td style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>{detalle.cantidad}</td>
              <td style={{ padding: '8px', border: '1px solid #48bb78' , color: 'black'}}>${detalle.precio}</td>
              <td style={{ padding: '8px', border: '1px solid #48bb78', color: 'black' }}>
                <button
                  onClick={() => eliminarDetalle(detalle.idDetalle)}
                  style={{
                    backgroundColor: '#e53e3e',
                    color: 'white',
                    padding: '4px 8px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

