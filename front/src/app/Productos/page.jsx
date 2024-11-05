import React from 'react';
import Header from '../components/Header';
import MezcalMexicanoComponent from '../components/MezcalMexicanoComponent'; // Import MezcalMexicanoComponent component
import FooterComponent from '../components/FooterComponent'; // Import FooterComponent component
import LosFavoritos from '../components/LosFavoritos';
import Familia from '../components/Familia';
import Produc from '../components/Prods';

function productos() {
  return (
    <div>
        <Header /> {/* Render the Header component */}

        <Familia/>
        <Produc/>
        <FooterComponent /> {/* Render the FooterComponent component */}
    </div>
  );
}

export default productos;