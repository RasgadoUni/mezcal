'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import imgnobg from '../../../public/img/mezcaaaal2.png';
import Footer from '../components/FooterComponent';
import { useRouter } from 'next/navigation';

const DetallePedidoCheckout = () => {
  const router = useRouter();
  const [productos, setProductos] = useState([]);
  const [detalles, setDetalles] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [direccion, setDireccion] = useState('');
  const [direccion2, setDireccion2] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [estado, setEstado] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [nombreTarjeta, setNombreTarjeta] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaTarjeta, setFechaTarjeta] = useState('');
  const [cvvTarjeta, setCvvTarjeta] = useState('');

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

  const finalizarCompra = async () => {

    const datosCompra = {
      subtotal,
      
      direccion,      
      direccion_2: direccion2,  
      ciudad,           
      estado,            
      codigo_postal: codigoPostal,  
      nombre_tarjeta: nombreTarjeta, 
      numero_tarjeta: numeroTarjeta, 
      fecha_tarjeta: fechaTarjeta,    
      cvv_tarjeta: cvvTarjeta,        
    };
  
    console.log(datosCompra);  
    
    try {
      const response = await fetch('http://localhost:5000/api/detalle_pedido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosCompra),
      });
    
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al finalizar la compra: ${errorText}`);
      }
    
      const result = await response.json();
      if (result.id) {
        localStorage.setItem('orderId', result.id);      
          router.push(`/purchase-ticket`);
      } else {
        alert("Error al finalizar la compra.");
      }
    } catch (error) {
      console.error("Error en la compra:", error);
      alert(`Hubo un problema al procesar la compra: ${error.message}`);
    }
  };
  
  
  return (
    <div>
      <Header/>
      <div style={styles.mainContainer}>
      
        <header style={styles.header}>Carrito de Compras</header>
      
        <div style={styles.contentContainer}>
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

          <div style={styles.rightColumn}>
            <div style={styles.paymentDetails}>
              <h2 style={styles.sectionTitle}>Datos de Pago</h2>
              <input type="text" placeholder="Nombre en la tarjeta" value={nombreTarjeta} onChange={(e) => setNombreTarjeta(e.target.value)} style={styles.input} />
              <input type="text" placeholder="Número de tarjeta" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} style={styles.input} />
              <div style={styles.paymentRow}>
                <input type="text" placeholder="Fecha de vencimiento" value={fechaTarjeta} onChange={(e) => setFechaTarjeta(e.target.value)} style={styles.input} />
                <input type="text" placeholder="CVV" value={cvvTarjeta} onChange={(e) => setCvvTarjeta(e.target.value)} style={styles.input} />
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
              <input type="text" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} style={styles.input} />
              <input type="text" placeholder="Dirección 2" value={direccion2} onChange={(e) => setDireccion2(e.target.value)} style={styles.input} />
              <input type="text" placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} style={styles.input} />
              <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} style={styles.input} />
              <input type="text" placeholder="Código Postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} style={styles.input} />
            </div>
          
            <button onClick={finalizarCompra} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#b59a49', color: '#fff', cursor: 'pointer' }}>Finalizar Compra</button>
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

