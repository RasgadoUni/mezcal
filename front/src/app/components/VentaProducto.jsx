'use client'
import React, { useState } from 'react';

const VentaCard = () => {
  const [size, setSize] = useState('750ml');
  const [price, setPrice] = useState('$1000.00');

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSize(selectedSize);
    setPrice(selectedSize === '750ml' ? '$1000.00' : '$500.00');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#877259', padding: '10px', borderRadius: '8px', width: '800px', height: '150px' }}>
      <img src={`https://placeholder.pics/svg/82x127`} alt="Product" style={{ height: '127px', width: '82px', marginRight: '16px' }} />

      <div style={{ flexGrow: 1 }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '36px', margin: '0 0 4px 0', color: '#f1e8e0' }}>Mezcal Espadín</h2>
        <p style={{ fontSize: '24px', color: '#f1e8e0', margin: '0 0 8px 0' }}>{price}</p>

        <label style={{ fontSize: '16px', color: '#f1e8e0', marginRight: '8px' }}>Tamaño</label>
        <select value={size} onChange={handleSizeChange} style={{ fontSize: '16px', color: '#5f2d16', padding: '4px', borderRadius: '4px' }}>
          <option value="750ml">750ml</option>
          <option value="350ml">350ml</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '16px' }}>
        <button style={{ border: 'none', background: 'none', color: '#5f2d16', fontSize: '24px' }}>▲</button>
        <span style={{ fontFamily: 'Kanit', fontSize: '32px', color: '#5f2d16' }}>1</span>
        <button style={{ border: 'none', background: 'none', color: '#5f2d16', fontSize: '24px' }}>▼</button>
      </div>

      <img src={`https://placeholder.pics/svg/65x65`} alt="Delete" style={{ height: '65px', width: '65px' }} />
    </div>
  );
};

export default VentaCard;
