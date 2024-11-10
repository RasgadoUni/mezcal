import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/FooterComponent';
import Mezcalito from '../../../public/img/Mezcalito.jpg'
import './app.css';

function App() {
  return (
    <div className="app-container">
      {/* Encabezado */}
      <Header/>

      {/* Imagen de fondo */}
      <div className="hero-section">
        <Image src={Mezcalito} alt='Mezcalito' style={{width:'100%', height:'auto'}}/>
      </div>

      {/* Sección de productos */}
      <section className="products-section">
        <div className="product-grid">
          {[
            { name: 'Mojito', image: 'mojito.jpg' },
            { name: 'Pink Lemonade', image: 'pink-lemonade.jpg' },
            { name: 'Margarita', image: 'margarita.jpg' },
            { name: 'Mojito Tropical', image: 'mojito-tropical.jpg' },
            { name: 'Mojito', image: 'mojito2.jpg' },
            { name: 'Pink Lemonade', image: 'pink-lemonade2.jpg' },
            { name: 'Margarita', image: 'margarita2.jpg' },
            { name: 'Mojito Tropical', image: 'mojito-tropical2.jpg' }
          ].map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link href="../Coctel"><button className="product-button">Conoce la receta</button></Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pie de página */}
      <Footer/>
    </div>
  );
}

export default App;