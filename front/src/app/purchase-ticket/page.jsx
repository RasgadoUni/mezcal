'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Estilos del ticket
const styles = {
  container: {
    maxWidth: '900px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    fontSize: '18px',
    color: '#555',
  },
  total: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#000',
    marginTop: '20px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '14px',
    color: '#aaa',
  },
  backButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#b59a49',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '20px',
  },
};

const PurchaseTicket = () => {
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    // Recuperar el ID del pedido desde localStorage
    const orderId = localStorage.getItem('orderId');

    if (orderId) {
      // Realizar la solicitud GET para obtener los detalles del pedido
      fetch(`http://localhost:5000/api/detalle_pedido/${orderId}`)
        .then((res) => res.json())
        .then((data) => setPedido(data))
        .catch((error) => console.error('Error al obtener el pedido:', error));
    } else {
      console.log('No se encontró el ID del pedido en localStorage');
    }
  }, []); // Solo se ejecuta una vez al cargar el componente

  if (!pedido) return <p>Cargando ticket...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Resumen de tu Compra</h2>

      <div style={styles.item}>
        <span>Subtotal</span>
        <span>${pedido.subtotal}</span>
      </div>

      <div style={styles.item}>
        <span>Envío</span>
        <span>${pedido.envio}</span>
      </div>

      <div style={styles.item}>
        <span>Total</span>
        <span>${pedido.total}</span>
      </div>

      <div style={styles.item}>
        <span>Dirección</span>
        <span>{pedido.direccion}</span>
      </div>

      <div style={styles.item}>
        <span>Ciudad</span>
        <span>{pedido.ciudad}</span>
      </div>

      <p style={styles.total}>Total a Pagar: ${pedido.total}</p>
      <Link href="../principal">
      <h2 style={styles.backButton}>Volver al inicio</h2>
        </Link>

      <div style={styles.footer}>
        <p>Gracias por tu compra</p>
      </div>
    </div>
  );
};

export default PurchaseTicket;





