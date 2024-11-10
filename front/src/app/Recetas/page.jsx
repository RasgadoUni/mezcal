import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/FooterComponent';
import Mezcalito from '../../../public/img/Mezcalito.jpg';
import piñaJengibre from '../../../public/img/piñaJengibre-nobg.png';
import mangoCardamomo from '../../../public/img/mangoCardamomo-nobg.png';
import Jamaica from '../../../public/img/JAMAICA-ROMERO.nobg.png';
import horchataCanela from '../../../public/img/horchataCanela-nobg.png';
import './app.css';

function App() {
  const products = [
    { name: 'Piña Jengibre', imageSrc: piñaJengibre,src: '../pina',desc:'Sabores mexicanos en un trago: mezcal, piña y jengibre' },
     { name: 'Mango y cardamomo', imageSrc: mangoCardamomo,src: '../mango',desc:'Mango, cardamomo y mezcal Beché: una explosión de sabores en cada sorbo.'},
    { name: 'Jamaica Romero', imageSrc: Jamaica,src: '../jamaica', desc:'La frescura de la jamaica se encuentra con la profundidad del mezcal en este cóctel único.'},
    { name: 'Horchata Canela', imageSrc: horchataCanela, src: '../horchata', desc:'"La horchata como nunca la habías probado: suave y cremosa con un toque de mezcal.'},
  ];
  
  return (
    <div className="app-container">
      <Header />

      <div className="hero-section">
        <Image src={Mezcalito} alt="Mezcalito" layout="responsive" objectFit="cover" />
      </div>

      <div >
      <section className="products-section" >
        <div className="product-grid" >
          {products.map((product, index) => (
            <div key={index} className="product-card" >
              <Image src={product.imageSrc} alt={product.name} style={{width:'100%',height:'auto'}} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.desc}</p>
              <Link href={product.src}>
                <button className="product-button">Conoce la receta</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
