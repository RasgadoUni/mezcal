import Header from "../components/Header";
import Footer from "../components/FooterComponent";
import Image from "next/image";
import mezcal from "../../../public/img/Mezcales.jpg";
import mango from "../../../public/img/mangoCardamomo-nobg.png";

function coctel() {
    return(
        <div>
            <Header/>
            <Image src={mezcal} style={{width:'100%', height:'auto'}} alt="Mezcales"/>
            <MangoCardamomo/>
            <Footer/>
        </div>
    );
}

export default coctel;


const MangoCardamomo = () => {
  // Style definitions
  const styles = {
    container: {
      display: 'flex',
      fontFamily: 'Kanit, sans-serif',
      color: '#786b3a',
      padding: '20px',
      flexWrap: 'wrap',
    },
    image: {
      flex: '1',
    },
    info: {
      flex: '2',
      paddingLeft: '20px',
    },
    title: {
      fontSize: '48px',
      marginBottom: '10px',
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      color: '#786b3a',
    },
    sectionTitle: {
      color: '#5f2d16',
      fontSize: '40px',
      marginBottom: '5px',
      fontWeight: 700,
      fontFamily: 'Playfair Display, serif',
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '100%',
    },
  };

  // Component rendering
  return (
    <div style={styles.container}>
      <div style={styles.image}>
        <Image 
          src={mango} 
          alt="Mango cardamomo Drink" 
          width="500" 
          height="auto"
        />
      </div>
      <div style={styles.info}>
        <div style={styles.title}>Mango Cardamomo</div>
        <div>
          <div style={styles.sectionTitle}>Ingredientes</div>
          <ul style={styles.list}>
            <li>1.5 Oz de Mezcal Beché Espadín-Cuishe</li>
            <li>Agua de mango y cardamomo
              <ul>
                <li>4 tazas de agua (para 4 cócteles)</li>
                <li>2 mangos grandes pelados y cortados</li>
                <li>½ taza de jarabe simple</li>
                <li>½ cucharada de cardamomo</li>
              </ul>
            </li>
            <li>Guarnición
              <ul>
                <li>Bola de mango</li>
                <li>Menta fresca</li>
              </ul>
            </li>
          </ul>
          <div style={styles.sectionTitle}>Instrucciones</div>
          <ul style={styles.list}>
           <li>Prepare agua de mango combinando agua, mango, almíbar simple y cardamomo; mezcle.</li>
           <li>Salar el borde de un vaso old fashioned.</li>
           <li>Llena el vaso con hielo, agrega el Beché, el agua de mango y mezcla.</li>
           <li>Decorar con bolas de mango y menta fresca y disfrutar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

