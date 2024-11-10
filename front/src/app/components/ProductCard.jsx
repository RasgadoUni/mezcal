'use client';
import React from 'react';
import Image from 'next/image';
import imgnobg from '../../../public/img/mezcaaaal2.png';

const ProductCard = ({ idProducto, nombre, precio, imagen = imgnobg }) => {
  const agregarAlCarrito = () => {
    fetch('http://localhost:5000/api/detallepedido', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idProducto, cantidad: 1 }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error(error));
  };

  const cardStyle = {
    width: '220px',
    height: '420px',
    fontFamily: 'Kanit',
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
  };

  const priceStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#000000ff'
  };

  const stockStyle = {
    fontSize: '15px',
    fontWeight: '700',
    color: '#786b3aff',
    marginTop: '100px',
  };

  const titleStyle = {
    fontSize: '25px',
    fontWeight: '500',
    color: '#000000ff',
  };

  const buttonContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  };

  const buttonStyle = {
    width: '156px',
    height: '36px',
    backgroundColor: '#786B3A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  };

  const buttonTextStyle = {
    fontSize: '15px',
    fontWeight: '700',
    color: '#eeeae8ff'
  };

  return (
    <div style={cardStyle}>
      <div><Image src={imagen} style={{ height: '270px', width: '130px' }} alt={nombre} /></div>
      <div style={titleStyle}>{nombre}</div>
      <div style={priceStyle}>${precio.toFixed(2)}</div>
      <div style={stockStyle}>En Stock</div>

      <div style={buttonContainerStyle}>
        <div style={buttonStyle} onClick={agregarAlCarrito}>
          <span style={buttonTextStyle}>Añadir al carrito</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
