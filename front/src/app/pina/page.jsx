import Header from "../components/Header";
import Footer from "../components/FooterComponent";
import Image from "next/image";
import mezcal from "../../../public/img/Mezcales.jpg";
import piña from "../../../public/img/piñaJengibre-nobg.png";

function coctel() {
    return(
        <div>
            <Header/>
            <Image src={mezcal} style={{width:'100%', height:'auto'}} alt="Mezcales"/>
            <PiñaJengibre/>
            <Footer/>
        </div>
    );
}

export default coctel;


const PiñaJengibre = () => {
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
          src={piña} 
          alt="Piña Jengibre Drink" 
          width="500" 
          height="auto"
        />
      </div>
      <div style={styles.info}>
        <div style={styles.title}>Piña Jengibre</div>
        <div>
          <div style={styles.sectionTitle}>Ingredientes</div>
          <ul style={styles.list}>
            <li>1.5 Oz de Mezcal Beché espadín</li>
            <li>Agua de piña y jengibre
              <ul>
                <li>4 tazas de agua (para 4 cócteles)</li>
                <li>Media piña</li>
                <li>Un trozo de jengibre de 50 gr.</li>
                <li>½ taza de azúcar (o al gusto)</li>
              </ul>
            </li>
            <li>Guarnición
              <ul>
                <li>Trozo de piña.</li>
                <li>Formas de orejas de conejo usando hojas de piña.</li>
              </ul>
            </li>
          </ul>
          <div style={styles.sectionTitle}>Instrucciones</div>
          <ul style={styles.list}>
           <li>Para preparar el agua de piña y jengibre, mezcle agua, trozos de piña, jengibre y azúcar.</li>
           <li>Llena un old fashioned con hielo, agrega el Beché y cubre con el agua de piña y jengibre, mezcla y disfruta.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


