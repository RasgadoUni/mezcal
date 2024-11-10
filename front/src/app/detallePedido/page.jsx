'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import imgnobg from '../../../public/img/mezcaaaal2.png';
import Footer from '../components/FooterComponent';

const DetallePedidoCheckout = () => {
  const [productos, setProductos] = useState([]);
  const [detalles, setDetalles] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/producto')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));

    fetch('http://localhost:5000/api/detallepedido')
      .then((res) => res.json())
      .then((data) => {
        setDetalles(data);
        calcularSubtotal(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const agregarDetalle = () => {
    if (!productoSeleccionado) return alert('Selecciona un producto.');
    fetch('http://localhost:5000/api/detallepedido', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idProducto: productoSeleccionado, cantidad }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        const nuevoDetalle = { idProducto: productoSeleccionado, cantidad };
        setDetalles([...detalles, nuevoDetalle]);
        calcularSubtotal([...detalles, nuevoDetalle]);
      });
  };

  const modificarCantidad = (idDetalle, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    fetch('http://localhost:5000/api/detallepedido', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idDetalle, cantidad: nuevaCantidad }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        const detallesActualizados = detalles.map((detalle) =>
          detalle.idDetalle === idDetalle ? { ...detalle, cantidad: nuevaCantidad } : detalle
        );
        setDetalles(detallesActualizados);
        calcularSubtotal(detallesActualizados);
      });
  };

  const eliminarDetalle = (idDetalle) => {
    fetch(`http://localhost:5000/api/detallepedido?idDetalle=${idDetalle}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        const detallesRestantes = detalles.filter((item) => item.idDetalle !== idDetalle);
        setDetalles(detallesRestantes);
        calcularSubtotal(detallesRestantes);
      });
  };

  const calcularSubtotal = (detalles) => {
    const total = detalles.reduce((acc, detalle) => acc + detalle.cantidad * detalle.precio, 0);
    setSubtotal(total);
  };

  return (
    <div>
      <Header/>
      <div style={styles.mainContainer}>
      
      <header style={styles.header}>Carrito de Compras</header>
      
      <div style={styles.contentContainer}>
        {/* Lista de productos */}
        <div style={styles.leftColumn}>
          <h2 style={styles.cartTitle}>Detalles del Pedido</h2>
          {detalles.map((detalle) => (
            <div key={detalle.idDetalle} style={styles.card}>
              <Image src={imgnobg} alt="Producto" style={styles.image} />
              <div style={styles.info}>
                <h3 style={styles.title}>{detalle.nombre}</h3>
                <p style={styles.price}>${detalle.precio}</p>
                <p style={styles.quantityContainer}>
                  <button onClick={() => modificarCantidad(detalle.idDetalle, detalle.cantidad - 1)} style={styles.quantityButton}>-</button>
                  {detalle.cantidad}
                  <button onClick={() => modificarCantidad(detalle.idDetalle, detalle.cantidad + 1)} style={styles.quantityButton}>+</button>
                </p>
                <img src="./img/basura.svg" alt="Eliminar" style={styles.deleteIcon} onClick={() => eliminarDetalle(detalle.idDetalle)} />
              </div>
            </div>
          ))}
        </div>

        {/* Información de pago y envío */}
        <div style={styles.rightColumn}>
          <div style={styles.paymentDetails}>
            <h2 style={styles.sectionTitle}>Datos de Pago</h2>
            <label style={styles.label}>Nombre en la tarjeta</label>
            <input type="text" placeholder="Nombre" style={styles.input} />
            <label style={styles.label}>Número de tarjeta</label>
            <input type="text" placeholder="0000 0000 0000 0000" style={styles.input} />
            <div style={styles.paymentRow}>
              <div>
                <label style={styles.label}>Fecha</label>
                <input type="text" placeholder="12/24" style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>CVV</label>
                <input type="text" placeholder="123" style={styles.input} />
              </div>
            </div>
            <div style={styles.costDetails}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)} mxn</span>
            </div>
            <div style={styles.costDetails}>
              <span>Envío</span>
              <span>$150.00 mxn</span>
            </div>
            <div style={styles.costDetails}>
              <strong>Total</strong>
              <strong>${(subtotal + 150).toFixed(2)} mxn</strong>
            </div>
          </div>

          <div style={styles.shippingDetails}>
            <h2 style={styles.sectionTitle}>Datos de Envío</h2>
            <label style={styles.label}>Dirección</label>
            <input type="text" style={styles.input} />
            <label style={styles.label}>Dirección 2</label>
            <input type="text" style={styles.input} />
            <label style={styles.label}>Ciudad</label>
            <input type="text" style={styles.input} />
            <label style={styles.label}>Estado</label>
            <input type="text" style={styles.input} />
            <label style={styles.label}>Código Postal</label>
            <input type="text" style={styles.input} />
          </div>
          
          <button style={styles.checkoutButton}>Finalizar Compra</button>
        </div>
      </div>
      
    </div>
      <Footer/>
    </div>
  );
};

// Estilos
const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Kanit, sans-serif',
  },
  header: {
    fontSize: '32px',
    color: '#5f2d16',
    fontFamily: 'Playfair Display, serif',
    marginBottom: '20px',
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
  },
  leftColumn: {
    flex: 1,
    marginRight: '20px',
  },
  cartTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#5f2d16',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#877259',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  image: {
    height: '120px',
    width: '70px',
    marginRight: '16px',
  },
  info: {
    flexGrow: 1,
    color: '#f1e8e0',
  },
  title: {
    fontSize: '20px',
  },
  price: {
    fontSize: '18px',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  quantityButton: {
    cursor: 'pointer',
    margin: '0 5px',
  },
  deleteIcon: {
    width: '20px',
    cursor: 'pointer',
  },
  rightColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  paymentDetails: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#C9B469',
    borderRadius: '8px',
  },
  shippingDetails: {
    padding: '15px',
    backgroundColor: '#C9B469',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    marginBottom: '10px',
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
  },
  paymentRow: {
    display: 'flex',
    gap: '10px',
  },
  costDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  checkoutButton: {
    padding: '10px',
    backgroundColor: '#5f2d16',
    color: '#f1e8e0',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default DetallePedidoCheckout;

