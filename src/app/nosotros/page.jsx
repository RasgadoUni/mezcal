import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent'; // Import FooterComponent component
import Raiz from '../components/Roots';
import Trad from "../components/tradicion";
import Image from 'next/image';
import imgpri from '../../../public/img/agave.jpg';

function nosotros() {
  return (
    <div>
        <Header /> {/* Render the Header component */}
        <div style={{height:'700px',width:'1440px'}}>
            <Image src={imgpri} alt='agave' style={{height:'700px',width:'1440px'}}/>
        </div>
        <Raiz/>
        <Trad/>
        <FooterComponent /> {/* Render the FooterComponent component */}
    </div>
  );
}

export default nosotros;