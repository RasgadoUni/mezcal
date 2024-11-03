import React from 'react';
import Header from '../components/Header';
import MezcalMexicanoComponent from '../components/MezcalMexicanoComponent'; // Import MezcalMexicanoComponent component
import FooterComponent from '../components/FooterComponent'; // Import FooterComponent component
import LosFavoritos from '../components/LosFavoritos';
import Familia from '../components/Familia';
import Cocteles from '../components/Cocteles';

function principal() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <MezcalMexicanoComponent /> {/* Render the MezcalMexicanoComponent component */}
      <LosFavoritos/>
      <Familia/>
      <Cocteles/>
      <FooterComponent /> {/* Render the FooterComponent component */}
    </div>
  );
}

export default principal;