'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import imgnobg from '../../../public/img/mezcaaaal2.png'

const VentaCard = () => {
  const [size, setSize] = useState('350ml');
  const [price, setPrice] = useState('$500.00');
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSize(selectedSize);
    setPrice(selectedSize === '750ml' ? '$1000.00' : '$500.00');
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div style={styles.card}>
      <Image src={imgnobg} alt="Product" style={{margin:'10px',height: '120px', width: '70px', marginRight: '16px'}} />

      <div style={styles.info}>
        <h2 style={styles.title}>Mezcal Espadín</h2>
        <p style={styles.price}>{price}</p>

        <label style={styles.label}>Tamaño</label>
        <select value={size} onChange={handleSizeChange} style={styles.select}>
          <option value="750ml">750ml</option>
          <option value="350ml">350ml</option>
        </select>
      </div>

      <div style={styles.quantityContainer}>
        <button onClick={increaseQuantity} style={styles.quantityButton}>▲</button>
        <span style={styles.quantity}>{quantity}</span>
        <button onClick={decreaseQuantity} style={styles.quantityButton}>▼</button>
      </div>

      <img src='./img/basura.svg' alt="Delete" style={styles.deleteIcon} />
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#877259',
    padding: '10px',
    borderRadius: '8px',
    width: '800px',
    height: '150px',
  },
  image: {
    height: '127px',
    width: '82px',
    marginRight: '16px',
  },
  info: {
    flexGrow: 1,
    margin:'10px',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '24px',
    margin: '0 0 4px 0',
    color: '#f1e8e0',
  },
  price: {
    fontSize: '20px',
    color: '#f1e8e0',
    margin: '0 0 8px 0',
  },
  label: {
    fontSize: '14px',
    color: '#f1e8e0',
    marginRight: '8px',
  },
  select: {
    fontSize: '14px',
    color: '#5f2d16',
    padding: '4px',
    border: 'none',
    backgroundColor: '#F1E8E0',
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '16px',
  },
  quantityButton: {
    border: 'none',
    background: 'none',
    color: '#5f2d16',
    fontSize: '16px',
    cursor: 'pointer',
  },
  quantity: {
    fontFamily: 'Kanit, sans-serif',
    fontSize: '20px',
    color: '#5f2d16',
  },
  deleteIcon: {
    height: '30px',
    width: '30px',
    cursor: 'pointer',
  },
};

export default VentaCard;
